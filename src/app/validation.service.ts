import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http: HttpClient) { }

  validateJSON(data: any) {
    let apiurl = 'http://localhost:8080/validate/?schemaName=' + data.schemaName;
    var fd = new FormData();
    fd.append('jsonObject', data.jsonObject);
    fd.append('schemaFile', data.schemaFile);
    return this.http.post(apiurl, fd);
  }
}