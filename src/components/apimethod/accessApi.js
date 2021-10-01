function getStatusUser(usuarioIngresado){
        
    const api = 'https://markcare-be.herokuapp.com/api/customer/find/'
    fetch(api+usuarioIngresado)
        .then(respuesta=> {
                if (respuesta.ok) {
                    window.localStorage.setItem('rta','registrado');
        //            return respuesta.json();
                }else{
                    window.localStorage.setItem('rta','no registrado');
                }
        })
            //.then(data=>{
            //    window.localStorage.setItem('datos',JSON.stringify(data));
            //})
}

function getDataUser(usuarioIngresado){
        
    const api = 'https://markcare-be.herokuapp.com/api/customer/find/'
    fetch(api+usuarioIngresado)
        .then(respuesta=> {
                if (respuesta.ok) {
    //                window.localStorage.setItem('rta','registrado');
                    return respuesta.json();
                }else{
    //                window.localStorage.setItem('rta','no registrado');
                }
        })
            .then(data=>{
                window.localStorage.setItem('dataUser',JSON.stringify(data));
            })
}

//Funcion que envia a la api los datos del nuevo usuario.
function postDataUser(user, sendData){
    const api = ''
    fetch(api+user,{
        method:'POST',
        body: sendData
    })
        .then(  res => res.json())
        .then(  data => console.log(data))
        .catch( error =>{
            console.error(error);
            setTimeout((e) => {
                message.error('No pudo registrarse') 
             }, 500);
        });
}