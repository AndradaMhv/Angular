import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {
  artList = [
    {
      image:
        'assets/wolf.jpg'
    },
    {
      image:
        'assets/waterfall.jpg'
    },
    {
      image:
        'assets/wolfgirl.jpg'
    },
    {
      image:
        'assets/nightgirl.jpg'
    },
    {
      image:
        'assets/masked.jpg'
    },
    {
      image:
        'assets/dunare2.jpg'
    },
    {
      image:
        'assets/dunare1.jpg'
    },
    {
      image:
        'assets/family.jpg'
    },
     
    {
      image:
        'assets/butterfly.jpg'
    },
    {
      image:
        'assets/nurse.jpg'
    },
    {
      image:
        'assets/skull.jpg'
    }
     
     ]
     
     
       

  constructor(private router:Router) { }

  ngOnInit(): void {
  }



  

}
