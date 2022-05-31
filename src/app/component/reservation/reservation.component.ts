import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/commun/client';
import { Locale } from 'src/app/commun/locale';
import { Seance } from 'src/app/commun/seance';
import { ClientService } from 'src/app/service/client.service';
import { LocaleService } from 'src/app/service/locale.service';
import { ReservationService } from 'src/app/service/reservation.service';
import { SeanceService } from 'src/app/service/seance.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservation: any = {};
  id: any;
 seance:Seance[]=[];
 locale:Locale[]=[];
  client:Client[]=[] ;

  constructor( private activateRouter: ActivatedRoute, private router: Router, 
    private LService: LocaleService,private cService: ClientService,
    private rService: ReservationService,private SService: SeanceService) { }
  ngOnInit(): void {
  
    this.getAllRes();



  }
  getAllRes() {
    this.id=this.activateRouter.snapshot.paramMap.get("id");
    this.rService.getAllRes().subscribe(
      (data) => {
        this.reservation = data;
      }
    );
   
  }
  addReservation(){
    this.router.navigate(['addReservation']);
   }

}
