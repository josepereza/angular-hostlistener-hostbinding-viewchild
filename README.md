# @HostListener & @HostBinding in Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.

## Tutorial 

Read tutorial [@HostListener & @HostBinding in Angular](https://vjtechworld.com/2019/09/hostlistener-hostbinding-in-angular.html) on [VJ Tech World](https://vjtechworld.com). 

# Renderer2
docs

# Renderer2, what is it?
As you may know, Angular2+ was designed to be decoupled from the dom. This leads to a lot of wins like easier testing and server-sider rendering.

Renderer2 (The Renderer class is deprecated, so we're using the latest and greatest with Renderer2) is a built-in Angular service that gives you some pretty nice abstractions for UI rendering and manipulation.

## Why use it instead of ViewChild?
You might be familiar with the ViewChild decorator, and how to use it to interact with native elements like a button or input.

### example
```
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'dope-app',
  template: '<input type="text" #input>'
})
export class AppComponent {
  @ViewChild('input') input;

  ngAfterContentInit() {
    this.input.nativeElement.focus();
  }
}
```
The above code will work perfectly when you run your application in a browser, but what if you want to run the same code in an environment that doesn't have a DOM? If you're doing any server-side rendering (Angular Universal), testing, or even mobile and desktop work, you'll run into issues. So what do we do?

You guessed it, we use Renderer2!

Here's a naive example of listening to changes on an element.
```
ngAfterViewInit() {
  this.touchmoveListener = this.renderer.listen('body', 'touchmove', (event) => {
    // do stuff
  })

  this.touchendListener = this.renderer.listen('body', 'touchend', (event) => {
    // do other stuff
  })
}
```
## Install Dependencies

Run `npm install` to install all the dependencies ( from package.json )

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
