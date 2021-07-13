import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
 
  formData: Student;
  list: Student[];

  constructor(private http:HttpClient) { }


  public baseUrl = " http://localhost:3000/posts"

  addData(data:any){
   
     return this.http.post<any>(this.baseUrl, data)
  .pipe( map ((res :any) =>{
 return res;
  }))
  }
  

getAll(){
  return this.http.get(this.baseUrl);
}

getDataById(id){
  
  return this.http.get<any>(`${this.baseUrl}/${id}`);
}

deleteStudent(id:any){
 
  return this.http.delete<any>( this.baseUrl+ '/' + id);
}

updateData(id,formData){
  return this.http.put<any>(`${this.baseUrl}/${id}`, formData);
}




}
