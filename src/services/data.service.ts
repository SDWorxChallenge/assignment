import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Person } from "../models/person";

@Injectable({ providedIn: "root" })
export class DataService {
  constructor(private readonly httpClient: HttpClient) {}
  getData(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(
      "https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers"
    );
  }
}
