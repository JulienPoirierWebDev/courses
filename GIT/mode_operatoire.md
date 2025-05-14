
# 🧠 Fiche pratique : Git & GitHub – Le flux de travail standard

## 📌 1. Création du repository Git

### ✅ Option 1 : Depuis GitHub (recommandé)

1. Aller sur [https://github.com](https://github.com)
2. Cliquer sur **“New repository”**
3. Renseigner :

   * Le **nom du dépôt**
   * Une **description** (facultatif)
   * Choisir **public** ou **private**
   * **Ne pas cocher** “Initialize with README” si vous avez déjà un projet en local
4. Cliquer sur **“Create repository”**

👉 **GitHub fournit ensuite des lignes de commande** adaptées à votre cas (nouveau projet, projet existant, etc.).
Copiez celles correspondant à **"push an existing repository"** si vous avez déjà un dossier local.

---

## 📁 2. Initialisation en local (si ce n’est pas déjà fait)

```bash
cd ton-projet/
git init
git remote add origin https://github.com/ton-pseudo/nom-du-repo.git
```

---

## 📄 3. Créer un `.gitignore`

Utile pour **éviter de versionner** les fichiers inutiles ou volumineux :

Exemple :

```
node_modules/
dist/
.env
.DS_Store
```

💡 [Liste officielle par techno](https://github.com/github/gitignore)

---

## 🌱 4. Créer une branche dédiée

Créer une branche par fonctionnalité ou correction :

```bash
git switch -c feat/nom-fonctionnalite
# ou
git checkout -b feat/nom-fonctionnalite
```

---

## 💾 5. Travailler et committer régulièrement

```bash
git add .
git commit -m "feat: ajoute le formulaire de contact"
```

✔️ Un commit = une modification logique ou cohérente

---

## ☁️ 6. Envoyer votre code sur GitHub

Si vous poussez une branche qui **n’existe pas encore sur GitHub**, Git vous indiquera une commande à copier :

```bash
git push --set-upstream origin feat/nom-fonctionnalite
```

Ensuite, les suivants se font simplement avec :

```bash
git push
```

---

## 🔄 7. \[Optionnel mais conseillé] Mettre à jour avec `main`

👉 Avant d’ouvrir une PR, il est conseillé de mettre à jour votre branche avec la dernière version de `main` :

```bash
git checkout main
git pull origin main
git checkout feat/nom-fonctionnalite
git merge main
```

💡 Cela permet d’**anticiper les conflits** et de les corriger localement.

---

## 🔁 8. Créer une Pull Request (PR)

1. GitHub détecte automatiquement vos branches poussées
2. Cliquez sur **“Compare & pull request”**
3. Donnez un **titre clair** et une **description**
4. Ajoutez reviewers et labels si besoin
5. Cliquez sur **“Create pull request”**

✅ Une fois validée, la PR est fusionnée dans `main`.

---

## 🎓 Astuces et bonnes pratiques

* Ne jamais développer sur `main`
* 1 fonctionnalité = 1 branche
* 1 modification logique = 1 commit
* Préfixes utiles :

  * `feat:` fonctionnalité
  * `fix:` bug
  * `chore:` maintenance
  * `refactor:` amélioration de code

🧑‍💻 Configurer votre identité Git :

```bash
git config --global user.name "Votre nom"
git config --global user.email "votre@email.com"
```
