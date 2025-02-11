# Unhandled Exception Crashing Node.js Server

This repository demonstrates an uncommon error in Node.js where an unhandled exception within the HTTP request listener causes the server to crash unexpectedly.  The example showcases accessing a property of a null or undefined object, a common source of such crashes.  Proper error handling is crucial to prevent this.

## Bug

The `bug.js` file contains a Node.js HTTP server.  The request listener attempts to access a non-existent property of the request object, leading to an unhandled exception and server crash.

## Solution

The `bugSolution.js` file demonstrates how to handle this error using a `try...catch` block. This prevents the server from crashing and allows for graceful error handling, returning an appropriate error response to the client if needed.