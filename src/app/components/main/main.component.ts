import { Component, OnInit } from '@angular/core';
import { DatosService }  from '../../services/api.service';
// import { Datos } from '../../models/datos';
// import {PdfMakeWrapper, Txt, Img } from 'pdfmake-wrapper';

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

// async generarPdf(){
//     let picture:string='';
//     const pdf= new PdfMakeWrapper();
//     pdf.add(this.datos.title)
//     pdf.add(
//       new Txt(this.datos.explanation).bold().end
//     );

//     if(this.datos.media_type=='video'){
    
//     pdf.images({
//       picture: await new Img('https://w7.pngwing.com/pngs/583/387/png-transparent-camera-icon-design-icon-camera-camera-lens-rectangle-photography.png').build()
//     });


//     }else{
//       pdf.images({
//         picture: await new Img(this.datos.url, true).build()
//       });
    
       
//     }

//     pdf.create().download();
    
//   }

}
