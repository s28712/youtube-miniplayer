"use strict";

chrome.browserAction.onClicked.addListener(function (tabs) {
    var url = "yt-player://" + tabs.url;
    chrome.tabs.create({ url: url });
});
