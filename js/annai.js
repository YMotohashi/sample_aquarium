//曜日選択のイベントリスナー
document.getElementById('btn').addEventListener('click',keisan);

function keisan(){
	let adultPrice = 0;
	let childPrice = 0;
	let totalPrice = 0;
	
	let day = document.querySelectorAll('#form1 input');

	let aNum = document.getElementById("a_num_id").value;
	let cNum = document.getElementById("c_num_id").value;
	
	if(day[0].checked){
		
		adultPrice = aNum * 2440;
		childPrice = cNum * 1500;
		
	}else{
		adultPrice = aNum * 2800;
		childPrice = cNum * 1700;
	}
	
	totalPrice = adultPrice + childPrice;
	alert(totalPrice);
	
	document.getElementById('total_id').textContent = totalPrice;
	//document.getElementById('total_id').setAttribute('type',totalPrice);
}
