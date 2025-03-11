import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})
export class RegistroComponent  implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit() {}

}
