





var ranNum = Math.floor(Math.random() * 101 + 19);


$("#random").html(ranNum);

$(".crystal").click(function(){

//console.log(Math.random());
var value = parseInt($(this).attr("data-random"), 10);

console.log(value);

});

function setupGame (){

var cryVal = ranCry();
 
 console.log(cryVal);
 $("#red").attr("data-random", ranCry())

};

function ranCry(){

var newNumb = Math.floor(Math.random() * 12 + 1);

return newNumb;

};


setupGame();



//console.log(ranNum);






// //Randomize the array


// for (var i = 0; i < ranValu; i++);
     

// 	//console.log(ranValu

// //Create and empty array for user guesses 



// //Event listener for number choices





// //////////

// wrap the crystal in a div
// create and event listener

// open data get the targetNumber

// Create object array with key pair of number

// targe the id 

// var targetId = e.target.id

// create varibles "player total scorce" plus equal to new number 
//  if randome number ===p players total scorce
//  	player scorre == 0


//  else if ( player total score > random number ) 
//  	alert (you Lose

//  	alert (you won)
// ////////////