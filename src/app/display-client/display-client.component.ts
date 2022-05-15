import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-display-client',
  templateUrl: './display-client.component.html',
  styleUrls: ['./display-client.component.css']
})
export class DisplayClientComponent implements OnInit {
  id:any;
  client:any;
  constructor(private activateRouter: ActivatedRoute,public clientService: ClientService) { }

  ngOnInit(): void {
    this.id=this.activateRouter.snapshot.paramMap.get("id"); 
  this.clientService.getClientById(this.id).subscribe(
   (data:any)=>{
     this.client=data;
   } 
  );

  }
  

}
