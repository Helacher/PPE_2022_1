import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/commun/ville';
import { LocaleService } from 'src/app/service/locale.service';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent implements OnInit {

  locales: any;
  locale: any = {};
  id: any;
  addLocaleForm: FormGroup | undefined;
  
  ville:Ville[]=[] ;

  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, private router: Router, 
    private LService: LocaleService,private vService: VilleService) { }


  ngOnInit(): void {
  
    this.getAllLocales();



  }
  getAllLocales() {
    this.id=this.activateRouter.snapshot.paramMap.get("id");
    this.LService.getAllLocalees().subscribe(
      (data) => {
        this.locale = data;
      }
    );
   
  }
  addLocale(){
    this.router.navigate(['addLocale']);

  }
  addville(){
    this.router.navigate(['addVille']);
   }
  
}


