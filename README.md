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

## Usage

The user can access Los Cocos Portal through the following paths:

http://localhost:8080/

http://localhost:8080/promo_code={number}

http://localhost:8080/{number}

As soon as she changes the reservation data or clicks on a room, the information will be updated in the reservation summary.
On save the data will be stored and after refreshing it will persist.

## Project Development Time-Line

The development of the whole assesment took around 28 hours.

### Create Vue Project (3 hours)

I took a look in Nuxt.js, Vue CLi and Vue 3 (Vite) frameworks/tools, created a project with all of them and decided to go with Vue CLI.

### Install Tailwind CSS (40 minutes)

Install via npm.
Change to use scss postcss instead of tailwind. Due to the fact that is integrated in Vue CLI. Maybe change to tailwind when the project is in a more advanced stage.

### Initialize a prettier config

Get a standard prettier config file.

### Set Vue DevTools (1 hour)

Install Vue DevTools Extension in chrome and set app.config.performance = true.

### Show the right names of the components in DevTools (1hour)

Have to fine where to set the name of the component before it is being created.

### Design Los Cocos Logo and pick a typography (1hour)

Select from google fonts a typography that fits with the logo's typography.

Build a logo png file, to include it in the navi.

### App display flex and distribution of content (10minutes)

Modify App-css in other to make it flex.
Distribute space for Nav, Router-view and Footer, in order to keef Nav in the upper part of the page, Router-View in the middle and Footer immer in the bottom.

### Implement Navi and WorkInProgressView (80min)

Include all elements of the Nav, add them to the router, build a WorkInProgress Component for all the elements in Nav that don't have a view.

### Implement Footer (2hours)

Implement Views for links in footer
Implement email and telefone link
Install Font Awesome Icons
Implement Icons
Implement Styling

### Implement Home-Reservations View (7hours30minutes)

Divide view in flex containers
Generate Components
Find datepicker component, implement and adapt styling
Try several libraries for select-dropdown component, implement Dropdownselect from scracht, modify Button and styling (2hours 30min)
Investigate why image src binding is not working solutions: use require('../assets/room_1.png') pro image is also not working (2hours)
Found a work-around using v-if/v-else-if/v-else
Implement Room & Rates section and styling
Implement Reservation Summery and styling

### Modify router to accept optional param (3hours)

Modify the router in order to accept an optional promo_code param
Try to change param in the path of the route for query optional but having problems to get the router to calculate the root path.
Decided to design /:promo_code\* which makes it optional, in addition the promo_code can be called like following:

http://localhost:8080/promo_code=10

http://localhost:8080/10

### Initialize and Set Vuex Store (3hours)

Analize pros and cons from using Vuex and $emit. Because Vuex is built in with Vue CLI and our app is devided into several levels of components we implement Vuex Store.

Initialize and link components to the Vuex Store

Due to the fact that our components are linked to the store and it will be updated as soon there is a change, we can make our web more user friendly and save the user one click on the button "Modify". Any changes in the reservation would be updated in "Reservation Summary" as soon as the user makes the change.

### Session Storage (2hours)

Tryed the plugging vuex-persistedstate, but had config difficulties.
Decided to check sessionStorage when initializating the vuex store and adding a mutation onsave.
