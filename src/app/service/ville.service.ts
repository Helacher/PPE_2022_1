import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VilleService {URL:string="http://localhost:8082/Villes";
displayURL:string="http://localhost:8082/displayVille";

  constructor(private httpClient:HttpClient) { }

  getAllVillees(){
    return this.httpClient.get(this.URL);
  }

  addVille(ville:any){
  return this.httpClient.post(this.URL,ville);
  }
  getVilleById(id:number){
    return this.httpClient.get(`${this.URL}/${id}`);
  }
  getLocalesByVille(id:number){
    return this.httpClient.get(`${this.displayURL}/${id}`);
  }
}