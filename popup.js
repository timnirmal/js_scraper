document.addEventListener('DOMContentLoaded', function () {
    var downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            var activeTab = tabs[0];
            chrome.scripting.executeScript(
                {
                    target: {tabId: activeTab.id},
                    files: ['contentScript.js']
                });
        });
    });
});
