using_express
=============

applied internet tech-Node's HTTP Module, First Express Project


Overview
Description
demo.js - Create a demo site using node's http module.

test.js - Create a browser test page site using Express.

Submission Process
You will be given access to a private repository on GitHub. It will contain two files, demo.js and test.js.

The final version of your assignment should be in GitHub, but a submission should still be sent via NYU Classes.

Push your changes to the homework repository on GitHub.
Add the URL of the repository to your assignment submission in NYU Classes.
Commits later than that date will be handled on a case-by-case basis.
24 hour grace period where NYU Classes is still open.
After that, no late homeworks will be accepted.
(3 points) Make at Least 4 Commits
Commit multiple times throughout your development process.
Make at least 3 separate commits - (for example, one option may be to make one commit per part in the homework).
Part 1 - Demo Site
Create a small demo site using node's http module. Use the fs module to serve static files.

Note that this part of the assignment is based off of slides from class 9 and Chapter 2 - Getting Started With Node from Web Development With Node & Express.

Web Server and Routing
(12 points) The site should respond to the following urls with the specified status code, content-type and body:
/ - homepage
200
text/html
body from ./public/index.html
/home - homepage
200
text/html
body from ./public/index.html
/about - about page
200
text/html
body from ./public/about.html
/me - about page (redirect)
301
this should redirect to /about
do this by setting an appropriate response header
(you'll need to do some research to find out which header you should set)
try using curl or Chrome's web developer tools while making a request to google.com (no www)
what status code does it give back?
what body does it give back (if any)?
what response code does it give back (if any)?
don't just send back the same template as about
/img/image1.png - image1
200
image/png
body from ./public/img/image1.png
/img/image2.png - image2
200
image/png
body from ./public/img/image2.png
/css/base.css - stylesheet
200
this is a stylesheet, so set your content-type appropriately
(do some research to find the right content-type)
contents of file should come from ./public/css/base.css
[any other url] - page not found
404
text/html
body from /public/404.html
[server error]
if a static file can't be loaded…
respond with a 500
(2 points) Every url should respond to any casing (for example both ABOUT and about should work)
(2 points) Every url should work with or without a trailing slash (for example both about and about/ should work)
(3 points)Static File Content
The contents of the static files are as follows:
index.html
a heading (an h1) that says: Home
a paragraph with any text (whatever text you like)
an image named image1.png (whatever image you like)
about.html
a heading (an h1) that says: About
a paragraph with any text (whatever text you like)
an image named image2.png (whatever image you like)
both pages should use the base.css stylesheet:
sets the body font to 1.5em
center aligns everything
sets the font to sans-serif
sets the background to light gray (#aaaaaa)
See some example screen shots below:
screen 1

screen 2

(3 points) Logging
log every request to the console
a log line should consist of:
the date and time of the request (do research on the Date object and its toLocaleString method)
the request method (GET, POST, etc.)
the url requested (for example, /about)
the status code of the response (for example, 200)
Here's an example of the format to follow: →
Tue Sep 30 2014 23:02:37 GMT-0400 (EDT) GET / 200 OK
Tue Sep 30 2014 23:02:37 GMT-0400 (EDT) GET /img/image1.png 200 OK
Tue Sep 30 2014 23:02:43 GMT-0400 (EDT) GET /doesnotexist 404 Not Found
Tue Sep 30 2014 23:03:10 GMT-0400 (EDT) GET /me 301 Moved Permanently
Tue Sep 30 2014 23:03:10 GMT-0400 (EDT) GET /about 200 OK
Tue Sep 30 2014 23:03:10 GMT-0400 (EDT) GET /img/image2.png 200 OK
(4 points) Testing Your Site
Create a file called output.txt
Use curl -I to run the following requests … copy and paste the output (it should only be the headers) to your output.txt file
/
/about
/ABOUT
/about/
/me
/css/base.css
/img/image1.png
Part 2 - Browser Test Page
Create a small site using Express. The site will only have two pages… the index page which will show all of the headers that a browser requested… and an about page.

The index page will display all of the headers that the browser sent to the server.

Note that this part of the assignment is based off of slides from class 10 and Chapter 3 - Saving Time With Express from Web Development With Node & Express.

(5 points) Project Setup Requirements
Create a package.json by running npm init in your project directory. You can use the default answers to all of the questions
Install your web framework, express and your templating library, express3-handlebars using the --save flag to save your dependencies
For example: npm install --save express
Make sure you do this in your project's root directory
You should see a node_modules directory
Ignore it using .gitignore
(4 points) Web Server and Routing
The site should respond to the following urls with the specified views (the path is relative to your project's root directory):

/ - browser test page / index
views/index.handlebars
/about - about
views/about.handlebars
[any other url] - 404
explicitly send back a 404
views/404.handlebars
(7 points) Content
all of your views should be in a directory called views in the root of your project directory
all of the views should be based off of a layout
this layout is main.handlebars
which should be located in views/layouts
it should contain all of the surrounding tags - (html, head, body, etc.)
as well as links to both of the other pages / and about
the about page should contain
a single heading that says About
some text in a paragraph tag underneath
the index page should contain
a single heading that says Browser Test Page
within a pre tag, all of the headers that were sent as part of the browser's request
you can do this by:
handing the headers to over to the view (as part of the the 2nd argument passed into res.render())
in your view, using the each helper to iterate over the headers object
see the docs on the each helper
an example of the contents of the index page, as well as some screens:
host: localhost:3000
connection: keep-alive
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36
referer: http://localhost:3000/about
accept-encoding: gzip,deflate,sdch
accept-language: en-US,en;q=0.8
screen 1

screen 1
