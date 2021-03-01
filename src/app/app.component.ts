import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
//import{MyDot} from 'src/app/shared/models';
import { from } from 'rxjs';
import { MyDot } from './shared/models/dot.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'project11-lect';
  muNumber = 10;
  hello(){
    return "Hello, world";
  }
  flag = false;
  buttonEnable = false;


  constructor(){
    setTimeout(() => {
      this.buttonEnable = true;
      this.fontSize = 20;
    }, 1500);
    
  }

  ngOnInit(){
   
  }
  ngAfterViewInit(){
    console.log(this.someInputName.nativeElement.value);
  }
  blockX = 0;
  blockY = 0;
  getCoords(e: MouseEvent){
    this.blockX = e.offsetX;
    this.blockY = e.offsetY;
  }

  inputValue = "test";

  getData(HTMLInputElement){
    // console.log(elm.value);
    console.log(this.someInputName.nativeElement.value)
  }

  @ViewChild('someInput') someInputName: ElementRef;

  someArray:string[] = ['Первый', 'Второй', 'Третий']
  fontSize = 25;

  dots = MyDot;
}
