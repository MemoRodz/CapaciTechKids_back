const {tblCourses,tblUsers} = require("../DB_connection.js");



const getDetails = async (id) => {
    console.log(id)
    try{
   return tblCourses.findByPk(id,{
    include: tblUsers
   });
    }
    catch(error){
    throw error
    }
}

module.exports = getDetails; 