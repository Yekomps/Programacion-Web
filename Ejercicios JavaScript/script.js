//1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
//Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

const Punto1 = () => {
    let Inputnom=document.getElementById("inp1");
    let nom= Inputnom.value;
    let inputed=document.getElementById("inp2");
    let ed=parseInt(inputed.value)
    alert(`Hola ${nom} tienes ${ed} y el año que viene tendras ${ed+1}`);
};

/** 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
 */

const AreaTriangulo = () => {
  const b = Number(prompt("Digite la base"));
  const h = Number(prompt("Digite la altura"));
  let r = parseInt(b * (h / 2));
  alert(`El Area del triangulo es  ${r}`);
};
const AreaCuadrado = () => {
  const b = Number(prompt("Digite la base"));
  const h = Number(prompt("Digite la altura"));
  let r = parseInt(b * h);
  alert(`El Area del cuadrado es  ${r}`);
};
const AreaCirculo = () => {
  const ra = Number(prompt("Digite el radio"));
  const pi = 3.141591;
  let r = parseFloat(pi * ra ** 2);
  alert(`El Area del circulo es  ${r}`);
};

/**3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar
 */

const Punto3 = () => {
  const numero = prompt("Ingrese un número");
  if (numero % 2 == 0) {
    console.log(`${numero} es par`);
    alert(`${numero} es par`);
  } else {
    console.log(`${numero} es impar`);
    alert(`${numero} es impar`);
  }
};

/**4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad */

const Punto4 = () => {
  const numero = prompt("Ingrese un número");
  if (numero > 1) {
    if (numero % 2 == 0) {
      console.log(`${numero} es primo`);
      alert(`${numero} es primo`);
    } else {
      console.log(`${numero} no es primo`);
      alert(`${numero} no es primo`);
    }
  }
};

/**
 * 5-Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
 */

const Punto5 = () => {
  const numero = prompt("Ingrese un número");
  if (numero > 0) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado = resultado * i;
    }
    alert(`el resultado de ${numero} factorial es ${resultado}`)
  }
};

/**6 - Escribe un programa que permita ir introduciendo una serie indeterminadade 
 * números mientras su suma no supere 50. Cuando esto ocurra, 
 * se debe mostrar el total acumulado y el contador de cuantos números se han introducido
 */

const Punto6  = () =>{
    let numero = prompt ("Digite un numero");
    let suma = 0;
    let contador = 0;
    while(suma<=50)
    {
        suma=suma+numero
        contador++
        numerod=Number(prompt('Digite un numero'))
        alert(`La suma es ${suma} y el contador es ${cont}`)
    }  
    
}
 /**7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares
  */

    const Punto7 = () => {
        Anumeros=[1,2,3,4,5]
        pares=[]
        impares=[]
        for(i=0;i<Anumeros.length;i++)
        {
            ramdom=Math.floor(Math.random()*10)
            multi=Anumeros[i]*ramdom
            if(multi%2==0)
            {
                alert(`${Anumeros[i]}*${ramdom}=${multi}`)
                Apares.push(multi)
                alert(Apares)
                multi=0
            }
            else
            {
                alert(`${Anumeros[i]}*${ramdom}=${multi}`)
                Aimpares.push(multi)
                alert(Aimpares)
                multi =0
            }
        }
    }

/**8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. 
 * El número no puede ser negativo ni tener más de 8 dígitos. 
 * La posición de la letra es el resultado del módulo del número introducido entre 23 
 * */

const Punto8 = () => {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    const dni = prompt ("Digite su cedula")
    if(dni<0 || dni.length>8)
    {
        alert('El numero proporcionado no es valido')
        dni=Number(prompt('Digite su dni Nuevamente'))
    }
}

/**9-Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra. */

const Punto9 = () =>{
    let palabra=prompt('Digite una palabra')
    let contvocales=0
    let contconsonantes=0
    for(i=0;i<palabra.length;i++)
    {
        if(palabra[i]=='a' || palabra[i]=='e' || palabra[i]=='i' || palabra[i]=='o' || palabra[i]=='u')
        {
            contvocales++
        }
        else
        {
            contconsonantes++
        }
    }
    alert(`La palabra ${palabra} tiene ${contvocales} vocales y ${contconsonantes} consonantes`)
}

/**10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] 
 * determinar si un color introducido por el usuario a través de un prompt 
 * se encuentra dentro del array o no. */

const Punto10 =() =>  {
    const colores = ["azul", "amarillo", "rojo", "verde", "rosa"]
    let color=prompt('Digite un color')
    let contColor=0
    for(i=0;i<colores.length;i++)
    {
        if(color==colores[i])
        {
            contColor++
        }
    }
    if(contColor==0)
    {
        alert('El color no se encuentra en el array')
    }
    else
    {
        alert('El color se encuentra en el array')
    }
}
