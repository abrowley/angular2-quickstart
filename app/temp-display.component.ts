import { Component } from '@angular/core';
@Component({
    selector: 'temp-display',
    templateUrl: 'app/temp-display.component.html'
})
export class TempDisplay {
    title = 'Temperature Display Component';
    temperature = 100.0;
}