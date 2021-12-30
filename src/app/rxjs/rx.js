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
const {
  afiliado: {
    attentionSchedules: [{
      room,
      floor,
     schedules: [
        {
        days,
        _id,
        initialTimeStr ,
        finalTimeStr,
       initialTime,
        finalTime
      }
    ],
      "room": {}
    }]
  }
}
=objeto


const person={
  name:'nest',
  adress:{
  city
  }
  }
  const {
    name,
    adress:{
            city
           }

            }=person
/*
    this.pdf$
    .subscribe((r)=>console.log('PDF'))
    */

    /*
    .pipe(
      map(()=>new Date().toString()),
      tap(console.log)
    )
  //.pipe(tap((event: MouseEvent) => console.log("Descarga PDF" )))
  .subscribe((r)=>console.log('PDF'))
 */

    /*
    this.docx$
    .pipe(
      map(()=>new Date().toString()),
      tap(console.log)
    )

  .subscribe((o)=>console.log('docx'))
  */


/*
    this.mostrar$
    .pipe(
      map(()=>new Date().toString()),
      tap(console.log)
    )
    .subscribe((o)=>console.log('mostrar'))
*/





