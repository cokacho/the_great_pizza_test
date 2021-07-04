module.exports = (sequelize, Sequelize, DataTypes) => {
    const Pizza = sequelize.define(
        "pizza", // Model name
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

    return Pizza;
};
