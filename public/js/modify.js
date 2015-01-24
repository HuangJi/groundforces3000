$('.spinner').hide();
$('#modifyCoulumns').hide();
// $('#queryCoulumns').hide();
// $('#queryGoodsName').val("asf");
// alert('a');

var objectForModify = {};



$('#modifyGoodView').mousemove(function(event){
	$('#modifyGoodView').removeClass('animated tada');
});

$('#mgetGoodsByName').click(function(){
	$('.spinner').show();
	$('#modifyGoodView').empty();
	var object = {};
	object.goodsName = $('#queryGoodsName').val();

	$.post("/getGoodsByName", object, function(data){
		$('.spinner').hide();
		objectForModify = JSON.parse( JSON.stringify( data ) );
		console.log('objectForModify is ' + objectForModify);
		console.log('data is ' + data);
		var goodItem = '<div class="col-xs-6 col-sm-6 placeholder targetGoods">' +
			'<img style="max-width:70%;max-height:70%;" src="' + data.bigImgURL + '" class="img-responsive" alt="Generic placeholder thumbnail">' +
			'<h3>' + data.name + '</h3>' + 
			'<h4>ID: '+ data.goodID + '</h4>' + 
			'<h5>¥' + data.price + '</h5>' + 
			'<p>存货量:' + data.stock + '</p>' +
			'<span class="text-muted">' + data.desc + '</span>' +
			'</div>';
		// $('#goodsGridView').empty();
		if (data.goodID == undefined){
			$('#modifyGoodView').append('<h2 style="color:#CA054D">查无此物！</h2>').addClass('animated tada');
		}
		else{
			$('#modifyGoodView').append(goodItem);
			$('.targetGoods').addClass('animated fadeInUp');
			$('#modifyCoulumns').show();
			$('#queryCoulumns').hide();

			$('#goodsID').val(data.goodID);
			$('#categoryID').val(data.categoryID);
			$('#name').val(data.name);
			$('#bigImgURL').val(data.bigImgURL);
			$('#categoryName').val(data.categoryName);
			$('#desc').val(data.desc);
			$('#price').val(data.price);
			$('#stock').val(data.stock);
			$('#props').val(data.props);
			$('#publicKey').val(data.publicKey);

			$('#goodsID').attr('disabled', true);
		}
		// $('#queryGoodsNameResult').text(JSON.stringify(data));
		//alert('yes call back in generate.js');
	});
});

$('#mgetGoodsByID').click(function(){
	$('.spinner').show();
	$('#modifyGoodView').empty();
	var object = {};
	object.goodID = $('#queryGoodsID').val();

	$.post("/getGoodsByID", object, function(data){
		$('.spinner').hide();
		objectForModify = JSON.parse( JSON.stringify( data ) );
		console.log('objectForModify is ' + objectForModify);
		console.log('objectForModify.name is ' + objectForModify.name);
		console.log('objectForModify.tsc is ' + objectForModify.tsc);
		console.log('data is ' + data);
		console.log(data);
		var goodItem = '<div class="col-xs-6 col-sm-6 placeholder targetGoods">' +
			'<img style="max-width:70%;max-height:70%;" src="' + data.bigImgURL + '" class="img-responsive" alt="Generic placeholder thumbnail">' +
			'<h3>' + data.name + '</h3>' + 
			'<h4>ID: '+ data.goodID + '</h4>' + 
			'<h5>¥' + data.price + '</h5>' + 
			'<p>存货量:' + data.stock + '</p>' +
			'<span class="text-muted">' + data.desc + '</span>' +
			'</div>';
		// $('#goodsGridView').empty();
		if (data.goodID == undefined){
			$('#modifyGoodView').append('<h2 style="color:#CA054D">查无此物！</h2>').addClass('animated tada');
		}
		else{
			$('#modifyGoodView').append(goodItem);
			$('.targetGoods').addClass('animated fadeInUp');
			$('#modifyCoulumns').show();
			$('#queryCoulumns').hide();

			$('#goodsID').val(data.goodID);
			$('#categoryID').val(data.categoryID);
			$('#name').val(data.name);
			$('#bigImgURL').val(data.bigImgURL);
			$('#categoryName').val(data.categoryName);
			$('#desc').val(data.desc);
			$('#price').val(data.price);
			$('#stock').val(data.stock);
			$('#props').val(data.props);
			$('#publicKey').val(data.publicKey);

			$('#goodsID').attr('disabled', true);
		}
		// $('#queryGoodsNameResult').text(JSON.stringify(data));
		//alert('yes call back in generate.js');
	});
});


$('#confirmButton').click(function(){
	$('#modifyCoulumns').hide();
	$('#queryCoulumns').show();
	$('#modifyGoodView').empty();

	var object = {};
	object.modifyID = $('#goodsID').val();
	object.goodID = $('#goodsID').val();
	object.name = $('#name').val();
	object.categoryID = $('#categoryID').val();
	object.bigImgURL = $('#bigImgURL').val();
	object.categoryName = $('#categoryName').val();
	object.desc = $('#desc').val();
	object.price = $('#price').val();
	object.stock = $('#stock').val();
	object.props = $('#props').val();
	object.publicKey = $('#publicKey').val();
	object.modified = objectForModify.modified;
	object.created = objectForModify.created;
	object.status = objectForModify.status;
	object.level = objectForModify.level;
	object.rateNum = objectForModify.rateNum;
	object.saleNum = objectForModify.saleNum;
	object.collectNum = objectForModify.collectNum;
	object.verticalMarket = objectForModify.verticalMarket;
	object.binds = objectForModify.binds;
	object.saleProps = objectForModify.saleProps;
	object.propsStr = objectForModify.propsStr;
	object.customerProps = objectForModify.customerProps;
	object.shopPrice = objectForModify.shopPrice;
	object.standardPrice = objectForModify.standardPrice;
	object.outerID = objectForModify.outerID;
	object.tsc = objectForModify.tsc;
	object.barcode = objectForModify.barcode;
	object.smallImgURL = objectForModify.smallImgURL;

	$.post("/modifyGoodsByID", object, function(data){
		console.log(data);
		alert('您的产品资料已修改！');
	});
});


$('#cancelButton').click(function(){
	$('#modifyCoulumns').hide();
	$('#queryCoulumns').show();
	$('#modifyGoodView').empty();
});

$('#modifyGoodView').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');






