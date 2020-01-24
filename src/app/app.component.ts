import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  title = 'angular-Pipes';
  datee ='gfdcg';
  date: string;
  constructor(private datePipe: DatePipe) {}
  
  date1 = function(){
  this.date = this.datePipe.transform(new Date(this.inputDate), 'yy-MM-dd');}

  date2 = function(){
  this.date = this.datePipe.transform(this.inputDate, 'dd-MMM-yy');}

  date3 = function(){
  this.date = this.datePipe.transform(this.inputDate, 'EEE, MMM d, y');}
  
  
 date4 = function(){
  this.date = this.datePipe.transform(this.inputDate, 'EEEE, MMMM d, y');}

}
