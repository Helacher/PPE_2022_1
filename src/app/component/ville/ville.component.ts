import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  title: any;
  id: any;
  ville: any;



  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, private router: Router, private vService: VilleService) { }

  ngOnInit(): void {
    

    this.getAllVilles();
 


  }
  getAllVilles() {
    this.vService.getAllVillees().subscribe(
      (data) => {
        this.ville = data;
        console.log('l',this.ville);
      }
      
    );
  }
  
  addville(){
    this.router.navigate(['addVille']);
   }
addLocale(){
  this.router.navigate(['addLocale']);
}

}
