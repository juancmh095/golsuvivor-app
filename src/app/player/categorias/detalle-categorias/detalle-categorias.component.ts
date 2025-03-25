import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonLabel,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-detalle-categorias',
  templateUrl: './detalle-categorias.component.html',
  styleUrls: ['./detalle-categorias.component.scss'],
  imports:[IonContent, IonLabel, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol]
})
export class DetalleCategoriasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
