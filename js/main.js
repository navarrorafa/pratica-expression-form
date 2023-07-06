//array de objeto

let select = document.querySelector('#genero');
let mostrar = document.querySelector('#mostrarGenero');
const form = document.querySelector("#form");
const fragment = document.createDocumentFragment();

    const arrayFormulario = []
    let arrayGenero = ["terror", "accion", "comedia", "romantica"];

const regExp = {
    titulo: /[a-zA-Z0-9\s]/i,
    director: /[a-zA-Z\s]/i,
    anio: /^\d{4}$/,
}
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    validarFormulario()
    pintarTablas()


}
)
console.log(arrayFormulario);
const crearOption = () => {
    arrayGenero.forEach((item, index, array) => {
        let options = document.createElement("OPTION");
        options.value = item;
        options.innerHTML = item;
        options.setAttribute('id', `option${index++}`)
        options.classList.add('opciones')
        select.append(options);

    }
    )
}

const crearMostrar = () => {
    arrayGenero.forEach((item, index, array) => {
        let options = document.createElement("OPTION");
        options.value = item;
        options.innerHTML = item;
        mostrar.append(options);
    }
    )
}

//function recoja los datos del formulario



const recogerDatos = () => {
    const cmpTitulo = document.querySelector("#pelicula").value;
    const cmpDirector = document.querySelector("#director").value;
    const cmpAno = document.querySelector("#ano").value;
    const cmpGenero = document.querySelector('#genero').value;
    console.log({ cmpGenero });
    const pelicula = {
        titulo: cmpTitulo,
        director: cmpDirector,
        ano: cmpAno,
        genero: cmpGenero
    }

    arrayFormulario.push(pelicula)
    form.reset()

}


const validarFormulario = () => {
    // let arrayValidar = reglasValidar();

    const titulo = document.querySelector("#pelicula").value;
    const director = document.querySelector("#director").value;
    const anio = document.querySelector("#ano").value;
    let selectElige = document.querySelector('#genero').value;

    const anioActual = new Date().getFullYear()

    if (!regExp.titulo.test(titulo)) {
        alert("Campo Título Inválido");
        return ;
    }
    if (!regExp.director.test(director)) {
        alert("Campo Director Inválido");
        return ;
    }
    if (!regExp.anio.test(anio) || (anio < 1800 || anio > anioActual)) {
        alert("Campo Año Inválido");
        return ;
    }
    if (selectElige == 'elige') {
        alert("Campo Género Inválido");
        return ;
        console.log(selectElige);
    }

recogerDatos()
}

const pintarTablas = () => {
    const tabla = document.querySelector('#boxTabla');
    const cabezaTabla = document.querySelector('#cabezaTabla');
    const bodyTabla = document.querySelector("#bodyTabla")
     bodyTabla.innerHTML ="";
    arrayFormulario.forEach((item, index) => {
        
        const lineaTabla = document.createElement('tr');
        lineaTabla.classList.add("cabezaTabla")

        const th1 = document.createElement('td');
        th1.textContent = item.titulo;

        const th2 = document.createElement('td');
        th2.textContent = item.director;

        const th3 = document.createElement('td');
        th3.textContent = item.ano;

        const th4 = document.createElement('td');
        th4.textContent = item.genero;

        lineaTabla.append(th1, th2, th3, th4);
        fragment.append(lineaTabla);
    });
    bodyTabla.append(fragment);
};







//activar el filtro
//pintar en tabla
//FILTRAR
//capturar el valor sel select
//buscar en el array de las pelis los que en genero tenga el que hemos capturado del select

crearOption();
crearMostrar();
//
// console.log(validarFormulario
