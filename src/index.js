	var regionSelect = document.querySelector('#region-select');
	var productSelect = document.querySelector('#product-select');
	var showItems = document.querySelector('#show-items');

	showItems.onclick = function() {
		updateTable(getItem());
	}

	genCheckBox(regionSelect, [{
		value: "华东",
		text: "华东"
	},{
		value: "华南",
		text: "华南"
	},{
		value: "华北",
		text: "华北"
	}]);

	genCheckBox(productSelect, [{
		value: "手机",
		text: "手机"
	},{
		value: "笔记本",
		text: "笔记本"
	},{
		value: "智能音箱",
		text: "智能音箱"
	}]);
