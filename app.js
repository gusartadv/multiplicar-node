const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar.js');



const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.red))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;

}


let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log('Limite', argv.limite);
// console.log(argv2);

//console.log(process.argv);