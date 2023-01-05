import { Component, OnInit } from '@angular/core';
import { carti } from '../../datamodel/cartic.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartic:carti[]=[];
  ttitlu:string;
  constructor() { }

  ngOnInit(): void {
    this.cartic = [{"ID":1,
      "titlu": "In Search of Lost Time",
      "prenumeAutor": "Marcel",
      "numeAutor":"Proust",
      "cod":"286753"
  },
  {"ID":2,
    "titlu": "Ulysses",
    "prenumeAutor": "James",
    "numeAutor":"Joyce",
    "cod":"985780"
},
{"ID":3,
  "titlu": "Don Quixote",
  "prenumeAutor": "Miguel",
  "numeAutor":"de Cervantes",
  "cod":"957842"
},
{"ID":4,
  "titlu": "To kill a Mockingbird",
  "prenumeAutor": "Harper",
  "numeAutor":"Lee",
  "cod":"769765"
},
{"ID":5,
  "titlu": "Easy to kill",
  "prenumeAutor": "Agatha",
  "numeAutor":"Christie",
  "cod":"875789"
},
{"ID":6,
  "titlu": "Time and Time Again",
  "prenumeAutor": "Ben",
  "numeAutor":"Elton",
  "cod":"123765"
}];}
Search(){
  this.cartic=this.cartic.filter(res=>{
    return res.titlu.toLocaleLowerCase().match(this.ttitlu.toLocaleLowerCase())
  });

}
Erase(){
if(this.ttitlu==""){
  this.ngOnInit();}
}
SendToSort(){
 this.cartic= this.cartic.sort((a,b)=>a.titlu.localeCompare(b.titlu));
  }
CancelSort(){
 this.cartic= this.cartic.sort((a,b)=>a['ID']-b['ID']);
  }

}


