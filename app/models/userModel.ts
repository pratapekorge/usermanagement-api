import connection from "../utilities/mysqlConnection";
import fetchquery from "../utilities/sqlconnection";


const fetchusers = async (data: any) => {
    return new Promise(async (resolve, reject) => {


        let result = await connection.query(`select * from user where status =1`, (error, result) => {
            if (error) {
                console.log("error", error)

                reject(error)
            }

            resolve(result)

            console.log("result", result)
        })


    })


}


const createuser = async (data: any) => {


    return await fetchquery(`insert into user set ? `, [data])


}
const fetchuserById = async (data: any) => {
    console.log("data11", data);


    return await fetchquery(`select id, firstname, lastname, email, mobile, address,   status from user where id = ? `, [data])


}
const updateuserById = async (data: any, id : any) => {
    console.log("data11", data);


    return await fetchquery(`update user set ?  where id = ? `, [data, id])


}


export default {
    fetchusers: fetchusers,
    createuser: createuser,
    fetchuserById:fetchuserById,
    updateuserById:updateuserById
}
