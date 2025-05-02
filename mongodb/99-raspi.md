Parfait ! Tu as choisi un système **léger et rapide**, idéal pour un usage serveur.

---

## 🛠️ Étapes pour activer SSH sur Raspberry Pi OS Lite (sans interface graphique) :

### 🔌 1. **Préparer la carte SD (si tu n’as pas encore démarré le Pi)**

Si tu n’as **pas encore lancé** le Raspberry Pi, tu peux activer SSH **dès maintenant**, depuis ton ordinateur :

#### 👉 Sur la carte SD (après flash), dans la partition `boot` :

1. **Créer un fichier vide nommé `ssh`** (sans extension !)
    ```bash
    touch /chemin/vers/ta/carte/boot/ssh
    ```
2. Ce simple fichier indiquera à l’OS d’activer le service SSH au premier démarrage.
3. (Optionnel) Tu peux aussi ajouter un fichier `wpa_supplicant.conf` pour configurer le Wi-Fi. Je peux t’aider à le créer.

---

### ⚙️ 2. **Activer SSH manuellement (si le Pi est déjà lancé)**

Si tu as un écran/clavier branché :

```bash
sudo systemctl enable ssh
sudo systemctl start ssh
```

Pour vérifier :

```bash
sudo systemctl status ssh
```

---

### 📡 3. **Trouver l’adresse IP du Raspberry Pi**

Lorsque l'on lance le raspberry Pi Os, l'ip se met au début du shell. Toutefois, on peut aussi utiliser le nom du système et le nom de l'utilisateur, comme ceci :

`user_name@system_name`

---

### 🔐 4. **Connexion SSH depuis ton ordinateur**

```bash
ssh user_name@adresse_ip_du_rpi
```

Mon installer MongoDB sur un raspberry pi.

Pour infos, j'ai tenté de suivre la doc pour Debian car Raspberry Pi Os est une version custom de Debian mais cela n'a pas marché.

L'architecture du raspberry Pi est un peu particulière, donc nous avons utilisé le dépot pour Ubuntu Jammy, car ce dépot est compatible avec notre OS.

# Ajouter la clé

curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor

# Ajouter le dépôt (compatible pour ARM64 + Debian 12)

echo "deb [ arch=arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Installer MongoDB

sudo apt update
sudo apt install -y mongodb-org

# Redémarrer le raspberryPI

```bash
sudo shutdown -r now
```



---


https://linuxconfig.org/ubuntu-20-04-connect-to-wifi-from-command-line

# Connaitre l'IP sur Ubuntu Server

```bash
ip addr

ip a

```

# Changer le clavier en azerty

```bash

loadkeys fr
```


L'architecture des raspberry ne permet pas de faire tourner mongodb nativement. Nous devons donc passer par Docker, qui permet de virtualiser un système avec la bonne architecture.


----

Parfait, on va corriger ça proprement. L’erreur :

```
group docker does not exist
```

signifie simplement que **le groupe `docker` n’a pas encore été créé automatiquement** après l’installation du moteur Docker.

---

## ✅ Solution : créer manuellement le groupe `docker`

Voici la marche à suivre complète :

---

### 🔧 1. Créer le groupe `docker` s’il n’existe pas

```bash
sudo groupadd docker
```

---

### 👤 2. Ajouter ton utilisateur (`cda`) au groupe

```bash
sudo usermod -aG docker cda
```

---

### 🔁 3. Redémarre ta session (ou le système)

C’est obligatoire pour que les droits soient pris en compte :

```bash
sudo reboot
```

---

### 🧪 4. Vérifie que ça fonctionne

Après le redémarrage :

```bash
docker run hello-world
```

Tu dois voir un message qui dit que Docker fonctionne correctement.

---

Souhaites-tu que je t’envoie un script `.sh` tout-en-un pour :
- créer le groupe si besoin,
- ajouter l’utilisateur,
- et lancer MongoDB via Docker ?

---

Merci pour les logs, c’est maintenant très clair. L’erreur suivante revient à chaque tentative :

```
status=4/ILL → ILL = Illegal Instruction
```

---

## 🧨 Traduction simple :
> Le binaire `mongod` que tu essaies d’exécuter utilise **des instructions processeur que ton Raspberry Pi ne supporte pas.**

Cela se produit :
- Quand on installe MongoDB via APT à partir d’un dépôt **officiel (repo.mongodb.org)** qui ne **cible pas l’architecture ARMv8 du Pi**.
- Même si tu es en `aarch64`, **MongoDB ne supporte officiellement ARM64 que via Docker**, **pas via APT sur ARM**.

---

## ✅ Solution fiable et fonctionnelle sur Raspberry Pi : **utiliser Docker**

On va tout nettoyer et passer sur Docker, qui fournit une image MongoDB **officiellement compatible ARM64**, sans plantage.

---

## 🧹 1. Désinstaller MongoDB "cassé"

```bash
sudo systemctl stop mongod
sudo apt purge mongodb-org* -y
sudo rm -rf /var/log/mongodb /var/lib/mongodb /etc/mongod.conf /etc/systemd/system/mongod.service
sudo apt autoremove -y
```

---

## 🐳 2. Installer Docker (si pas encore fait)

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```

Ensuite, **redémarre ta session ou le Raspberry Pi** pour activer les droits Docker :

```bash
sudo reboot
```

---

## 🚀 3. Lancer MongoDB via Docker

Après le redémarrage :

```bash
docker run -d \
  --name mongodb \
  --platform linux/arm64 \
  -p 27017:27017 \
  -v ~/mongo-data:/data/db \
  mongo:7
```

---

## 🧪 4. Tester avec mongosh

Installe `mongosh` si tu veux l’utiliser en local (hors conteneur) :
```bash
npm install -g mongosh
```

Puis connecte-toi à ton conteneur :
```bash
mongosh "mongodb://localhost:27017"
```

OU plus simple :
```bash
docker exec -it mongodb mongosh
```

---

Souhaites-tu un script `.sh` regroupant toutes ces étapes pour ne pas les retaper ?