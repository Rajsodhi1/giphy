# giphy

This app leverages the GIPHY API so that when a user clicks a preloaded button, the page should display 10 gifs related to the search term of the button. The gifs show up as still images but will animate upon clicking the image, another clicks makes it still again.

!["app deployed](https://raw.githubusercontent.com/Rajsodhi1/giphy/master/deployed.png)

Technologies Used:
HTML
Bootstrap
Javascript
jQuery
Ajax
API

This bit was probably the most important component of the app. First this waits for the user to input and clock on the search button. This then makes an ajax call to the giphy api query url to retrieve the relevant gifs. You can see the search term being concatenated into the url, as well as the api key. We also limit the results to 10.

From there we parse through the reposnse object to find the necessary data, specifically we were looking for the gif's rating and the urls to bot the still frame of the gif and the full animated one. We then apply attributes to each gif and append them on to the page in the correct div.
![snippet](https://raw.githubusercontent.com/Rajsodhi1/giphy/master/snip.png)

Takeaway:

This app was good practice with using ajax to leverage a developers API.

It was also good practice for getting that response data back from the API and parsing through it to filter only the specific data we are interested in.

One new thing we learned to use was pausing and playing Gifs based on a click. Essentially just listening for a click and assigning the correct attributes to the image.



https://github.com/Rajsodhi1
https://github.com/Rajsodhi1/giphy