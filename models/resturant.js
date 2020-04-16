module.exports = function(sequelize, DataTypes) {
    var Resturant = sequelize.define("Resturant", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: DataTypes.STRING,
        validate: {
          len: [1],
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        len: [1],
      },
    });
  
    Resturant.associate = function(models) {
      
      
      Resturant.belongsTo(models.User, {
        foreignKey: {
          allowNull: true,
        },
      });
    };
  
    return Resturant;
  };