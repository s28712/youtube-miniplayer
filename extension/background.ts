import 'chrome'

chrome.browserAction.onClicked.addListener((tabs) => {
  const url = `yt-player://${tabs.url}`;
  chrome.tabs.create({ url: url });
});