import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
   selector: 'app-search-button',
   templateUrl: './search-button.component.html',
   styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent {
   @Input() label: string = '';
   @Output() click: EventEmitter<void> = new EventEmitter<void>()
}
