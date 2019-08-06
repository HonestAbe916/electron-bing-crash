# Project Title

Electron Freezing Bug

## To Reproduce

In the bing search bar, search for 'apple'. You will notice that the webview scroll bar is frozen. Click the first link to go the apple website. You should see the page is blank and doesn't load properly. I am calling clearStorageData when you start up the app as it seems to only happen the first time you load the webpage, if you click view -> reload without restarting the app and go through the same steps it loads properly. We've experienced similar issues on youtube after clicking a bunch of videos, as well as other websites. 
