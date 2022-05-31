import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeanceService } from 'src/app/service/seance.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  seances: any;
  seance: any = {};
  id: any;

  
  

  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, private router: Router, 
    private LService: SeanceService) { }


  ngOnInit(): void {
  
    this.getAllSeance();



  }
  getAllSeance() {
    this.id=this.activateRouter.snapshot.paramMap.get("id");
    this.LService.getAllSeance().subscribe(
      (data) => {
        this.seance = data;
      }
    );
   
  }
  addSeance(){
    this.router.navigate(['addSeance']);

  }
 
  
}
