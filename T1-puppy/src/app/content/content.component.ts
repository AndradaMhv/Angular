import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  cards1 = [
    { 
      source: '../assets/Bundeofent.jpg',
      name:'Bonnie',
      description: "I'm a goofy bundle of enthusiasm, so I need to join a family with adults or older children."
    },
    {source: '../assets/scarydog.jpg',
      name: 'Max',
      description: "I look pretty scary, but never judge a book by it's cover."
    },
    { source:'../assets/sleeping.jpg',
      name: 'Boy',
      description: "I love sleeping so I won't be bothering you with silly toys."
  }]
  cards2=[
    { source:'../assets/babysitter.jpg',
      name: 'Ayla',
      description: "I am just the perfect babysitter. You can trust me being next to your children."
    },
    { source:'../assets/streets.jpg',
      name: 'Cash',
      description: "In spite of my name, I was raised on the streets. I only ask for a loving family."
    },
    { source:'../assets/active.jpg',
      name: 'Leah',
      description: "I am very active and sometimes really clumsy. You'll never be bored again with me."
    },
    { source:'../assets/eating.jpg',
      name: 'Gus',
      description: "You might find out sooner or later that I eat a lot, so it's for the best to tell you now."
    }
  ]
 
}
