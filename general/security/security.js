// Threat Models:
//     the ways in which a threat can happen and how to avoid that is called a threat model.

// Principle of Least Privilege:
//     allowing only the least of the access to the data. So even if the site got hacked the hackers will access to
//     only limited amount of data.

// Simple is more secure :
//     use built in code.
//     Do not have code that are unused.

// request method:
// GET, POST, DELETE, PUT, CONNECT, OPTIONS, TRACE, HEAD

// Allow only the methods that are to be accepted by the application.
// other things to be checked are  - IP address, URL, Query Parameters, User-Agent String, Size.
// Keep code private.
// Keep credentials private.

// Types of threat:
// 1.SQL injections
//     - limit applications database privilege
//     - limit permission to create, drop and truncate table.
//     - dont grant access to tables to database users
//     - never let application connect as a root user.
// 2.Cross site scripting - injecting script or HTML in the users browser.
//     three types:
//         * reflected - the request will be manipulated in the way that the
//     server returns a response of script which contains malacious code which executes immediately in browser
//         * stored
//         * DOM based
//     ways to prevent:
//         * check where the request been sent and where the data been received and do sanitation.
//         * use validation
//         * use allow-list
//         * use HTTPonly cookie by setting http while setting cookie
//         * Define Content Security Policy (CSP).
// 3.Cross site request forgery
//     it is an attack which tricks users browser to send request to other site.

//     ways to prevent it:
//         create a CSRF token and compare it with the cookie token and check if the form is valid or not.
//         protect sensitive actions like - setting up one more confirmation page, CAPTACH images, resubmission of the password.

// Cookie theft - make cookie secured, httponly
