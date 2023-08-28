import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked {
  title = 'aReactiveform';
  myForm: FormGroup;
    angular="";
    interval : any;


    constructor(private fb: FormBuilder) {
      this.myForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      });
    }
  
    onSubmit() {
      if (this.myForm.valid) {
        const formData = this.myForm.value;
        console.log(formData);
      } else {
        alert('Please enter proper details')
      }
    }
  
    ngOnChanges(): void {
  
      console.log('ngOnChanges function is called');
    }

    ngOnInit(): void {

      console.log('ngOnInit function is called');
      this.angular="parent component";//When the angular component is intiliazes onit() will be intiloazed
  
    }

    ngAfterViewInit(): void {
  
      console.log('ngAfterViewInit function is called');
  
    }
    ngAfterViewChecked(): void {
  
      console.log('ngAfterViewChecked function is called');
  
    }

    ngOnDestroy(): void {
  
      clearInterval(this.interval);
      console.log('ngOnDestroy function is called');
  
    }
  
    ngDoCheck():void
    {
  
      console.log("ngDocheck is called");
  
    }

 
}
