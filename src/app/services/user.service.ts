import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/app/model';

const apiUrl='http://localhost:5000'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>('${apiUrl}/users');
  }

  register(user: User) {
    console.log("user:::::::",user)
      return this.http.post('http://localhost:5000/users/register', user);
  }

  delete(id: number) {
      return this.http.delete('${apiUrl}/users/${id}');
  }
}
