import { Component, Inject, Injector, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../services/search-service/search-service.service';
import { SearchResult } from '../interfaces/search-result.interface';

@Component({
   selector: 'app-home-page',
   templateUrl: './home-page.component.html',
   styleUrls: ['./home-page.component.css'],
   // providers: [SearchService, ]
})
export class HomePageComponent implements OnInit {
   // @Inject(SearchService)
   searchService!: SearchService;

   searchForm!: FormGroup;
   carBrands: { brand: string, inStock: boolean }[] = [
      {
         brand: 'BMW', inStock: false
      },
      {
         brand: 'Toyota', inStock: true
      },
      {
         brand: 'VW', inStock: false
      },
      {
         brand: 'Tesla', inStock: true
      },
      {
         brand: 'Ford', inStock: true
      }
   ]
   @Output() cancel_label: string = 'Cancel'
   @Output() search_label: string = 'Search'

   searchResultsFromService: SearchResult[] = [];

   constructor(
      private fb: FormBuilder,
      private injector: Injector
      // private searchService: SearchService
   ) {
      this.searchService = this.injector.get(SearchService);
   }

   ngOnInit(): void {
      this.searchResultsFromService = this.searchService.allSearchResults;
      console.log(this.searchResultsFromService);

      this.searchForm = this.fb.group({
         searchTerm: ['']
      });
   }

   search(): void {
      const searchTerm = this.searchForm.get('searchTerm')?.value;
      if (searchTerm !== null && searchTerm !== undefined) {
         console.log('Searching for:', searchTerm);
      } else {
         return
      }
   }

   cancel(): void {
      this.searchForm.reset();
      console.log('Search cancelled');
   }
}
