import { Component, Inject, LOCALE_ID, OnInit, } from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';

@Component({
   selector: 'app-first-component',
   templateUrl: './first-component.component.html',
   styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
   constructor(
      private dataSource: DataSourceService,
      @Inject(LOCALE_ID) private locale: string
   ) { }

   programmingLanguages: string[] = [];

   ngOnInit(): void {
      console.log(this.locale);


      // // this.programmingLanguages = this.dataSource.getProgrammingLanguages();

      // // Number
      // var num1: number;
      // var num2 = 88;
      // num1 = 2;

      // console.log('num1:', num1);
      // console.log('num2:', num2);
      // console.log('sum:', num1 + num2);
      // console.log('product:', num1 * num2);


      // // String 
      // var appName: string = "My Awesome Application";
      // var exclamationMarks: string = "!!!";

      // console.log(appName + exclamationMarks); // My Awesome Application!!!
      // console.log(appName, exclamationMarks); // My Awesome Application !!!

      // console.log("My", "Awesome", "Application", "!!!"); // My Awesome Application !!!
      // console.log("My" + "Awesome" + "Application" + "!!!"); // MyAwesomeApplication!!!

      // var numAsString: string = num2.toString();

      // console.log(typeof numAsString);
      // console.log(typeof num1);

      // var person: { name: string, age: number, address: string } = { name: 'Jordan', age: 10, address: 'Accra' };
      // console.log(typeof person);


      // // Boolean - true/false
      // let isNumberGreater: boolean;
      // isNumberGreater = num2 > 100 ? true : false;
      // console.log(isNumberGreater);


      // // Void
      // function findEvenNumber(numberToCheck: number): boolean {
      //    return numberToCheck % 2 === 0;
      // }

      // console.log('45:', findEvenNumber(45));
      // console.log('40:', findEvenNumber(40));

      // function doubleNumber(num: number): number {
      //    return num + num;
      // }

      // console.log('Doubled:', doubleNumber(2));


      // // Null - unknown/undefined
      // var someVariable: null = null;
      // console.log(someVariable);


      // let almightyVariable: string | number | boolean | null = null;

      // almightyVariable = 30;
      // almightyVariable = 'London';
      // almightyVariable = true;


      // let googleSearchResult: SearchResult = {
      //    id: 1,
      //    title: 'Hello World',
      //    content: 'Hello World! In Computer Science 101, the first program many students create is a simple one that outputs an iconic line of text: "Hello World!',
      //    url: 'https://code.org/helloworld'
      // };

      // console.log(googleSearchResult);

   }


}
