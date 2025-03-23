import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonSearchbar, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-player-home',
  templateUrl: './player-home.component.html',
  styleUrls: ['./player-home.component.scss'],
  imports: [IonContent, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonSearchbar, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent],
})
export class PlayerHomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
