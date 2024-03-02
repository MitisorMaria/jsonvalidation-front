import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http: HttpClient) { }

  validateJSON(data: any) {
    let apiurl = 'http://localhost:8080/jsonvalidator/validate/?schemaName=' + data.schemaName;
    //alert("Received: schemaName: " + data.schemaName + " jsonObject: " + data.jsonObject + " schemaFile: " + data.schemaFile);
    var fd = new FormData();
    fd.append('jsonObject', data.jsonObject);
    fd.append('schemaFile', data.schemaFile);
    alert(fd.get('jsonObject') + "====" + fd.get('schemaFile'));
    return this.http.post(apiurl, fd);
  }
}