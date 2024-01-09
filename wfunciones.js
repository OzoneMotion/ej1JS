/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */


//const CirectangleArea = (length, width) => length*width;
function circlePerimeter(r){
    return 2*Math.PI*r
}

//const rectangleArea = (length, width) => length*width;
function rectArea(a,b){
    return a*b
}

//const cuadNum = (num) => num*num;
function cuadradoNum(n){
    return n*n
}

//const celciusToFar = (c) => c*1.8+32;
function celciusToFar(c){
    return c*1.8+32
}

//const voltajeCalc = (i, res) => i*res;
function voltajeCalc(i,res){
    return i*res
}

//const circleArea = (rd) => (4/3)*Math.PI*(rd**3)
function circleArea(rd){
    return (4/3)*Math.PI*(rd**3)
}