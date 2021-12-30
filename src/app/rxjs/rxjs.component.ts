import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { throwError, of, forkJoin, combineLatest, BehaviorSubject, fromEvent, from, zip, pipe, interval, Observable } from 'rxjs';

import { catchError, tap, map, switchMap, filter, first, mergeMap, debounceTime, withLatestFrom, take } from 'rxjs/operators';




@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {

estado!:string;
selectedValue!:string;
  estados = [
    {
      id: 'paid',
      label: 'Pagado',
    },
    {
      id: 'toPay',
      label: 'Por pagar',
    },

    ];
poliza={status:'Estado'}
   buttonPdf!: HTMLButtonElement;
   buttonDocx!: HTMLButtonElement;
   buttonMostrar!: HTMLButtonElement;
   pdf$!: Observable<MouseEvent>;
   docx$!:Observable<MouseEvent>;
   mostrar$!:Observable<MouseEvent>;

  today: number = Date.now();
  //https://www.youtube.com/watch?v=7ge0mQaHu4o
  // https://coryrylan.com/blog/angular-observable-data-services
  name = 'Angular';
  todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  userUrl = 'https://jsonplaceholder.typicode.com/users';
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
    // https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848
  // Action stream
  private userSelectedSubject = new BehaviorSubject<string>('');
  userSelectedAction$ = this.userSelectedSubject.asObservable();
  private estadoSelectedSubject=new BehaviorSubject<string>('');
  estadoSelectedActions$=this.estadoSelectedSubject.asObservable();

  // https://www.tutorialesprogramacionya.com/cya/
  ngOnInit() {
    this.selectedValue=localStorage.getItem('estado') || 'default-token';
    this.buttonPdf = document.getElementById("pdf") as HTMLButtonElement;
    this.buttonDocx = document.getElementById("docx") as HTMLButtonElement;
    this.buttonMostrar = document.getElementById("mostrar") as HTMLButtonElement;
    this.pdf$=fromEvent<MouseEvent>(this.buttonPdf, "click");
    this.docx$=fromEvent<MouseEvent>(this.buttonDocx, "click");
    this.mostrar$=fromEvent<MouseEvent>(this.buttonMostrar, "click");

  }
  ngAfterViewInit() {
   // this.selectedValue=localStorage.getItem('estado') || 'default-token';

    //https://www.thisdot.co/blog/form-handling-using-rxjs-and-typescript



// https://softwarecrafters.io/typescript/introduccion-typescript-react
const title$ = of('Mr', 'Mrs', 'Master');
    const inputE1 = document.querySelector('input');
    const input$ = fromEvent(inputE1!, 'input');
    const result$ = title$.pipe(
      //flatMap es un alias para mergeMap
      //switchMap((title)=> solo Masterpepe

      //mergMap mantiene múltiples suscripciones internas activas a la vez
      mergeMap((title) => {
        //Asigna cada valor del observable de origen title$ a un observable interno
        //se subscribe a el y comienza a emitir valores como observables no cancela ninguno de sus
        //observables internos

        // Mrpepe... Mrspepe....Masterpepe
        return input$.pipe(
          /*Emite un valor de la fuente
           Observable solo después de que ha pasado
           un período de tiempo en particular sin otra emisión de fuente.
          */
           debounceTime(2000),
           map((e: Event) => title + '' + (<HTMLInputElement>e.target).value),
            tap(x=>console.log('xxxxxxxxxxxxxx',x))
        )
      })
    );
    result$.subscribe(x=>console.log('xxxxxx',x));



interface code{
  id:number;
  color:string
}

let code1:code[]=[
  {
      id:1,
      color:'red'
   },
   {
      id:2,
      color:'blue'
   },
]

let code2:code[]=[
  {
      id:1,
      color:'red'
   },

]
// lo que tienen distinto
//El método some() comprueba si al menos un elemento del array cumple
//con la condición implementada por la función proporcionada retorna tru o false
let arr1 = code1.filter(e => {
 return !code2.some(item => item.color === e.color);
});
// lo que tienen igual
let arr2 = code1.filter(e => {
  return code2.some(item => item.color === e.color); // take the ! out and you're done
});
console.log(arr1)
console.log(arr2)
console.log(arr1)
/*
[{
  "id": 2,
  "color": "blue"
}]

*/








/*
function castArray<T>(x: T | T[]): T[] {
      return Array.isArray(x) ? x : [x];
    }




    let valor:string[] = [''];
    const multiOpe = (a: string | null, b: string | null) => {
      let op1 = parseInt(a!);
      let op2 = parseInt(b!);
      let resultados;
      for (let i = 0; i <= op2; i++) {
        let result = op1 * i;
     resultados = op1 + " x " + i + " = " + result+''+'';
         armarTabla(resultados);
        console.log(resultados);

      }
    }
    function armarTabla(param:string){
      valor.push(param)
}
const m1 = prompt("Ingresar Operando 1");
    const m2 = prompt("Ingresar Operando 2");

multiOpe(m1, m2);
 alert(valor.join('\n'))
   */









    let me = {
      name: 'Jakes',
      age: 30,
    };
    let friend = { ...me };
    friend.age = 27;
    console.log(friend.age); // 27
    console.log(me.age); // 30



    const observables = [of('hi'), of('im an'), of('observable')];
    const joint = forkJoin(observables);
    joint.subscribe(
      s => console.log("[of('hi'), of('im an'), of('observable')]", s)
    )

    const colores$ = from(['white', 'green', 'red', 'blue']);
    const logos$ = from(['pescado', 'dog', 'bird', 'paloma']);
    // solo combina a los dos ultimos PUES ESPERA A QUE SE COMPLETEN cada uno
    forkJoin([colores$, logos$])
      .subscribe(([color, logo]) => console.log(`primera fuente ${color} forkJoin-->shirt with segunda fuente ${logo}`));
    // uno con uno
    zip(colores$, logos$)
      .subscribe(([color, logo]) => console.log(`${color} --->zip shirt with ${logo}`))

    // 3. We are ready to start printing shirt...
    // el outler solo se combina con paloma
    // combina al ultimo outler con cada inner
    combineLatest([colores$, logos$])
      .subscribe(([color, logo]) => console.log(`primera fuente el ultimo ${color} combineLatest -->shirt with segunda fuente ${logo}`));
    // COMBINA PRIMERA FUENTE CON ULTIMO DE LA SEGUNDA
    const withLatestFrom$ = colores$.pipe(
      withLatestFrom(logos$),
      map(([colores, logos]) => {
        return `First colores: ${colores} Second Source logos: ${logos}`
      }

      )
    );
    withLatestFrom$.subscribe(x => console.log('withLatestFrom', x))

    // const numbers$=of(1,2,3).pipe(
    // debounceTime(1000)..> ve sola 3..6..9
    // con from([1,2,3]).pipe-->[1,2,3]
    const numbers$ = from([1, 2, 3]).pipe(
      // en el primer caso x en el segundo caso 2 veces x en el tercer caso 3 veces x
      switchMap((x) => of(x, x * 2, x * 3))
    )
    const numbers9$ = of(1, 2, 3);
    const alCuadrado = pipe(
      filter((x: number) => x % 2 === 0),
      map((x) => x * x)

    )

    const cuadrado = alCuadrado(numbers9$);
    cuadrado.subscribe(console.log)

    const numbers1$ = of([1, 2, 3]).pipe(
      // en el primer caso x en el segundo caso 2 veces x en el tercer caso 3 veces x
      map((x) => x[1])
    )

    numbers1$.subscribe(console.log);// ---> retorna [1,2,3]


    numbers$.subscribe(console.log);

    /*
    input$.subscribe((e:Event)=>{
      console.log((<HTMLInputElement>e.target).value)
    })
    */

   let obj = {
    "affiliate": {
        "groupedServices": {
            "virtual": [{
                "category": [{
                    "active": true,
                    "enabled": true,
                    "service": [
                        "x","y"
                    ],
                    "menu": [
                        "x"
                    ],
                    "_id": "x",
                    "name": {
                        "en": "General Medicine (Telemedicine)",
                        "es": "Medicina General (Telemedicina)"
                    },
                    "description": {
                        "en": "General Medicine (Telemedicine)",
                        "es": "Medicina General (Telemedicina)"
                    },
                    "updatedBy": "x",
                    "createdAt": "2020-05-12T18:29:51.500Z",
                    "updatedAt": "2020-05-12T22:23:43.388Z",
                    "__v": 0
                }],
                "subCategory": [],
                "appointmentRequired": false,
                "enabled": true,
                "_id": "x",
                "affiliate": "x",
                "officePhone": "x",
                "place": {
                    "loc": {
                        "type": "Point",
                        "coordinates": [
                            -88.01386190000001,
                            15.5038827
                        ]
                    },
                    "enabled": true,
                    "virtual": true,
                    "_id": "x",
                    "country": "x",
                    "countryName": "x",
                    "city": "x",
                    "name": "x",
                    "createdBy": "5f88fad8fbe0752323193758",
                    "address": "x",
                    "createdAt": "2020-10-16T01:49:39.090Z",
                    "updatedAt": "2020-10-16T01:49:39.090Z",
                    "__v": 0
                },
                "room": "",
                "service": {
                    "active": true,
                    "enabled": true,
                    "affiliateType": [
                        "x"
                    ],
                    "isAppointment": true,
                    "showIsAppointment": false,
                    "isVirtual": true,
                    "isDomicilio": false,
                    "isClinica": false,
                    "_id": "x",
                    "name": {
                        "en": "Telemedicine",
                        "es": "Telemedicina"
                    },
                    "description": {
                        "en": "Telemedicine",
                        "es": "Telemedicina"
                    },
                    "createdAt": "2020-05-12T18:20:38.991Z",
                    "updatedAt": "2020-05-13T02:56:48.172Z",
                    "__v": 0
                },
                "price": 500,
                "createdAt": "2020-10-16T01:49:39.355Z",
                "updatedAt": "2020-10-16T01:49:39.355Z",
                "__v": 0
            }],
            "atHome": [],
            "clinic": []
        }
    }
}

const ID=  obj.affiliate.groupedServices.virtual[0].category[0]._id;
const desdeCategory= obj.affiliate.groupedServices.virtual[0].category
//console.log(ID)//X;
let resultado=desdeCategory.map(stri=>stri._id);

console.log(resultado)// x





  }

  onChange(event: Event) {

    this.estado = (event.target as HTMLInputElement).value;
localStorage.setItem('estado', this.estado);
this.selectedValue=localStorage.getItem('estado') || 'default-token';
console.log('this.selectedValue',this.selectedValue,localStorage.getItem('estado'))
    this.estadoSelectedSubject.next(this.estado)
  }

  descargarPDF(){
    this.pdf$
  .pipe(tap((event: MouseEvent) => console.log("Descarga PDF" )))
  .subscribe((r)=>console.log('pdf'))
  }
  descargarDocx(){
    this.docx$
  .pipe(tap((event: MouseEvent) => console.log(event,"Descarga DOCX")))
  .subscribe((O)=>console.log('docx'))
  }
  mostrarExpediente(){
    this.mostrar$
  .pipe(

    tap((event: MouseEvent) => console.log(event,"Mostrar"))
    )
  .subscribe( (x: MouseEvent) => console.log(`x: ${x.x}, y: ${x.y}`))
  }
  // All ToDo's
  todos$ = this.http.get<ToDo[]>(this.todoUrl)
    .pipe(
      tap(data => console.log('todos', JSON.stringify(data))),
      catchError(err => throwError('Error occurred'))
    );

  // All Users
  users$ = this.http.get<User[]>(this.userUrl)
    .pipe(
      tap(data => console.log('users', JSON.stringify(data))),
      catchError(err => throwError('Error occurred'))
    );

  // One user's todo's
  // This example hard-codes a username.
  // Returns the todo's for a specific user
  // https://linguinecode.com/post/how-to-solve-typescript-possibly-undefined-value
  userName = 'Kamren';
  todosForUser$ = this.http.get<User[]>(`${this.userUrl}?username=${this.userName}`)
    .pipe(
      map(users => users[0]),
      switchMap(user =>
        this.http.get<ToDo[]>(`${this.todoUrl}?userId=${user.id}`)
      )
    );

  // One user's todo's
  // This example hard-codes a username
  // Returns both the user name and todo's
  todosForUser2$ = this.http.get<User[]>(`${this.userUrl}?username=${this.userName}`)
    .pipe(
      map(users => users[0]),
      switchMap(user =>
        // agregue []
        combineLatest([
          this.http.get<ToDo[]>(`${this.todoUrl}?userId=${user.id}`)
        ])
          .pipe(
            map(([todos]) => ({
              name: user.name,
              id: user.id,
              todos: todos,
              posts: []
            }) as UserData)
          )
      )
    );

  // Get multiple sets of related data and return it all as a single object
  // Uses hard-coded userName
  dataForUser2$ = this.http.get<User[]>(`${this.userUrl}?username=${this.userName}`)
    .pipe(
      // This particular http request returns OBSERVABLE DE Un array.
      // We only want the first element.
      map(users => users[0]),
      /*
      La funcionalidad de switchMap radica en su nombre.
      Después de que el primer observable
       emite, se suscribe a un observable interno.
       Queremos utilizar nuestro primer observable de USUARIO y
    MAPEAR el resultado a un nuevo observable que cargue a los TODOS Y POSTS
      */
      switchMap(user =>
        combineLatest([
          this.http.get<ToDo[]>(`${this.todoUrl}?userId=${user.id}`),
          this.http.get<Post[]>(`${this.postUrl}?userId=${user.id}`)
        ])
          .pipe(
            map(([todos, posts]) => ({
              name: user.name,
              id: user.id,
              todos: todos,
              posts: posts
            }) as UserData)
          )
      )
    );

  // Gets multiple sets of related data and returns it all as a single object
  // Uses an action stream to "pass in" the parameter for the first query.
  // Uses combineLatest
  dataForUser3$ = this.userSelectedAction$
    .pipe(
      // Handle the case of no selection
      filter(userName => Boolean(userName)),
      // Get the user given the user name
      // https://swapi.dev/
      // https://www.thisdot.co/blog/mapping-returned-http-data-with-rxjs
      // ncombineLatest combina los dos ultimos
      /*

      The difference is when there are no elements in the input stream. In this case, first() throws an Error, while take(1)
       closes the Observable without any elements.
       When you are sure that the input Observable is not empty,
       it’s safer to use first()
        as it will report the empty case as an error.
      */
      switchMap(userName => this.http.get<User[]>(`${this.userUrl}?username=${userName}`)
        .pipe(
          // The query returns an array of users, we only want the first one
          map(users => users[0]),
          switchMap(user =>
            // https://www.digitalocean.com/community/tutorials/rxjs-operators-forkjoin-zip-combinelatest-withlatestfrom
            // Pull in any related streams
            /*
            http request forkJoin combineLatest
            https://indepth.dev/reference/rxjs/operators/combine-latest
            .............>
            forkJoin: cuando se completen todos los observables,
            emite el último valor emitido de cada uno
            .................>
            combineLatest: cuando cualquier observable emite un valor,
            emite el último valor de cada uno
            Llamo al operador combineLatest el operador independiente.
            Son independientes y no se esperan el uno al otro.
            withLatestFrom--> combina solo a los dos ultimos
            .

forkJoin no solo requiere que se completen todos los observables de entrada, sino que también devuelve un observable que produce un solo valor que es una matriz de los últimos valores producidos por los observables de entrada. En otras palabras, espera hasta que se complete la última entrada observable, y luego produce un solo valor y se completa.

En contraste, combineLatest devuelve un Observable que produce
un nuevo valor cada vez que lo hacen los observables de entrada,
una vez que todos los observables de entrada han producido al menos
un valor. Esto significa que podría tener valores infinitos
y puede que no se complete. También significa que los observables de entrada
no tienen que completarse antes de producir un valor.



            combina solo los ultimos valores
            de cada flujo
            Los operadores almacenan en caché el último valor
            para cada entrada observable y solo una vez que todas
             las entradas observables produjeron al menos un valor,
            emite los valores almacenados en caché combinados al observador.
            El operador combineLatest es uno de los operadores de combinación
            que emite el último valor de cada uno de
             los flujos observables cuando el observable emite un valor.
             si se pasan 3 flujos de datos como argumento al operador
              combineLatest, tomará el último valor emitido por cada uno de
              los flujos de argumentos en ese orden en particular.
              https://www.techgeeknext.com/angular/angular-rxjs-combine-latest-zip
              https://medium.com/compendium/5-helpful-rxjs-solutions-d34f7c2f1cd9
             */
            combineLatest([
              this.http.get<ToDo[]>(`${this.todoUrl}?userId=${user.id}`),
              this.http.get<Post[]>(`${this.postUrl}?userId=${user.id}`)
            ])
              .pipe(
                // Map the data into the desired format for display
                map(([todos, posts]) => ({
                  name: user.name,
                  id: user.id,
                  todos: todos,
                  posts: posts
                }) as UserData)
              )
          )
        )
      )
    );

  // Gets multiple sets of related data and returns it all as a single object
  // Uses an action stream to "pass in" the parameter for the first query.
  // Uses forkJoin
  dataForUser$ = this.userSelectedAction$
    .pipe(
      // Handle the case of no selection
      filter(userName => Boolean(userName)),
      // Get the user given the user name
      switchMap(userName => this.http.get<User[]>(`${this.userUrl}?username=${userName}`)
        .pipe(
          // The query returns an array of users, we only want the first one
          map(users => users[0]),
          switchMap(user =>
            // Pull in any related streams
            /*
            Cuando el observable emite solo un valor o
             desea solo el último valor de cada flujo, es
              cuando forkJoin demuestra ser de ayuda.

forkJoin permite la creación del flujo de salida con los últimos
 valores de todos los flujos de entrada.
 Cuando estamos tratando con múltiples llamadas a la API, y
 tal vez no queremos renderizar la vista hasta que se hayan completado todas las solicitudes http, forkJoin es lo correcto. Sin embargo, es posible que tenga problemas si elige usar forkJoin cuando
 una de las secuencias de entrada puede no completarse.
            */
            forkJoin([
              this.http.get<ToDo[]>(`${this.todoUrl}?userId=${user.id}`),
              this.http.get<Post[]>(`${this.postUrl}?userId=${user.id}`)
            ])
              .pipe(
                // Map the data into the desired format for display
                map(([todos, posts]) => ({
                  name: user.name,
                  username: user.username,
                  id: user.id,
                  todos: todos,
                  posts: posts
                }) as UserData)
              )
          )
        )
      )
    );

  constructor(private http: HttpClient) {

   }
  /*
  You can also set fullTemplateTypeCheck to false in tsconfig.json.
  To solve this problem, use the $any typecast function
   ($any($event.target).value)
   to stop the type checking in the template
  https://www.tektutorialshub.com/angular/property-value-does-not-exist-on-type-eventtarget-error-in-angular/
  <input (keyup)="value2=$any($event.target).value" />
  <p>You entered {{value2}}</p>
  */
  onSelected(event: Event): void {
    // event:InputEvent??
    // or <HTMLInputElement>event.target
    let userName = (event.target as HTMLInputElement).value;
    this.estadoSelectedSubject.next(userName)

  }
  removeItemStorage(key: string) {
    localStorage.removeItem(key);
  }

}


export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string
}

export interface ToDo {
  userId: number;

  id: number;
  title: string;
  completed: boolean;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

export interface UserData {
  name: string;
  id: number,
  username?: string;
  posts: Post[];
  todos: ToDo[];
}
function armarTabla() {
  throw new Error('Function not implemented.');
}

function param(param: any) {
  throw new Error('Function not implemented.');
}

