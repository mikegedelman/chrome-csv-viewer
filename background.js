chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // dispatch based on command
  if (request.command == 'showCSV') {
    chrome.tabs.create({ 
      url: chrome.extension.getURL('viewer.html')
        + "?url=" + request.url
    });
  } else if (request.command == 'getData') {
    getData(request.url, sendResponse); 
    return true;
  }
});

function getData(url, cb) {
  // now load the CSV and display it
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    try {
      if (xhr.readyState === 4) {
        cb(xhr.responseText);
      }
    } catch (e) {
      console.log(e);
      console.error(e);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

var ctx =
    chrome.contextMenus.create(
            {"title": "View CSV",
             "contexts": ["link"],
             "onclick":
                function (info, tab) {
                    chrome.tabs.create({
                        url: chrome.extension.getURL('viewer.html')
                             + "?url=" + info.linkUrl
                    });
                }
            });
console.log(ctx);
