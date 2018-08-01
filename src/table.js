	var table = document.querySelector('#table-wrapper');
	function getItem() {
		var items = [];
		for(var e of sourceData) {
			if(getRegionsChoose().indexOf(e.region)>=0 && 
				getProductsChoose().indexOf(e.product)>=0) {
				items.push(e);
			}
		}
		return items;
	}
	function updateTable(items) {
		console.log(items);
		var data = "";
		table.innerHTML = "";
		//添加表头
		if(getRegionsChoose().length==1 && getProductsChoose().length>1) {
			data += "<table border = '1px'><thead><tr><th>地区</th><th>商品</th>";
			console.log('region');
		}
		else data += "<table border = '1px'><thead><tr><th>商品</th><th>地区</th>";
		for(var i=1; i<=12; i++) {
			data += "<th>" + i + "月</th>";
		}
		data += "</tr></thead>";

		//添加数据
		data += "<tbody>";
		//当前商品名
		var product;
		for(var i=0; i<items.length; i++) {
			data += "<tr>"
			var tr = [];
			//添加商品
			if(product != items[i].product) {
				product = items[i].product;
				tr.push("<td rowspan='"+getLength(product)+"'>" + items[i].product + "</td>");
			}
			//添加地区
			if(getRegionsChoose().length==1 && getProductsChoose().length!=1){
				if(i==0){
					tr.push("<td rowspan='"+items.length+"'>" + items[i].region + "</td>");
					tr.reverse();
				}
			} else {
				tr.push("<td>" + items[i].region + "</td>");
			}
			//添加每月销售
			for(var e of items[i].sale) {
				tr.push("<td>" + e + "</td>");
			}
			data += tr.join("") + "</tr>";
		}
		data += "</tbody></table>";
		table.innerHTML = data;
	}

	function getRegionsChoose() {
		var regions=[];
		var region = document.querySelectorAll("#region-select [checkbox-type='item']:checked");
		region.forEach(e => {regions.push(e.value);});
		return regions;
	}

	function getProductsChoose() {
		var products=[];
		var product = document.querySelectorAll("#product-select [checkbox-type='item']:checked");
		product.forEach(e => {products.push(e.value);});
		return products;
	}

	function getLength(product) {
		var num=0;
		var products = getItem();
		for(var i=0; i<products.length; i++) {
			if(products[i].product == product) num++;
		}
		return num;
	}
