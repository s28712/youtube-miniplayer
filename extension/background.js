"use strict";

chrome.browserAction.onClicked.addListener(function (tabs) {
    var url = "yt-player://" + tabs.url;
    if(tabs.url.includes('youtube.com'))
        chrome.tabs.create({ url: url });   
});
