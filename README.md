
## Installation

Commencer par créer la base de données

Nom de la base de données (MySQL) : __maxi-chat-react__
Puis éxecuter cette commande :

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

Une fois le lancement effectué, éxecuter la commande suivante dans un terminal __3fois__ afin de remplir la base de données :

```bash
$ curl -X POST http://localhost:3000/message/genere-all
```
