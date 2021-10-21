import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Task } from 'src/app/model/task';
import { TodoService } from 'src/app/service/todo.service';
import { cpf } from 'cpf-cnpj-validator';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.page.html',
  styleUrls: ['./page-details.page.scss'],
})
export class PageDetailsPage implements OnInit {
  
  todo:Task= {
    tipoRegistro:'CONTRATAÇÃO',
     nome:'',
     cpf:'',
     cargo:'',
     horaEntrada:'Entra as: ',
     horaSaida:'Sai as: '
  }
  params;
  editing:boolean= false
  constructor(private todoService: TodoService, private router :Router, private activateRoute:ActivatedRoute, private alertCtrl:AlertController) { }

  ngOnInit() {
    this.params = this.activateRoute.snapshot.params
    if(this.params.id){
      this.editing= true
      this.todoService.getOneTasks(this.params.id).subscribe(
        res=>{
          this.todo=res
        },
        err=>console.log(err)
      )
    }
  }

  addTask(){ 
    if(cpf.isValid(this.todo.cpf)){
    this.todoService.addTask(this.todo);
    this.todo ={}
    this.presentSucess(),
    this.router.navigate(['/infoFunc'])
    }else{
      this.presentFail()
    }
  }
  updateTask(){
    this.todoService.updateTask(this.todo, this.params.id);
    this.router.navigate(['/infoFunc'])
    this.editing= false
  }


  async presentSucess() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Sucesso',
      message: 'Dados registrados com sucesso',
      buttons: ['OK']
    });
    await alert.present();
  
    const { role } = await alert.onDidDismiss();
    console.log('sucesso', role);
  
  }
  async presentFail() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Falha',
      message: 'Dados inválidos!',
      buttons: ['OK']
    });
    await alert.present();
  
    const { role } = await alert.onDidDismiss();
    console.log('FAIL', role);
  
  
  }


}
