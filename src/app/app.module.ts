import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { AddclientComponent } from './addclient/addclient.component';
import { HttpClientModule} from "@angular/common/http";
import { MainComponent } from './main/main.component';
import { GererClientComponent } from './gerer-client/gerer-client.component';
import { GererVehiculeComponent } from './gerer-vehicule/gerer-vehicule.component';
import { HistoriqueComponent } from './historique/historique.component';
import { DisplayClientComponent } from './display-client/display-client.component';
import { EditclientComponent } from './editclient/editclient.component';
import { AddvehiculeComponent } from './addvehicule/addvehicule.component';
import { DisplayVehiculeComponent } from './display-vehicule/display-vehicule.component';
import { EditvehiculeComponent } from './editvehicule/editvehicule.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    AddclientComponent,
    MainComponent,
    GererClientComponent,
    GererVehiculeComponent,
    HistoriqueComponent,
    DisplayClientComponent,
    EditclientComponent,
    AddvehiculeComponent,
    DisplayVehiculeComponent,
    EditvehiculeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
