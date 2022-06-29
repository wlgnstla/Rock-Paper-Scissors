function computerPlay()
{
    let choices = ["Rock", "Paper","Scissors"];
    let computer_response = choices.at(Math.floor(Math.random() * 3));
    
    return computer_response;
}

function playRound(playerSelection, computerSelection)
{
    let computer_choice = computerSelection.toLowerCase();
    let player_choice = playerSelection.toLowerCase();
    let decision_val;
    let result;

    if(player_choice === "rock")
    {
        if(computer_choice === "rock")
        {
            decision_val = 2;
        }
        else if(computer_choice === "scissors")
        {
            decision_val = 0;
        }
        else
        {
            decision_val = 1;
        }
    }

    else if(player_choice === "paper")
    {
        if(computer_choice === "paper")
        {
            decision_val = 2;
        }
        else if(computer_choice === "rock")
        {
            decision_val = 0;
        }
        else
        {
            decision_val = 1;
        }
    }

    else
    {
       if(computer_choice === "scissors")
        {
            decision_val = 2;
        }
        else if(computer_choice === "paper")
        {
            decision_val = 0;
        }
        else
        {
            decision_val = 1;
        } 
    }

    switch(decision_val)
    {
        case 0:
            result = "You have won this round! Congratulations."
            break;
        
        case 1:
            result = "The computer has won this round. Better luck next time."
            break;
        
        case 2:
            result = "You have tied with the computer."
            break;
    }

    return result;
}

/* USED FOR TESTING 
-----------------------
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
-----------------------
*/


function game()
{
    
    let player_score_count = 0;
    let computer_score_count = 0;
    let final_message = "";
    
    if(player_score_count > computer_score_count)
    {
        final_message = "YOU WON THIS GAME!";
    }
    else(player_score_count < computer_score_count)
    {
        final_message = "THE COMPUTER HAS WON THIS GAME...";
    }

    return final_message;

}



/* updates AFTER LEARNING DOM MANIPULATION */


const buttons = document.querySelectorAll('button');

let num_your_score = 0;
let num_cpu_score = 0;
let num_ties = 0;

buttons.forEach(choice => choice.addEventListener('click', () => {
 

    let decision = choice.textContent;

    const your_score_ref = document.querySelector('.your_running_score');
    const cpu_score_ref = document.querySelector('.cpu_running_score');
    const tie_score_ref = document.querySelector('.tie_score');


    let result_message = playRound(decision, computerPlay());

    if(result_message.includes('!'))
    {
        num_your_score += 1;
        your_score_ref.innerText = `Your Score: ${num_your_score}`;
    }

    else if(result_message.includes('luck'))
    {
        num_cpu_score += 1;
        cpu_score_ref.innerText = `CPU Score: ${num_cpu_score}`;
    }

    else
    {
        num_ties += 1;
        tie_score_ref.innerText = `Ties: ${num_ties}`;

    }

    if(num_your_score === 5)
    {
        alert("YOU ARE THE VICTORIOUS ONE!WOOHOOO!");
    }
    else if(num_cpu_score === 5)
    {
        alert("The COMPUTER HAS WON THIS GAME... TRY AGAIN!!!!");
    }
 


    const result_page = document.querySelector('.container');
    const round_result_msg = document.createElement('p');
    round_result_msg.textContent = result_message;
    result_page.appendChild(round_result_msg); 


})



);




