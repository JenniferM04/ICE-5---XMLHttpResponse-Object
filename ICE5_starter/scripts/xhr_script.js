/**
 * Jennifer Murphy
 * February 16, 2024
 */

console.log('xhr_script.js loaded');

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos'; // USE THIS FOR 1ST AND 2ND IMAGE
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// instantiate the XMLHttpRequest object with the new keyword
let xhr = new XMLHttpRequest();

// create a callback function to fire when the onreadystatechange happens
    // check that the state is done
    // if (xhr.readyState === 4) {
        // turn into json
        // update the 1st image
        // update the 1st figcaption
        // update the 2nd image
        // update the 2nd figcaption
        // send error message

// use the .open() method to configure the object

// add datatype to header

// use the .send() method to send the request
