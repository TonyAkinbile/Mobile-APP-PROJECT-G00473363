import { Injectable } from '@angular/core';

export type Units = 'metric' | 'us';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    private key = 'units';

    getUnits(): Units {
        return (localStorage.getItem(this.key) as Units) || 'metric';
    }

    setUnits(units: Units) {
        localStorage.setItem(this.key, units);
    }
}