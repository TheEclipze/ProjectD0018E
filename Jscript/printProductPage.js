/**
 * font-family: 'impact', sans-serif;
	text-decoration: none;
	text-align: center;
 */


function printProductPage(itemArray, sorting){
	if(sorting == "name"){
		var colIndex = 1;
		var sortedItemArray = sortByColumnBySmallest(itemArray, colIndex);
	}
	else if(sorting == "price"){
		var colIndex = 2;
		var sortedItemArray = sortByColumnByInt(itemArray, colIndex);
	}
	else if(sorting == "rating"){
		var colIndex = 3;
		var sortedItemArray = sortByColumnByLargest(itemArray, colIndex);
	}
	else {
		var colIndex = 1;
		var sortedItemArray = sortByColumnBySmallest(itemArray, colIndex);
	}
	
	var container = document.getElementById("main");
	container.innerHTML = "";
	
	var toolbar = document.createElement("div");
	toolbar.setAttribute('id', "toolbar");
	toolbar.innerHTML = "<b>Sort by: </b>"
	var sortBtn = document.createElement("div");
	sortBtn.setAttribute('class', "sortBtn");
	sortBtn.innerHTML = " Name ";
	sortBtn.addEventListener("click", function() {
		printProductPage(itemArray, "name");
	}, false);
	toolbar.appendChild(sortBtn);
	
	var sortBtn2 = document.createElement("div");
	sortBtn2.setAttribute('class', "sortBtn");
	sortBtn2.innerHTML = " Price ";
	sortBtn2.addEventListener("click", function() {
		printProductPage(itemArray, "price");
	}, false);
	toolbar.appendChild(sortBtn2);
	
	var sortBtn3 = document.createElement("div");
	sortBtn3.setAttribute('class', "sortBtn");
	sortBtn3.innerHTML = " Rating ";
	sortBtn3.addEventListener("click", function() {
		printProductPage(itemArray, "rating");
	}, false);
	toolbar.appendChild(sortBtn3);
	container.appendChild(toolbar);
	
	for(i=0; i< itemArray.length; i++){
		printOneProduct(sortedItemArray[i], container);
	}
}

function printOneProduct(item, container){
	var productBox = document.createElement("div");
	productBox.setAttribute('id', "product#"+item[1]);
	productBox.setAttribute('class', "productBox");
	
	var a = document.createElement("a");
	a.setAttribute('href', "item.php?productID="+item[0]);
	var img = document.createElement("img");
	img.setAttribute('alt', "Image");
	img.setAttribute('src', item[5]+"/"+item[1]+"/"+"/img/default.png");
	a.appendChild(img);
	productBox.appendChild(a);
	
	var infoBox = document.createElement("div");
	infoBox.setAttribute('id', "infoBox");
	var h1 = document.createElement("h1");
	h1.innerHTML = item[1];
	infoBox.appendChild(h1);
	var h2 = document.createElement("h2");
	h2.innerHTML = "Price: $"+item[2];
	infoBox.appendChild(h2);
	h2 = document.createElement("h2");
	h2.innerHTML = "Stock: "+item[4];
	infoBox.appendChild(h2);
	
	h2 = document.createElement("h2");
	h2.innerHTML = "Rating: "+item[3]+"/5";
	infoBox.appendChild(h2);
	
	var div = document.createElement("div");
	div.setAttribute('class', "productBoxBuyButton");
	$(div).css('font-family', 'impact', 'sans-serif');
	$(div).css('text-align', 'center');
	$(div).css('text-decoration', 'none');
	$(div).css('cursor', 'pointer');
	div.innerHTML = "BUY";
	div.addEventListener("click", function() {
		addToCart(item[0], item[1]);
	}, false);
	infoBox.appendChild(div);
	productBox.appendChild(infoBox);
	
	container.appendChild(productBox);
}

function sortByColumnBySmallest(a, colIndex){

    a.sort(sortFunction);

    function sortFunction(a, b) {
        if (a[colIndex] === b[colIndex]) {
            return 0;
        }
        else {
            return (a[colIndex] < b[colIndex]) ? -1 : 1;
        }
    }

    return a;
}

function sortByColumnByLargest(a, colIndex){

    a.sort(sortFunction);

    function sortFunction(a, b) {
        if (a[colIndex] === b[colIndex]) {
            return 0;
        }
        else {
            return (a[colIndex] < b[colIndex]) ? 1 : -1;
        }
    }

    return a;
}

function sortByColumnByInt(a, colIndex){

    a.sort(sortFunction);

    function sortFunction(a, b) {
        return a[colIndex] - b[colIndex];
    }

    return a;
}