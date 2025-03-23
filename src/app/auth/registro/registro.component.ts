import { Component, OnInit } from '@angular/core';
import { IonContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';;
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [IonContent, FormsModule, ReactiveFormsModule, IonItem, IonInput, IonButton],
})
export class RegistroComponent  implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  version:any = environment.version;
  constructor() { }

  ngOnInit() {}

}
