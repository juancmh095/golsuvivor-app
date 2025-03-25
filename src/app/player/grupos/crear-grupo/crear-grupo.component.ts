import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonInput,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonListHeader,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';



@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.scss'],
  imports:[IonContent, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonInput,IonItem,IonList, IonListHeader, IonLabel, IonButton]
})
export class CrearGrupoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
