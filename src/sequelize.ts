import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path : '.env'});

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT
} = process.env;

console.log(DB_USERNAME,DB_PASSWORD,DB_NAME,DB_PORT)

const sequelize = new Sequelize({
    host:"localhost",
    database:DB_NAME,
    username:DB_USERNAME,
    password:DB_PASSWORD,
    dialect:'mysql',
    define:{
        freezeTableName:true,
        timestamps:false,
    }
});

(async ()=>{
    try {
        await sequelize.authenticate();
        // await sequelize.sync({ force: true });
        console.log('Database connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

export { sequelize }
