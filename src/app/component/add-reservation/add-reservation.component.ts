import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/commun/client';
import { Locale } from 'src/app/commun/locale';
import { Seance } from 'src/app/commun/seance';
import { ClientService } from 'src/app/service/client.service';
import { LocaleService } from 'src/app/service/locale.service';
import { ReservationService } from 'src/app/service/reservation.service';
import { SeanceService } from 'src/app/service/seance.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  reservation: any = {};
  id: any;
 seance:Seance[]=[];
 locale:Locale[]=[];
  client:Client[]=[] ;

  constructor( private activateRouter: ActivatedRoute, private router: Router, 
    private LService: LocaleService,private cService: ClientService,
    private rService: ReservationService,private SService: SeanceService) { }
  ngOnInit(): void {
  
    this.id = this.activateRouter.snapshot.paramMap.get("id");
    this.LService.getAllLocalees().subscribe(
      (data1:any) => {
        this.locale = data1;
      }
    );
    this.cService.getAllClients().subscribe(
      (data2:any) => {
        this.client = data2;
      }
    );
    this.SService.getAllSeance().subscribe(
      (data3:any) => {
        this.seance = data3;
      }
    );
  }

  add(reservation: any) {
console.log('reservation',reservation);

      this.rService.addRes(reservation).subscribe(
        () => {
          console.log('Res add');
          this.router.navigate(['Reservations']);

        }
      )


    }
  
  }


