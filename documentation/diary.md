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
