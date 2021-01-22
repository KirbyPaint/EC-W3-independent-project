# _Mr. Roboger's Neighborhood_

#### _Website to demonstrate knowledge of loops, test-driven-design, and separating business/user interface logic_

#### By _**Ash Porter (KirbyPaint)**_

## Description

_The purpose of this website is to demonstrate knowledge of looping with Javascript. It takes a user's numerical input and creates a "sentence" based on certain conditions._

How it functions:
The user inputs a number. This number will then become a sentence, starting at zero, and running until the user's input number is reached. For example, if the user enters "10" for their input, the code will output the sentence, "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10".\
Then, the sentence is modified based on certain criteria. Any time there is a "1" in the sentence, that entire number becomes the word "Beep." In the example above, both "1" and "10" will become the word "Beep."\
Now, any time there is a "2" in the sentence, that entire number becomes the word "Boop." In the example above, "2" will become the word "Boop." The number 2 condition will supercede the number 1 condition. For example, the number "12" would not render as "Beep," but as "Boop."\
Finally, any time there is a "3" in the sentence, that entire number becomes the phrase "Won't you be my neighbor?" In the example above, "3" will become the phrase "Won't you be my neighbor?" The number 3 condition will supercede both the number 2 and 1 conditions. For example, the numbers "23," "13," and "1023," would not render as "Beep" or "Boop," but rather as "Won't you be my neighbor?"

## Setup/Installation Requirements

This page has been tested with both the most recent versions of Mozilla Firefox and Google Chrome

_Choose your preferred way to Install:_

Using Git cloning (Most complete option):
* Open Git or your preferred terminal
* Navigate to your directory for Git projects (not within an existing project)
* Type the following: git clone https://github.com/KirbyPaint/EC-W3-independent-project.git

Download the project as a ZIP folder:
* Navigate to the project's page here: https://github.com/KirbyPaint/EC-W3-independent-project
* Look for the green  ![code button](img/code.png?raw=true "code button")  button
* Click the button and you will see a drop-down menu. Look for the "Download ZIP" button
* Save your download locally and extract the files to a directory of your choice
* Double-click the file named "index.html" to view the page

View the project in your browser (Most convenient option):
* Navigate to this link to view in your browser: https://kirbypaint.github.io/EC-W3-independent-project/

## Specifications

Describe: arrayTest(input)\
Test: "Function will test array for the following conditions:"\
1: "If array element contains the number 1, replace with Beep UNLESS"\
2: "If array element contains the number 2, replace with Boop UNLESS"\
3: "If array element contains the number 3, replace with Won't you be my neighbor?"\
Code: const outputArray = arrayTest(input);\
Expect(arrayTest(inputArray[5]).toEqual(0, Beep, Boop, Won't you be my neighbor?, 4, 5);
Status: Passing

Describe: arrayTestName(input, name)\
Test: "Functions identical to arrayTest(), with the addition of adding the user-inputted name to the end of "Won't you be my neighbor?"
Code: const outputArray = arrayTestName(input, name);\
Expect(arrayTestName(inputArray[5], Ash).toEqual(0, Beep, Boop, Won't you be my neighbor, Ash?, 4, 5);
Status: Passing

Describe: lineByLine(input)\
Test: "Function will output the array sentence on separate lines, rather than in one line."\
Code: $(".return").append(lineByLine(input));\
Expect(lineByLine(inputArray[5]).toEqual(\
0\
Beep\
Boop\
Won't you be my neighbor?\
4\
5\
);\
Status: Passing

Describe: lineByLineName(input, name)\
Test: "Function will output the array sentence on separate lines, rather than in one line, and will take user's name and add to the end of "Won't you be my neighbor?"\
Code: $(".return").append(lineByLine(input));\
Expect(lineByLine(inputArray[5], Ash).toEqual(\
0\
Beep\
Boop\
Won't you be my neighbor?\
4\
5\
);\
Status: FAILING

Describe: reverse(input)\
Test: "Function will reverse the expected output sentence:"\
Code: const outputArray = reverse(inputArray);\
Expect(reverse(inputArray[5]).toEqual(5, 4, Won't you be my neighbor?, Boop, Beep, 0);
Status: Passing

## Known Bugs

## Support and contact details

_Discord: @KirbyPaint#0751_

## Technologies Used

_HTML, CSS (Bootstrap), JavaScript (jQuery)_

### License Information

_GNU Public License_\

Copyright (c) 2021 **_KirbyPaint_**