

$('#addNewGoods').click(function(){
	alert('add click!');
	var object = {};


	object.goodID = $('#goodsID').val();
	object.categoryID = $('#categoryID').val();
	object.outerID = $('#outerID').val();
	object.tsc = $('#tsc').val();
	object.barcode = $('#barcode').val();
	object.name = $('#name').val();
	object.categoryName = $('#categoryName').val();
	object.price = $('#price').val();
	object.shopPrice = $('#shopPrice').val();
	object.standardPrice = $('#standardPrice').val();
	object.desc = $('#desc').val();
	object.bigImgURL = $('#bigImgURL').val();
	object.smallImgURL = $('#smallImgURL').val();
	object.modified = $('#modified').val();
	object.created = $('#created').val();
	object.status = $('#status').val();
	object.level = $('#level').val();
	object.rateNum = $('#rateNum').val();
	object.saleNum = $('#saleNum').val();
	object.collectNum = $('#collectNum').val();
	object.stock = $('#stock').val();
	object.verticalMarket = $('#verticalMarket').val();
	object.binds = $('#binds').val();
	object.saleProps = $('#saleProps').val();
	object.propsStr = $('#propsStr').val();
	object.props = $('#props').val();
	object.customerProps = $('#customerProps').val();
	object.publicKey = $('#publicKey').val();

	$.post("/addNewGoods", object, function(data){
		console.log(data);
		//alert('yes call back in generate.js');
	});
});