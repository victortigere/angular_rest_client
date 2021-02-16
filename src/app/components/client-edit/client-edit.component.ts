import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Clients } from 'src/app/clients';
import { DataService } from 'src/app/service/data.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  id:any;
  data:any;
  client = new Clients();

  constructor(private route:ActivatedRoute, private dataservice:DataService,
     private toastr: ToastrService) { }

  ngOnInit(): void { 
    this.id = this.route.snapshot.params.id;
    this.getClientData();
  }

  getClientData(){
    this.dataservice.getClientData(this.id).subscribe(res=> {
      console.log(res);
      this.data = res;
      this.client =  this.data;
    })
  }

  updateClient(){
    this.dataservice.updateClient(this.client).subscribe(res =>{   
      this.client.name = "";
      this.client.surname = "";
      this.client.email = "";
      this.client.mobileNumber = "";
      this.id = "";
      this.getClientData();
      this.toastr.success('Client updated successfully', 'Raven Chevre');
    })
  }

}
