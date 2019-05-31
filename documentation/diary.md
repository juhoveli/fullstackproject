### This document contains most of the commands including errors during development process.

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

# 29th May 2019

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
