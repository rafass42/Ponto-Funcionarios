import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { IonRouterOutlet, LoadingController, ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular'
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin:User = {};
  private loading: any;
  

  formLogin: FormGroup;
 
  public mensagens_validacao = {
    login: [
      { tipo: 'required', mensagem: 'Email não preenchido' },
      { tipo: 'email', mensagem: 'E-mail Invalido' },
      
    ],
    senha: [
      { tipo: 'required', mensagem: 'Senha não preenchida' },
     
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    public router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService) { 

      
  this.platform.backButton.subscribeWithPriority(-1, () => {
    if (!this.routerOutlet.canGoBack()) {
      App.exitApp();
    }
  });
    }

  ngOnInit() 
    {
      this.formLogin = this.formBuilder.group({
        login: ['', [Validators.required, Validators.minLength(10),Validators.email]],
        senha: ['', [Validators.required ]],
     })

   }

  async login(){
    await this.presentLoading();

    
    try {
      await this.authService.login(this.userLogin);

      this.router.navigate(['infoFunc'])  

    } catch (error) {
      console.error(error);

      this.presentToast('Login ou senha inválidos');
    } finally {
      
      this.loading.dismiss();
    }

  }
  
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();

  }

  async presentToast(message: string){
    const toast = await this.toastCtrl.create({message,duration: 2000 });
    toast.present();
  }

 

}
