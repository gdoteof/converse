import { Component, OnInit, ViewChild, AfterViewInit } from 'angular2/core';

declare var MediumEditor: any; //ugh...

@Component({
   selector: 'a2yper',
   template: `
     <div id="theOut" class="editable"></div>
   `
   ,
   styles: [
   ],
   directives: [],
})


export class A2yper{
  editor: any; //I wish it were an Editor

  @ViewChild('theIn') theIn;

  constructor(){
  }

  ngOnInit() {
 }

 ngAfterViewInit(){
     this.editor = new MediumEditor('.editable'); 
     console.log("we constructed?");
 }

 processBlur(e){
   //We do this because the blur event resolved AFTER we process it
 }

 processChange(e){
 }

}
