import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TodoService } from 'src/app/service/todo.service';
import { cpf } from 'cpf-cnpj-validator';
import { AlertController, IonDatetime } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-ponto-entrada',
  templateUrl: './ponto-entrada.page.html',
  styleUrls: ['./ponto-entrada.page.scss'],
})
export class PontoEntradaPage implements OnInit {

  formCPF: FormGroup;
 
  public mensagens_validacao = {
    CPF: [
      { tipo: 'required', mensagem: 'CPF não preenchido' },
      { tipo: 'minlength', mensagem: 'O CPF deve ter 14 caracteres' }
    ]
  }

  timeEntered1 = new Date();
  todo:Task= {
    
    tipoRegistro:'ENTRADA',
    cpf:'',
    dia_registro:[ 'Data: '+('0' + this.timeEntered1.getDate()).slice(-2) + '/'
    + ('0' + (this.timeEntered1.getMonth()+1)).slice(-2) + '/'
    + this.timeEntered1.getFullYear()],
    hora_entrada:['Entrou as: '+('0'+this.timeEntered1.getHours()).slice(-2)+':'+('0'+this.timeEntered1.getMinutes()).slice(-2)],
 }
 params;
 editing:boolean= false
 
  

 constructor(
  private formBuilder: FormBuilder, 
  private todoService: TodoService, 
  private router :Router, 
  private activateRoute:ActivatedRoute,
  private alertCtrl:AlertController)
  { 

    
  }
 ngOnInit() {
   
  this.formCPF = this.formBuilder.group({
    CPF: ['', [Validators.required, Validators.minLength(14)]],
 })

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
    this.presentSucess(),
   this.todoService.addTask(this.todo);
   this.todo ={}
   this.router.navigate(['/start'])
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
    message: 'CPF inválido!',
    buttons: ['OK']
  });
  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('FAIL', role);


}
}