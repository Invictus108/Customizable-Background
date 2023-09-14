The most important thing in a google chrome extension is the manifest.json because it contains all the data google needs to recognize it as a google chrome extension. In mine, I start off by defining the version of manifest i am using for this project as well as the project name, icons and description. Then I specified what permission this extension needs, namely access to chrome storage, unlimited Storage and access to chrome's history API. It then goes on to the chrome_url_overrides which basically reroute all new tabs, to my html page, background,html. Below that I give the path to the page I want to use as my popup.

In background.html, there are four major elements that make up the page. The shortcuts at the bottom, which allow users to take shortcuts to popular websites, are simple buttons with hyperlinks to their labeled website. The block which is a container that contains the time, data, file upload, removal button, and usage button. The search bar contains only the google search bar which is configured via the html to search google for its contents. Finally, the dropdown contains links that will eventually be used for the history. Note how the ids are simply numbers from 1 to 9 which allows me to iterate for efficiency.

I won’t go into detail over style.css, but it is the file that styles background.html. Each class contains a comment detailing what it does.

The games in the popup are mostly simple javascript games, with the exception of r/place which was made with node.js and is hosted on heroku. 

Bumper balls and scuffed pong make heavy use of html canvases and keydown events to use while matches and the guessing game mostly uses simple math, although the guessing game does use the store API slightly to store the users high score. I won’t go in depth as the bulk of my project is in the background functionality itself.

Contents.js is where most of the action happens. At the very top 2 variables are initialized, the number of images and the index of the current image. 

First, at line 6, is the code that populates the history dropdown. It uses the fact that the ids of the links are numbers to iterate through with minimal code and set the test to the title of the url and the href to the url.

The code on line 17 simply calls an alert function with instructions on how to use the extension when the usage button is clicked

On line 23 is the functionality for the remove button. It simply takes the value at the curImg index and sets it to removed. The rendering function will later check if the random number is an index with a value of “removed” and call the random function again if so. The function alert the user is successful.

The code on line 31, gets the number of images so that the random number generator knows which numbers to work within. If it doesn't yet exist it will be initialized and the code will render a preset background as the user has not uploaded anything yet. If the value is greater than one, indicating the user has uploaded at least one photo, it will call the function to get the dataURL with a random index. As we will see later, the keys for all the photos are integers between 1 and the number of images, making it extremely easy to randomly select images.

The code on line 50 updates and renders that date and time. The set interval function calls it each second to keep the time accurate.

The function of line 59 actually renders the background, using the dataURL acquired by the function on line 67 which takes the randomly generated index and calls the render_background function with the matching dataURL. Note how if the value is “removed” the function will simply call itself again but with a different key. Also note how the function on line 67 sets the curImg which is used in removing images as well.

The code on line 82 is actually in charge of taking the photo submissions and storing them in the google local storage through the storage API. A filereader is used to convert the photo to a dataURL which can be stored much easier. Not how the key is simply set to the string version of NUM_IMAGES, which makes it incredibly easy to keep track and access these images. After storing the dataURL, it immediately increases NUM_IMAGES and stores its new value.

The most innovative part of my design is making use of numbers as keys in order to give myself a simple way to randomly access the images.




