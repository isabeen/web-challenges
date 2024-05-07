console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "Sports Day";
const text = "Fun, Games, Victory!";
let numberOfLikes = 2000;
const postedBy = "Sabeen";
const isReported = false;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("Title:", title);
console.log("Description:", text);
console.log("Number of likes:", numberOfLikes);
console.log("Posted by: ", postedBy);
console.log("Is the post reported?", isReported);
numberOfLikes++;
console.log("Updated number of likes:", numberOfLikes);

// --^-- write your code here --^--
