import {  Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class ANDROIDComponent {
 
  
  @ViewChild('test') Test: ElementRef;

  change():void{
    const prueba: any = document.querySelector('#test');
    prueba.focus();
    document.execCommand('selectAll')
    document.execCommand('copy')
    console.log(prueba.innerHTML);
    prueba.style.color = 'red';
  }
  
}



