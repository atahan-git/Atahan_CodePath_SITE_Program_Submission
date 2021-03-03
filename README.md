# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Atahan Ozturk**

Time spent: **1h30m** spent in total

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tab), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Ability to change difficulty by increasing the sequence length.
- [x] Display the progress, difficulty, and mistake count.
- [x] Keep the player from pressing the buttons as the computer is showing the pattern.

## Video Walkthrough

![video Walkthrough](https://imgur.com/1JXDH7i.gif)

GIF created with [ScreenToGif](https://www.screentogif.com/).

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used https://www.canva.com/colors/color-wheel/ to pick the button colors.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I did not encounter any specific challenge as I already had experience with javascript basics. I had to remember a lot of it again though, since I hadn't used it for a while. I used google searches liberaly to look up things like how to create and populate an array in javascript, or how to edit a text using javascript.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I'm curious as to how web development scales. I imagine real web pages have hundreds of different classes and functionality to go with it. Do they all use a single css file? Are there applications that automate parts or all of this process? Do people "re-invent the wheel" and create a lot of the same tags&designs every time they make a new website?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would add ability to change the number of buttons as another difficulty setting. For this the buttons will probably be need to created dynamically through code, and everything like the color of the buttons or the sound they make will also need to be dynamically generated. After that to make it more interesting there can be different "levels" where the button count, sequence count, and button layout may change. Some levels you may need to remember a short sequence really fast, in other levels you may be able to see the same long sequence twice before having to put it in yourself etc.



## License

    Copyright [Atahan Ozturk]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.