import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email;
  webpage : string;
  hobbies : string[];
  showHobbies:boolean;
  age: number = 40;

  users=['ryan','joe','cameron','john'];
  activated = false;

  posts:any;

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      //console.log(data);
      this.posts = data;
    });
    console.log("Constructor trabajando...ccd");
    this.name = "Carlo Corrales D.";
    this.email = "ccorrales@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Voley","Computación","Netflix"];
    this.showHobbies = false;
  }
  showhobbies() {
    return true;
  }
  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
  newHobbie(hobbie:any) {
    this.hobbies.push(hobbie.value);
    hobbie.value = "";
    return false;
  }
  sayHello(){
    alert("Hola desde app.component");
  }
  deleteUser(user:any) {
    for(let i=0; i<this.users.length; i++) {
      if (user==this.users[i]) {
        this.users.splice(i,1);
      }
    }
  }
  addUser(newUser:any) {
    this.users.push(newUser.value);
    newUser.value='';
    newUser.focus();
    return false;
  }
}