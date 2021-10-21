import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TodoService } from 'src/app/service/todo.service';
import { cpf } from 'cpf-cnpj-validator';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-ponto-entrada',
  templateUrl: './ponto-entrada.page.html',
  styleUrls: ['./ponto-entrada.page.scss'],
})
export class PontoEntradaPage implements OnInit {
  timeEntered1 = new Date();
  todo:Task= {
    
    tipoRegistro:'ENTRADA',
    cpf:'',
    dia_registro:['Data: '+this.timeEntered1.getUTCDate()+'/'+(this.timeEntered1.getUTCMonth()+1)+'/'+this.timeEntered1.getFullYear()],
    hora_entrada:['Entrou as: '+this.timeEntered1.getHours()+':'+this.timeEntered1.getMinutes()],
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
    this.presentSucess(),
   this.todoService.addTask(this.todo);
   this.todo ={}
   }else{
    this.presentFail(),
     console.log('deu n mano')
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