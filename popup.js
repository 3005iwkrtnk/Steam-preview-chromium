document.getElementById("avatarBtn").onclick = () => sendAction("avatar");
document.getElementById("frameBtn").onclick = () => sendAction("frame");
document.getElementById("bgBtn").onclick = () => sendAction("bg");
document.getElementById("miniBtn").onclick = () => sendAction("mini");
document.getElementById("resetBtn").onclick = () => sendAction("reset");

function sendAction(action) {
  let url = "";
  if (action !== "reset") url = prompt("Insert image link:");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action, url });
  });
}
