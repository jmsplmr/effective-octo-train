# effective-octo-train

CS313 - nodejs projects

## 08 Prove : Assignment - Local Node.js Server

### I. Overview

Set up Node.js on your local computer, use it to create a local http server, that returns basic data.

### II. Instructions

Your assignment this week is to create a local http server using node.js.

For this week, please don't use Express. The idea is for you to see how things work at the most fundamental level. Next week, we will improve on these ideas by using Express.

01. Require the "http" package, and use the createServer method of your http server object to handle requests. Set it to listen on a port such as 8888.

02. Create a named callback function (e.g., onRequest) and pass that to your createServer method to handle the requests.

03. In your onRequest method, look for the requested path, and handle it according to the following:

    * If the requested path is "/home" have the response write an html page with an h1 tag that renders, "Welcome to the Home Page".

    * If the requested path is "/getData" have the response write a JSON document that returns your name and class, (e.g., `{"name":"Br. Burton","class":"cs313"}`

    * If the requested path is anything else, have the response render an html page with a status code of 404, and on the page, render, "Page Not Found".

04. Test your server by visiting it in a browser at: `http://localhost:8888/home` , etc.

#### HELPFUL HINTS:

* Try getting simple things to work first, such as just logging something to the console like, `console.log("Hello world");`. Then, write something simple to the response, and then finally try to handle the different requests.

* There is a url module you can require that provides a url.parse() method that you can use to parse the request.url, and get the "pathname".

* When starting your response, use the response.writeHead method to give a status code and a response type. Example:

    ```
    response.writeHead(200, {"Content-Type": "application/json"});
    response.writeHead(404, {"Content-Type": "text/html"});
    ```

* After writing the header, you can then use the response.write() method to write any text you would like. Example:

    ```
    response.write("<h1>Hello World</h1>");
    ```
    
* When you are done writing the response, don't forget to end it with:

    ```
    response.end();
    ```
    
### III. Going above and beyond

As always, you are encouraged to go above and beyond these requirements. For this project, you might consider working with query parameters, and making additional pages that have functionality, such as an "add" page that looks for two operands and returns their sum. Perhaps, it could take a third query parameter that specifies whether to return the result as JSON or as HTML.

Of course this is only one idea, you are welcome to explore anything else in the Node.js ecosystem.

### IV. Submission
For this week, you need to submit 2 files to I-Learn. First, submit the JavaScript file you created above.

Then, download this assignment's [submission form](https://content.byui.edu/file/14882098-ce1f-44ba-a196-a7aebcb3d5ce/1/week08/prove08.txt), fill it out, and submit it to I-Learn as well.

## 08 Prepare : Project 2 Idea Submission

### I. Overview

For the second half of the semester we will be building web applications using Node.js. As with our PHP project in the first half of the semester, this will be an extended project that will drive the assignments and much of our learning for the rest of the semester.

Your assignment this week is to decide on a general idea for the project. Next week, you will outline it in more detail.

### II. Basic Guidelines

One of the strengths of Node.js is its ability to expose web services which can then be consumed by client-side AJAX. The client-side code could be using a framework, such as Angular or React, or could be native JavaScript.

Along these lines, your project will be a full stack Node.js project that uses Web Services for the communication between the client and the server. We will not be using client-side frameworks for this project, but after completing it, you will be very well prepared to use them for future endeavors.

#### GUIDELINES

As with Project 1, you can choose the topic of your application. Your project will be evaluated as to how well it:

01. Presents a professional look and feel

02. Accomplishes a meaningful task / does something interesting

03. Demonstrates understanding of Node.js and Express principles

04. Demonstrates mastery of Client-side and Server-side communication

05. Incorporates a data layer composed of either a DB (e.g., PostgreSQL) and/or third-party web services (e.g., Walmart, Twitter, FamilySearch, etc.).

#### SINGLE PAGE APPLICATIONS

Single Page Applications (SPAs) are a great example of applications that fit this architecture. These are applications where the user stays on the same HTML page, but the page is manipulated by client-side JavaScript to provide the desired experience.

### III. Submission

Please submit to I-Learn a 1-2 paragraph description of your project.