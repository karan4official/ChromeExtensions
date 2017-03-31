
// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {

  
  var firstrain_search = chrome.contextMenus.create({"title": "Search '%s'", "contexts":["selection"],
                                         "id": "firstrain_search"}); 

  var firstrain_visualization = chrome.contextMenus.create({"title": "Visualize '%s'", "contexts":["selection"],
                                         "id": "firstrain_visualization"});

  var firstrain_suggest_topics = chrome.contextMenus.create({"title": "Find Topic '%s'", "contexts":["selection"],
                                         "id": "firstrain_suggest_topics"});

  var firstrain_suggest_people = chrome.contextMenus.create({"title": "Find People '%s'", "contexts":["selection"],
                                         "id": "firstrain_suggest_people"});

  var firstrain_suggest_company = chrome.contextMenus.create({"title": "Find Company '%s'", "contexts":["selection"],
                                         "id": "firstrain_suggest_company"});

});


// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
	var sText = info.selectionText;
	var menuId = info.menuItemId;
	var url = "https://www.firstrain.com"
	if (menuId == "firstrain_search"){
		url = "https://research.firstrain.com/search?q=" + encodeURIComponent(sText) + "&opt=1&cfq=&resetB=true&action=RUN";
		window.open(url, '_blank','titlebar=no');
	}else if (menuId == "firstrain_visualization"){
		url = "https://research.firstrain.com/exclude/advance_search_1.jsp?q=" + encodeURIComponent(sText);
		window.open(url, '_blank','titlebar=no');
	}else if (menuId == "firstrain_suggest_topics"){
		url = "https://stageapps.firstrain.com/service/suggestentities.jsp?&type=topic&kw=" + encodeURIComponent(sText);
		window.open(url, '_blank','titlebar=no top=0, left=0, width=400, height=600');
	}else if (menuId == "firstrain_suggest_people"){
		url = "https://stageapps.firstrain.com/service/suggestentities.jsp?type=people&kw=" + encodeURIComponent(sText);
		window.open(url, '_blank','titlebar=no top=0, left=0, width=400, height=600');
	}else if (menuId == "firstrain_suggest_company"){
		url = "https://stageapps.firstrain.com/service/suggestentities.jsp?type=company&kw=" + encodeURIComponent(sText);
		window.open(url, '_blank','titlebar=no top=0, left=0, width=400, height=600');
	}

};