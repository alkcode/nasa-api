import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Global } from "./global";
import { Observable } from "rxjs";

@Injectable()

export class DatosService{
    private url: string;
    private key: string;
    constructor( private http: HttpClient ){
        this.url = Global.url;
        this.key = Global.key;
    }
    mostrarDatos():Observable<any>{
        return this.http.get(this.url+this.key);

    }
}