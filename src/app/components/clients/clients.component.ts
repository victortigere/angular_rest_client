import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Clients } from 'src/app/clients';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:any;
  client = new Clients();

  constructor(private dataService:DataService, private toastr: ToastrService) {

   }

  ngOnInit(): void {
    this.getClientsData();
  }

  getClientsData(){
    this.dataService.getData().subscribe(res => {
          this.clients = res;
    })
  }

  saveClient(){
    this.dataService.saveClient(this.client).subscribe(res => {
      this.client.name = "";
      this.client.surname = "";
      this.client.email = "";
      this.client.mobileNumber = "";
      this.getClientsData();
      this.toastr.success('Client saved successfully', 'Raven Chevre');
    })
  }

  deleteClient(id:any){
    this.dataService.deleteClient(id).subscribe(res => {
      this.getClientsData();
      this.toastr.success('Client deleted successfully', 'Raven Chevre');
    })
  }

}
