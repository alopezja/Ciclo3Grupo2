function validar_nombre_usuario(string) {
    //implementacion
    //Debe entre 6 y 30 caracteres.
    //Solo puede contener caracteres solo letras de la A a la Z, pueden ser tanto mayúsculas como minúsculas.
    //En caso de cumplir las condiciones retorna verdadero
    //de lo contrario retorna falso.
    let reg = /^[A-Za-z]+$/;
    if (string.length >= 6 && string.length <= 30) {
        if (reg.test(string)) {
            console.log(true);
            return true;
        } else { console.log(false) };
        return false;
    }
    console.log(false);
    return false;
}

function validar_contrasena(string) {
    //implementacion
    //Debe tener 6 o más caracteres.
    //Solo puede contener caracteres alfanuméricos. Es decir, letras de la A a la Z y los números del 0 al 9.
    //En caso de cumplir las condiciones retorna verdadero
    //de lo contrario retorna falso.

    if (string.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres"); 
        //console.log(false);
        return false;
    }

    if (string.search(/[!"#$%&/()=*'{}<>]/) > 0) {
        alert("La contraseña no debe contener caracteres especiales"); 
        //console.log(false);
        return false;
    }

    if (string.search(/[A-Za-z]/i) < 0) {
        alert("La contraseña debe tener al menos una letra");
        //console.log(false);
        return false;
    }

    if (string.search(/[0-9]/) < 0) {
        alert("La contraseña debe tener al menos un número"); 
        //console.log(false);
        return false;
    }

    console.log(true);
    return true;
}

function confirmar_contrasena(strintA, strintB) {

    // Ontenemos los valores de los campos de contraseñas 
    const pass1 = document.getElementById('in_contrasena');
    const pass2 = document.getElementById('in_confirmar_contrasena');

    // Verificamos si las constraseñas no coinciden 
    if (strintA.length > strintB.length){
        return false;
    }else{
         if (strintA.length < strintB.length){
            return false;
         }else{
            return true;
         }
    }
}

/*module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;
*/