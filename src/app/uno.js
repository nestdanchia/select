const arry = [
  { titulo: "dark knight",
    director: "christopher nolan",
    url: "https://es.wikipedia.org/wiki/The_Dark_Knight",
    nombre:"no necesario"
  },
   { titulo: "inception",
    director: "christopher nolan",
    url: "https://es.wikipedia.org/wiki/Inception",
    direccion:"no necesaria"
  },
{ titulo: "memento",
    director: "christopher nolan",
    url: "https://es.wikipedia.org/wiki/Memento",
    email: "no "
  },
]
for (let index = 0; index < arry.length; index++) {
  const {obj1} = array[index];

}
let nuevoArry=arry.map(es=>{es.titulo});
console.log(nuevoArry)



let objeto = {
  "afiliado": {
    "attentionSchedules": [{
      "room": "x",
      "floor": 2,
      "schedules": [
        {
        "days": [
          "MO",
          "TU",
          "FR",
          "TH",
          "WE"
        ],
        "_id": "xxxxx",
        "initialTimeStr": "07:00 am",
        "finalTimeStr": "04:00 pm",
        "initialTime": "2020-11-12T13:00:00.000Z",
        "finalTime": "2020-11-12T22:00:00.000Z"
      }
    ],
      "room": {}
    }]
  }
}
 // Con Destructuring Objects
const{attentionSchedules}=objeto.afiliado
const{schedules}=attentionSchedules[0];
const{initialTime}=schedules[0];
// Podemos asi obtener constantes que representan las propiedades
// o si las definimos  con let podemos modificarlas sin modificar al objeto original
const {clontiempo}=schedules[0];
const{finalTime}=schedules[0];
// obtencion directa
console.log('Destructuring Objects Directamente:','initialTime:',initialTime,'finalTime:',finalTime)

// Adicionalmente si lo necesitamos podremos utilizar lo anterior :
//  definiendo a una funcion que podra manejar a cualquier propiedad
// de la constante definida anteriormente schedules
const tiempo=(schedules)=>{
  console.log(`Utilizando la constante definida anteriormente initialTime :${schedules.initialTime} finalTime : ${schedules.finalTime} `);
}
tiempo(schedules[0])



/*let objeto = {
  "afiliado": {
    "attentionSchedules": [{
      "room": "x",
      "floor": 2,
      "schedules": [
        {
        "days": [
          "MO",
          "TU",
          "FR",
          "TH",
          "WE"
        ],
        "_id": "xxxxx",
        "initialTimeStr": "07:00 am",
        "finalTimeStr": "04:00 pm",
        "initialTime": "2020-11-12T13:00:00.000Z",
        "finalTime": "2020-11-12T22:00:00.000Z"
      }
    ],
      "room": {}
    }]
  }
}
const{attentionSchedules}=objeto.afiliado
const{schedules}=attentionSchedules[0];
const{initialTime}=schedules[0].initialTime;
const{finalTime}=schedules[0].finalTime;
console.log('Destructuring Objects:','initialTime:',initialTime,'finalTime:',finalTime)


let initialTime= objeto.afiliado.attentionSchedules.map(resp=>resp.schedules.map(sche=>sche.initialTime))
console.log(initialTime.toString())
*/https://www.webmd.com/vaccines/covid-19-vaccine/news/20211105/covid-vaccine-protection-drops-study
/*
luego de los 6 meses Luego busque datos y encontré la disminución de protección Pfizer/BioNTech 87%..>to 45% Johnson & Johnson 86% -->to 13% over 6 months
En cuanto a AZ los datos que encontré son de Agosto


@marita01@
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
 ];
let ovejasLetra=ovejas.filter(ove=>ove.name.includes("N")
 || ove.name.includes("n") || ove.name.includes("a")
  || ove.name.includes("A"))
let ovejasRojas=ovejasLetra.filter(ove=>ove.color=='rojo');
console.log(ovejasRojas);

// https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial/Basic_usage

// finalizada la carga de la pagina;
if(elemento && elemento.getContext){
  // load canvas
     var contexto = elemento.getContext('2d');
     if(contexto){
        return contexto;
     }
  }
  return FALSE;

function Contexto(canvas){
  var elemento = document.getElementById(canvas);
  // verfificamos al contexto
 let mensaje=(elemento && elemento.getContext)?
  // load canvas
     elemento.getContext('2d'):





}
*/
let deportista = {
  energia: 100,
  experiencia: 10,
  nombre: "Aimar",
  entrenarHoras: 6
  /*
  Si definis la funcion aca si
  el contexto de this es el adecuado porque
   invocas con deportista.entrenarHoras(5)
   como comentario adicional actualmente
    the function keyword no es necesario
entrenarHoras(horas){
  modifica al objeto
    this..........=........
  }
   */
};
  /*

solo envias  un parametro entonces utiliza
Parámetros predeterminados de función los cuales permiten
que los parámetros con nombre se inicien con valores
 predeterminados si no se pasa para ellos a ningún valor
 en el ejemplo aunque no necesario doy valor por defecto a horas
*/
function entrenarHoras(horas=6,
  energia=100,
  experiencia=10) {
     /* el uso que haces de this es  incorrecto no modificas
      nada del objeto*/
      console.log('uso incorrecto de this:',this.entrenarHoras,this.energia)// undefine
deportista.entrenarHoras=horas
deportista.energia=energia-horas*5
deportista.horario=entrenarHoras*2
}
console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia Ahora si se modifica: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("modifica horas: "+deportista.entrenarHoras);






