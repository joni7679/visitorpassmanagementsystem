
const puppeteer = require("puppeteer")

async function generateVisitorPdf(qrCode) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    body{
           display: flex;
            align-items: center;
            justify-content: center;
    }
        .qrcode-container {
            width: 300px;
            padding: 20px 30px;
            border-radius: 12px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        .bage {
            padding: 10px 15px;
            background-color: rgb(13, 162, 13);
            color: white;
            text-transform: capitalize;
            border-radius: 10px;

        }
        .qrcode-box {
            width: 200px;
            height: 200px;
            background: #fff;
            margin-top: 20px;
            border-radius: 12px;
        }
        .qrcode-box img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    </style>
</head>
<body>
    <div class="qrcode-container">
        <p>Visitor Pass</p>
        <span class="bage">
            approved
        </span>
        <div class="qrcode-box">
            <img src="${qrCode}" alt="">
        </div>
    </div>
</body>
</html>`;

        await page.setContent(htmlContent);
        const pdfBuffer = await page.pdf({
            format: "A4",
            margin: {
                top: "15px",
                bottom: "15px",
                left: "15px",
                right: "15px"
            }
        })
        await browser.close();
        return pdfBuffer
    } catch (error) {
        throw new Error("error in generating visitor pass pdf")
    }
}
module.exports = generateVisitorPdf;