import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})

export class DataSourceService {
   private programmingLangs: string[] = [
      'Java',
      'C++',
      'Python',
      'PHP',
      'Ruby'
   ]

   getProgrammingLanguages(): string[] {
      return this.programmingLangs;
   }

   addProgramingLanguage(programmingLanguage: string) {
      this.programmingLangs.push(programmingLanguage);
   }

}
