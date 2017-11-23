# HumanResources Angular 2 Front-End

This project was generated with [angular-cli](https://github.com/angular/angular-cli).

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




##Development

To start webpack server with live reload capabilities

`./node_modules/.bin/ng serve --proxy-config proxy.conf.json --host 0.0.0.0 --port 4200`
`./node_modules/.bin/ng serve --proxy-config proxy.conf.spring.json  --host 0.0.0.0 --port 4200`

Enable CORS
`ng serve --proxy-config proxy.conf.json`

##Production

Build for production

`ng build --prod`

## ChangeLog

- Added login form 
- Added HttpService with support for JWT tokens
- Added navigation menu component

##Credits

https://chsakell.com/2016/06/27/angular-2-crud-modals-animations-pagination-datetimepicker/
