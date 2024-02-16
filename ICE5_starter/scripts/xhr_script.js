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
xhr.onreadystatechange = function () {
    // check that the state is done
    if (xhr.readyState === 4) {
        // turn into json
        let responseData = JSON.parse(xhr.responseText);

        // update the 1st image
        let photo1 = document.getElementById('photo1');
        photo1.src = responseData[0].url;

        // update the 1st figcaption
        let figcaption1 = document.getElementById('figcaption1');
        figcaption1.textContent = responseData[0].title;

        // update the 2nd image
        let photo2 = document.getElementById('photo2');
        photo2.src = responseData[1].url;

        // update the 2nd figcaption
        let figcaption2 = document.getElementById('figcaption2');
        figcaption2.textContent = responseData[1].title;

        // send error message
    }
};
// use the .open() method to configure the object
xhr.open('GET', url_photos);

// add datatype to header
xhr.setRequestHeader('Content-Type', 'application/json');

// use the .send() method to send the request
xhr.send();