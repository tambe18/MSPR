const { Produit} = require('../db/sequelize')

  
module.exports = (app) => {
  app.get('/api/produits/:id', (req, res) => {
    Produit.findByPk(req.params.id)
      .then(produit => {
        if(produit==null){
          const message = 'Un produit nexiste pas. Réessayez avec un autre identifiant'
          return res.status(404).json({ message})
        }
        const message = 'Un produit a bien été trouvé.'
        res.json({ message, data: produit})
       
      })
      .catch(error => {
        const message = "le produit n'a pas pu etre recuperé. Réessayez dans quelques instants."
        res.status(500).json({message, data: error})
      })
  })
}