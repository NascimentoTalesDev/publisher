const puppeteer = require("puppeteer")

export default async function print(product) {
    console.log("print", product?.layout?.color);
    let url = `https://publisher-liart.vercel.app/print?name=${product?.nomeProduto}&image=${product?.image}&oldPrice=${product?.precoAntigoProduto}&price=${product?.precoProduto}&color=000000`;
    const newFileName = Date.now() + ".png" ;  

    const browser = await puppeteer.launch({ headless: "shell" })
    const page = await browser.newPage()
    await page.goto(url)
    await page.setViewport({width: 1080, height: 1920});
    await page.screenshot({ path: `src/images/${newFileName}`});
    browser.close()
    return 
}

