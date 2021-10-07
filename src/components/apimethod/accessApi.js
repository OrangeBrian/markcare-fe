import axios from "axios";
// El post va a tener que estar en:
// Register y Editprofile(aca se tiene que enviar por id).
const postUserApp = async (sendData) =>{
    try {
        await axios ({
            method:'POST',
            url: 'https://markcare-be.herokuapp.com/api/customer/save',
            data: sendData
        })

    } catch (err) {
        
    }
}

//Post para enviar datos del turno.
const postAppointment = async (sendData) =>{
    try {

        await axios ({
            method:'POST',
            url: 'https://markcare-be.herokuapp.com/api/appointment/save',
            data: sendData
        })

    } catch (err) {
        
    }
}

//Get para tomar datos de usuario.
const getUserApp = async (idUser)=>{
    try {
        const apiApp = await axios(`https://markcare-be.herokuapp.com/api/customer/find/username/${idUser}`)
        localStorage.setItem('dataUser',JSON.stringify(apiApp.data));
    } catch (err) {
        
    }
}

//Get para tomar datos de clientes por email
const getUserByMail =  async (email) =>{

    try {
        const apiApp =  await axios(`https://markcare-be.herokuapp.com/api/customer/find/email/${email}`);
        localStorage.setItem('dataUserByEmail', JSON.stringify(apiApp.data));
    } catch (err) {
        console.log(err.message);
    }

}

//Get para tomar datos de tiendas.
const getShops = async ()=>{
    try {
        const apiApp = await axios('https://markcare-be.herokuapp.com/api/store/shops')
        localStorage.setItem('dataShops',JSON.stringify(apiApp.data));
    } catch (err) {
        alert(err)
    }
}

//Get de sucursales de shop.
const getBranchOffices = async(storeId) =>{
    
    try {
        const apiApp= await axios(`https://markcare-be.herokuapp.com/api/branch_office/location/${storeId}`)
        localStorage.setItem('dataBranchOffice',JSON.stringify(apiApp.data));
    } catch (err) {
        alert(err)
    }
}

//Get de los turnos de un usuario.
const getMyShifts = async (idUser)=>{

    try {
        const apiApp = await axios(`https://markcare-be.herokuapp.com/api/appointment/list/${idUser}`)
        localStorage.setItem('dataMyShifts',JSON.stringify(apiApp.data));
    } catch (err) {
        alert(err)
    }
}

export default {postUserApp,getUserApp,getUserByMail,getShops,getBranchOffices,postAppointment,getMyShifts};