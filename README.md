# Stellar: a calendar for the stars
## About
Welcome to Stellar, a calendar that helps you keep track of lunar, solar, and astronomical events. 
Head on over to the <a href="https://stellar-778e3.web.app/">live website</a> to start exploring!
<br/>
<img src="./images/home.png" width="450">
<br/>

## Features
Stellar provides a simple interface to explore upcoming astronomical events and add ones of interest to your personal calendar. Browse the constellations to learn more about them; check the moon phase over the next few weeks; or search for future meteor showers and fireballs. Simply add an event from our collection of these phenomena (provided by NASA and others), jot down any notes you have for yourself, and get ready to enjoy the stars.
## Video Demo 
Coming Soon!
## Slides and Images 
<b>Welcome to Stellar:</b>
<br /> <br>
<img src="./images/homepage.png" width="650">
<br><br>
<b>User Calendar w/ Option to Add Events:</b>
<br />
<img src="./images/calendar.png" width="650">
<br><br>
<b>My Events Page:</b>
<br />
<img src="./images/myevents.png" width=650">
<br><br> 
<b>Moon Phase Example:</b>
<br />
<img src="./images/moon.png" width="650">
<br><br> 
<b>Constellation Detail:</b>
<br />
<img src="./images/constellation.png" width="650">
<br><br> 

## Installation 
[Backend](https://github.com/clheard54/Stellar-Backend)
## Installing Locally

 - If you'd like to clone down this project repository to your local computer, you can do so by forking it, then hitting the "Clone or download" button in your own fork. Copy the SSH link, and open up your computer's Terminal. Inside, type "git clone <the link you've just copied>". 
 ```
   git clone <example: git@github.com:.../Mod4-Stellar-Frontend.git></example:>
  ```
 - You'll also need to fork and clone down the <a href="https://github.com/clheard54/Stellar-Backend">backend</a> repo for this project. You can find the link here: https://github.com/clheard54/Stellar-Backend. Follow the same steps as above.

 - Back in your terminal, type "bundle install".
  ```
   bundle install
  ```
 - Then, from the root directory, run "rake db:create" and "rake:db:migrate" to create the database locally.
  ```
   rake db:create && db:migrate
  ```
 - Lastly, run "rake db:seed". Now you're ready to go!
  ```
   rake db:seed
  ```


To open the app, you'll have to start up a local server. In your terminal, navigate to the backend api directory and then type "rails s".
 ```
 rails s
 ```
 If you'd like to see your backend database, you can head to "http://localhost:3000/api/v1/constellations" on your favorite browser.

- You'll also need to fork and clone down the [Frontend](https://github.com/cheard54/Mod4-Stellar-Frontend)
```
   git clone <example: git@github.com:.../Mod4-Stellar-Frontend.git></example:>
  ```

- From your terminal, navigate to the  stellar-frontend folder. There, type the following commands: 
 ```
npm install
npm start
 ```
- Sign up for a new account, check out some stellar events, and get ready to stargaze like never before! Enjoy!
## Technologies Used 
- Ruby on Rails
- ActiveRecord
- Javascript 
- React 
## Authors
-Clarion Heard
-Kailana Kahawaii 
-Aidan Lincoln
## Contributing 
Contributions are welcome. Submit a pull request!
## Acknowledgements
### APIS and Resources
- Photos: [Unsplash API](https://unsplash.com/)

- Constellations: [Constellations](http://calgary.rasc.ca/constellation.htm#list)

- Moon Phases: [Farm Sense](http://www.farmsense.net/api/astro-widgets/)

- Phenomenon: [Nasa](https://eclipse.gsfc.nasa.gov/SKYCAL/SKYCAL.html)

- Calendar: Big thanks to <a href="https://www.linkedin.com/in/matej-kovac-a5b25113a/">Matej Kovac</a> for his tutorial on how to make a [react-calendar](https://github.com/moodydev/react-calendar)

- Background Images: [SeaSky](http://www.seasky.org/constellations/assets/images/)

## License 
This project is licensed under the GNU GPL (https://www.gnu.org/licenses/gpl-3.0.en.html)
    Copyright (C) <2020>  <Clarion Heard, Kailana Kahawaii, Aidan Lincoln>
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
