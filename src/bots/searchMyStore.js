import puppeteer from "puppeteer"
const dir = __dirname + './../authentication' 

export default async function searchMyStore(link, layout) {
    const browser = await puppeteer.launch({ headless: "shell", userDataDir: dir, ignoreDefaultArgs: ['--disable-extensions'] })
    const page = await browser.newPage()
    
    try {
        await page.goto(link)   

        let product;
        let image;
        let price;
        let oldPrice;

        function formatCharacterLimit(limit, text) {
            let LIMIT = limit
            const abovLimit = text?.length > LIMIT
            const dotsOrEmpty = abovLimit ? '...' : " "
            let textFormated = text.substring(0, LIMIT) + dotsOrEmpty
            
            return textFormated
        }
        //Product
        try {
            const textProductSelector = await page.waitForSelector(
                'h1'
              );
            let productName = await textProductSelector?.evaluate(el => el.textContent);
            product = formatCharacterLimit(90, productName)
        } catch (error) {
            console.log(error);
        }
        //Image
        try {
            const linkImage = await page.waitForSelector(
                ".actual-image img"
              );
            image = await linkImage?.evaluate(el => el.src);
            console.log(image);
        } catch (error) {
            console.log(error);
        }
        
        //Price
        try {
            const textPriceSelector = await page.waitForSelector(
                '.actual-price'
            );
            price = await textPriceSelector?.evaluate(el => el.textContent);
            console.log(price);
        } catch (error) {
            console.log(error);
        }
       //OldPrice
        try {
            const textOldPriceSelector = await page.waitForSelector(
                '.old-price'
                );
                oldPrice = await textOldPriceSelector?.evaluate(el => el.textContent);
        } catch (error) {
            console.log(error);
        }
 
        browser.close()


        let items = preencher(product, price, image, oldPrice, layout)    
        return items
        
    } catch (error) {
        console.log(error);
    }
}


function preencher(product, price, image, oldPrice, layout ) {
    let item = {
        nomeProduto: product,
        precoProduto: price,
        precoAntigoProduto: oldPrice,
        image,
        layout
    }
    return item
}
