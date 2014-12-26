$('.spinner').hide();
$('#modifyCoulumns').hide();
// $('#queryCoulumns').hide();
// $('#queryGoodsName').val("asf");
// alert('a');

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

		console.log(data);
		var goodItem = '<div class="col-xs-6 col-sm-6 placeholder">' +
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

		console.log(data);
		var goodItem = '<div class="col-xs-6 col-sm-6 placeholder">' +
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






