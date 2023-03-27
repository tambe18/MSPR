const { Produit } = require('../db/sequelize')
  
module.exports = (app) => {
  app.delete('/api/produits/:id', (req, res) => {
    Produit.findByPk(req.params.id).then(produit => {

        if(produit==null){
            const message = 'Un produit demandé n existe pas. Réessayez avec un autre identifiant'
            return res.status(404).json({ message}) 
        }
      const produitDeleted = produit;
      return Produit.destroy({
        where: { id: produit.id }
      })
      .then(_ => {
        const message = `Le pokémon avec l'identifiant n°${produitDeleted.id} a bien été supprimé.`
        res.json({message, data: produitDeleted })
      })
    })
    .catch(error => {
        const message = "le produit n'a pas pu etre supprimé. Réessayez dans quelques instants."
        res.status(500).json({message, data: error})
      })
  })
}