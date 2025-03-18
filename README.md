# Node.js Basic Informational Site

This project is a simple Node.js web server that serves different HTML pages based on the URL requested. It's a practical exercise from [The Odin Project's Node.js course](https://www.theodinproject.com/lessons/nodejs-basic-informational-site), designed to teach the fundamentals of handling HTTP requests and responses in Node.js *without* using a framework like Express.js.

## Features

*   **Route Handling:** The server handles the following routes:
    *   `/`: Serves `index.html` (the homepage).
    *   `/about`: Serves `about.html`.
    *   `/contact-me`: Serves `contact-me.html`.
    *   Any other URL: Serves a `404.html` page (Not Found).

*   **Pure Node.js:** The server is built using only Node.js's built-in `http` module.  This demonstrates the core concepts of creating a web server from scratch.

*   **Static File Serving:**  The server reads HTML files from the local file system and sends them as responses.

*   **Error Handling:**  A 404 page is displayed for any undefined or invalid routes, providing a basic level of error handling.

## Installation and Running

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/JohanDC-1999/node-basic-info-site.git 
    cd node-basic-info-site
    ```

2.  **Install Node.js:** Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).  This project was built using Node.js features available in most recent versions, but it's generally recommended to use an LTS (Long-Term Support) version.

3.  **Run the Server:**  Navigate to the project directory in your terminal and execute the following command:

    ```bash
    node index.js
    ```

    This will start the server, a message will be shown in the terminal on which port it is running.

4.  **Access the Website:** Open your web browser and go to the following URLs:

    *   `http://localhost:8080/` (for the index page)
    *   `http://localhost:8080/about` (for the about page)
    *   `http://localhost:8080/contact-me` (for the contact page)
    *   `http://localhost:8080/any-other-page` (to see the 404 page)

    **Important:** If the server is running on a different port, replace `8080` with the correct port number.

## Project Structure

*   `index.js` (or your main server file): Contains the Node.js code that creates the HTTP server, handles requests, reads files, and sends responses.
*   `index.html`, `about.html`, `contact-me.html`, `404.html`:  These are the HTML files that the server serves.

## Key Concepts Demonstrated

This project provides a hands-on introduction to several core Node.js concepts:

*   **`http` Module:**  Using the built-in `http` module to create a web server.
*   **Request and Response Objects:** Understanding how to work with the `request` and `response` objects in the `http.createServer()` callback.
*   **URL Handling:**  Parsing the requested URL (`request.url`) to determine which page to serve.
*   **File System (`fs`) Module:** Using `fs.readFile()` to read the contents of HTML files from the file system.
*   **HTTP Status Codes:**  Setting appropriate HTTP status codes (e.g., 200 for success, 404 for Not Found) in the response.
*   **Content-Type Header:** Setting the `Content-Type` header to `text/html` to inform the browser that the response is HTML.
*   **Basic Routing:** Implementing a simple routing mechanism to serve different content based on the URL.

## Learning Objectives

By completing this project, you should be able to:

*   Create a basic HTTP server in Node.js using the `http` module.
*   Handle different URL requests.
*   Read files from the file system using the `fs` module.
*   Send HTML responses to the client.
*   Implement basic error handling with a 404 page.
*   Understand the fundamental concepts of server-side web development with Node.js.
