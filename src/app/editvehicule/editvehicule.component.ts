import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehiculeService } from '../service/vehicule.service';

@Component({
  selector: 'app-editvehicule',
  templateUrl: './editvehicule.component.html',
  styleUrls: ['./editvehicule.component.css']
})
export class EditvehiculeComponent implements OnInit {
  selectedUser: any;
  editForm!: FormGroup;
  isLoading = false;

  constructor(private activateRouter: ActivatedRoute, private router: Router,
    public modal: NgbActiveModal,
    public vehiculeService: VehiculeService,
    public fb:FormBuilder,
  ) { }
 
  ngOnInit(): void {
  
    this.setForm()
  }
  onSubmit() {
 
    this.isLoading = true;
    this.vehiculeService.editVehicule(this.editForm.value).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }
 
  get editFormData() { return this.editForm.controls; }
 
  private setForm() {
    console.log(this.selectedUser);
     
    this.editForm = this.fb.group({
      id: [this.selectedUser.id],
      typeImmatriculation: [this.selectedUser.typeImmatriculation],
      immatriculation: [this.selectedUser.immatriculation],
      numCarteGrise:[this.selectedUser.numCarteGrise],
      marque: [this.selectedUser.marque],
      modele:[this.selectedUser.modele],
    });
  }
}
