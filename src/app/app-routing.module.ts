import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AddclientComponent } from './addclient/addclient.component';
import { MainComponent } from './main/main.component';
import { RouterModule,Routes } from '@angular/router';
import { GererClientComponent } from './gerer-client/gerer-client.component';
import { GererVehiculeComponent } from './gerer-vehicule/gerer-vehicule.component';
import { HistoriqueComponent } from './historique/historique.component';
import { DisplayClientComponent } from './display-client/display-client.component';
import { AddvehiculeComponent } from './addvehicule/addvehicule.component';
import { DisplayVehiculeComponent } from './display-vehicule/display-vehicule.component';
import { VilleComponent } from './component/ville/ville.component';
import { AddVilleComponent } from './component/add-ville/add-ville.component';
import { AddLocaleComponent } from './component/add-locale/add-locale.component';
import { LocaleComponent } from './component/locale/locale.component';
import { AddSeanceComponent } from './component/add-seance/add-seance.component';
import { SeanceComponent } from './component/seance/seance.component';
import { AddReservationComponent } from './component/add-reservation/add-reservation.component';
import { ReservationComponent } from './component/reservation/reservation.component';


const routes : Routes = [
  {path: '', component: MainComponent,children :[  
  {path: 'dashboard', component: DashboardComponent  },
  {path: 'profile', component: ProfileComponent },
  {path: 'addclient',component:  AddclientComponent },
  {path: 'clients',component: GererClientComponent},
  {path: 'vehicules',component: GererVehiculeComponent},
  {path: 'historique',component: HistoriqueComponent},
  {path: 'editClient/:id',component: AddclientComponent},
  {path: 'displayClient/:id',component: DisplayClientComponent},
  {path: 'addvehicule',component: AddvehiculeComponent },
  {path: 'editVehicule/:id',component: AddvehiculeComponent},
  {path: 'displayVehicule/:id',component: DisplayVehiculeComponent},
  {path: 'Villes',component:VilleComponent},
  {path: 'addVille',component:  AddVilleComponent },
  {path: 'addLocale',component:  AddLocaleComponent },
  {path: 'Locales',component: LocaleComponent },
  {path: 'addSeance',component:  AddSeanceComponent },
  {path: 'Seances',component: SeanceComponent },
  {path: 'addReservation',component:  AddReservationComponent },
  
  {path: 'Reservations',component:  ReservationComponent },

]},

 
];



  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }