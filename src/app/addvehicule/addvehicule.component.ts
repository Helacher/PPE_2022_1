import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from '../service/vehicule.service';

@Component({
  selector: 'app-addvehicule',
  templateUrl: './addvehicule.component.html',
  styles: [
  ]
})
export class AddvehiculeComponent implements OnInit {

 
  vehicules: any;
  vehicule: any = {};
  id: any;
  addvehiculeForm: FormGroup | undefined;
  title: string = "Add vehicule";


  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, 
    private router: Router, public vehiculeService: VehiculeService) { }
    get f(){return this.vehiculeService.addvehiculeForm.controls;}


      ngOnInit(): void {
        this.id = this.activateRouter.snapshot.paramMap.get("id");
        console.log(this.id);


    this.vehiculeService.addvehiculeForm = this.fb.group({
      id: [''],
      numCarteGrise: [''],
      typeImmatriculation: [''],
      immatriculation:[''],
      marque: [''],
      modele:['']
    
    })
  }

  add(e: any) {

    
      this.vehiculeService.addVehicule(e).subscribe(
        () => {
          console.log('vehicule add');
          this.router.navigate(['vehicules']);

        }
      )


    }
  }



