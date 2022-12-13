const {registrar, leer} = require('./operaciones');

const main = () => {

    const argumentos = process.argv.slice(2);
    const operacion = argumentos[0];
    const nombre = argumentos[1];
    const edad = argumentos[2];
    const animal = argumentos[3];
    const color = argumentos[4];
    const enfermedad = argumentos[5];
    

    if(operacion === "registrar"){
        registrar(nombre, edad, animal, color, enfermedad)
    };
    if(operacion === "leer"){
        leer()
    };
    if(argumentos === undefined || argumentos.length === 0 || !argumentos[1] || !argumentos[2] || !argumentos[3] || !argumentos[4] || !argumentos[5]) {
        console.log("Los datos ingresados no son válidos, favor intenta nuevamente");
        return;
      }
};

main();