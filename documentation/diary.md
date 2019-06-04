
# 28th May 2019
## Starting with React Native

### Initial setup of the project
```
$ brew install watchman
$ npm install -g react-native-cli
$  react-native init fullstackproject
```

After initialization I opened Xcode. I had done some projects with it before so there
was no need to set up anything. I connected my iPhone to my MacBook and then
 simply opened the project on Xcode and clicked `Build & Run`. 

It also opened Metro Bundler CLI, which monitors for changes in JS files. 

The app opened on my iPhone and then I shaked it to enable live reload. After that
any change I made in VSCode to App.js file triggered almost instant reload on the iPhone.
Cool, time to start the actual coding.

### React Natice specific components

Because Native is a bit different, I took some time to get to know how to use different
components. Native doesn't use HTML but it's own components that are compiled to
device specific, native components. For example iOS has UIKit, and every React component
are actually transpiled to that. So, we have for example View, Text and TextInput components.

Styles in React Native can be applied the same way as normal React projects, with inline code.
So I also tested that and changed the colors of the app, for starters.

Next I did some very basic counter app that had to buttons and useState hook which
set the text element according to counter value. Also played a little with ScrollView
and Image components.

I built a main menu just to see how things work out. Everything seems to
work quite well, although sometimes when I save changes in VSCode the changes
are not loaded. This is some kind of bug for sure. I imported custom font
for the menu and added text buttons that do various things when pressed.
Native alert messages and vibration are good examples. Next I really should
generate some random data and start filtering it in the views.

### Manipulating views

For a couple of hours I tried to make it work to switch views. So basically
just saving the page name to state and then manipulating view based on that.
Quite an easy task, although I now have a navigation menu that keeps moving..
need to make it stick to the bottom of the screen.

# 29th May

## A little bit more

Today I managed to make the navigation bar stick to the bottom well enough.
Still have some work to do with styling but it's time to get the app logic
working. So my first idea was to use CIA world factbook API and get good
intelligence data straight to the app. Still have some work to do with
that, because it's quite a large json-file and fetching it takes time.
For now I only have Chuck Norris jokes that are rendered on screen.

Also had some problems when I tried to make own components with Views..
I couldn't use them inside each other for some reason, haven't figured
out yet what's the cause.

But still I have spent more than enough hours today just to get things
working.. React seemed easy but the transition to native has not been
that easy. Oh, but I did manage to get dotenv working. Not really much
use for now, but later with APIs and DB it's going to be very useful.

## Getting closer to actual functionality

Finally, after several hours of banging my head against the wall I figured
out what was wrong - I misinterpreted the json file which had all the 
country information. Now the app actually fetches country names from the
website json file. Next up would be to get individual country data when
pressing on country name. Let's hope that'll be a little easier.

# 30th May

## React Router Native

In the morning I fixed navigation in the app, now using react-router-native.
Seems to work quite well, altough there were trouble at first with one-child
components. Now the bottom navigation menu is using Router as well as country
list. Country name takes to a placeholder page that will later show individual
country data. How cool is that!

In the meantime I really should figure out a good way to handle stylesheets,
as I don't want to pass them ass props or have them in every component.

## React Navigation

I did get React Router working well for some reason, and I found that
there is a library that uses more native UI for navigation, called
React Navigation. So I basically threw few hours of working with Router
in the trash and started over with React Navigation. 

It uses default iOS colors, so there is a little more work because every
element has to be styled to fit my own style. Anyway, Navigation is much
easier to work with, because it stacks screens and you can automatically
get a back button when going deeper from home screen. 

Also Navigation has by default transition animations when moving between
screens. This is not something I want, so I have to do something for that. 

### More navigation

Still moving between to blank screens, trying to fix styles for custom back
button. When not using default, the back function is not working for some
reason.

Back button not yet working, but I did manage to get props to sub screens,
so now each country shows details when clicked. This will improve more
in the future.

## Beginning of authentication

I really didn't do any real authentication logic yet, just sketched the login
screen to see how it van be customized. Dark keyboard layout was something
awesome. Next up is some actual authentication.

# 31th May

First before starting the actual communication with DB and user
authentication, I finished the login screen styling and added loading 
animation. Still to do: authentication stack screens..

## Firebase

After reading a lot source material I decided to do the authentication
and possibly backend with Firebase. Firebase and React Native Firebase had
good documentation, it took about two hours to register, set up and install
everything so I was good to go. I didn't do any actual app logic yet, just
setting up the Firebase so I can use it.

Next I did the actual authentication, which was pretty straight forward.
Using Firebase the authentication becomes easy and I don't have to worry
about anything else but where to call the login / auth / logout functions.

Authentication works, although I still have to make register screen styling
in line with the rest of the app, as I used a template. Also, there is still
a back button in every screen which makes you able to navigate back when
logged out.. Not good, but this can be avoided with different screen stacks.

