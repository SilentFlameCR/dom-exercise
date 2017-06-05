/*global alert,console*/

/*Task 1

1. Access HTML element with id tag-line.
2. Access all headings that belong to div with the class name bg-main-content.
3. Create the variable collect and assign it with content of tag-line.
4. Loop through the array of headings and append the content of each heading to variable collect
5. After the loop, use alert to print collect*/

var tagLine = document.getElementById("tag-line");
var headings = document.querySelectorAll(".bg-main-content h2");
var collect = tagLine.innerHTML + "\n---------------------------------------------\n\n";
var i;
for (i = 0; i < headings.length; i += 1) {
    collect += headings[i].innerHTML + "\n"; 
}

alert(collect);

/*Task 2

1. Access 13th div with class name box that belongs to div with the class name bg-main-content. 
2. You can name the variable when_to_launch.
3. Use property children to "scoop" in array all HTML elements that belong to that div.
4. Create the variable collect and assign it with content of heading that belongs to gotten array.
5. Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
6. After the loop, use alert to print collect*/

var when_to_launch = document.querySelectorAll(".bg-main-content .box")[12];
console.log(when_to_launch);

var children = when_to_launch.children;
console.log(children);

var collect = document.querySelectorAll(".bg-main-content .box h2")[12].innerHTML + "\n-------------------\n\n";
console.log(collect);

var i;
for (i = 1; i < children.length; i += 1) {
    collect += children[i].innerHTML + "\n\n";
}

alert(collect);