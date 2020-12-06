let box = document.createElement("div");

let x = {
  top: 30,
  left: 30,
};

document.addEventListener("keydown", moveBox);
document.addEventListener("click", newBox);

function newBox() 
{
	document.body.appendChild(box);
}

function moveBox(e) 
{
	if(e.keyCode === 97)
	{
		x.left -= 10;
	}
	if(e.keyCode === 115) 
	{
		x.bottom -= 10;
	}
	if(e.keyCode === 100) 
	{
		x.right += 10;
	}
	if(e.keyCode === 119) 
	{
		x.top += 10;
	}
	
	box.style.top = x.top + "px";
	box.style.left = x.left + "px";
}
