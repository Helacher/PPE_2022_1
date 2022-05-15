import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../service/vehicule.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-vehicule',
  templateUrl: './display-vehicule.component.html',
  styles: [
  ]
})
export class DisplayVehiculeComponent implements OnInit {
  id:any;
  vehicule:any;
  constructor(private activateRouter: ActivatedRoute,private vehiculeService: VehiculeService) { }

  ngOnInit(): void {
    this.id=this.activateRouter.snapshot.paramMap.get("id"); 
  this.vehiculeService.getVehiculeById(this.id).subscribe(
   (data:any)=>{
     this.vehicule=data;
   } 
  );
  }

}
