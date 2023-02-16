import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { switchMap } from "rxjs";
import { AttendeesService } from "../api/attendees.service";
import { IAttendee } from "../model/attendees.vo";

interface AttendeesState {
    attendees: IAttendee[];
    error?: any;
}

@Injectable()
export class AttendeesStore extends ComponentStore<AttendeesState> {

    readonly attendees$ = this.select(state => state.attendees, { debounce: true });

    readonly error$ = this.select(state => state.error, { debounce: true });

    readonly vm$ = this.select(
        this.attendees$,
        this.error$,
        (attendees, error) => ({ attendees, error })
    );

    readonly setAttendees = this.updater((state, attendees: IAttendee[]) => ({
        ...state,
        attendees
    }));

    readonly addAttendee = this.updater((state, attendee: IAttendee) => ({
        ...state,
        attendees: [...state.attendees, attendee]
    }));

    readonly removeAttendee = this.updater((state, attendee: IAttendee) => ({
        ...state,
        attendees: [...state.attendees.filter(a => a.id !== attendee.id)]
    }));

    readonly updateAttendee = this.updater((state, attendee: Partial<IAttendee>) => ({
        ...state,
        attendees: [...state.attendees.map(a => {
            if (a.id === attendee.id) return { ...a, ...attendee };
            return a;
        })]
    }))

    readonly getAttendees = this.effect($ => $.pipe(
        switchMap(_ => this.service.getAttendees().pipe(
            tapResponse(
                attendees => {
                    this.setAttendees(attendees);
                },
                error => {
                    this.patchState({ error });
                }
            )
        ))
    ))
    constructor(private service: AttendeesService) {
        super({
            attendees: []
        });
    }
}