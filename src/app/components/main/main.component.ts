import { Component, OnInit } from '@angular/core';
import { DatosService }  from '../../services/api.service';
import { Datos } from '../../models/datos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[DatosService]
})
export class MainComponent implements OnInit {

  // public datos: Datos[] = [];
  public datos:any = [];



  constructor(private datosService:DatosService) {
      this
   }

  ngOnInit(): void {

    this.datosService.mostrarDatos().subscribe(
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
