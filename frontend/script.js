let display = document.querySelector('#display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map (button => {
    button.addEventListener('click', (e) => {
       
        switch(e.target.innerText) {                          //The target event property returns the element that triggered the event
            case 'C':                                         //Without the target, our event function wont dispay clicked cases
                display.innerText = '';
                break;

            case '←': 
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;

            case '=':  
                try {                                         //This is the most interesting functionality.
                display.innerText = eval(display.innerText);  //eval takes a string as a param and executes it like a Javascript code 
                } catch {                                     //eval evaluates correctly a string valid mathematical operation
                    display.innerText = 'Invalid Expression!'; //Enclosing the eval in the try and catch block takes care of any non mathematical operation
                }

                break;                                        

            default: display.innerText += e.target.innerText;  //Adds the innerText of the button to the innerText of the display by DEFAULT
        }
    })
})