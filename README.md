# 📌 Save Tab Extension

A simple and lightweight Chrome extension to save the **currently active tab** for later access. Perfect for anyone who wants to keep track of useful links without cluttering their bookmarks.

---

## 🚀 Features

- ✅ Save the current tab with one click
- ✅ View all saved tabs as clickable links
- ✅ Data is stored in `localStorage`, so it stays even after closing the browser
- ✅ Double-click “Delete All” to clear saved links

---

## 📂 Project Structure

save-tab-extension/
├── manifest.json # Extension config (Manifest V3)
├── index.html # UI layout
├── index.js # Main logic to save/load tabs
├── style.css # Basic styling
├── icons/ (optional) # Icon assets if added
└── README.md

---

## 🧠 How It Works

- `SAVE TAB` → Saves the **currently active tab's URL**
- `SAVE INPUT` → Lets you manually input a URL
- `DELETE ALL` → Double-click to clear saved links
- All saved URLs are displayed as clickable items

---

## 💻 Setup Instructions

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode**
4. Click **Load unpacked** and select this project folder.
5. Start using the extension!

---

## 🔧 Tech Stack

- HTML
- CSS
- JavaScript
- Chrome Extensions API (Manifest V3)
- localStorage

---

## 📌 Future Plans

- Add option to save **all open tabs**
- Add export/import functionality
- Add basic search/filter for saved links

---

> Made with ❤️ to simplify your browsing.
