import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../../services/data-source.service';
import { ActivatedRoute } from '@angular/router';
import { SearchResult } from 'src/app/interfaces/search-result.interface';

@Component({
   selector: 'app-second-component',
   templateUrl: './second-component.component.html',
   styleUrls: ['./second-component.component.css']
})
export class SecondComponent implements OnInit {
   constructor(
      private dataSource: DataSourceService,
      private ar: ActivatedRoute
   ) { }

   // programmingLanguages: string[] = [];

   searchString: any = {
      id: 0,
      title: '',
      content: '',
      url: ''
   };

   ngOnInit(): void {
      // this.dataSource.addProgramingLanguage('JavaScript');
      // this.programmingLanguages = this.dataSource.getProgrammingLanguages();

      this.ar.queryParams.subscribe(params => {
         this.searchString = params
      })
   }

}
