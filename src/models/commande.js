module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Commande', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ref: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      prix: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          //noEmpty: {msg: 'le prix ne peut pas etre vide'},
          min: {
            args:[0],
            msg: 'les prix doivent etre superieurs à 0'
          },
          max: {
            args:[999],
            msg: 'les prix doivent etre inferieurs ou egales à 999.'
          },
          notNull: {msg: 'les prix sont une propriété rquise.'}
        }
  
      },
      /*picture: {
        type: DataTypes.STRING,
        allowNull: false
      },*/
      quantite: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }