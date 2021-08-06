import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	 ed;
	formdata;
		
		
	ngOnInit() {     
      this.formdata = new FormGroup({
		  
         emailid: new FormControl("angular@gmail.com"),
         passwd: new FormControl("abcd1234")
		 
      });
   }
   onClickSubmit(data) {
   this.ed = data.emailid;
   }
}
