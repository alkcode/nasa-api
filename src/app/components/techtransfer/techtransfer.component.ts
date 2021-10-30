import { Component, OnInit } from '@angular/core';
import { DatosService }  from '../../services/api.service';

@Component({
  selector: 'app-techtransfer',
  templateUrl: './techtransfer.component.html',
  styleUrls: ['./techtransfer.component.scss'],
  providers:[DatosService]
})
export class TechtransferComponent implements OnInit {

  public datos:any = [];

  constructor(private datosService:DatosService) { }

  ngOnInit(): void {
    this.datosService.datosTransfer().subscribe(
      response=>{
        this.datos=response;
        console.log('============================');
        console.log(this.datos);
        
      },
      error=>{
        console.log(error);
      }
    );
  }

}
