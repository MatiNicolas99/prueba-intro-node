const fs = require('fs');



const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const historial = fs.readFileSync("citas.json", "utf8");
    const data = JSON.parse(historial);
    
    const paciente = 
        {
            nombre,
            edad,
            tipo,
            color,
            enfermedad,
        };
    fs.writeFileSync('citas.json', JSON.stringify([...data, paciente]));

     console.log("Registro realizado");
}

const leer = () => {

    const historial = fs.readFileSync('citas.json', 'utf-8')
    const data = JSON.parse(historial)
    data.forEach(({ 
        nombre,
        edad,
        tipo,
        color,
        enfermedad}) => {
        console.log(`La mascota de nombre ${nombre}, es un ${tipo} de ${edad} año(s), color ${color} y tiene la siguiente enfermedad: ${enfermedad}`)
    });
};

module.exports = {
    registrar, 
    leer
}