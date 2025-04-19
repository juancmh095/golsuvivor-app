import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private toastController: ToastController
  ) { }

  async toastShow(position: 'top' | 'middle' | 'bottom', message: string,type: 'success' | 'error' | 'warning' = 'success') {
    try {
      const toast = await this.toastController.create({
        message: message,
        duration: 1500,
        position: position,
        color: type,
      });

      await toast.present();
    } catch (error) {
      console.error('Error showing toast:', error);

    }
  }
}
