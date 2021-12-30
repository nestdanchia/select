import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, delay, exhaustMap, filter, flatMap, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import {Entradas, Posts, User, Albums, address, Ubigeo } from './model';
import { combineLatest, forkJoin, from, interval, Observable, of } from 'rxjs';

// https://levelup.gitconnected.com/handle-multiple-api-requests-in-angular-using-mergemap-and-forkjoin-to-avoid-nested-subscriptions-a20fb5040d0c
@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  departamentos: string[] = [];
  provincias: string[] = [];
  distritos: Ubigeo[] = [];



  url: string = ' https://jsonplaceholder.typicode.com';
  userUrl = 'https://jsonplaceholder.typicode.com/users';
  todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  entradas:Entradas[];
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
    arry!:User[]
  userName = 'Kamren'
  user!: User;
  //users!:User[]
  posts1$!: Observable<Posts[]>;
  users$!: Observable<User[]>;
  adddress$!: Observable<address>;
  //albums!: Albums;
  posts!: Posts[];
  dataForUser2$!:Observable<UserData>;
  dataForUser11$!:Observable<User>;
  constructor(private http: HttpClient) {
    this.entradas=[{frase:'Pyton'},{frase:'Java'}];

    this.dataForUser11$ = this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?username=Kamren`)
    .pipe(
      tap(r=>  console.log('respuesta Array of Object',r)),
      mergeMap(result=>result),
      tap(mergeResp=>console.log('mergeResp object',mergeResp)),

      // emito un objeto
      //map(r=>r)

    )
    //this.dataForUser11$.subscribe(v=>console.log(' objeto',v)  )
   // dataForUser11$.subscribe(v=>console.log('transformo objeto en un array de ese objeto',Array.of(v))  )






    this.dataForUser2$ = this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?username=Kamren`)
    .pipe(
          map(users => users[0]),
          switchMap(user =>
            // userId= ${user.id}
            /**
             If you see combineLatest is deprecated:
Pass arguments in a single array instead then just add []:

             */
            combineLatest([
              this.http.get<ToDo[]>(`${this.todoUrl}?userId=${user.id}`),
              this.http.get<Post[]>(`${this.postUrl}?userId=${user.id}`)



        ]).pipe(
          // Map the data into the desired format for display
          map(([todos, posts]) => ({
            name: user.name,
            id:user.id,
            todos: todos,
            posts: posts

          }) as UserData)
        )
        )


        )
        this.dataForUser2$.subscribe(resp=>console.log('User Data',resp))

  }

  ngOnInit(): void {
   const su= this.getKarem().subscribe(resp=>this.arry=resp)
    /*
    const simulateHttp$=((source:number[],retraso:number)=>from(source).pipe(delay(retraso)));
    const http1$=simulateHttp$([1,2,],1000);
    const http2$=simulateHttp$([1,2,3,4],500);

    const httpResult$ =http1$.pipe(
      switchMap(sourceValue=>{
        console.log(sourceValue);
        return http2$
      })
    )
    httpResult$.subscribe(
      console.log,
      console.error,
      () => console.log('completed httpResult$')
  );
*/
/*
    let postId=interval(1).pipe(
      // mergeMap puede no esperar al inner observable y mostrarlo luego
      filter((val=>val>0)),
      take(6)
      );


        postId
      .pipe(
        mergeMap((id)=>{
          return this.http.get<Post>(
            `${this.postUrl}/${id}`
          );
        })
      )
        .subscribe((postDetail)=>{
          console.log('Datos desde el Servicor',postDetail)
        });

        */

  //  this.getMergeData();
    //this.getMergeForkData();
    //this.getAddress(0);
    let postId=interval(1).pipe(
      // mergeMap puede no esperar al inner observable y mostrarlo luego
      filter((val=>val>0)),
      take(5)
      );


        postId
      .pipe(
        // switchMap puede cancelar anteriores y solo muestra al ultimo id:6
        // concatMap muestra a todos y en orden waits for the previous Observable
        // to complete before creating the next one
        // exhaustMap


        concatMap((id)=>{
          return this.http.get<Post>(
            `${this.postUrl}/${id}`
          );
        })
      )
        .subscribe(
          (val:Post)=> console.log('Datos desde el Servicor',val),
          err=>console.error(err),
         ()=>console.log('http cpmplete')


        );





  }




//  this.getMergeData();
  //this.getMergeForkData();
  //this.getAddress(0);

  getAddress(id: number) {
    this.http.get<User[]>(`https://jsonplaceholder.typicode.com/userId=${id}`)
      .pipe(
        map((users) => {
          users.filter(user => user.id === id)
        }),
        tap(usersAdress => console.log('usersAdress', JSON.stringify(usersAdress))),

      )
  }


      getKarem(){
 return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?username=Kamren`)

    }




  getMergeData() {
    this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?username=Bret`)
      .pipe(
        delay(600),
        map((users) => {
          const user = users[0];
          this.userName = user.username
          return user

        }),
        mergeMap(user => this.http.get<Posts[]>(
          `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`))
      ).subscribe(posts => {
        this.posts = posts;

      })




  }


      }











export interface Album{
  userId:number,
  id:number,
  title:string
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

export interface UserData {
  name: string;
 // username?: string;
 id:number,
  posts: Post[];
  todos: ToDo[];
}
/*
user bret
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
]


*/
/*
Merge es un operador de combinación que combina dos o más Observables
 en uno solo y no introduce ningún tipo de modificación o alteración en
 el orden temporal en que los valores de cada uno de los Observables
 fueron emitidos.el Observable resultante, los valores de éste, son emitidos
  en el mismo orden temporal que el
  de los Observables de origen.
  Concat es otro operador de combinación,
  pero a diferencia de merge, que combina los
   valores en el mismo orden que fueron emitidos,
    concat espera a que el primer Observable emita su complete
     (representado por la línea vertical),
     para suscribir al otro y comenzar a recolectar sus valores:
CombineLatest es otro operador de combinación y que combina
los valores emitidos por los distintos Observables, suscribiéndose
a los distintos observables al mismo tiempo y devolviendo todos sus
valores agrupados por el último valor de cada uno de los Observables en un Array:
1     2          3   4  5 !
  A      B   C D     !

  1A 2A B2  C2 D2 3D 4D 5D

  SwitchMap

De la misma forma que mergeMap es la combinación de map + mergeAll,
SwitchMap es la combinación de un map + switch. La particularidad que
 tiene Switch es que cancelará la subscripción del primer Observable
  cuando detecta que el segundo Observable comienza a emitir valores
  por lo que es un operador muy útil
 cuando nos queremos asegurar de no hacer "pooling":

*/
