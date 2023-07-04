//array de objeto

let arrayFormulario = []

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

const recogerDatos = () => {
    const cmpTitulo = document.querySelector("#pelicula").value;
    const cmpDirector = document.querySelector("#director").value;
    const cmpAno = document.querySelector("#ano").value;
    const cmpGenero = document.querySelector("#genero").value;

    const pelicula = {
        titulo: cmpTitulo, 
        director: cmpDirector, 
        ano: cmpAno, 
        genero: cmpGenero
    }

    arrayFormulario.push(pelicula);

    form.reset();
    
}

//validar los datos del formulario

const reglasValidar = () => {

    const option01 = document.querySelector("#option01");

    const validarTitulo = titulo => /[a-zA-Z0-9\s]/gi.test(titulo);

    const validarDirector = director => /[a-zA-Z\s]/gi.test(director);
    
    const validarAno = ano => /^\d{4}$/g.test(ano);
    
    const validarGenero = () =>  select ==  option01;

    let arrayValidar = [validarTitulo, validarDirector, validarAno, validarGenero];

    return arrayValidar;
   
}

const validarFormulario = () => {
    let arrayValidar = reglasValidar();
    
    const cmpTitulo = document.querySelector("#pelicula").value;
    const cmpDirector = document.querySelector("#director").value;
    const cmpAno = document.querySelector("#ano").value;
    const cmpGenero = document.querySelector("#genero").value;

    if (!arrayValidar[0](cmpTitulo)) {
        alert("Campo Título Inválido");
        return false;
    } 
    if (!arrayValidar[1](cmpDirector)){
        alert("Campo Director Inválido");
        return false;
    }
    if (!arrayValidar[2](cmpAno)){
        alert("Campo Año Inválido");
        return false;
    }
    if (!arrayValidar[3](cmpGenero)){
        alert("Campo Género Inválido");
        return false;
    }

}

form.addEventListener('submit', (ev) =>{
    ev.preventDefault();
    if (validarFormulario()){
        recogerDatos();
    }
    
}
)




//almacenar los datos


//activar el filtro
//pintar en tabla
//FILTRAR
//capturar el valor sel select
//buscar en el array de las pelis los que en genero tenga el que hemos capturado del select

crearOption();
crearMostrar();
// recogerDatos();
console.log(arrayFormulario)
console.log(validarFormulario)
console.log(recogerDatos)
