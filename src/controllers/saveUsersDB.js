const {tblUsers} = require("../DB_connection.js");
const falseApiUsers = require("../utils/falseApiUsers")

const getFalseApiToDBUsers = async() => {
    try {
 let mapeados = []  
 for (let i = 0; i < falseApiUsers.length -1; i++) {
    console.log(falseApiUsers[i])
    let courseArray = {};
    courseArray.Name = falseApiUsers[i].Name
    courseArray.Email = falseApiUsers[i].Email 
    courseArray.Password = falseApiUsers[i].Password
    courseArray.UserType = falseApiUsers[i].UserType;
    courseArray.Register_Date= falseApiUsers[i].Register_Date
    mapeados.push(courseArray)
  }
  console.log(mapeados)

  for (const data of mapeados) {  
   await tblUsers.create({
        Name : data.Name,
        Email : data.Email,
        Password : data.Password,
        UserType: data.UserType,
        Register_Date : data.Register_Date,
    })}

    return tblUsers.findAll()
    }
    catch(error){
        return error.message
    }
}

module.exports = getFalseApiToDBUsers;