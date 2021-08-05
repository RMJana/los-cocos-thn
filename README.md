# los-cocos-thn

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Project Development Time-Line

### Create Vue Project

I took a look in Nuxt.js, Vue CLi and Vue 3 (Vite) frameworks/tools, created a project with all of them and decided to go with Vue CLI. (3 hours)

### Install Tailwind CSS

Install via npm. (30 minutes)
Change to use scss postcss instead of tailwind. Due to the fact that is integrated in Vue CLI. Maybe change to tailwind when the project is in a more advanced stage. (10 minutes)

### Initialize a prettier config

Get a standard prettier config file. (1 minute)

### Set Vue DevTools

Install Vue DevTools Extension in chrome and set app.config.performance = true. (1 hour)

### Show the right names of the components in DevTools

Have to fine where to set the name of the component before it is being created. (30 minutes)

### Design Los Cocos Logo and pick a typography

Select from google fonts a typography that fits with the logo's typography.(15min)

Build a logo png file, to include it in the navi.(40min)

### App display flex and distribution of content

Modify App-css in other to make it flex.
Distribute space for Nav, Router-view and Footer, in order to keef Nav in the upper part of the page, Router-View in the middle and Footer immer in the bottom. (10min)

### Implement Navi and WorkInProgressView

Include all elements of the Nav, add them to the router, build a WorkInProgress Component for all the elements in Nav that don't have a view. (80min)

### Implement Footer

Implement Views for links in footer
Implement email and telefone link (30min)
Install Font Awesome Icons
Implement Icons (30min)
Implement Styling (1hour)

### Implement Home-Reservations View

Divide view in flex containers
Generate Components
Find datepicker component, implement and adapt styling (3hours)
Try several libraries for select-dropdown component, implement Dropdownselect from scracht, modify Button and styling (2hours 30min)
Investigate why image src binding is not working solutions: use require('../assets/room_1.png') pro image is also not working (2hours)
Found a work-around using v-if/v-else-if/v-else (15min)
Implement Room & Rates section and styling (3hours)
Implement Reservation Summery and styling (1hour)

### Modify router to accept optional param

Modify the router in order to accept an optional promo_code param
Try to change param in the path of the route for query optional but having problems to get the router to calculate the root path.
Decided to design /:promo_code\* which makes it optional, in addition the promo_code can be called like following:

http://localhost:8080/promo_code=10

http://localhost:8080/10
(3hours)

### Initialize and Set Vuex Store

Analize pros and cons from using Vuex and $emit. Because Vuex is built in with Vue CLI and our app is devided into several levels of components we implement Vuex Store. (1hour)

Initialize and link components to the Vuex Store (2hours)

Due to the fact that our components are linked to the store and it will be updated as soon there is a change, we can make our web more user friendly and save the user one click on the button "Modify". Any changes in the reservation would be updated in "Reservation Summary" as soon as the user makes the change.

### Add
