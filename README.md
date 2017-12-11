# _coffeeWifi
## _coffeeWifi aims to solve the studious student's dilemma of not being able to find the RIGHT space to do WORK

## Background and Overview
Finding workspaces suitable for your needs as a student is a prevalent issue contributing to the lowered work productivity rate in today's youth. We aim to solve this by DOING the checking before the user ever steps out their door.

## Functionality and MVP
- [ ] Implement mobile version
- [ ] Implement search and filtering of workspaces based on user specified criteria
- [ ] Implement user reviews

### Bonus Features
- [ ] Workspace suggestions
- [ ] Predicting optimal work times
- [ ] Online ordering of coffee

## Technologies and Technical Challenges
###### Stack: MERN (MongoDB, Express, React (Native), Node.js)

#### Learning and utilizing a new stack to create a working production app in 7 business days
  - In conjuction with utilizing the specific libraries to help achieve our MVPs

#### Workspace data
  - Gather as much relevant data for each workspace throught various APIs.
      - Google Places API, Yelp API, Internet Speed API

#### Seed data sourcing
  - _coffeeWifi will eventually be reliant on user input so setting up the infrastructure within our app for future accommodation will be a challenge

##### UX
 - #### Frontend Interface
  - Implement map loading with custom pins relevant to what the user searched
  - Implement clean transitions to contribute to overall UX

- #### Backend
   - API endpoints hosted on heroku with connection to our MongoDB database
   - The backend will make a request to multiple APIs to fetch relevant data

- #### Maps
   - User location will be needed to know where to initially load the map view

## Wireframes

#### Home
![home](https://github.com/jeffreychuc/_coffeeWifi/blob/master/wireframes/home.png)


#### Home pin details
![home-pin-details](https://github.com/jeffreychuc/_coffeeWifi/blob/master/wireframes/home-pin-details.png)


#### Categories

- ##### Order
![category-orders](https://github.com/jeffreychuc/_coffeeWifi/blob/master/wireframes/category-order.png)
  - Order Menu Layout

  ![order-menu-layout](https://github.com/jeffreychuc/_coffeeWifi/blob/master/wireframes/order-menu.png)


##### Status
![category-status](https://github.com/jeffreychuc/_coffeeWifi/blob/master/wireframes/category-status.png)

## Accomplished over the weekend
  - Familiarize ourselves with each piece of the MERN stack enough to get things running
  - Set up API endpoints for user auth on heroku
  - Set up OAuth for user login
  - Set up redux pattern
  - Integrate map view on react-native
  - Located API/Website to scrape data for coffee shops/workspaces http://www.factual.com/data/t/places#filters={"$and":[{"country":{"$eq":"US"}},{"region":{"$eq":"CA"}},{"locality":{"$eq":"SAN+FRANCISCO"}}]}&q=coffee+shops
  - Registered for foursquare API
  - Registered for google places API
  - Google radar api could be a source of info as well

## Group Members & Work Breakdown

### Implementation Timeline

#### Day -2 - Saturday:
* Setup iOS app skeleton structure
* Integrate OAuth
* Setup persistant login via keychain
* Setup Mongo and Mongoose DB

#### Day -1 - Sunday:
* Finish project proposal/readme/wireframes
* Get maps working and displaying.
* Get live location data working.
* Connect DB and have dummy data returning via user SID provided by OAuth.

#### Day 0 - Monday:
* Determine data source and begin scraping/API integration
* Determine storage schema for location data
* Get dummy data populating on map view.
* Get tooltips working on map view

#### Day 1 - Tuesday:
* Implement navigation

#### Day 2 - Wednesday:
* Polish styling and UX
* Finish navigation Implementation

#### Day 3 - Thursday:
* Start production readme

#### Day 4 - Friday:
* Finish production readme

#### Day 5 - Saturday:
* Polish UI/UX for iOS app
* Get Android app

#### Day 6 - Sunday:
* Finalize Demo site
* Get app hosted on appstore
