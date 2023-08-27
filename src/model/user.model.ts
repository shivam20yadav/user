import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

const userModel = sequelize.define('user_master',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:true
    }
});

export { userModel }