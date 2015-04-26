function fizzBuzz (integer) { 
	integer = $("#input").val();
	for (var i = 1; i <= integer; i++) { 
		if (i%15==0) {
			$("#output").append("FizzBuzz<br>");
		}
		else if (i%3==0) { 
			$("#output").append("Fizz<br>"); 
		}
		else if (i%5==0) { 
			$("#output").append("Buzz<br>")
		}
		else { 
			$("#output").append(i + "<br>")
		}
	}
	$("#input").val("");
}


function clear () { 
	$("#output").empty();
}

$(document).on("ready", function() { 
	$("#print").on("click", fizzBuzz);
	$("#clear").on("click", clear);
});
