document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("textarea");
    const saveButton = document.getElementById("saveButton");
    const loadButton = document.getElementById("loadButton");
  
    // Save text to storage
    saveButton.addEventListener("click", function () {
      const text = textarea.value;
      chrome.storage.local.set({ "notepadText": text }, function () {
        console.log("Text saved to storage.");
      });
    });
  
    // Load text from storage
    loadButton.addEventListener("click", function () {
      chrome.storage.local.get("notepadText", function (data) {
        const savedText = data.notepadText || "";
        textarea.value = savedText;
        console.log("Text loaded from storage.");
      });
    });
  });
  