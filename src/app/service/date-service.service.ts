import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';  
import { Observable,of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {
  uri = 'localhost:8080/api/v1/weekday';
   
  constructor(private http :HttpClient ) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'json'
  });
  let options = {headers:headers};
   }

   getData() {
    return this.http.get(this.uri);
  }
  updateData(data) {   
    return this.http.patch(this.uri,data);
  }

}
