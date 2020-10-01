console.log('Hello from js');

$(document).ready(onReady);

function onReady(){
        console.log('hello from jquery');
        // add event listeners aka click event
        //get data to display
        $('#clickMe').on('click', buttonClicked);     
}

function buttonClicked(){
    console.log("I'm clicked!!!!!");
    
}


function hello(){
    console.log('helloooooo');  
}

function goodbye(){
    console.log('goodbye');
}


// event #1

hello();
goodbye();
hello();
goodbye();
