import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TodoService } from 'src/app/service/todo.service';
import { cpf } from 'cpf-cnpj-validator';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ponto-saida',
  templateUrl: './ponto-saida.page.html',
  styleUrls: ['./ponto-saida.page.scss'],
})
export class PontoSaidaPage implements OnInit {

  
  formCPF: FormGroup;
 
  public mensagens_validacao = {
    CPF: [
      { tipo: 'required', mensagem: 'CPF não preenchido' },
      { tipo: 'minlength', mensagem: 'O CPF deve ter 14 caracteres' }
    ]
  }

  timeEntered2 = new Date();
  todo:Task= {
    
    tipoRegistro:'SAÍDA',
    cpf:'',
    dia_registro:[ 'Data: '+('0' + this.timeEntered2.getDate()).slice(-2) + '/'
    + ('0' + (this.timeEntered2.getMonth()+1)).slice(-2) + '/'
    + this.timeEntered2.getFullYear()],
    hora_entrada:['Saiu as: '+('0'+this.timeEntered2.getHours()).slice(-2)+':'+('0'+this.timeEntered2.getMinutes()).slice(-2)],
 }
 params;
 editing:boolean= false
 constructor(private formBuilder: FormBuilder, private todoService: TodoService, private router :Router, private activateRoute:ActivatedRoute, private alertCtrl:AlertController) { }

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
   this.todoService.addTask(this.todo);
   this.todo ={},
   this.presentSucess()
   this.router.navigate(['/start'])
   }
   else{
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