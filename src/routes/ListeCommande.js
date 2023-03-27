const { Commande} = require('../db/sequelize')

  
module.exports = (app) => {
  app.get('/api/commandes', (req, res) => {
    Commande.findAll() // permet de retourner la liste de tout les produits present ds la bd
      .then(commandes => {
        const message = 'La liste des commandes a bien été récupérée.'
        res.json({ message, data: commandes
         })
      })
      .catch(error=> {
       const message = 'La liste des commandes n a pas été récupérée autre url, réessayez dans quelques instants'
       res.status(500).json({message, data: error})
      })
  })
}