module.exports = (sequelize, Sequelize, DataTypes) => {
    const PizzaIngredient = sequelize.define(
        "pizza_ingredient", // Model name
        {
            // Model attributes
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            pizza_id: {
                type: Sequelize.INTEGER,
                references: 'pizza',
                referencesKey: 'id'
            },
            ingredient_id: {
                type: Sequelize.INTEGER,
                references: 'ingredient',
                referencesKey: 'id'
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updated_at: {
                allowNull: false,
                type: DataTypes.DATE
            },
            deleted_at: {
                allowNull: true,
                type: DataTypes.DATE
            }
        },
        {
            // Options
            freezeTableName: true,
            timestamps: true,
            underscrored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    return PizzaIngredient;
};
