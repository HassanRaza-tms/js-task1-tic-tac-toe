const checking = ["0", "0", "0", "0", "0", "0", "0", "0", "0"]
let i = 0;
let classname;
let merged = ""
let selected_class = ""
let winner = "none"
let rcvdindex;


function getclass() {

    // get class of the div clicked
    classname = event.target.className
    // console.log("index", i) // list mai changes krne k liye index check kr raha tha
    console.log(classname) // class sahi aa bhi rahi hai yani

    // change in such a way that it can be given inside querySelector
    merged = "." + classname

    // div selected for changing text and colour of div
    selected_class = document.querySelector(merged)
    console.log(selected_class)

    if (i % 2 == 0) {
        // Double click validation
        if(selected_class.innerHTML == "✔" || selected_class.innerHTML == "❌"){
            // console.log("I Before double click",i) // for verofying logic
            alert("This box is already occupied")
            i = i-1 ;
            // console.log("I After double click",i) // for verofying logic
        }
        else{
            selected_class.innerHTML = "✔" 
            // to make changes in checking that is a list
            rcvdindex = Number(merged[2]) 
            checking[rcvdindex] = "p1"
            console.log(i)
        }

        
        

        // to decide if someone has won or not.
        if ( (checking[0] != 0 && checking[0] == checking[1] && checking[1] == checking[2]) || (checking[0] != 0 && checking[0] == checking[3] && checking[3] == checking[6]) || (checking[0] != 0 && checking[0] == checking[4] && checking[4] == checking[8]) || (checking[1] != 0 && checking[1] == checking[4] && checking[4] == checking[7]) || (checking[2] != 0 && checking[2] == checking[4] && checking[4] == checking[6]) || (checking[2] != 0 && checking[2] == checking[5] && checking[5] == checking[8]) || (checking[3] != 0 && checking[3] == checking[4] && checking[4] == checking[5]) || (checking[6] != 0 && checking[6] == checking[7] && checking[7] == checking[8]) ) {
            let pop_selector = document.querySelector('.pop-up')
            pop_selector.style.display = 'flex'

            let text_to_changed = document.querySelector('p')
            text_to_changed.innerHTML = 'Player 1 Won!'
            winner = "player1"

            // reloads file on pop up closure

            pop_selector.onclick = () => {
                location.reload();
            }
        }


    }
    else {
        // text and colour to be inputed
        if(selected_class.innerHTML == "✔" || selected_class.innerHTML == "❌"){
            // console.log("I Before double click",i)  // for verofying logic
            alert("This box is already occupied")
            i = i - 1;
            // console.log("I After double click",i) // for verofying logic
        }
        else{
            selected_class.innerHTML = "❌" 
            // to make changes in checking that is a list
            rcvdindex = Number(merged[2])
            checking[rcvdindex] = "p2"

        }
        
 
        
        // to decide if someone has won or not.
        if ( (checking[0] != 0 && checking[0] == checking[1] && checking[1] == checking[2]) || (checking[0] != 0 && checking[0] == checking[3] && checking[3] == checking[6]) || (checking[0] != 0 && checking[0] == checking[4] && checking[4] == checking[8]) || (checking[1] != 0 && checking[1] == checking[4] && checking[4] == checking[7]) || (checking[2] != 0 && checking[2] == checking[4] && checking[4] == checking[6]) || (checking[2] != 0 && checking[2] == checking[5] && checking[5] == checking[8]) || (checking[3] != 0 && checking[3] == checking[4] && checking[4] == checking[5]) || (checking[6] != 0 && checking[6] == checking[7] && checking[7] == checking[8]) ) {
            
            let pop_selector = document.querySelector('.pop-up')
            pop_selector.style.display = 'flex'

            let text_to_changed = document.querySelector('p')
            text_to_changed.innerHTML = 'Player 2 Won!'
            winner = "player2"
            

            pop_selector.onclick = () => {

                // reloads file on pop up closure
                    location.reload();
            }
            
        }

    }


    i++;

    if(i==9 && winner=="none"){
        let pop_selector = document.querySelector('.pop-up')
        pop_selector.style.display = 'flex'
        
        let text_to_changed = document.querySelector('p')
        text_to_changed.innerHTML = 'Match has been drawn'

        pop_selector.onclick = () => {
            // reloads file on pop up closure
                location.reload();
        }
    }

}


