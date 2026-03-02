const authSection = document.getElementById('auth-section');
const appSection = document.getElementById('app-section');
const meText = document.getElementById('me');
const receiverSelect = document.getElementById('receiver');
const messagesDiv = document.getElementById('messages');

let currentUser = null;

async function api(url, options = {}) {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  return response.json();
}

function showApp(user) {
  currentUser = user;
  authSection.classList.add('hidden');
  appSection.classList.remove('hidden');
  meText.textContent = `Connecté: ${user.username} (${user.role})`;
}

function showAuth() {
  currentUser = null;
  appSection.classList.add('hidden');
  authSection.classList.remove('hidden');
}

async function loadUsers() {
  const data = await api('/api/users');

  receiverSelect.innerHTML = '';
  data.users.forEach((user) => {
    const option = document.createElement('option');
    option.value = user.id;
    option.textContent = `${user.username} (${user.role})`;
    receiverSelect.appendChild(option);
  });

  if (data.users.length > 0) {
    await loadMessages(data.users[0].id);
  }
}

async function loadMessages(withUserId) {
  const data = await api(`/api/messages?withUserId=${withUserId}`);

  messagesDiv.innerHTML = '';

  data.messages.forEach((msg) => {
    const mine = msg.sender_id === currentUser.id ? 'mine' : 'other';
    const row = document.createElement('div');
    row.className = `message ${mine}`;

    // VOLONTAIREMENT VULNERABLE: insertion HTML non échappée (XSS)
    row.innerHTML = `
      <div><strong>#${msg.id} ${msg.sender_name} -> ${msg.receiver_name}</strong></div>
      <div>${msg.content}</div>
      <small>${msg.created_at}</small>
    `;

    messagesDiv.appendChild(row);
  });
}

async function boot() {
  const me = await api('/api/me');
  if (me.user) {
    showApp(me.user);
    await loadUsers();
  } else {
    showAuth();
  }
}

document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const result = await api('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  });

  if (result.user) {
    showApp(result.user);
    await loadUsers();
    return;
  }

  alert(result.error || 'Connexion échouée');
});

document.getElementById('logout-btn').addEventListener('click', async () => {
  await api('/api/logout', { method: 'POST' });
  showAuth();
});

receiverSelect.addEventListener('change', async () => {
  await loadMessages(receiverSelect.value);
});

document.getElementById('message-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const receiverId = receiverSelect.value;
  const content = document.getElementById('message-content').value;

  await api('/api/messages', {
    method: 'POST',
    body: JSON.stringify({ receiverId, content })
  });

  document.getElementById('message-content').value = '';
  await loadMessages(receiverId);
});

document.getElementById('edit-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const id = document.getElementById('edit-id').value;
  const content = document.getElementById('edit-content').value;

  await api(`/api/messages/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ content })
  });

  await loadMessages(receiverSelect.value);
});

document.getElementById('delete-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const id = document.getElementById('delete-id').value;

  await api(`/api/messages/${id}`, {
    method: 'DELETE'
  });

  await loadMessages(receiverSelect.value);
});

boot();
