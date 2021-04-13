import 'chrome'

chrome.browserAction.onClicked.addListener((tabs) => {
  const url = `yt-player://${tabs.url}`;
  if(tabs.url.includes('https://youtube')) {
    chrome.tabs.create({ url: url });
  }
});