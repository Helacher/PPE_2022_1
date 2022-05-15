import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {
  selectedUser: any;
  editForm!: FormGroup;
  isLoading = false;

  constructor(private activateRouter: ActivatedRoute, private router: Router,
    public modal: NgbActiveModal,
    public clientService: ClientService,
    public fb:FormBuilder,
  ) { }
 
  ngOnInit(): void {
  
    this.setForm()
  }
  onSubmit() {
 
    this.isLoading = true;
    this.clientService.editClient(this.editForm.value).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }
 
  get editFormData() { return this.editForm.controls; }
 
  private setForm() {
    console.log(this.selectedUser);
     
    this.editForm = this.fb.group({
      id: [this.selectedUser.id],
     
      cin: [this.selectedUser.cin],
      permis: [this.selectedUser.permis],
      photo: [],
      numtel:[this.selectedUser.numtel],
      username: [this.selectedUser.username],
      firstname:[this.selectedUser.firstname],
      lastname:[this.selectedUser.lastname],
      password:[this.selectedUser.password],
      email:[this.selectedUser.email]
    });
  }
}
