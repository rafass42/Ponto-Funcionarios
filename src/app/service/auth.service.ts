import { Injectable } from '@angular/core';
import { AngularFireAuth,  } from '@angular/fire/auth';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth ) { }

login(user:User){
  return this.afa.signInWithEmailAndPassword(user.email, user.password);

}

logout(){

}

getAuth(){
return this.afa; 

}

}
