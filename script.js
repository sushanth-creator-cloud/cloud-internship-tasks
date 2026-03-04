console.log("Website loaded successfully on AWS S3!");

window.onload = function() {
  const footer = document.querySelector("footer p");
  const date = new Date().getFullYear();
  footer.innerHTML += ` | © ${date}`;
};
```

---

## Save These 3 Files

Create a folder on your desktop called `my-website` and save all 3 files inside it:
```
my-website/
  ├── index.html
  ├── style.css
  └── script.js