import userModel from "../models/userModel";


const fetchusers = (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {

            let result = userModel.fetchusers(req.body.id);

            if (result) {
                resolve(result);
            } else {
                reject("error");
            }
        } catch (error) {
            reject(error);
        }
    });
};

const createuser = (req : any, res:any)=>{
    return new Promise(async (resolve, reject) => {

        try {
            console.log("userservice")


            let result = await userModel.createuser(req.body)
            console.log("result222", result)

            if (result) {
                resolve(result)
            } else {
                reject("error")
            }


        } catch (error) {
            resolve(error)
        }


    })}

const fetchUserById = (req : any, res:any)=>{
    return new Promise(async (resolve, reject) => {

        try {
            console.log("userservice")
            console.log("req", req)


            let result = await userModel.fetchuserById(req.query.id)
            console.log("result222", result)

            if (result) {
                resolve(result)
            } else {
                reject("error")
            }


        } catch (error) {
            resolve(error)
        }


    })}
const updateUserById = (req : any, res:any)=>{
    return new Promise(async (resolve, reject) => {

        try {
            console.log("userservice")
            console.log("req", req.body)
            let data : any = {}
            if(req.body.firstname != null    &&  req.body.firstname != undefined  &&  req.body.firstname != '') data.firstname = req.body.firstname

            if(req.body.lastname != null    &&  req.body.lastname != undefined  &&  req.body.lastname != '') data.lastname = req.body.lastname

            if(req.body.email != null    &&  req.body.email != undefined  &&  req.body.email != '') data.email = req.body.email

            if(req.body.address != null    &&  req.body.address != undefined  &&  req.body.address != '') data.address = req.body.address


            if(req.body.mobile != null    &&  req.body.mobile != undefined  &&  req.body.mobile != '') data.mobile = req.body.mobile

            if(req.body.status != null    &&  req.body.status != undefined  &&  req.body.status != '') data.status = req.body.status
          console.log("data", data)
            let result = await userModel.updateuserById(data, req.body.id)
            console.log("result222", result)

            if (result) {
                resolve(result)
            } else {
                reject("error")
            }


        } catch (error) {
            resolve(error)
        }


    })}




    export  default  {
    fetchusers: fetchusers,
        createuser:createuser,
        fetchUserById:fetchUserById,
        updateUserById:updateUserById
    }
