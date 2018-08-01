 	function genCheckBox(select, items) {
		select.innerHTML += "<input type='checkbox' checkbox-type='all' value='all'>全选";
		for(var e of items) {
			var item = document.createElement('input');
			var text = document.createTextNode(e.text);
			item.value = e.value;
			item.setAttribute("checkbox-type", "item");
			item.setAttribute("type", "checkbox");
			select.appendChild(item);
			select.appendChild(text);
		}
		select.onchange = function(e) {
			if(e.target.type == "checkbox") {
				var type = e.target.getAttribute("checkbox-type");
				if(type == "all") {
					for(var ele of select.childNodes) {
						ele.checked = e.target.checked;
					}
				}
				else {
					select.firstChild.checked = false;
					var checkNum = document.querySelectorAll("#"+select.id+" [checkbox-type='item']:checked");
					if(checkNum.length==0) e.target.checked = true;
					if(checkNum.length==3) select.firstChild.checked = true;
				}
			}
		}
	}
