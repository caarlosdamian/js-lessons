// // let esVerdadero = true;

// // var nombre = "Bob";
// // console.log('Nombre ' +  nombre);
// // nombre = "John";
// // console.log('Nombre ' +  nombre);

// // console.log('esVerdadero ' +  esVerdadero);
// // esVerdadero = false
// // console.log('esVerdadero ' +  esVerdadero);
// // // [PALABRA RESERVADA]  {IDENTIFICADOR(NOMBRE QUE LE PONEMOS)} = VALOR
// // // VARIABLE SE PUEDE CAMBIAR

// // // CONSTANTE => NO SE PUEDE CAMBIAR;
// // const numeroTreintaYCinco = 35;

// // // LET => CONST

// // console.log('numeroTreintaYCinco ' +  numeroTreintaYCinco);

// // // strings
// // const js = 'Javascript';
// // const comillaDoble = 'John ${js}';
// const comillaSimple = 'Name ${js}';
// // const comillaInversa = `Agregar ${js}`; // Template String
// // const comillaInversaSuma = `Agregar ${5 + 5}`; // Template String

// // console.log(comillaInversa);
// // console.log(comillaSimple);
// // console.log(comillaDoble);
// // console.log(comillaInversaSuma);

// // // numbers #
// // // int public numeroEntero =
// // // float public numerosDecimales =
// // const numeroEntero = 10;
// // let numeroAlazar = 23;
// // numeroAlazar = 35.5;
// // const numerosDecimales = 10.6893840938320283904823;
// // console.log(numerosDecimales);
// // // console.log(typeof comillaSimple)

// // boolean

// // const esMayorDeEdad = false; //
// // const nombre = 'Gustavo Ceballos'
// // if(esMayorDeEdad){
// //     // ejecutar esto si lo de arriba es verdadero
// //     // en otras palabras si es TRUE
// //     console.log(`${nombre}, eres mayor de edad`)
// // } else {
// //     console.log(`${nombre}, no eres mayor de edad`)
// //       // ejecutar esto si lo de arriba es falso
// //     // en otras palabras si es FALSE
// // }

// // null

// // let age = null;

// // console.log(age);

// // const handleClick = () => {
// //     console.log('Prueba')
// //     age = 22;
// //     console.log(age);
// // }
// // console.log(age);

// // const button = document.getElementsByTagName('button');
// // button[0].addEventListener('click',handleClick)

// // let x; // mala practica DONT DO IT

// // console.log(x)

// // objectos
// // SINTAXIS
// // [llave] : VALOR,
// // // [llave] : VALOR,
// // const person = {
// //   name: 'Jonh',
// //   age: 20,
// // };

// // // console.log(person.age)
// // // console.log(person.name)

// // console.log(person['age'])
// // console.log(person['name'])

// // Operadores

// // const a = 13;
// // const b = 12;

// // resultado
// let result = 0;

// // suma
// // result = a + b;
// // result += a + b
// // =>
// // resta
// // result = a - b;
// // result = a - b;
// // multiplicacion
// // result = a * b;
// // exponencial
// // result = 2 ** 2;
// // modulo o resto
// // result = a % b;
// // bisiestos
// // divicion
// // result = a / b;
// // console.log(result);
// // operadores logicos

// const a = 13;
// const b = 12;

// // console.log('10' == 10); // true string numerico 10
// // coercion de typos
// // '10'
// // '10'  =>true
// // console.log('10' === 10);
// // console.log(0 == "");
// // console.log("" == "0");

// // falsy values
// // logical operators
// // console.log(false && true) //  AND LOS DOS DEBEN DE SER VERDADEROS  => TRUE
// // console.log(false || true) //  OR ALMENOS UNO DEBE DE SER VERDADERO  => TRUE
// // console.log(false || true || true) //  OR ALMENOS UNO DEBE DE SER VERDADERO  => TRUE
// // console.log(false || true && true) //  OR ALMENOS UNO DEBE DE SER VERDADERO  => TRUE
// // negador
// //negacion
// // negacion doble
// console.log(!!true)
// console.log(!false)
// console.log(!!undefined)

