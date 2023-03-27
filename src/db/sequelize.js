const {Sequelize, DataTypes} = require('sequelize')
const ProduitModel = require('../models/produit')
const CommandeModel = require('../models/commande')
let produits = require('./mock-produit');



const sequelize = new Sequelize(
    'projet',
    'root',
    '',
     {
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3307,
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: false
     }
)

sequelize.authenticate()
  .then(_ => console.log('la connexion à la base de données a bien été établi.'))
  .catch(error => console.error(`impossible de se connecter à la base de données ${error}`))

const Produit = ProduitModel(sequelize, DataTypes) // elle permet de créer la table produit associer à ce modèle
const Commande = CommandeModel(sequelize, DataTypes)

const initDb =() =>{

 return  sequelize.sync({force: true}).then(_ => {   // permet de synchroniser notre modèle à notre base de donnée

      
      produits.map(produit=> { 
      Produit.create({
          name: produit.name,
          prix: produit.prix,
          types: produit.types


      }).then(produit => console.log(produit.toJSON()))
  })

  
  console.log('la base de données "projet" a bien été synchronisé')
  
  })

}

  module.exports={
    initDb, Produit, Commande
  }