
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  
  @Injectable({
    providedIn: 'root',
  })
  export class ApiService {
    public url = 'https://calm-anchorage-20290.herokuapp.com';
  
    constructor(private http: HttpClient) {}
  
    getItens(): Observable<any> {
      return this.http.get(this.url + 'api/v1/bills');
    }

    deleteItens(): Observable<any>{
        return this.http.delete(this.url+ 'api/v1/bills/{id}')
    }

    // postItens(): Observable<any>{
    //     return this.http.post(this.url+'api/v1/bills')
    // }

  }