const Sequelize = require('sequelize');

class Guest extends Sequelize.Model {
    static initiate(sequelize) {
        Guest.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: false,
            },
            email: {
                type: Sequelize.STRING(50),
                allowNull: true,
                unique: false,
            },
            content: {
                type: Sequelize.STRING(500),
                allowNull: false,
                unique: false,
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Guest',
            tableName: 'guests',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {}
};


module.exports = Guest;