import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private messageService: MessageService) { }

  getGuid(): Observable<string> {
    return of('test');
  }

  private log(message: string) {
    this.messageService.add(`UtilitiesService: ${message}`);
  }
}
