# puppeteer-extension-automation-example

Summary 

- [Problem](#😱-Problem)
- [Solution](#💡-Solution)
- [Limitations](#⚠-Limitations)
- [Contact](#👋-Contact)

## 😱 Problem

Chrome has a good amount of useful extensions in [web store](https://chrome.google.com/webstore/category/extensions). But we can't use it or automate it using puppeteer. 

## 💡 Solution

The solution is to load the extension at the time of starting the chromium instance.

### Method
1. Find the extension you want to automate in store. In my case I am using [this one](https://chrome.google.com/webstore/detail/browsec-vpn-free-and-unli/omghfjlpggmjjaagoclmmobgdodcjboh)
1. Notice the extensions id in the address it is omghfjlpggmjjaagoclmmobgdodcjboh
1. find out where chrome stores the extension. I am using windows so the path is `C:\Users\%username%\AppData\Local\Google\Chrome\User Data\Profile 1\Extensions`. for other operating systems you can search for the extension id in entire system so find out the exact path
1. copy the extension to your puppeteer directory
1. Follow the code given in `index.js` to automate

That's it. 

## ⚠ Limitations

- Can't work with headless mode
- May require separate implementation for each extensions you use

## 👋 Contact
Want to automate something in web? Let's talk 

[![Contact me on twitter][twitter_logo]][twitter]
[![Contact me on telegram][telegram_logo]][telegram]
[![Mail me][gmail_logo]][gmail]

[twitter_logo]: https://user-images.githubusercontent.com/6497827/57843958-c30e6b00-77ec-11e9-97bd-dfbc800f96a9.png
[telegram_logo]: https://user-images.githubusercontent.com/6497827/57844175-2ac4b600-77ed-11e9-8488-f2d45efa7497.png
[gmail_logo]: https://user-images.githubusercontent.com/6497827/62424751-c1b85480-b6f0-11e9-97de-096c0a980829.png
[twitter]: https://twitter.com/ArpitVasani
[telegram]: http://t.me/Arpit_Vasani
[gmail]: mailto:vasani.arpit@gmail.com?subject=Regarding%20Wbot&body=Hi


