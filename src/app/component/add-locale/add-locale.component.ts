import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/commun/ville';
import { LocaleService } from 'src/app/service/locale.service';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-add-locale',
  templateUrl: './add-locale.component.html',
  styleUrls: ['./add-locale.component.css']
})
export class AddLocaleComponent implements OnInit {

  locale: any = {};
  id: any;
 
 
  ville:Ville[]=[] ;

  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, private router: Router, 
    private LService: LocaleService,private vService: VilleService) { }


  ngOnInit(): void {
  
   
    this.vService.getAllVillees().subscribe(
      (data:any) => {
        this.ville = data;
      }
    );

  }

  add(l: any) {
console.log('l',l);

      this.LService.addLocale(l).subscribe(
        () => {
          console.log('Locale add');
          this.router.navigate(['Locales']);

        }
      )


    }
  
  }

