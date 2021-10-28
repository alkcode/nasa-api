import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Global } from "./global";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()

export class DatosService{
    private url: string;
    private key: string;
    constructor( private http: HttpClient ){
        this.url = Global.url;
        this.key = environment.key;
    }
    mostrarDatos():Observable<any>{
        return this.http.get(this.url+this.key);

    }
}