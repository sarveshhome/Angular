import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {City  } from './City';
import { Area } from './Area';
import {ItemData} from './ItemData';
@Injectable()
export class CityService {
    constructor(private http: Http) { }
    getCityAPI():Observable<City[]>
    {
      return this.http.get('api/languageAPI').map(res => res.json()).catch(this.handleError);
    }
    getCity(){
      return [
        new City(1,"Delhi"),
        new City(2,"Jaipur"),
        new City(3,"Goa")
      ];
    }
    getArea(){return [
         new Area(1,1,"Pashim vihar"),
         new Area(2,1,"Rohin"),
         new Area(3,1,"North Delhi"),
         new Area(4,1,"South Delhi"),
         new Area(5,1,"East Delhi"),
         new Area(6,2,"Jaipur South"),
         new Area(7,2,"Jaipur West"),
         new Area(8,3,"Goa East")
    ];
  }
    getItem()
    {
      return [new ItemData(1,1,1,"pani puri"),
       new ItemData(2,1,3,"Gol gape"),
       new ItemData(3,2,6,"DhalMakni")
      ];
    }
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
  }

