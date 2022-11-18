# Javascript Study Quiz

## Description

A broswer based quiz to test javascript knowledge. It proceeds by calling functions to display the next question when an answer is correct, and reduces time remaining and highlights an incorrect answer. Writing the code for this really helped expand my knowledge of functional programming, how one function leads into another and can refer to another to determine timing and order of operations. I also set myself the additional challenge of doing the body of the HTML entirely through the DOM in Javascript. This helped me to see how it is a flexible tool with the ability to add and remove elements, but also how it can be beneficial to have embedded elements in the html as it's then much easier to refer to them. It also helped me see how local sotrage can be used to hold data and display it on a separate page.

## Installation

N/A

## Useage

Website is deployed at the following address: https://meduion.github.io/javascript-study-quiz/

Screenshot of completed webpage:

![Javascript Quiz Screenshot](/assets/images/enigma-machine.jpeg)

## Credits
  
N/A
  
## License
  
Please refer to the LICENSE in the repo.

## Bugs

The project still has one known bug. The score penalty is applied double on second question for wrong answer, once on right answer when it shouldn't be applied and is made -10 higher for each subsequent question. I know this is because the addeventlistener is within the handleAnswer() function and it gets applied again for every question that happens but didn't have time to refactor to remove this before handing in at the deadline.
