import { LoginPage } from '../pages/login/login';
import { Injectable } from '@angular/core';
import { NavParams,AlertController,LoadingController,MenuController,ToastController} from 'ionic-angular';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SetupService {
      public requestoptions: RequestOptions;
      public basePath: string;      
    
      constructor(public http: Http,) {   
        this.http = http;    
        this.extarsOnLoad();
      }

       public extarsOnLoad() { 
         this.basePath = "http://103.201.142.41:5000";       
        }
      
     
       public PostRequestUnautorized(url: string, data: any): any {              
           let headers = new Headers();
           headers.append("Content-Type", "application/json");
           let requestoptions = new RequestOptions({
               method: RequestMethod.Post,
               url: url,
               headers: headers,
               body: JSON.stringify(data)
           });

           return this.http.request(new Request(requestoptions))
           .map((res: Response) => {
               return [{ status: res.status, json: res.json() }]
           })
           .catch((error: any) => {
               return Observable.throw(error);
           });
         }

        public PostRequest(url: string, data: any, flag?: any): any {
            var TOKEN=localStorage.getItem('token');
             let headers;
            headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("authorization","jwt "+TOKEN);
            this.requestoptions = new RequestOptions({
                method: RequestMethod.Post,
                url: url,
                headers: headers,
                body: JSON.stringify(data)
            })

            return this.http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                if(res.status==200){
                   return [{ status: res.status, json: res }]
                }
            })
            .catch((error: any) => {
                if(error.status == 401){
                    localStorage.clear();
                    
                  //  this.navCtrl.setRoot(LoginPage);
                }
                return Observable.throw(error);
            });
        }



        public GetRequest(url: string): any {          
           return this.http.request(new Request(this.getRequsetOptions(url)))
          .map((res: Response) => {
              let jsonObj: any;
              if (res.status === 204) {
                  jsonObj = null;
              }
              else {
                  jsonObj = res.json()
              }
              return [{ status: res.status, json: jsonObj }]
          })
          .catch(error => {
                 if (error.status == 0)                  
                 return Observable.throw(error);
          });
    }

   

     public getRequsetOptions(url: string): RequestOptions {
       
        let headers= new Headers();
        headers.append("Content-Type", "application/json");        
        let requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: url,
            headers: headers
        });
        return requestoptions;
    }


     // Console Function
    consoleFun(a?, b?, c?, d?, f?, g?): void {
        // console.log(a, b, c, d, f, g);
    }
        
    }


