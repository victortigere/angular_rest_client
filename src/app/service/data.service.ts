import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Clients } from '../clients';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  // get data from server
  getData(){
    return this.httpClient.get('http://127.0.0.1:9000/clients');
  }

  // save client
  saveClient(data: Clients){
    return this.httpClient.post('http://localhost:9000/saveclient', data);
  }

  // delete client
  deleteClient(id:any){
    return this.httpClient.delete('http://localhost:9000/delete/client/'+id);
  }

  // getclientData
  getClientData(id:any){
    return this.httpClient.get('http://localhost:9000/client/'+id);
  }

   // save client
   updateClient(data:any){
    return this.httpClient.put('http://localhost:9000/updateclient', data);
  }
}
