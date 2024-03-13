import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
   const isUserAllowed: boolean = true;

   if (isUserAllowed) {
      return true
   } else {
      console.log('You are not allowed');
      return false; // or a path eg. /not-allowed 
   }
};
