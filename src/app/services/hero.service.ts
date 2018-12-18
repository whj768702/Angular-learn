import {Injectable} from '@angular/core';

import {Hero} from '../hero';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class HeroService {
  private heroesUrl = 'api';

  constructor(
    private http: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesUrl}/name`)
      .pipe(
        map(result => {
          return (result as any).data;
        })
      );
  }

  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]),
        tap(h => {
          const outcome = h ? 'fetched' : 'did not found';
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  getHero(id: number): Observable<Hero> {
    if (!id) {
      return;
    }
    const url = `${this.heroesUrl}/name/${id}`;
    return this.http.get<Hero>(url).pipe(
      map(result => {
        if ((result as any).status) {
          return (result as any).data;
        } else {
          return [];
        }
      }),
      tap(() => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/name/?keyword=${term}`).pipe(
      map(result => {
        return (result as any).data;
      }),
      tap(() => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    if (hero) {
      const temp = hero;
    }
    return this.http.post<Hero>(`${this.heroesUrl}/addHero`, hero, httpOptions).pipe(
      map(result => {
        if ((result as any).status) {
          return (result as any).data;
        }
      }),
      tap((temp: Hero) => this.log(`added hero w/ id=${temp.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(() => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    const id = hero.id;
    return this.http.put(`${this.heroesUrl}/update/${id}`, hero, httpOptions).pipe(
      tap(() => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  // getHeroes(): Promise<Hero[]>{
  //     return this.http.get(this.heroesUrl)
  //                .toPromise()
  //                .then(response => response.json().data as Hero[])
  //                .catch(this.handleError);
  // }

  // getHero(id: number): Promise<Hero>{
  //     return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  // }

  // update(hero: Hero): Promise<Hero> {
  //     const url = `${this.heroesUrl}/${hero.id}`;
  //     return this.http
  //         .put(url, JSON.stringify(hero), {headers: this.headers})
  //         .toPromise()
  //         .then(() => hero)
  //         .catch(this.handleError);
  // }
  //
  // create(name: string): Promise<Hero> {
  //     return this.http
  //         .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
  //         .toPromise()
  //         .then(res => res.json().data)
  //         .catch(this.handleError);
  // }
  //
  // delete(id: number): Promise<void> {
  //     const url = `${this.heroesUrl}/${id}`;
  //     return this.http.delete(url, {headers: this.headers})
  //         .toPromise()
  //         .then(() => null)
  //         .catch(this.handleError);
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + error);
      return of(result as T);
    };
  }

  private log(message: string) {
    // this.messageService.add('HeroService:' + message);
    console.log(message);
  }

  // private handleError(error: any): Promise<any> {
  //     console.error('An error occurred', error); // for demo purposes only
  //     return Promise.reject(error.message || error);
  // }
}
