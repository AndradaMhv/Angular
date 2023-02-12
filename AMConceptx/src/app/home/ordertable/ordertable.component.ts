import { Component, OnInit } from '@angular/core';
import { orders } from 'src/datamodel/orderss.model';
import { FormGroup,FormControl,Validators, Form, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-ordertable',
  templateUrl: './ordertable.component.html',
  styleUrls: ['./ordertable.component.scss']
})
export class OrdertableComponent implements OnInit {
  orderss:orders[]=[];
  nnume:string;
validateForm : FormGroup;
  isVisible=false;  

  constructor(private formBuilder:FormBuilder) {
    
   }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      orderNume: new FormControl(null, [Validators.required]),
      orderPrenume: new FormControl(null, [Validators.required]),
      orderNrtel: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$'),this.validatePhoneNumber]),
      orderLungime: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      orderLatime: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      orderConcept: new FormControl(null, [Validators.required]),
    });

    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      this.orderss = JSON.parse(savedOrders);
    } else {
    this.orderss=[{"nume": "Petrescu",
      "prenume":"Iuliana",
      "nrtel":"0799234543",
      "lungime":"150",
      "latime": "100",
      "concept": "peisaj de toamna, ploaie, parc"},
     
      {"nume": "Marcovici",
      "prenume":"Mariana",
      "nrtel":"0794675345",
      "lungime":"150",
      "latime": "100",
      "concept": "bust de femeie, culori reci"},
      
      {"nume": "Marinescu",
      "prenume":"Andreea",
      "nrtel":"0240226784",
      "lungime":"100",
      "latime": "150",
      "concept": "portret copii, baloane in fundal"},

      {"nume": "Florea",
      "prenume":"Razvan",
      "nrtel":"0543246432",
      "lungime":"150",
      "latime": "100",
      "concept": "pictura catel dupa fotografie"}

    ]
  

}
}

showModal(): void {
  this.isVisible = true;
}
handleOk() {
  for (const i in this.validateForm.controls) {
    this.validateForm.controls[i].markAsDirty();
    this.validateForm.controls[i].updateValueAndValidity();
  }

  if (this.validateForm.valid) {
    const formValue = this.validateForm.value;
    this.orderss.push({
      nume: formValue.orderNume,
      prenume: formValue.orderPrenume,
      nrtel: formValue.orderNrtel,
      lungime: formValue.orderLungime,
      latime: formValue.orderLatime,
      concept: formValue.orderConcept
    });

    this.isVisible = false;
    this.validateForm.reset();
    localStorage.setItem('orders', JSON.stringify(this.orderss));
  }
}


handleCancel(): void {
  this.isVisible = false;
}

Search() {
  this.orderss = this.orderss.filter(res => {
    return res.nume.toLocaleLowerCase().match(this.nnume.toLocaleLowerCase());
  });
}
Erase() {
  if (this.nnume === "") {
    this.ngOnInit();
  }
}

sortBy(property: 'nume' | 'prenume' | 'nrtel' | 'lungime' | 'latime' | 'concept') {
  this.orderss.sort((a, b) => { 
    if (a[property]< b[property]) {
      return -1;
    }
    else if (a[property] > b[property]) {
      return 1;
    }else{
    return 0;}
  });
}
sterge(order: orders) {
  const index = this.orderss.indexOf(order);
    this.orderss.splice(index, 1);
  localStorage.setItem('orders', JSON.stringify(this.orderss));
}
validatePhoneNumber(control: FormControl): {[key: string]: any} | null {
  const validPhoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(control.value);
  return validPhoneNumber ? null : { 'invalidPhoneNumber': true };
}

}

