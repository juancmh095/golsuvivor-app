import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'app-code-verify',
  templateUrl: './code-verify.component.html',
  styleUrls: ['./code-verify.component.scss'],
  imports: [IonContent, IonButton, FormsModule, ReactiveFormsModule,NgIf],
})
export class CodeVerifyComponent  implements OnInit {
  verify:any = false;
  code: string[] = [];
  email:any = localStorage.getItem('email');
  @ViewChildren('codeInput') codeInputs!: QueryList<any>;
  constructor(
    private _api:ApiService,
    private router: Router
  ) { }

  ngOnInit() {}


  moveFocus(event: any, index: number) {
    const input = event.target;
    if (input.value.length === 1 && index < this.codeInputs.length - 1) {
      this.codeInputs.toArray()[index + 1].nativeElement.focus();
    } else if (input.value.length === 0 && index > 0) {
      this.codeInputs.toArray()[index - 1].nativeElement.focus();
    }
    this.verifyCode();
  }

  async verifyCode() {
    let vacios = this.code.filter((item) => item == '');
    console.log(vacios);
    if(vacios.length == 0){
      this.verify = true;
    }else{
      this.verify = false;
    }
  }

  sendCode() {
    let codex = this.code.join('');
    this._api.post('auth/verify', {code: codex, email:this.email }).subscribe(
      (response) => {
        console.log("🚀 ~ CodeVerifyComponent ~ sendCode ~ response:", response)
        if(response.status){
          //enviar a pagina para verficiar codigo
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this.router.navigate(['/player']);
        }else{
          this.router.navigate(['/login']);
          this._api.utils.toastShow('bottom', 'Error al enviar el codigo', 'error');
        }
      })
  }

}
