import { Component } from '@angular/core';

// Decorators must be above function 
function log(target, name, descriptor) {
  console.log(target, name, descriptor);
  // store original function in a variable
  const original = descriptor.value;
  // original();

  // do some manipulations with descriptor.value
  // descriptor.value = function () {
  //   console.log("This function was hacked!");
  // }
  descriptor.value = function (...args) {
    console.log("Arguments: ", args, " were passed in this function");

    const result = original.apply(this, args);
    console.log("The result of the function is " + result);
    // returns the result to be obtained by the ctor
    return result;
  }
  // return the descriptor
  return descriptor;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  constructor() {
    console.log("from the ctor: ", this.aSimpleMethod(5));
  }



  @log
  aSimpleMethod(a) {
    return a * a;
  }
}



