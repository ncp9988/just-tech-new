const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our User model
class User extends Model {}

// define table columns and configuration 
User.init(
    {
        // TABLE COLUMN DEFINITIONS GO HERe

        // define an id column
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL ` option
            allowNull: false,
            //instruct that this is the PRimary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },

        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password must be at least four characters long
                len: [4]
            }
        }
    },

    {
        // TABLE CONFIGURATION OPTIONS GO HERE ( http:)


        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,

        // dont automatically create createdAt/updatedAt timestamp fields
        timestamps: false,

        //dont pluralize name of database table
        freezeTableName: true,

        //use underscores instead of camel-casing(i.e `comment_text` and not `commentText)
        underscored: true,

        //make it so our model name stays lowercase in the database 
        modelName: 'user'

    
    }
);

module.exports = User;