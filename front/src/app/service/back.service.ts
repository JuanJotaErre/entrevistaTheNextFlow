import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Back {
  private readonly PATH = "http://localhost:8080/string/concatenar?a={primeraString}&b={segonaString}"

  constructor(private httpService: HttpClient) {
  }

  public concatenar(primeraString: string, segonaString: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const path = this.PATH.replace('{primeraString}', primeraString).replace('{segonaString}', segonaString)
    return this.httpService.get(path, { headers, responseType: 'text'})
  }


}
