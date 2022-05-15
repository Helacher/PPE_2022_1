import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from '../service/vehicule.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { EditvehiculeComponent } from '../editvehicule/editvehicule.component';

@Component({
  selector: 'app-gerer-vehicule',
  templateUrl: './gerer-vehicule.component.html',
  styles: [
  ]
})
export class GererVehiculeComponent implements OnInit {
  vehicule:any
  Ref!: NgbModalRef;
  constructor(private activateRouter: ActivatedRoute, private router: Router,
    public vehiculeService: VehiculeService,
    public fb:FormBuilder,
    private modalService: NgbModal,
    
    ) { }


  ngOnInit(): void {
    

    this.getAllVehicules();


  }
  displayVehicule(id: any) {
    this.router.navigate([`displayVehicule/${id}`]);
  }
  deleteVehicule(id: any) {
    this.vehiculeService.deleteVehicule(id).subscribe(
      () => {
        console.log('vehicule delete');
        this.getAllVehicules();
      });
  }
  editVehicule(userModel: any) {
   
    this.Ref= this.modalService.open(EditvehiculeComponent, { centered: true });
   this.Ref.componentInstance.selectedUser = userModel;
  
    this.Ref.result.then((yes) => {
      console.log("Yes Click");
  
   
     this.getAllVehicules();
    },
      (cancel) => {
        console.log("Cancel Click");
  
      })
  }
  getAllVehicules() {
    this.vehiculeService.getAllVehicules().subscribe(
      (data:any) => {
        this.vehicule = data;
      }
    );
  }
  addvehicule(){
    this.router.navigate(['addvehicule']);
  }

  Editvehicule(userModel: any) {
   
    this.Ref= this.modalService.open(EditvehiculeComponent, { centered: true });
   this.Ref.componentInstance.selectedUser = userModel;
  
    this.Ref.result.then((yes) => {
      console.log("Yes Click");
  
     // this.setUsersList();
     this.getAllVehicules();
    },
      (cancel) => {
        console.log("Cancel Click");
  
      })
  }


}
