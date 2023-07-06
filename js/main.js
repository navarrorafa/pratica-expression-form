//array de objeto

let select = document.querySelector('#genero');
let mostrar = document.querySelector('#mostrarGenero');
const form = document.querySelector("#form");

let arrayFormulario = []

let arrayGenero = ["terror", "accion", "comedia", "romantica"];

const regExp={
    titulo:/[a-zA-Z0-9\s]/i,
    director:/[a-zA-Z\s]/i,
    anio:/^\d{4}$/,
}
form.addEventListener('submit', (ev) =>{
    ev.preventDefault();
   validarFormulario()
        
    
    
}
)

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



const recogerDatos = () => {
    const cmpTitulo = document.querySelector("#pelicula").value;
    const cmpDirector = document.querySelector("#director").value;
    const cmpAno = document.querySelector("#ano").value;
    const cmpGenero = document.querySelector("#option01").value;

    const pelicula = {
        titulo: cmpTitulo, 
        director: cmpDirector, 
        ano: cmpAno, 
        genero: cmpGenero
    }

    arrayFormulario.push(pelicula);

    form.reset();
    
}



// validar los datos del formulario

// const reglasValidar = () => {

//     const option01 = document.querySelector("#option01");

//     const validarTitulo = titulo => /[a-zA-Z0-9\s]/gi.test(titulo);

//     const validarDirector = director => /[a-zA-Z\s]/gi.test(director);
    
//     const validarAno = ano => /^\d{4}$/g.test(ano);
    
//     const validarGenero = () =>  select ==  option01;

//     let arrayValidar = [validarTitulo, validarDirector, validarAno, validarGenero];

//     return arrayValidar;
   
// }

const validarFormulario = () => {
    // let arrayValidar = reglasValidar();
    
    const titulo = document.querySelector("#pelicula").value;
    const director = document.querySelector("#director").value;
    const anio = document.querySelector("#ano").value;
    let elige = document.querySelector('#option01').value;

    const anioActual = new Date().getFullYear()

    if (!regExp.titulo.test(titulo)) {
        alert("Campo Título Inválido");
        return ;
    } 
    if (!regExp.director.test(director)){
        alert("Campo Director Inválido");
        return ;
    }
    if (!regExp.anio.test(anio) ||  (anio < 1800 || anio > anioActual)){
        alert("Campo Año Inválido");
        return ;
    }
    if (elige == "elige"){
        alert("Campo Género Inválido");
        return ;
    }


    recogerDatos();

}






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
// console.log(validarFormulario)
console.log(recogerDatos())
