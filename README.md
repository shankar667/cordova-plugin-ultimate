# Cordova Ultimate Plugin

Simple plugin that returns your string prefixed with ultimate.

This plugin provides a simple example demonstrating how Cordova plugins work.

## Using
    
Install the plugin

    $ cd hello
    $ cordova plugin add https://github.com/shankar667/cordova-plugin-ultimate.git
    

Edit `www/js/index.js` and add the following code inside `onDeviceReady`

```javascript
 
    ultimate.ping("World", success, failure);
	
```

Install iOS or Android platform

    cordova platform add ios
    cordova platform add android
    
Run the code

    cordova run 

## More Info

For more information on setting up Cordova see [the documentation](http://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html#The%20Command-Line%20Interface)

For more info on plugins see the [Plugin Development Guide](http://cordova.apache.org/docs/en/4.0.0/guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide)
