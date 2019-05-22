import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burndown',
  templateUrl: './burndown.component.html',
  styleUrls: ['./burndown.component.css']
})
export class BurndownComponent implements OnInit {
  type = 'LineChart';
   data = [
      ["Dia 0", 30],
      ["Dia 1",  30],
      ["Dia 2",  20],
      ["Dia 3",  null],
      ["Dia 4",  null],
      ["Dia 5",  null]      
   ];
   options = {   
      hAxis: {
         title: 'Dias'
      },
      vAxis:{
         title: 'Sprint Packlog'
      },
      backgroundColor:'#f9f9f9',
      pointSize:3
   };
  width = 1000;
  height = 700;

  constructor() { }

  ngOnInit() {

  }

}