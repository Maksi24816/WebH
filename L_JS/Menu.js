function SizeWindow () {
	const body = document.body;
	let Width = body.clientWidth;
	let Height = body.clientHeight;
 
	const Body = document.querySelector(".Body");

	if(Width/Height > 1.78){
		Body.style.width = Height * 1.77777777778 + "px"; 
		Body.style.height = "100%";
	} else {
		Body.style.width = "100%";
		Body.style.height = Width / 1.77777777778 + "px"; 
	}
}SizeWindow();

window.addEventListener('resize', (e) => {
	SizeWindow()
});

/////////

const ArrText = 
[
	[["Мне опять снился сон."]],
	[["Этот сон..."]],
	[["Каждую ночь одно и то же."]],
	[["Но наутро, как обычно, все забудется."]],
	[["Может быть, оно и к лучшему..."]],
	[["Останутся только туманные воспоминания о приоткрытых, словно приглашающих куда-то воротах, рядом с которыми в камне застыли два пионера."]],
	[["А еще странная девочка... ","которая постоянно спрашивает:"]]
]

/////////

const Main = document.querySelector('.Main');
Main.addEventListener('click', function(){
	const Game = document.querySelector('.Game');
	const Transition = document.querySelector('.Transition');
	Main.style.opacity = 0;

	setTimeout(function(){
		Transition.style.opacity = 0;
		Main.style.display = "none";
		setTimeout(function(){
			Transition.style.display = "none";
			Shah();
		},1000)
	},1000)
});



/////////



let NumShah = 0;
let NumArrShah = 0;
let TextAct = false;
const PText = document.getElementById('Text');

function Shah() {
	if (TextAct == false){
		if(NumArrShah == ArrText[NumShah][0].length){
			NumShah++;
			NumArrShah = 0;
			PText.textContent = "";
		}

		var re = new RegExp("\.", "g");
		var myArray = ArrText[NumShah][0][NumArrShah].match(re);
	
		let ForNumShah = NumShah;
		let ForNumArrShah = NumArrShah;

		TextAct = true;
		for(let x = 0; x < myArray.length; x++){
			setTimeout(function(){
				if(ForNumShah == NumShah && ForNumArrShah == NumArrShah && TextAct == true){
					PText.textContent = PText.textContent + myArray[x];
					if(x == myArray.length-1){
						TextAct = false;
						NumArrShah++;
					}
				}
			},50 * (x + 1))
		}
	} else{
		PText.textContent = "";

		for(let x = 0; x < NumArrShah + 1; x++){
			PText.textContent = PText.textContent + ArrText[NumShah][0][x];
		}
		NumArrShah++;
		TextAct = false;
	}
};

