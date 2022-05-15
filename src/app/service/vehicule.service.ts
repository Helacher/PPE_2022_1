import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  VehiculeURL:string="http://localhost:8082/vehicules";
  host:string="http://localhost:8082";
  public addvehiculeForm!: FormGroup;
  constructor(private httpVehicule:HttpClient) { }

  
  getAllVehicules(){
    return this.httpVehicule.get(this.  VehiculeURL);
  }
  getVehiculeById(id:number){
    return this.httpVehicule.get(`${this.  VehiculeURL}/${id}`);
  }
  addVehicule(vehicule:any){
  return this.httpVehicule.post(this.  VehiculeURL,vehicule);
  }
  deleteVehicule(id:number){
    return this.httpVehicule.delete(`${this.  VehiculeURL}/${id}`);
  }
  editVehicule(vehicule:any){
    console.log('here into service', vehicule);
    
    return this.httpVehicule.put(`${this.  VehiculeURL}/${vehicule.id}`,vehicule);
  }}