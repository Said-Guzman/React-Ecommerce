module.exports = (sequelize, Sequelize) => {
    const Ttl = sequelize.define("tts",{
        title:{
            type: Sequelize.STRING
        },
        description: {
            type:Sequelize.STRING
        },
            price:{
                type: Sequelize.BOOLEAN
            }
        });
        return Ttl;
};