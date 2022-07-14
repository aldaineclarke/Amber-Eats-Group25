import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, finalize, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }
  loadingSubject$ = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject$.asObservable();


  showLoaderUntilLoaded<Type>(obs$:Observable<Type>):Observable<Type>{
    return of(null).pipe(
      tap(()=> this.loadingOn()),
      concatMap(()=> obs$),
      finalize(()=> this.loadingOff())
    )
  }
  loadingOn(){
    this.loadingSubject$.next(true);
  }
  loadingOff(){
    setTimeout(()=> this.loadingSubject$.next(false), 2000);
  }
}
