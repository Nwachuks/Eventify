import { Injectable } from '@angular/core';
import { ISession } from '../event.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  deleteVoter(session: ISession, voterName: string) {
    // Filter out concerned voter
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: ISession, voterName: string) {
    // Check if name is in list of voters
    return session.voters.some(voter => voter === voterName);
  }
}
