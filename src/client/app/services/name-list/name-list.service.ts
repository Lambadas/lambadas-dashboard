import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/operator/filter';


@Injectable()
export class NameListService {

  cacheData: any;

  constructor(private http: Http) {
  }


  get(): Observable<string[]> {
    return this.http.get('/assets/data.json')
      .filter(item=> item!=null)
      .retry(2)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getRemoteHttpCall(): Observable<string[]> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
      .map((res: Response)=>this.cacheData = res.json())
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getFakeServiceData(id: Number): Observable<string[]> {

    return this.http.delete('/test')
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Handle HTTP error
   */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
