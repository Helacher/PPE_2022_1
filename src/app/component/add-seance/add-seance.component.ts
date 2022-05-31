import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Locale } from 'src/app/commun/locale';
import { LocaleService } from 'src/app/service/locale.service';
import { SeanceService } from 'src/app/service/seance.service';

@Component({
  selector: 'app-add-seance',
  templateUrl: './add-seance.component.html',
  styleUrls: ['./add-seance.component.css']
})
export class AddSeanceComponent implements OnInit {

  seance: any = {};
  id: any;

 
  locale:Locale[]=[] ;

  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, private router: Router, 
    private LService: LocaleService,private SService: SeanceService) { }


  ngOnInit(): void {
  
    this.id = this.activateRouter.snapshot.paramMap.get("id");
   

  }

  add(seance: any) {
console.log('se',seance);

      this.SService.addSeance(seance).subscribe(
        () => {
          console.log('Seance add');
          this.router.navigate(['Seances']);

        }
      )


    }
  
  }


