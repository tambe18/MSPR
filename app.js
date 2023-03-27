const express = require('express') //ici on recupére le paquet express et pr cela on uilise le mot clé require qui indique à nodejs d'aller recuperer la dependance express ds le dossier node_modules
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser =require('body-parser')
const sequelize = require('./src/db/sequelize')
//let produits = require('./src/db/mock-produit'); // require de recuperer la liste des pokemons ds le fichier mock-pokemons


const app =express() // on crée une instance d'une appli express, il s'agit du petit serveur web sur lequel va fonctionner notre api rest
const port = 3000 // le port sur lequel nous allons demarer notre api rest 


app
.use(favicon(__dirname + '/favicon.ico'))
.use(morgan('dev'))
.use(bodyParser.json())

sequelize.initDb()


 require('./src/routes/ListeProduits')(app)
 require('./src/routes/RechercheProduitByid')(app)
 require('./src/routes/AjoutProduit')(app)
 require('./src/routes/ModifierProduit')(app)
 require('./src/routes/DeleteProduit')(app)
 require('./src/routes/ListeCommande')(app)
 require('./src/routes/AjoutCommande')(app)

// gestion des erreurs 404

app.use(({res})=> { // intercepter ttes les demande du client ki ne correspond pas à une route declaré precedemment
    const message = 'Impossible de trouver la ressource demandé, vous pouvez utiliser une autre url'
    res.status(404).json({message}) // cequi va permettre de renvoyer la reponse 404
})

app.listen(port, ()=> console.log(`Notre application Node est demarrée sur: http//localhost:${port}`))




















/*app.get('/', (req,res) => res.send('Hello, Express !'))// la methode send de l'objet res permet de retourner le message 'hello express' au client( c'est une route vide qui permet de tester si l'api a bien demaré)
app.get('/api/produits/:id',(req,res) => {
    const id = parseInt( req.params.id) // permet de recuperer l'id du pokemons demandé par le client et parseInt permet de convertir une chaine de caractère en un nombre
    const produit = produits.find(produit => produit.id === id)
    const message ='un pokemon a bie, été trouvé.'
    //res.send(`vous avez demandé le pokemon ${pokemon.name}`)
      res.json(produit) // On retourne une reponse http grace à res et on la met au format json avec la methode json et enfin nous renvoyons des informations des pokemons grace à la variable pokemon
})

app.get('/api/produits',(req,res) => {
    const message ="la liste des pokemons a été bien récuperé"
   // res.send(`il y a ${pokemons.length} pokemons dans le pokédex pour le moment`)
   res.json(produits)
})


// ajouter un nouveau produit

app.post('/api/AddProduit', (req, res) => {
    const id = getUniqueId(produits)// on donne arbitrairement un id au nouveau pokemon
    const produitAdd = { ...req.body, ...{id: id, created: new Date()}} // on fusionne les données du pokemon recues via la requete http entrante avec un identifiant unique et avec une date unique fournit par express
    produits.push(produitAdd) // ajouter ce nouveau pokemon à la liste des pokemons existants
    const message = `le pokemon ${produitAdd.name} a bien été ajouté ` // message de confirmation
    res.json(produitAdd) // et on retourne la response avec le format json
}
)*/
