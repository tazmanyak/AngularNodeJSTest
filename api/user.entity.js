'use-strict'

module.exports = (sequelize, dataTypes) => {
    
    const user = sequelize.define('Users', {
        FirstName: dataTypes.STRING,
        MiddleName: dataTypes.STRING,
        LastName: dataTypes.STRING,
        UserName: dataTypes.STRING,
        PasswordHash: dataTypes.STRING,
        BirthDate: dataTypes.DATEONLY,
        Gender: dataTypes.ENUM,
        Nationality: dataTypes.STRING,
        Image: dataTypes.BLOB,
        Email: dataTypes.STRING,
        
        CreateTime: dataTypes.DATE,
        ModifiedTime: dataTypes.DATE,
        IsActive: dataTypes.BOOLEAN
    });
    
    user.associate = (models) => {
        models.User.hasMany(models.Task);
    };
    
    return user;
};
