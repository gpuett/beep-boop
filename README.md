# Beep Boop

#### A program that allows users to input a number and receive a range from 0 to the input. A message replaces all numbers that include the digits 1 or 0 or are divisible by 3.

#### By Garnett Puett

## Description

A website created with HTML, CSS, and JavaScript that outputs a message if one of three numbers is included in the input.

## Specifications

* The program will output a "Beep!" for all numbers in the range that includes 0
  * User Input: "0"
  * Output: ["Beep!"]
* The program will output a "Boop!"for all numbers in the range that include 1
  * User Input: "1"
  * Output: ["Beep!","Boop!"]
* The program will output a "I'm sorry, Dave. I'm afraid I can't do that." for all numbers in the range that are divisible by 3
  * User Input: "3"
  * Output: ["Beep!","Boop!", 2, "I'm sorry, Dave. I'm afraid I can't do that."]
* The program will prioritize the output associated with 1 over 0
  * User Input: "10"
  * Output: ["Beep!","Boop!",2,"I'm sorry, Dave. I'm afraid I can't do that.", 4,5,"I'm sorry, Dave. I'm afraid I can't do that.",7,8,"I'm sorry, Dave. I'm afraid I can't do that.","Boop!"]
* The program will prioritize the output associated with numbers divisible by 3 over 1
  * User Input: "12"
  * Output: ["Beep!","Boop!",2,"I'm sorry, Dave. I'm afraid I can't do that.", 4,5,"I'm sorry, Dave. I'm afraid I can't do that.",7,8,"I'm sorry, Dave. I'm afraid I can't do that.","Boop!","Boop!","I'm sorry, Dave. I'm afraid I can't do that."]
* The program will reverse the output when implemented
  * User input: "3, reverse click"
  * Output: ["I'm sorry, Dave. I'm afraid I can't do that.",2,"Boop!", "Beep!"]


## Setup/Installation Requirements
* Open browser and travel to <a href="https://gpuett.github.io/beep-boop/">this link</a>

## Known Bugs
* No known bugs at this time.

## Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery

## Support and contact details

_Please do not contact_

### License

*This software is licensed under the MIT license*

Copyright (c) 2018 **Garnett Puett**
