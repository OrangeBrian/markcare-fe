function getStatusUser(usuarioIngresado){
        
    const api = 'https://markcare-be.herokuapp.com/api/customer/find/'
    fetch(api+usuarioIngresado)
        .then(respuesta=> {
                if (respuesta.ok) {
                    window.localStorage.setItem('rta','registrado');
                }else{
                    window.localStorage.setItem('rta','no registrado');
                }
        })
}

function getDataUser(usuarioIngresado){
        
    const api = 'https://markcare-be.herokuapp.com/api/customer/find/'
    fetch(api+usuarioIngresado)
        .then(respuesta=> {
                if (respuesta.ok) {
                    return respuesta.json();
                }
        })
            .then(data=>{
                window.localStorage.setItem('dataUser',JSON.stringify(data));
            })
}

//Funcion que envia a la api los datos del nuevo usuario.
function postDataUser(sendData){

    const apiPost = 'https://markcare-be.herokuapp.com/api/customer/save';
    fetch(apiPost,{
        method:'POST',
        body: sendData,
        headers: {
            'content-type': 'application/json '
        }
    })
        .then(  res => {
            if(res.ok){
                window.localStorage.setItem('rtaRegistro','registrado');
            }else{
                window.localStorage.setItem('rtaRegistro','no registrado');    
            }
        })
        .catch( error =>{
            window.localStorage.setItem('rtaRegistro','no registrado');
        });
}


export default {getDataUser,getStatusUser,postDataUser};