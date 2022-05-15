import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditclientComponent } from '../editclient/editclient.component';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-gerer-client',
  templateUrl: './gerer-client.component.html',
  styles: [
  ]
})
export class GererClientComponent implements OnInit {client:any
  Ref!: NgbModalRef;
  constructor(private activateRouter: ActivatedRoute, private router: Router,
    public clientService: ClientService,
    public fb:FormBuilder,
    private modalService: NgbModal,
    
    ) { }

  ngOnInit(): void {
    

    this.getAllClients();


  }
  displayClient(id: any) {
    this.router.navigate([`displayClient/${id}`]);
  }
  deleteClient(id: any) {
    this.clientService.deleteClient(id).subscribe(
      () => {
        console.log('client delete');
        this.getAllClients();
      });
  }
  editClient(userModel: any) {
   
    this.Ref= this.modalService.open(EditclientComponent, { centered: true });
   this.Ref.componentInstance.selectedUser = userModel;
  
    this.Ref.result.then((yes) => {
      console.log("Yes Click");
  
     // this.setUsersList();
     this.getAllClients();
    },
      (cancel) => {
        console.log("Cancel Click");
  
      })
  }
  getAllClients() {
    this.clientService.getAllClients().subscribe(
      (data:any) => {
        this.client = data;
      }
    );
  }
  addclient(){
    this.router.navigate(['addclient']);
  }

}
