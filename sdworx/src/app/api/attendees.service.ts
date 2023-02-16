import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAttendee } from "../model/attendees.vo";

@Injectable({
    providedIn: 'root'
})
export class AttendeesService {

    private readonly API_URL = 'https://63998da716b0fdad77409a5e.mockapi.io/api/v1/';

    constructor(private httpClient: HttpClient) { }

    getAttendees(): Observable<IAttendee[]> {
        return this.httpClient.get<IAttendee[]>(this.API_URL + 'hikers');
    }
}