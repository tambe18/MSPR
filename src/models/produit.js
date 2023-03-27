module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Produit', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
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
    types: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue('types').split(',')
      },
      set(types){
        this.setDataValue('types', types.join())
      }
    }
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}