import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  @Input() nameUser:any;
  ngOnInit() {
  }
  sayhello(nameUser:any) {
    alert("Hola "+nameUser);
  }
}

