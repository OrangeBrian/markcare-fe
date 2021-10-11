import axios from "axios";

// Post para Register 
const postUserApp = async (sendData) =>{
    
        await axios ({
            method:'POST',
            url: 'https://markcare-be.herokuapp.com/api/customer/save',
            data: sendData
        })
        .then(res =>{
            localStorage.setItem('status',res.status);
            return res.status
        })
        .catch(localStorage.setItem('status','error'));

}

// Post para Edit Profile
const postUpdateUserApp = async (sendData) =>{
    
    await axios ({
        method:'POST',
        url: 'https://markcare-be.herokuapp.com/api/customer/update',
        data: sendData
    })
    .then(res =>{
        localStorage.setItem('status',res.status);
        getUserByMail(sendData.email);
        return res.status
    })
    .catch( err =>{
        localStorage.setItem('status','error');
        console.log(err);
    })

}

//Post para enviar datos del turno.
const postAppointment = async (sendData) =>{
    
    await axios ({
        method:'POST',
        url: 'https://markcare-be.herokuapp.com/api/appointment/save',
        data: sendData
    })
    .then(res =>{
        localStorage.setItem('status',res.status);
        return res.status
    })
    .catch(localStorage.setItem('status','error'));

}

//Get para tomar datos de usuario.
const getUserApp = async (idUser)=>{

    try {

        const apiApp = await axios(`https://markcare-be.herokuapp.com/api/customer/find/username/${idUser}`)
        localStorage.setItem('dataUser',JSON.stringify(apiApp.data));

    } catch (err) {

        console.log(err);

    }
}

//Get para tomar datos de clientes por email
const getUserByMail =  async (email) =>{

    try {

        const apiApp =  await axios(`https://markcare-be.herokuapp.com/api/customer/find/email/${email}`);
        localStorage.setItem('dataUserByEmail', JSON.stringify(apiApp.data));
        localStorage.setItem('idUser', apiApp.data.id);

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

        console.log(err);

    }
}

//Get de sucursales de shop.
const getBranchOffices = async(storeId) =>{
    
    try {

        const apiApp= await axios(`https://markcare-be.herokuapp.com/api/branch_office/location/${storeId}`)
        localStorage.setItem('dataBranchOffice',JSON.stringify(apiApp.data));

    } catch (err) {

        console.log(err);

    }
}

//Get de los turnos de un usuario.
const getMyShifts = async (idUser)=>{

    try {

        const apiApp = await axios(`https://markcare-be.herokuapp.com/api/appointment/list/${idUser}`)
        localStorage.setItem('dataMyShifts',JSON.stringify(apiApp.data));

    } catch (err) {

        console.log(err);

    }
}

export default {postUserApp,getUserApp,getUserByMail,getShops,getBranchOffices,postAppointment,getMyShifts,postUpdateUserApp};