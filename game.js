const game = ()=>{
	let pScore = 0;
	let bScore = 0;

	const startGame = ()=>{
		const playBtn = document.querySelector('.play-button');
		const introScreen = document.querySelector('.intro');
		const matchScreen = document.querySelector('.match');

		playBtn.addEventListener('click', ()=>{
			introScreen.classList.add('fadeOut');
			matchScreen.classList.add('fadeIn');
		});
	}//start game ends


	//Play Match
	const playMatch = ()=>{
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.player-hand');
		const botHand = document.querySelector('.bot-hand');

		const hands = document.querySelectorAll('.hands img');
		hands.forEach(hand=>{
			hand.addEventListener("animationend",function(){
				this.style.animation = '';
			});

		});

		//For Bot Options
		const botOptions = ['rock','paper','scissors'];

		options.forEach(option=>{
			option.addEventListener('click',function(){
			//Bot Choice
			const randomNumber = Math.floor(Math.random()*3);
			const botChoice = botOptions[randomNumber];
			console.log('YO');
			console.log(this.textContent);
			console.log(botChoice);

			setTimeout(()=>{
				//Call the compare function
				compare(this.textContent,botChoice);

				//Update Images
				playerHand.src = `./${this.textContent}.png`;
				botHand.src = `./${botChoice}.png`;

			},2000)
			
			//Animation
			playerHand.style.animation = 'shakePlayer 2s ease';
			botHand.style.animation = 'shakeBot 2s ease';
			});
		});

	}//Play Match Ends

	const updateScore = ()=>{
		const playerScore = document.querySelector('.player-score p');
		const botScore = document.querySelector('.bot-score p');
		playerScore.textContent = pScore;
		botScore.textContent = bScore;
	}


	//Comparision Function
	const compare =(playerChoice, botChoice)=>{
		//Updates Text
		const result = document.querySelector('.result');
		//Checking For A Tie
		if(playerChoice===botChoice){
			result.textContent = 'It is a Tie!'
			return;
		}
		//Check for rock
		if(playerChoice==='rock'){
			if(botChoice==='scissors'){
				result.textContent = "You Win, Hooray!";
				pScore++;
				updateScore();
				return;
			}else{
				result.textContent = "Bot Wins!";
				bScore++;
				updateScore();
				return;
			}
		}

		//Check For paper
		if(playerChoice==='paper'){
			if(botChoice==='rock'){
				result.textContent = "You Win, Hooray!";
				pScore++;
				updateScore();
				return;
			}else{
				result.textContent = "Bot Wins!";
				bScore++;
				updateScore();
				return;
			}
		}

		//Check for scissors
		if(playerChoice==='scissors'){
			if(botChoice==='paper'){
				result.textContent = "You Win, Hooray!";
				pScore++;
				updateScore();
				return;
			}else{
				result.textContent = "Bot Wins!";
				bScore++;
				updateScore();
				return;
			}
		}		
	}; //Compare Ends

	//Call Functions
	startGame();
	playMatch();
}

//Calling the main function
game();