let objeto = {
  "afiliado": {
    "attentionSchedules": [{
      "room": "x",
      "floor": 2,
      "schedules": [
        {
        "days": [
          "MO",
          "TU",
          "FR",
          "TH",
          "WE"
        ],
        "_id": "xxxxx",
        "initialTimeStr": "07:00 am",
        "finalTimeStr": "04:00 pm",
        "initialTime": "2020-11-12T13:00:00.000Z",
        "finalTime": "2020-11-12T22:00:00.000Z"
      }
    ],
      "room": {}
    }]
  }
}

let arry = [
  { titulo: "dark knight",
    director: "christopher nolan",
    url: "https://es.wikipedia.org/wiki/The_Dark_Knight",
    nombre:"no necesario"
  },
   { titulo: "inception",
    director: "christopher nolan",
    url: "https://es.wikipedia.org/wiki/Inception",
    direccion:"no necesaria"
  },
{ titulo: "memento",
    director: "christopher nolan",
    url: "https://es.wikipedia.org/wiki/Memento",
    email: "no "
  },
]
let nuevoArry=arry.map(es=>[...arry,titulo,director,url]);
console.log()


 // Con Destructuring Objects
 const{attentionSchedules}=objeto.afiliado
const{schedules}=attentionSchedules[0];
const{initialTime}=schedules[0];
// Podemos asi obtener constantes que representan las propiedades
// o si las definimos  con let podemos modificarlas sin modificar al objeto original
const {clontiempo}=schedules[0];
const{finalTime}=schedules[0];
// obtencion directa
console.log('Destructuring Objects:','initialTime:',initialTime,'finalTime:',finalTime)
// Podemos asi tambien definir funcion que podra manejar a cualquier propiedad
// de la constante definida anteriormente schedules
const tiempo=(schedules)=>{
  console.log(`initialTime :${schedules.initialTime} finalTime : ${schedules.finalTime} `);
}
tiempo(schedules[0])




const regularPerson = {
  firstname: "Bill",
  lastname: "Wilson",
  spouse: {
  firstname: "Phil",
  lastname: "Wilson"
  }
}
  const lordify = ({ spouse: { firstname } }) => {
    console.log(`${firstname} of Canterbury`);
    };
    lordify(regularPerson);
