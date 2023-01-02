import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyCoffeeApp';

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(){
    
    if((navigator as any).standalone == false) {
       // this is an iOs device and we are in browser
       this.snackBar.open("You can add this PWA to home screen","",{ duration: 3000 });
    }

    if((navigator as any).standalone == undefined) {
       // its is not an Ios 
       if( window.matchMedia("display-mode: browser").matches){
        // we in the browser
        window.addEventListener("beforeinstallprompt", event => {
          event.preventDefault();
           const sb = this.snackBar.open("Do you want to install this App?", "Install",{duration: 5000});
           sb.onAction().subscribe (
             () => {
              (event as any).prompt();
              (event as any).userChoice.then( (result: any)=> {
                if(result.outcome =="dismissed") {
                  // TODO : track no installation
                }else {
                  // TODO : It was installed
                }
              })
             }
           )
          return false;
        });
       }
    }

  }
}
