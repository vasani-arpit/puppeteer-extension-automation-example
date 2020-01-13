const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}
var installVPN = async (puppeteer) => {
    const pathToExtension = require('path').join(__dirname, 'my-extension');
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`
        ]
    });
    const page = await browser.newPage();
    await page.goto("chrome-extension://omghfjlpggmjjaagoclmmobgdodcjboh/popup/popup.html")
    await page.waitForSelector("page-switch")
    //Turning VPN on
    await page.evaluate(() => {
        document.querySelector("page-switch").shadowRoot
            .querySelector("main-index").shadowRoot
            .querySelector("c-switch").click();
    })
    await delay(1000);
    //clicking change button to change country
    await page.evaluate(() => {
        document.querySelector("page-switch").shadowRoot
            .querySelector("main-index").shadowRoot
            .querySelector(".proxyEnabled").shadowRoot
            .querySelector(".ChangeButton").click()
    })
    await delay(1000);
    await page.evaluate(() => {
        var contries = document.querySelector("page-switch").shadowRoot
            .querySelector("main-index").shadowRoot
            .querySelector("index-locations").shadowRoot
            .querySelectorAll("index-locations-element")
        console.log(contries)
        var US;
        for (let i = 0; i < contries.length; i++) {
            const country = contries[i];
            if (country.__data.name == "United States") {
                US = country;
            }
        }
        console.log(US);
        US.shadowRoot.querySelector(".E .Country").click()
    })
    await delay(5000);
    await page.close();
    let openPage = await browser.pages()
    await openPage[0].goto('https://ipinfo.io/')
    return browser;
}

(async function main() {
    const puppeteer = require('puppeteer')
    await installVPN(puppeteer)
    console.log('done. Check the first tab in chrome to see the IP details')
})()