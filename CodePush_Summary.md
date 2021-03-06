#CodePush with react-native

 - A React Native app is composed of JavaScript files and any accompanying images, which are bundled together by the packager and distributed as part of a
platform-specific binary (i.e. an .ipa or .apk file). Once the app is released, updating either the JavaScript code (e.g. **making bug fixes, adding new
features) or image assets**, requires you to recompile and redistribute the entire binary, which of course, includes any review time associated with the store(s) 
you are publishing to.

 - The CodePush plugin **helps get product improvements in front of your end users instantly**, by keeping your JavaScript and images synchronized with updates you 
release to the CodePush server. This way, your app gets the benefits of an offline mobile experience, **as well as the "web-like" agility of side-loading updates
as soon as they are available**. It's a win-win!

 - In order to ensure that your end users always have a functioning version of your app, **the CodePush plugin maintains a copy of the previous update, so that in the event that you accidentally push an update which includes a crash, it can automatically roll back**. This way, you can rest assured
that your newfound release agility won't result in users becoming blocked before you have a chance to roll back on the server. It's a win-win-win!

**Note**: Any product changes which touch native code (e.g. modifying your **AppDelegate.m/MainActivity.java file**, adding a new plugin) 
cannot be distributed via CodePush, and therefore, must be updated via the appropriate store(s).
