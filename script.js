window.addEventListener('DOMContentLoaded', init);

function init(){
    let addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", addChange);

    let resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", resetChange);

    let setBtn = document.getElementById("setCount");
    setBtn.addEventListener("click", setCount);
	
	let removeBtn = document.getElementById("removeBtn");
    removeBtn.addEventListener("click", removeChange);
}

function removeChange(){
	let num = document.getElementById("count");
	if(parseInt(num.value) - 1 < 0) return;
    num.value = parseInt(num.value) - 1;
}

function setCount(){
    let num = document.getElementById("count");
    let currCount = document.getElementById("currentCount");
	if (currCount.value.match(/^[0-9]*$/)){
        num.value = currCount.value;
    }
	else {
		currCount.value = "";
		num.style.color = "red";
		num.value = "error";
		currCount.placeholder = "Must be a number";
		
		setTimeout(invalidCount, 2000);
	}
}

function invalidCount(){
	let num = document.getElementById("count");
	
	num.style.color = "black";
    num.value = 0;
}

function resetChange(){
    let num = document.getElementById("count");

    num.value = 0;
}

function addChange(){
    let num = document.getElementById("count");

    num.value = parseInt(num.value) + 1;
}