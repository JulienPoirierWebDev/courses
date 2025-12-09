# 🎯 Que choisir ?

| Si tu veux…                         | Choix recommandé             |
| ----------------------------------- | ---------------------------- |
| Rapidité et confort                 | VS Code + Extension PlantUML |
| Travailler offline + automatisation | Java + plantuml.jar          |
| Tester rapidement                   | Site en ligne                |
| Rester dans PhpStorm                | Plugin JetBrains             |



# ✔️ **Méthode 1 : VS Code + Extension PlantUML (la plus pratique)**

👉 **Pas besoin d’installer Java si tu utilises le serveur intégré**
(même si certaines fonctionnalités avancées le recommandent).

## Étapes :

1. Installe **Visual Studio Code**
2. Va dans Extensions → cherche **PlantUML**
3. Installe l’extension
4. Crée un fichier `diagramme.puml`
5. Tape ton diagramme
6. Clique sur **"Open Preview"** (aperçu dynamique du diagramme)

### Avantages :

* Simple, rapide
* Aperçu en direct
* Fonctionne même sans Java (dans 95% des cas)
* Fait pour bosser proprement

---

# ✔️ **Méthode 2 : Exécutable Windows + Java (classique)**

**Tu installes Java + PlantUML.jar**

## Étapes :

1. Installer **Java Runtime (JRE)**
2. Télécharger `plantuml.jar` depuis plantuml.com
3. Dans un terminal Windows :

```bash
java -jar plantuml.jar monDiagramme.puml
```

4. Le diagramme PNG/SVG apparaît dans le même dossier.

### Avantages :

* 100% compatible
* Fonctionne hors-ligne
* Permet de tout automatiser

---

# ✔️ **Méthode 3 : PlantUML en ligne** (aucune installation)

Tu vas ici :
🔗 [https://www.plantuml.com/plantuml](https://www.plantuml.com/plantuml)

Tu colles ton code… et ton diagramme apparaît directement.

### Avantages :

* Ultra rapide
* Parfait pour tester
* Nécessite seulement un navigateur

### Inconvénients :

* Pas idéal pour les projets pro (pas hors-ligne)

---

# ✔️ Méthode 4 : IntelliJ / PhpStorm / WebStorm / PyCharm

Si tu es déjà dans l’écosystème JetBrains (PhpStorm dans ton cas) :

* Menu **File > Settings > Plugins**
* Cherche **PlantUML Integration**
* Installe
* Crée un `.puml` → aperçu intégré

### Avantage :

* Intégré à ton IDE habituel

---

