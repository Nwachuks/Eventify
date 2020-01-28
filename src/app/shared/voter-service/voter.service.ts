import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISession } from '../event.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    // Update client-side
    // Filter out concerned voter
    session.voters = session.voters.filter(voter => voter !== voterName);

    // Update server-side
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url).pipe(catchError(this.handleError('deleteVoter'))).subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    // Update client-side
    session.voters.push(voterName);

    // Update server-side
    const options = { headers: new HttpHeaders({'Content-Type': '/application/json'})};
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, {}, options).pipe(catchError(this.handleError('addVoter'))).subscribe();

  }

  userHasVoted(session: ISession, voterName: string) {
    // Check if name is in list of voters
    return session.voters.some(voter => voter === voterName);
  }

   // Handle errors from the server
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
