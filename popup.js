const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

const msg = {
  newRow: {
    action: "newRow",
    data: true,
  },
  old: {
    action: "old",
    data: true,
  },
};

const isFirebox = typeof browser !== "undefined";

// Send data to the current active tab when the button is clicked
btn.onclick = () => {
  if (isFirebox) {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      browser.tabs.sendMessage(tabs[0].id, msg.newRow);
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, msg.newRow);
    });
  }
};
btn2.onclick = () => {
  if (isFirebox) {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      browser.tabs.sendMessage(tabs[0].id, msg.old);
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, msg.old);
    });
  }
};
