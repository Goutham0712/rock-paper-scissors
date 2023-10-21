function Game() {
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3

  // Define image filenames based on the random numbers
  let randomImageName1;
  let randomImageName2;

  // Assign the appropriate image filenames based on the random numbers
  if (random1 === 1) {
    randomImageName1 = "rock.png";
  } else if (random1 === 2) {
    randomImageName1 = "scissors.png";
  } else {
    randomImageName1 = "paper.png";
  }

  if (random2 === 1) {
    randomImageName2 = "rock.png";
  } else if (random2 === 2) {
    randomImageName2 = "scissors.png";
  } else {
    randomImageName2 = "paper.png";
  }

  // Generate image sources
  let ImageSource1 = "img/" + randomImageName1;
  let ImageSource2 = "img/" + randomImageName2;

  // Update the images
  document.querySelectorAll("img")[0].setAttribute("src", ImageSource1);
  document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);

  // Determine the winner based on the game rules
  let result;
  if (random1 === random2) {
    result = "It's a tie!";
  } else if (
    (random1 === 1 && random2 === 2) ||
    (random1 === 2 && random2 === 3) ||
    (random1 === 3 && random2 === 1)
  ) {
    result = "Player 1 Wins!";
  } else {
    result = "Player 2 Wins!";
  }

  // Display the result
  document.querySelector("h1").innerHTML = result;
}