### Fixed the flow
So I created two different stacks, one for logging in and registration, and
second for the actual screens of the app. And one screen for auth loading.
And now when they're in different stacks, you can't possibly go back from
successful login to login page unless you logout. 

### Improving UX

Added loading icons so users can see when something is happening
when they press login or register buttons. Also added error messages to the top of the screen if login or registration fails for some reason. Messages use error messages from Firebase so they are not the best possible, but still understandable.

## Drawer nav
Tried this one for 3 hours without much luck. For some reason it always 
opened a tab and not drawer from the side. No idea why. But at least I have
a working tab navigation, although I just have two tabs in it for now.

# 1st June

I managed to get the drawer navigation working, so now it opens on every
screen in the app stack when swiping from the left. Still have to implement
a button in the top nav bar where it can be opened also. Styling of the
drawer menu is not yet in line with rest of the app, this may be a challenge.
I may have to move the drawer in its own component and style it there instead
of just styling it when creating it in App.js. What I want to achieve
is at least a logout button and perhaps some settings that can be managed
from the drawer menu. 

## Improvements

Finally I have a working drawer menu. I also added icons instead of text 
labels to the tab bar and most of the places where there are buttons. I only
have one problem with the navigation - drawer menu can't yet be opened from 
a button. This is fixable as I have finally figured out how to manage individual
elements efficiently. I hope to get the UI/UX working as I want today, so 
I can again put my effort on the logic of retrieving information from 
database

After few more tries I got the drawer working. Now there is a button on every
screen, except Auth Stack, that opens drawer. Next I need to improve drawer
logic. Also fixed some paddings on icons and refactored components.

# 2nd June

## Fixing issues

Encountered a really big issue when I accidentally installed AsyncStorage packet to project with yarn instead of npm that I’ve used. For some unknown reason I was not able to build the project for iOS in Xcode anymore. 

I tried all I could, uninstalling packages, removing node_modules, removing caches and Xcode derived files, cleaning build folder, cloning git repository and installing it elsewhere, but all of these were without luck. 

What finally helped was just restoring the whole project file from TimeMachine backup. The file was 12 hours old so that was not what I wanted to try. Now that I was able to build the app again, I pulled the files from Github to this restored repository. So finally after 3 hours of trying I was able to continue the development from just berore the point where things went sideways.

What I learned from this is that I must take local snapshots on an hourly basis if I want to restore changes more easily, as resetting to last commit with Git didn’t do the trick.

As I searched for solutions, I learned that when cloning a repository and installing it, react-native link may not work because it’s not able to link all dependencies to Xcode project. This is why cloning and installing didn’t work in my case. Xcode complained about missing files.

So today was not a very productive day, but maybe tomorrow I can install AsyncStorage with npm.

## Firebase database

I tried installing Firebase DB for some time, but ran into problems as described above. Only then
I realised that Firebase Core module includes DB, so only thing I need to do is actually fetch the
data. I tried getting few items from the DB succesfully, so I will later update whole country list
to use Firebase realtime database.

# 3rd June

Today I didn't have much time to do anything, but I switched to use Firebase
DB in the country data listing (info page). It is now very easy to fetch
say only 10 first countries, so it makes loading times shorter. Should be
able to implement paging and filters with a little more investigation.

Later I also had some problems with ordering data from DB. Queries didn't work
well with nested data, so I had to do much console.logging to find out how
the data is actually saved to state when DB is queried. So today has been
mainly about figuring out how to get data shown on screen. Country listing
is easy, but as I want to do more than that - filtering and ordering, I need
to really be sure what to do. Also the data in the database is not the best 
available. Not all values and keys are present in all countries, and this
causes some problems. If I want to get countries sorted by population it
can't be done easily because there are null values.

$ 4th June

After trial and error and a lot of console logging I was able to build country tree, 
meaning that it's possible to navigatate deeper into country details when clicking each
detail. Problem is that all details open in the same detail screen and stack, so going back
returns you to all country page. All data is also not yet visible but this is a good start
to finally be able to present all data from database in the app.

## Handling details

With the current data it's proven hard to actually show every item with mapping, because
some countries lack those fields. It would be easy if they had null values, but because
those fields do not exists, it's harder. I can't possibly go through every child and check
which fields it has or hasn't. So I've decided to only show selected data in the details page,
including population, capital, area and background. Still have to see if there's something more
I'd like to show. At least I'd have to check other databases as well, because this has proven
to be not as optimal as I thought, sadly, but it's too late to change whole idea of the app.

Also fetching data was not as easy as I thought. With some work I was able to return correct
fields from DB, but ordering them was not possible because I didn't return the snapshot but
other values, so the order was lost in that conversion. Then I returned snapshots, but because
I used useEffect with useState while loading data, only the current value was actually in the
state and concat didn't work. With additional variable I was able to solve this. Now I make
new objects from each child that the snapshot has. Limiting works quite well, but I have not 
yet managed to do any sorting or filtering.
