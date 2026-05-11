

# Déployer Symfony + MySQL + IIS sur Windows Server 2022 en SSH uniquement

## Objectif

Déployer :

```txt id="8qk15s"
https://api.monsite.fr
```

avec :

* Windows Server 2022
* IIS
* PHP
* MySQL/MariaDB
* Symfony
* HTTPS
* sous-domaine

uniquement en terminal SSH.

---

# 1. Connexion SSH

Depuis Linux :

```bash id="0pkpgt"
ssh administrateur@IP_DU_SERVEUR -p PORT
```

Exemple :

```bash id="e9vt0n"
ssh administrateur@82.65.xxx.xxx -p 4422
```

---

# 2. Commandes Windows utiles

| Linux | Windows |
| ----- | ------- |
| ls    | dir     |
| cd    | cd      |
| mkdir | mkdir   |
| rm    | del     |
| clear | cls     |

---

# 3. Installer IIS en PowerShell

Passer en PowerShell :

```bat id="58kec7"
powershell
```

Installer IIS :

```powershell id="cjlwmf"
Install-WindowsFeature -Name Web-Server,Web-CGI,Web-Mgmt-Tools
```

Vérifier :

```powershell id="jlwmn0"
Get-WindowsFeature Web-*
```

---

# 4. Télécharger PHP

Créer les dossiers :

```powershell id="jlwmva"
mkdir C:\PHP
mkdir C:\install
cd C:\install
```

Télécharger PHP :

```powershell id="zjlwmr"
Invoke-WebRequest `
  -Uri "https://windows.php.net/downloads/releases/php-8.2.17-nts-Win32-vs16-x64.zip" `
  -OutFile "php.zip"
```

Décompresser :

```powershell id="4vjlwm"
Expand-Archive php.zip -DestinationPath C:\PHP
```

---

# 5. Ajouter PHP au PATH

```powershell id="jlwmps"
[Environment]::SetEnvironmentVariable(
  "Path",
  $env:Path + ";C:\PHP",
  [EnvironmentVariableTarget]::Machine
)
```

Fermer puis rouvrir le terminal.

Tester :

```bat id="jlwmtr"
php -v
```

---

# 6. Configurer PHP dans IIS

Créer FastCGI :

```bat id="jlwmgl"
C:\Windows\System32\inetsrv\appcmd set config /section:system.webServer/fastCgi /+"[fullPath='C:\PHP\php-cgi.exe']"
```

Associer PHP :

```bat id="jlwmzu"
C:\Windows\System32\inetsrv\appcmd set config /section:handlers /+"[name='PHP-FastCGI',path='*.php',verb='*',modules='FastCgiModule',scriptProcessor='C:\PHP\php-cgi.exe',resourceType='Either']"
```

---

# 7. Installer Composer

Télécharger :

```powershell id="jlwm9r"
Invoke-WebRequest `
  -Uri "https://getcomposer.org/Composer-Setup.exe" `
  -OutFile "composer.exe"
```

Installer silencieusement :

```bat id="jlwmnh"
composer.exe /SILENT
```

Tester :

```bat id="jlwmux"
composer -V
```

---

# 8. Installer Git

Télécharger :

```powershell id="jlwm80"
Invoke-WebRequest `
  -Uri "https://github.com/git-for-windows/git/releases/latest/download/Git-64-bit.exe" `
  -OutFile "git.exe"
```

Installer silencieusement :

```bat id="jlwm8a"
git.exe /VERYSILENT
```

Tester :

```bat id="jlwm3r"
git --version
```

---

# 9. Installer MySQL

Télécharger MySQL :

```powershell id="jlwm3o"
Invoke-WebRequest `
  -Uri "https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-community-8.0.36.0.msi" `
  -OutFile "mysql.msi"
```

Installer :

```bat id="jlwm3s"
msiexec /i mysql.msi
```

---

# 10. Créer les dossiers projets

```bat id="jlwm3v"
mkdir C:\inetpub\sites
cd C:\inetpub\sites
```

---

# 11. Cloner le projet Symfony

