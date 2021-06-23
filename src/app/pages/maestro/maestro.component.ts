
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.scss']
})
export class MaestroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  mDetalle(id:number){
    console.log(id);
    this.router.navigate(['detalle',id]);
  }

}
