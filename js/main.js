//array de objeto

let arrayFormulario = {

}

let arrayGenero = ["terror", "accion", "comedia", "romantica"];

let select = document.querySelector('#genero');
let mostrar = document.querySelector('#mostrarGenero');

const crearOption = () => {
    arrayGenero.forEach((item, index, array) => {
        let options = document.createElement("OPTION");
        select.append(options);
        options.value = item;
        options.innerHTML = item;
    }
    )
}

const crearMostrar = () => {
    arrayGenero.forEach((item, index, array) => {
        let options = document.createElement("OPTION");
        mostrar.append(options);
        options.value = item;
        options.innerHTML = item;
    }
    )
}

//function recoja los datos del formulario

const form = document.querySelector("#form");

// form.addEventListener('button', recogerDatos);

const recogerDatos = () => {
    const cmpTitulo = document.querySelector("#pelicula");
    const cmpDirector = document.querySelector("#director").value;
    const cmpAno = document.querySelector("#ano").value;
    console.log(cmptitulo);
}


//validar los datos del formulario
//-----expresion regular

//almacenar los datos


//activar el filtro
//pintar en tabla
//FILTRAR
//capturar el valor sel select
//buscar en el array de las pelis los que en genero tenga el que hemos capturado del select

crearOption();
crearMostrar();
recogerDatos();