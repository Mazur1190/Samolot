
export class Cart {

    constructor(){
        this.key = 'IT_SPAA_CART';

      //  cookieStore.addEventListener('change', (event) => console.log(event)); // w konsoli wywali jakie zmiany dokonaly sie w cookiesach uzywa sie w innych plikach
    }

    cookie(){
        // przed: ' key1=val1; key2=valv2; ...'
        const cookies = document.cookie.split(';');
        // po: [ key1=val1, key2=valv2, ... ]  
        const itSpaCookie = this.cookies.find(cookie => cookies.startsWith(this.key)); 
        //po: 'IT_SPA_CART = watosc' lub undefined
        return itSpaCookie;
    }

    exists() {
        return this.cookie() !== undefined
    }

    get() {
        if(this.exists()){
                // 'IT_SPA_CART=wartosc'
        const itSpaCookie = this.cookie(); // co dostalem? => 'IT_SPA_CART=[1,2,3]' ( jest to ciag znakow!)
        const cookieValue = itSpaCookie.split('=')[1];  // co dostalem? => ['IT_SPA_CART', '[1,2,3]'] ( są to ciagi znakow!)

        // watosc cookie scaigana jest jako ciag znakow a nie jako tablica wiec uzywamy metody JSON.parse
        const parsedValue = JSON.parse(cookieValue);  // co dostalem? => wartosc ([1,2,3])

        return parsedValue;
        }else {
            this.set([]);
        }
        
    }

    set(value) {
        const stringifiedValue = JSON.stringify(value);
        document.cookie = `${this.key}=${stringifiedValue}`;

    }
    // jezeli cooki nie istnieje to swtow pusty cookie
    empty(){
        this.set([]);
    }
}





// export class Cart {

//     constructor() {
//       this.key = 'IT_SPA_CART';
//     }
  
//     cookie() {
//       // PRZED: 'key1=val1; key2=val2; . . .'
//       const cookies = document.cookie.split(';');
//       // PO: ['key1=val1', 'key2=val2', . . .]
//       const itSpaCookie = cookies.find(cookie => cookie.startsWith(this.key));
//       // PO: 'IT_SPA_CART=wartosc' LUB undefined
//       return itSpaCookie;
//     }
  
//     exists() {
//       return this.cookie() !== undefined;
//     }
  
//     get() {
//       if (this.exists()) {
//         // 'IT_SPA_CART=wartosc'
//         const itSpaCookie = this.cookie(); // 'IT_SPA_CART=[1,2,2]'
//         const cookieValue = itSpaCookie.split('=')[1]; // ['IT_SPA_CART', '[1,2,2]']
//         const parsedValue = JSON.parse(cookieValue); // wartosc
  
//         return parsedValue;
//       } else {
//         this.set([]);
//       }
//     }
  
//     set(value) {
//       const stringifiedValue = JSON.stringify(value);
//       document.cookie = `${this.key}=${stringifiedValue}`;
//     }
  
//     empty() {
//       this.set([]);
//     }
//   }
  
  