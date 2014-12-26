	$('.spinner').hide();


$('#addNewGoods').click(function(){
	// alert('add click!');
	if ($('#goodsID').val() == "" ||
		$('#categoryID').val() == "" ||
		$('#name').val() == "" ||
		$('#categoryName').val() == "" ||
		$('#desc').val() == "" ||
		$('#price').val() == "" ||
		$('#bigImgURL').val() == "" ||
		$('#stock').val() == "" ||
		$('#props').val() == "" ||
		$('#publicKey').val() == ""){
		alert('尼马的臭屌丝好像还有几栏没有填？ ！');
	}
	else{
		$('.spinner').show();
		var object = {};
		var checkIDBody = {};
		checkIDBody.checkID = $('#goodsID').val();
		$.post("/checkGoodID", checkIDBody, function(data){
			$('.spinner').hide();

			if (data == false){
				alert('已經有這個ID囉！');
			}
			else{
				
				object.goodID = $('#goodsID').val();
				object.categoryID = $('#categoryID').val();
				object.name = $('#name').val();
				object.categoryName = $('#categoryName').val();
				object.desc = $('#desc').val();
				object.price = $('#price').val();
				object.bigImgURL = $('#bigImgURL').val();
				object.stock = $('#stock').val();
				object.props = $('#props').val();
				object.publicKey = $('#publicKey').val();


				object.modified = $('#modified').val();
				object.created = $('#created').val();
				object.status = $('#status').val();
				object.level = $('#level').val();
				object.rateNum = $('#rateNum').val();
				object.saleNum = $('#saleNum').val();
				object.collectNum = $('#collectNum').val();
				object.verticalMarket = $('#verticalMarket').val();
				object.binds = $('#binds').val();
				object.saleProps = $('#saleProps').val();
				object.propsStr = $('#propsStr').val();
				object.customerProps = $('#customerProps').val();
				object.shopPrice = $('#shopPrice').val();
				object.standardPrice = $('#standardPrice').val();
				object.outerID = $('#outerID').val();
				object.tsc = $('#tsc').val();
				object.barcode = $('#barcode').val();
				object.smallImgURL = $('#smallImgURL').val();
				$('.spinner').show();
				$.post("/addNewGoods", object, function(data){
					$('.spinner').hide();
					alert('您的产品已添加！')
					console.log(data);
					//alert('yes call back in generate.js');
				});
				


				
			}
			console.log(data);
			//alert('yes call back in generate.js');
		});
	}
	

	

	
});