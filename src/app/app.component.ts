import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';

  @ViewChild('dobinput') dateOfBirth: ElementRef;
  @ViewChild('ageinput') age: ElementRef;
  @ViewChild(DemoComponent, { static: true }) democomp: DemoComponent;

  calculateAge() {
    // console.log(this.dateOfBirth.nativeElement.value);
    // console.log(this.age);

    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age; 
    
  }
}
