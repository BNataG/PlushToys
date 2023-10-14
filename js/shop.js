$(document).ready(function() {
	
	$('.add-to-busket-block').hide();
	
	
	$('.add-to-busket-btn').on('click', function() {
		$('.add-to-busket-block').show();
		$('.count-input').val("0");
	});
	
	$('.btn-plus').on('click', function() {
	var a; 
	a= parseInt(($('.count-input').val()))+1;
		$('.count-input').val(a);
	});

	$('.btn-minus').on('click', function() {
	var a; 
	a= parseInt(($('.count-input').val()))-1;
	
		if(a>=0){
		$('.count-input').val(a);
		}
		else{
			a=0;
		}
	});
	
	$('.btn-close').on('click', function() {
	$('.add-to-busket-block').hide();
	});
	
	$('.close').on('click', function() {
	$('.add-to-busket-block').hide();
	});
	
	let cart = new Array();
	cart=[];
	
	$('.ok-1').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(0, a);
	});
	$('.ok-2').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(1, a);
	});
		$('.ok-3').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(2, a);
	});
	$('.ok-4').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(3, a);
	});
		$('.ok-5').on('click', function() {
		var a = $('.count-input').val();
		AddToCard(4, a);
	});
	
	
	function AddToCard(n, amount){
		if(amount>0) 
		{
			cart[n]=amount; 
		}
	}

	function addRow() {
		for(let i=0; i<cart.length; i++){
		
		if(cart[i]>0){
		/*	document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product"></input>
			<input readonly class="amount"></input>
			</div>`      
			) */
	
			switch(i) {
				case 0:
					//var t = "Мишка Тедди";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="product0"></input>
			<input readonly class="amount0"></input>
			</div>`)
			$('.product0').val("Мишка Тедди");
			$('.amount0').val(cart[i]);
					break;

				case 1: 
					//var t = "Зайчик Банни";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="Мишка Тедди"></input>
			<input readonly class="amount1"></input>
			</div>`)
			$('.Мишка Тедди').val("Зайчик Банни");
			$('.amount1').val(cart[i]);
					break;
		
				case 2:
					//var t = "Гусь-обнимусь";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="Зайчик Банни"></input>
			<input readonly class="amount2"></input>
			</div>`)
			$('.Зайчик Банни').val("Гусь-обнимусь");
			$('.amount2').val(cart[i]);
					break;
			
				case 3:
					//var t = "Кот-батон";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="Гусь-обнимусь"></input>
			<input readonly class="amount3"></input>
			</div>`)
			$('.Гусь-обнимусь').val("Кот-батон");
			$('.amount3').val(cart[i]);
					break;
			
				case 4:
					//var t = "Стич";
					document.querySelector('.cart-body').insertAdjacentHTML(
			'afterbegin',
			`<div class="row">
			<input readonly class="Кот-батон"></input>
			<input readonly class="amount4"></input>
			</div>`)
			$('.Кот-батон').val("Стич");
			$('.amount4').val(cart[i]);
					break;

				default:
		
				break;
			}
		//$('.product').val(t);
		//$('.amount').val(cart[i]);
		}
		}
	}
	
	window.clearCart = function clearCart(){
		for(let i=0; i<cart.length; i++){
			cart[i]=0;
		}
	}
	$('.cart-link').on('click', function(){
		console.log(cart);
		$('.cart-body').html('');
		addRow();
	});
	
	$('.btn-order').on('click', function() {
		//console.log(cart.length);
		for(let i=0; i<cart.length; i++){
		if(cart[i] != null){
			if(cart[i] >0) {
			var product_n = i;
			var amount = cart[i];
				$.ajax({
					type: "POST",
                    url:'/../php/insert.php',
                    method:'POST',
                    data:{
                        product_n:product_n,
                        amount:amount
                    },
                   success:function(data){
                       alert(data);
                   }
                });
			}
		}
		}
	});
	
});
