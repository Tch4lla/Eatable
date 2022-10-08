# Eatable
Full-stack social media app where users can upload and tag photos of places or foods. Intended for users who have dietary restrictions and need/want to help finding places or things to eat which meet their dietary needs.

<img src = "https://i.ibb.co/vQ8R5kP/eatable-screenshot.png" >

## How It's Made:

**Frontend - Tailwind, Bootstrap, HTML5; Backend - MVC arcitecture, MongoDB, Node.js, EJS, Passport.js**
<br>
A user is able to create their own username and password. Passwords are hashed for privacy. Once logged in they are able to access their own profile which has their previously uploaded photos. These photos are also in the network feed. When a photo is selected, users are shown a detailed page with the title of the photo, it's description, any tags, they can like the photo, and the owner of the photo can delete it. Photos can also be commented on by users.  


## Optimizations

There are two major updates that will be implemented. First, when a user submits a photo, included in the post request will be the location of the place where the photo was taken. I will also implement a feature where users can populate their feed with items from tags that they select 

## Lessons Learned:

This is the first work where most of the user interface and logic happens on the backend. There is no frontend javasctipt and quite minimal CSS. This improves the loading time of the pages. This was also the first time implementing method override in order to make changes to the DOM without using frontend JS. THere are also significant routes, and they will only increase as more features are added. 
