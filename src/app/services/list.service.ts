import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getTeams(){
    return this.httpClient.get(`${environment.apiRest}getTeams`)
  }
}
