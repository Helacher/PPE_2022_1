import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styles: [
  ]
})
export class AddclientComponent implements OnInit {

  public imagePath:any;
  imgURL:any;
  userFile:any;
  clients: any;
  client: any = {};
  id: any;
  addclientForm!: FormGroup ;
  title: string = "Add client";
  formdata=new FormData();

  constructor(private fb: FormBuilder, private activateRouter: ActivatedRoute, 
    private router: Router, public clientService: ClientService) { }
get f(){return this.clientService.addclientForm.controls;}

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.paramMap.get("id");
    console.log(this.id);
    
  


    this.clientService.addclientForm = this.fb.group({
      id: [''],
      cin: [''],
      permis: [''],
      photo: [],
      numtel:[''],
      username: [''],
      firstname:[''],
      lastname:[''],
      password:[''],
      email:['']
    
    })
  }

  add() {

    

    
      const formdata=new FormData();
      const client=this.clientService.addclientForm.value;
      formdata.append('client',JSON.stringify(client));
      formdata.append('file',this.userFile);
      this.clientService.addClient(formdata).subscribe(
        () => {
          console.log('client add');
          this.router.navigate(['clients']);

        }
      )


    
  }
  onSelectFile(event:any) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
     
      
    }
}
