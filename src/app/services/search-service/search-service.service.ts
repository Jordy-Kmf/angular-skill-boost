import { Injectable } from '@angular/core';
import { SEARCH_RESULTS } from '../sample-data/search-results';

@Injectable({
   providedIn: 'root'
})
export class SearchService {
   constructor() { }

   // data source
   // data methods - get, delete, add
   // network methods

   get allSearchResults() {
      return SEARCH_RESULTS;
   }

}
