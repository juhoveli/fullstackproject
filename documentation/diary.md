#### This document contains most of the commands including errors during development process.

### 28th May 2019
#### Starting with React Native

##### Initial setup of the project
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

##### React Natice specific components

Because Native is a bit different, I took some time to get to know how to use different
components. Native doesn't use HTML but it's own components that are compiled to
device specific, native components. For example iOS has UIKit, and every React component
are actually transpiled to that. So, we have for example View, Text and TextInput components.

Styles in React Native can be applied the same way as normal React projects, with inline code.
So I also tested that and changed the colors of the app, for starters.

Next I did some very basic counter app that had to buttons and useState hook which
set the text element according to counter value.