// x

// operadores logicos

// if (condicion){
// bloque de codigo verdadero
// } esel {
// bloque de codigo falso
// }

// const edad = 17;

// if (edad >= 18) {
//   console.log('Eres mayor de edad');
// } else if (edad === 17) {
//   console.log('Te dejo pasar');
// } else {
//   console.log('No Eres mayor de edad');
// }

// if(-1){
//     console.log('Esto ed verdadero')
// }

// let prueba; // undefind

// // false -> true
// console.log(!!true)

// if(!!prueba){
//     console.log(`Imprime valor de prueba: ${prueba}`)
// } else {
//     console.log('esto se ejecuta cuando es falso')
// }

// falsy values (total 6)
// false
// 0
// ""
// null
// undefind
// NaN
// const edad = 18;
// const nombre = 'Jaime'

// if (edad >= 18  &&  nombre !== undefined) {
//   console.log('Eres mayor de edad');
// } else if (edad === 17) {
//   console.log('Te dejo pasar');
// } else {
//   console.log('No Eres mayor de edad');
// }

// const superHero = 'superman';

// switch (superHero) {
//   case 'Iroman':
//     // haz algo
//     console.log('Elegiste a Iroman');
//     break;
//   case 'Pikachu':
//     // haz algo
//     console.log('Elegiste a Pikachu');
//     break;
//   case 'Capitan America':
//     // haz algo
//     console.log('Elegiste a Capitan America');
//     break;
//   default:
//     break;
// }

// const edad = 18;
// const nombre = 'Jaime'

// if (edad >= 18  &&  nombre !== undefined) {
//   console.log('Eres mayor de edad');
// } else if (edad === 17) {
//     console.log('Te dejo pasar');
// } else {
//     console.log('No Eres mayor de edad');
// }

// // TERNARIOS

// // condicion ? escenario verdadero : escenario falso

// edad >=  18 && nombre != undefined ?
// console.log('Eres mayor de edad') :
// edad ===  17 ?
// console.log('Te dejo pasar') :
// console.log('No Eres mayor de edad');

// LOOPS ciclos
// ( para que se rompa debe de ser falso )
// while (condicion verdera){
//     ejecutar este codico n candidad de veces
// }
// let contador = 0;

// while(contador !== 0){
//     console.log(`while`,contador);
//     contador ++;
// }

// do {
//     console.log(`Do while `,contador);
// } while (contador !== 0);

// for (inicializacion ; condicion ; incremento/ decremento){
//     codigo a ejecutar
// }

// const arregloEjemplo = ['Jaime','Manuel','Ramiro','Bicho'];
// // una manera de imprimir cada elemento con el numero de caracteres que tiene.
// for(let contador = 0; contador < arregloEjemplo.length ; contador ++){
//     console.log(`El Nombre es: ${arregloEjemplo[contador]}
//     y sus caracteres son: ${arregloEjemplo[contador].length}`)
// }
// funciones

const a = 10;
const b = 20;
const y = 20;
const z = 20;

// sintaxis
// function nonbreDelafuncion(paramtros){
// lo que va a ajecutar
// }

// parametros -> definicion de funcion
function suma(numero1, numero2) {
  return numero1 + numero2;
}

const suma2 = function (numero1, numero2) {
  return numero1 + numero2;
};

// this 

// diferencia => definicion antigua  a arrow funcion no tienen acceso a this 

// arrow function 
const suma3 = (numero1, numero2) => {
  return numero1 + numero2;
};

const suma4 = (numero1, numero2) => numero1 + numero2;

    

// argumentos en modo ejecucion los paramtros
// pasan a llamarse argumentos
console.log(suma(y, z));
console.log(suma2(y, z));
console.log(suma3(y, z));
console.log(suma4(y, z));
