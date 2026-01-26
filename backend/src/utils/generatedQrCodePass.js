const Qrcode = require("qrcode");

async function generatedQrCodePass(visitorId) {
    try {
        const qrCodeData = await Qrcode.toDataURL(visitorId);
        return qrCodeData;
    } catch (error) {
        throw new Error("Server error in generationg qr code...")
    }
}

module.exports = generatedQrCodePass;
