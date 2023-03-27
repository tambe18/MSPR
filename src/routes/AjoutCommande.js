const { ValidationError } = require('sequelize')
const { Commande } = require('../db/sequelize')

  
module.exports = (app) => {
  app.post('/api/ajoutcommande', (req, res) => {
    Commande.create(req.body)
      .then(commande => {
        const message = `La commande ${req.body.ref} a bien été crée.`
        res.json({ message, data: commande })
      })
      .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = "le commande n'a pas pu etre ajouté. Réessayez dans quelques instants."
        res.status(500).json({message, data: error})
      })
  })
}

// l'erreur 500  si la requete echoue auprès de la bd et l'erreur 404 si l'utilisateur demande une ressource qui n'existe pas 