```bat id="jlwm3x"
git clone https://github.com/moncompte/api.git
```

Entrer dans le projet :

```bat id="jlwm41"
cd api
```

---

# 12. Installer Symfony

```bat id="jlwm44"
composer install --no-dev --optimize-autoloader
```

---

# 13. Configurer Symfony

Créer :

```bat id="jlwm47"
notepad .env.local
```

Exemple :

```env id="jlwm4a"
APP_ENV=prod
APP_DEBUG=false

DATABASE_URL="mysql://symfony_user:motdepasse@127.0.0.1:3306/api_db?serverVersion=8.0&charset=utf8mb4"
```

---

# 14. Créer la base de données

Connexion MySQL :

```bat id="jlwm4d"
mysql -u root -p
```

Créer :

```sql id="jlwm4g"
CREATE DATABASE api_db;

CREATE USER 'symfony_user'@'localhost' IDENTIFIED BY 'motdepasse';

GRANT ALL PRIVILEGES ON api_db.* TO 'symfony_user'@'localhost';

FLUSH PRIVILEGES;
```

---

# 15. Exécuter les migrations

```bat id="jlwm4k"
php bin/console doctrine:migrations:migrate --no-interaction
```

---

# 16. Configurer les droits

```bat id="jlwm4m"
icacls var /grant IIS_IUSRS:(OI)(CI)F /T
```

---

# 17. Créer le site IIS

```bat id="jlwm4q"
C:\Windows\System32\inetsrv\appcmd add site ^
/name:"api" ^
/bindings:http/*:80:api.monsite.fr ^
/physicalPath:"C:\inetpub\sites\api\public"
```

---

# 18. Ajouter le fichier `web.config`

Créer :

```txt id="jlwm4u"
C:\inetpub\sites\api\public\web.config
```

Contenu :

```xml id="jlwm4x"
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>

        <rewrite>
            <rules>
                <rule name="Symfony" stopProcessing="true">
                    <match url="^(.*)$" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="index.php" />
                </rule>
            </rules>
        </rewrite>

    </system.webServer>
</configuration>
```

---

# 19. Ouvrir les ports

HTTP :

```bat id="jlwm50"
netsh advfirewall firewall add rule name="HTTP" dir=in action=allow protocol=TCP localport=80
```

HTTPS :

```bat id="jlwm53"
netsh advfirewall firewall add rule name="HTTPS" dir=in action=allow protocol=TCP localport=443
```

---

# 20. Configurer le DNS

Chez le fournisseur DNS :

| Type | Nom | Valeur        |
| ---- | --- | ------------- |
| A    | api | IP_DU_SERVEUR |

Exemple :

```txt id="jlwm56"
api.monsite.fr -> 82.65.xxx.xxx
```

---

# 21. Tester le site

```txt id="jlwm59"
http://api.monsite.fr
```

---

# 22. HTTPS avec Let's Encrypt

Télécharger win-acme :

```powershell id="jlwm5c"
Invoke-WebRequest `
  -Uri "https://github.com/win-acme/win-acme/releases/latest/download/win-acme.v2.2.9.1701.x64.pluggable.zip" `
  -OutFile "wacs.zip"
```

Décompresser :

```powershell id="jlwm5g"
Expand-Archive wacs.zip -DestinationPath C:\win-acme
```

Lancer :

```bat id="jlwm5j"
cd C:\win-acme
wacs.exe
```

Choisir :

```txt id="jlwm5m"
N
```

puis sélectionner le site IIS.

---

# 23. Tester HTTPS

```txt id="jlwm5p"
https://api.monsite.fr
```

---

# 24. Déployer plusieurs projets

Exemple :

```txt id="jlwm5s"
C:\inetpub\sites\
│
├── api\
├── admin\
└── client\
```

Créer plusieurs sites IIS :

```bat id="jlwm5v"
appcmd add site ...
```

avec :

```txt id="jlwm5y"
api.monsite.fr
admin.monsite.fr
client.monsite.fr
```

Chaque projet possède :

* son propre dossier `public`
* sa propre base
* son propre sous-domaine
* son propre binding IIS