/* otra forma
let initialTime= objeto.afiliado.attentionSchedules.map(resp=>resp.schedules.map(sche=>sche.initialTime))
console.log(initialTime.toString())

finalTime : ${finalTime}
,schedules:{finalTime}}


*/
/*

public class Vehiculo {                     // Clase vehículo

  private String marca;                           // Variable que indica la marca del vehículo.
  private String matricula;                       // Variable que indica la matrícula del vehículo.



  public Vehiculo () {                        // Constructor vacío.

  }

  public Vehiculo (String marca, String matricula, ) {                  // Constructor pasando parámetros.
      this.marca=marca;
      this.matricula=matricula;
  }
  //compilador crea un constructor vacío sino se escribe uno explícitamente
  /*
  Constructor: operación que crea un objeto,
inicializando su estado (sus propiedades)

  */
  // crear metodo main
  /*
  public static void main(String[] args) {
    Date now = new Date();
   Vehiculo nuevo = new Vehiculo("Ford","OA1258");
    System.out.println("Hello World!");
    System.out.println("marca: " + nuevo.marca);
    System.out.println("modelo: " + nuevo.matricula );
    Vehiculo supe= new Vehiculo("BMW","ww897");
    System.out.println("marca: " + supe.marca);
    System.out.println("modelo: " + supe.matricula );
     supe.setMarca("Fiat");
     System.out.println("Modifico marca: " + supe.getMarca());

}
// crear metodo main java>7 error: can't find main(String[]) method in class:
class Program
    {
        static void Main(string[] args)
        {
            int salario, ingreso, capital, salud, vivienda, alimentacion, educacion, vestimenta,gastosanual;
            double bas,deduccion,Totaldeduccion,total;
            string linea;
            Console.Write(" Ingrese salario laboral:");
            linea = Console.ReadLine();
            salario = int.Parse(linea);
            Console.Write(" Ingres sin salario laboral:");
            linea = Console.ReadLine();
            ingreso = int.Parse(linea);
            Console.Write(" Ingresos de capital:");
            linea = Console.ReadLine();
            capital = int.Parse(linea);
            Console.Write(" Ingresos de salud:");
            linea = Console.ReadLine();
            salud = int.Parse(linea);
            Console.Write(" Ingresos de vivienda:");
            linea = Console.ReadLine();
            vivienda = int.Parse(linea);
            Console.Write(" Ingresos de alimentacion:");
            linea = Console.ReadLine();
            alimentacion = int.Parse(linea);
            Console.Write(" Ingresos de educacion :");
            linea = Console.ReadLine();
            educacion = int.Parse(linea);
            Console.Write(" Ingresos de vestimenta:");
            linea = Console.ReadLine();
            vestimenta = int.Parse(linea);
            gastosanual = salud + vivienda + educacion + alimentacion + vestimenta;
            Console.Write(" Gastos personales:" +gastosanual);
            linea = Console.ReadLine();
            deduccion = total -Convert.ToDouble(total * 1.5);
            Totaldeduccion = gastosanual + deduccion;
            bas = total - deduccion;
            Console.Write("Total de ingreso $", total);
            linea = Console.ReadLine();
            Console.Write("Deducible $", deduccion);
            linea = Console.ReadLine();
            Console.Write("Total deducible $", Totaldeduccion);
            linea = Console.ReadLine();
            Console.Write("Base imponible $", bas);
            linea = Console.ReadLine();

            if (bas <= 11.310)
            {
                Console.WriteLine("Impuesto de renta a pagar $0");
            }
            else
                  if (bas == 14.410 & bas < 18.010)
            {
                Console.WriteLine("Impuesto de renta a pagar $155");
            }

            Console.ReadKey();
        }

    }





    import java.util.Scanner

public class Program {
private Scanner teclado;
public static void main(String[] args)
        {  teclado=new Scanner(System.in);
          System.out.print(" Ingrese salario laboral:");
          salario = teclado.nextInt();



System.out.print("  salario laboral:",salario);
            // = System.console().readLine();
           // ingreso=Integer.parseInt(linea);
/*
int salario, ingreso, capital, salud, vivienda, alimentacion, educacion, vestimenta,gastosanual;
            double bas,deduccion,Totaldeduccion,total;

*/


    }
}








Muchos errores fijate en
Integer.parseInt(UserInput)
tambien Main! es main
















