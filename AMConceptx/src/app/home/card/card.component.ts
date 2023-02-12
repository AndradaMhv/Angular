import { Component,EventEmitter, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() art: any;
@Output() imageClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  isVisible=false;
  selectedArt:any;

  onImageClick(art: any) {
    this.selectedArt=art;
    this.isVisible=true;
  }
  handleModalCancel():void{
    this.isVisible=false;
  }
}
