import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{


    constructor(public http:Http){

    }

    getUsers(){
        return this.http.get('/users')
            .map(res => res.json());
    }

    addUser(user){
        return this.http.post('/users', user)
            .map(res => res.json());
    }

    deleteUser(id){
        return this.http.delete('/users/'+id)
            .map(res => res.json());
    }

    updateUser(user){
        return this.http.put('/users/'+user.id, user)
            .map(res => res.json());
    }

}
