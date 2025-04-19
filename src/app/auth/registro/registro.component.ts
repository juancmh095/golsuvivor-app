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
import { ApiService } from 'src/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [IonContent, FormsModule, ReactiveFormsModule, IonItem, IonInput, IonButton],
})
export class RegistroComponent  implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  email:any;
  version:any = environment.version;
  constructor(
    private _api:ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.clear();
  }

  async login() {
    this._api.post('auth/login', {email: this.email}).subscribe(
      (response) => {
        console.log("🚀 ~ RegistroComponent ~ login ~ response:", response)
        if(response.status){
          localStorage.setItem('email', this.email);
          this._api.utils.toastShow('bottom', 'Email enviado correctamente', 'success');
          //enviar a pagina para verficiar codigo
          this.router.navigate(['/verify']);
        }
      });
  }

}
