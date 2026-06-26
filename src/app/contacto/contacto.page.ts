import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonTextarea, IonTitle, IonToolbar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonInput,IonButton,IonTextarea]
})
export class ContactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre:string="";
  email:string="";
  mensaje:string="";

  resultado:any=null

  guardar(){
    this.resultado={
      nombre:this.nombre,
      email:this.email,
      mensaje:this.mensaje
  };



  }

}
