Front-end Developer Exercise
============================

Objective
---------

Build a single web page that will provide information about the 7 baby steps to saving money.

Whilst this is a great exercise for practising, please spend a maximum of ONE HOUR on this scenario.

You may not complete it all, that is fine. It is better to complete an area to a high quality than to complete all areas at a low quality.

There is not a definitive 'right' answer, the point is for the applicant to be familiar with a set of requirements, and make some technical decisions that we can discuss when we meet. Eg, you chose to use X, why is this? What other options are available etc.

To apply, simple download this repository, complete the task, commit and push to a new empty repository and email us the URL.

Please do not fork or add a pull request.


Criteria
--------

There should be some transition that happens when navigating between the baby steps. You are free to come up with what this transition looks like.

You need to satisfy the "Dynamic Content" user story included at the end of this README.

The page should be functional and presentable in all modern browsers, as well as Internet Explorer 8+. It does not need to be responsive.

Resources
---------

The creative team has provided a mockup of what the finished product should look like located at `./resources/mockup.jpg`. See also the annotated mockup for more detailed information on fonts/measurements/etc.

For an example of a possible transition, see `./resources/transition-example.gif`.

All of the body copy can be found at `./resources/body-copy.txt`.

Assets
------

Any image you need can be found in the `./app/assets/images` directory. Some images have been sliced in multiple ways, so use whichever you feel make the most sense to use, or not at all if you feel you don't need to.

Please use React or Dojo if you decide you need a JavaScript library.

Server
------

This package has a `Gruntfile.js` that you can use to serve up your application. You'll first need to install [Node.js](http://nodejs.org/). Once you have Node.js installed and have downloaded this exercise, then you can run the following commands to get the server up and open the landing webpage.
Open cmd/sh as adminisrator and cd to the root directory of the unzipped exercise.
Note: If you get an ENOENT error, you'll need to create the npm directory manually (see: http://stackoverflow.com/questions/25093276/nodejs-windows-error-enoent-stat-c-users-rt-appdata-roaming-npm)

```
npm install
npm install -g grunt-cli
grunt connect
```

In a browser, open http://localhost:9001/app/index.html


Dynamic Content
---------------

As a user I want to be encouraged by how many friends of mine are also going through the selected baby step. I don't need to see all my friends, just a summary of who is in the same baby step.

You should request the data from `./app/assets/javascript/baby-steps.json`, which includes a list of friend objects. Each object contains names and their baby step. Based on the data returned, you will need to show the following information to the user sorted by last name ascending.

### Message Logic

* if 0 friends, then don't show any message
* if 1 friend, then show "Paul Taylor is also in Baby Step 2"
* if 2 friends, then show "Thomas Harris and Sharon Thomas are also in Baby Step 3"
* if 3 friends,
    then show "Deborah Lee, Shirley Perez, and 1 other friend are also in Baby Step 4"
* if 4 or more friends,
    then show "Patricia Allen, Matthew Garcia, and 2 other friends are also in Baby Step 5"

(The creative mockup shows an example of how this message should be displayed to the user:  `./resources/mockup.jpg`.)
