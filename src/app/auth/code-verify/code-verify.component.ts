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
@Component({
  selector: 'app-code-verify',
  templateUrl: './code-verify.component.html',
  styleUrls: ['./code-verify.component.scss'],
  imports: [IonContent, IonButton, FormsModule, ReactiveFormsModule],
})
export class CodeVerifyComponent  implements OnInit {

  code: string[] = ['', '', '', '', ''];
  @ViewChildren('codeInput') codeInputs!: QueryList<any>;
  constructor() { }

  ngOnInit() {}


  moveFocus(event: any, index: number) {
    const input = event.target;
    if (input.value.length === 1 && index < this.codeInputs.length - 1) {
      this.codeInputs.toArray()[index + 1].nativeElement.focus();
    } else if (input.value.length === 0 && index > 0) {
      this.codeInputs.toArray()[index - 1].nativeElement.focus();
    }
  }

  async verifyCode() {

  }

}
