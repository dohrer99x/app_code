/*
*Created By: Jonathan Dohrer
*Date Created: 1/9/2020
*Date Last Modified: 1/13/2020
*/

function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function playGame(startingBet) {
	var gameMoney = startingBet;
	var highestAmt = startingBet;
	var highestAmtRoll = 0;
	var totalRolls = 0;
	var gameOver = false;
	
	var dice1 = 0;
	var dice2 = 0;
	
	do{
		dice1 = rollDice();
		dice2 = rollDice();
		
		if (dice1 + dice2 == 7){
			gameMoney = gameMoney + 4;
			if (gameMoney > highestAmt) {
				highestAmt = gameMoney;
				highestAmtRoll = totalRolls;
			}
		} else {
			gameMoney--;
			if (gameMoney <= 0) {
				gameOver = true;
			}
		}
		
		totalRolls++;
		
	} while (!gameOver);
	
	document.getElementById("resultsHeader").style.display = "block";
	document.getElementById("results").style.display = "table";
	document.getElementById("startingBet").innerText = "$" + startingBet + ".00";
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("highestAmt").innerText = "$" + highestAmt + ".00";
	document.getElementById("highestAmtRoll").innerText = highestAmtRoll;
}

function clearErrors() {
	for (var loopCounter = 0; loopCounter < document.forms["luckySevens"].elements.length; loopCounter++) {
		if (document.forms["luckySevens"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
			document.forms["luckySevens"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}

function validateForm() {
	clearErrors();
	var bet = document.forms["luckySevens"]["Bet"].value;
	
	if (bet == "" || isNaN(bet)) {
		alert("Starting bet must be filled in with a number.");
		document.forms["luckySevens"]["Bet"].parentElement.className = "form-group has-error";
		return false;
	} else if (bet <= 0) {
		alert("Starting bet must be more than 0.");
		document.forms["luckySevens"]["Bet"].parentElement.className = "form-group has-error";
		return false;
	} else {
		playGame(bet);
	}
	
	return false;
}
