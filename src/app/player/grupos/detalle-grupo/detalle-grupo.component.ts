import { NgFor } from '@angular/common';
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
  IonButton,
  IonSegmentButton,
  IonIcon,
  IonSegment,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonModal,
  IonButtons, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalle-grupo',
  templateUrl: './detalle-grupo.component.html',
  styleUrls: ['./detalle-grupo.component.scss'],
  standalone: true,
  imports:[IonContent, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol,
    IonInput,IonItem,IonList, IonListHeader, IonLabel, IonButton, IonSegmentButton, IonIcon, IonSegment, NgFor, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonModal, IonButtons, IonNote]
})
export class DetalleGrupoComponent  implements OnInit {
  jornadas:any = [1,2,3,4,5,6,7,8,9,10];
  isModalOpen:any = false;
  constructor() { }

  ngOnInit() {}

  setOpen(value:any){
    this.isModalOpen = value;
  }

}
