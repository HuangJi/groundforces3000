	// alert('generater99');
	$('.spinner').hide();
	// $('.selectpicker').selectpicker();
// $(document).ready(function(){
// 	$('body').fadeIn(200, "swing");
// });

$('#goodsGridView').mousemove(function(event){
	$('#goodsGridView').removeClass('animated tada');
});

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
		var goodItem = '<div class="col-xs-6 col-sm-3 placeholder targetGoods">' +
			'<img src="' + data.bigImgURL + '" class="img-responsive" alt="Generic placeholder thumbnail">' +
			'<h3>' + data.name + '</h3>' + 
			'<h4>ID: '+ data.goodID + '</h4>' + 
			'<h5>¥' + data.price + '</h5>' + 
			'<p>存货量:' + data.stock + '</p>' +
			'<span class="text-muted">' + data.desc + '</span>' +
			'</div>';
		// $('#goodsGridView').empty();
		if (data.goodID == undefined){
			$('#goodsGridView').append('<h2 style="color:#CA054D">查无此物！</h2>').addClass('animated tada');;
		}
		else{
			$('#goodsGridView').append(goodItem);
			$('.targetGoods').addClass('animated fadeInUp');
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
		var goodItem = '<div class="col-xs-6 col-sm-3 placeholder targetGoods">' +
			'<img src="' + data.bigImgURL + '" class="img-responsive" alt="Generic placeholder thumbnail">' +
			'<h3>' + data.name + '</h3>' + 
			'<h4>ID: '+ data.goodID + '</h4>' + 
			'<h5>¥' + data.price + '</h5>' + 
			'<p>存货量:' + data.stock + '</p>' +
			'<span class="text-muted">' + data.desc + '</span>' +
			'</div>';

		
		if (data.name == undefined){
			$('#goodsGridView').append('<h2 style="color:#CA054D">查无此物！</h2>').addClass('animated tada');;
		}
		else{
			$('#goodsGridView').append(goodItem);
			$('.targetGoods').addClass('animated fadeInUp');
		}
		// $('#queryGoodsIDResult').text(JSON.stringify(data));
		//alert('yes call back in generate.js');
	});
});
	// alert($('.selectpicker option:selected').text());

$('#ggetGoodsListByCategory').click(function(){
	$('.spinner').show();
	$('#goodsGridView').empty();
	// alert($('.selectpicker option:selected').text());
	var object = {};
	object.categoryName = $('.selectpicker option:selected').text();

	$.post("/getGoodsListByCategory", object, function(data){
		$('.spinner').hide();
		console.log(data.length);
		var goodItem = [];
		if (data.length == 0){
			$('#goodsGridView').append('<h2 style="color:#CA054D">查无此物！</h2>').addClass('animated tada');
		}
		else{
			for (var i = 0; i < data.length; i++) {
				goodItem[i] = '<div class="col-xs-6 col-sm-3 placeholder targetGoods">' +
				'<img src="' + data[i].bigImgURL + '" class="img-responsive" alt="Generic placeholder thumbnail">' +
				'<h3>' + data[i].name + '</h3>' + 
				'<h4>ID: '+ data[i].goodID + '</h4>' + 
				'<h5>¥' + data[i].price + '</h5>' + 
				'<p>存货量:' + data[i].stock + '</p>' +
				'<span class="text-muted">' + data[i].desc + '</span>' +
				'</div>';

				$('#goodsGridView').append(goodItem[i]);
				$('.targetGoods').addClass('animated fadeInUp');
			};
		}
		

		// $('#queryCategoryResult').text(JSON.stringify(data));
		//alert('yes call back in generate.js');
	});
});

	// alert('hey?');



$('#ddeleteGoodsByID').click(function(){
	
	$('#goodsGridView').empty();
	var object = {};
	object.deletedID = $('#ddeletedID').val();
	if (confirm('产品ID: ' + object.deletedID + '  确定删除吗？')){
		$('.spinner').show();
		$.post("/deleteGoodsByID", object, function(data){
			$('.spinner').hide();
			if (data == 'deleted'){
				alert('您的产品已删除！');
			}
			else{
				$('#goodsGridView').append('<h2 style="color:#CA054D">查无此物！</h2>').addClass('animated tada');;
			}
			console.log(data);
			
		});
	}
	
});

$('#ddeleteGoodsByName').click(function(){
	$('#goodsGridView').empty();
	var object = {};
	object.deletedName = $('#ddeletedName').val();

	if (confirm('产品名称: ' + object.deletedName + '  确定删除吗？')){
		$('.spinner').show();
		$.post("/deleteGoodsByID", object, function(data){
			$('.spinner').hide();
			if (data == 'deleted'){
				alert('您的产品已删除！');
			}
			else{
				$('#goodsGridView').append('<h2 style="color:#CA054D">查无此物！</h2>').addClass('animated tada');;
			}
			console.log(data);
			
		});
	}
});


$('#toModifyPage').click(function(){
	$('body').fadeOut(100, 'swing');
});
