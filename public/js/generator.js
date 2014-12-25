	// alert('generater99');
	$('.spinner').hide();

// $(document).ready(function(){
// 	$('body').fadeIn(200, "swing");
// });

$('#generate').click(function(){
	$('#operation').text(
		'db.allGoods.insert({goodID:"' + $('#goodsID').val() +
		'", categoryID:"' + $('#categoryID').val() +
		'", outerID:"' + $('#outerID').val() +
		'", tsc:"' + $('#tsc').val() +
		'", barcode:"' + $('#barcode').val() +
		'", name:"' + $('#name').val() +
		'", categoryName:"' + $('#categoryName').val() +
		'", price:"' + $('#price').val() +
		'", shopPrice:"' + $('#shopPrice').val() +
		'", standardPrice:"' + $('#standardPrice').val() +
		'", desc:"' + $('#desc').val() +
		'", smallImgURL:"' + $('#smallImgURL').val() +
		'", bigImgURL:"' + $('#bigImgURL').val() +
		'", modified:"' + $('#modified').val() +
		'", created:"' + $('#created').val() +
		'", status:"' + $('#status').val() +
		'", level:"' + $('#level').val() +
		'", rateNum:"' + $('#rateNum').val() +
		'", saleNum:"' + $('#saleNum').val() +
		'", collectNum:"' + $('#collectNum').val() +
		'", stock:"' + $('#stock').val() +
		'", verticalMarket:"' + $('#verticalMarket').val() +
		'", binds:"' + $('#binds').val() +
		'", saleProps:"' + $('#saleProps').val() +
		'", propsStr:"' + $('#propsStr').val() +
		'", customerProps:"' + $('#customerProps').val() +
		'", publicKey:"' + $('#publicKey').val() +
		'"})'
	);
});


$('#ggetGoodsByName').click(function(){
	// alert('getGoodsByName!');
	$('.spinner').show();
	$('#goodsGridView').empty();
	var object = {};
	object.goodsName = $('#queryGoodsName').val();

	$.post("/getGoodsByName", object, function(data){
		$('.spinner').hide();

		console.log(data);
		var goodItem = '<div class="col-xs-6 col-sm-3 placeholder">' +
			'<img src="' + data.bigImgURL + '" class="img-responsive" alt="Generic placeholder thumbnail">' +
			'<h3>' + data.name + '</h3>' + 
			'<h4>ID: '+ data.goodID + '</h4>' + 
			'<h5>¥' + data.price + '</h5>' + 
			'<p>存货量:' + data.stock + '</p>' +
			'<span class="text-muted">' + data.desc + '</span>' +
			'</div>';
		// $('#goodsGridView').empty();
		if (data.goodID == undefined){
			$('#goodsGridView').append('<h2 style="color:#CA054D">查无此物！</h2>');
		}
		else{
			$('#goodsGridView').append(goodItem);
		}
		// $('#queryGoodsNameResult').text(JSON.stringify(data));
		//alert('yes call back in generate.js');
	});
});


$('#getGoodsByID').click(function(){
	// alert('test!');
	$('.spinner').show();
	$('#goodsGridView').empty();
	var object = {};
	object.goodID = $('#queryGoodsID').val();
	$.post("/getGoodsByID", object, function(data){
		$('.spinner').hide();
		console.log(data);
		var goodItem = '<div class="col-xs-6 col-sm-3 placeholder">' +
			'<img src="' + data.bigImgURL + '" class="img-responsive" alt="Generic placeholder thumbnail">' +
			'<h3>' + data.name + '</h3>' + 
			'<h4>ID: '+ data.goodID + '</h4>' + 
			'<h5>¥' + data.price + '</h5>' + 
			'<p>存货量:' + data.stock + '</p>' +
			'<span class="text-muted">' + data.desc + '</span>' +
			'</div>';

		
		if (data.name == undefined){
			$('#goodsGridView').append('<h2 style="color:#CA054D">查无此物！</h2>');
		}
		else{
			$('#goodsGridView').append(goodItem);
		}
		// $('#queryGoodsIDResult').text(JSON.stringify(data));
		//alert('yes call back in generate.js');
	});
});

$('#ggetGoodsListByCategory').click(function(){
	alert('getGoodsListByCategory!');
	var object = {};
	object.categoryName = $('#queryCategory').val();

	$.post("/getGoodsListByCategory", object, function(data){
		console.log(data);

		// $('#queryCategoryResult').text(JSON.stringify(data));
		//alert('yes call back in generate.js');
	});
});

	// alert('hey?');



$('#ddeleteGoodsByID').click(function(){
	var object = {};
	object.deletedID = $('#ddeletedID').val();

	$.post("/deleteGoodsByID", object, function(data){
		console.log(data);
		alert('call back deleteGoodsByID!');
	});
});

$('#ddeleteGoodsByName').click(function(){
	var object = {};
	object.deletedName = $('#ddeletedName').val();

	$.post("/deleteGoodsByName", object, function(data){
		console.log(data);
		alert('call back deletedName!');
	});
});


// $('#modifyGoodsByName').click(function(){
	
// });

// $('#modifyGoodsByID').click(function(){
	
// });

$('#toModifyPage').click(function(){
	$('body').fadeOut(100, 'swing');
});
