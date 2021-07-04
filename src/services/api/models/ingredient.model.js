module.exports = (sequelize, Sequelize, DataTypes) => {
    const Ingredient = sequelize.define(
        "ingredient", // Model name
        {
            // Model attributes
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING
            },
            topping: {
                type: DataTypes.BOOLEAN
            },
            status: {
                type: DataTypes.BOOLEAN
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

    return Ingredient;
};
