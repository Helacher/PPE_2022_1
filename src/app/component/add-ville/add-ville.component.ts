import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.css']
})
export class AddVilleComponent implements OnInit {

  id!:any;
  ville:any={};
  addVilleForm:FormGroup | undefined;
    constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, private router: Router, private vService: VilleService) { }
  
    ngOnInit(): void {
     
      this.id = this.activateRouter.snapshot.paramMap.get("id");
    
  
  
      this.addVilleForm = this.fb.group({
       
        nom: [''],
        
        
      })
    }
  
    add(s: any) {
  
     
        this.vService.addVille(s).subscribe(
          () => {
            console.log('Ville add');
            this.router.navigate(['Villes']);
  
          }
        )
  
  
      
    }
  }

