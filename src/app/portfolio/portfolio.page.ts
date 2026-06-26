import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Post } from '../models/post.model';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem,IonLabel,IonList,IonCard,IonCardTitle,IonCardContent,IonCardHeader]
})
export class PortfolioPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.traerDatos();
  }

  proyectos=[
    {nombre:"App1", tecnologia:"Ionic"},
    {nombre:"App2", tecnologia:"Angular"},
  ];


posts:Post[]=[];


async traerDatos(){
    
    try{
        const data =await fetch('https://jsonplaceholder.typicode.com/posts');
        const datos_json= await data.json();
        this.posts=datos_json

    }catch (error){
        console.error(`El error es: ${error}`);
    }
      
}



}
