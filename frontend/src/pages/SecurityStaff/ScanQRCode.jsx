
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Html5QrcodeScanner } from "html5-qrcode";
import { VisitorContext } from '../../context/DataContext';
const ScanQRCode = () => {
    const [loading, setLoading] = useState(false);
    const scannerRef = useRef()
    const [isScanning, setIsScanning] = useState(false);

    const { verifyPassVisitor } = useContext(VisitorContext);

    useEffect(() => {
        if (isScanning) {
            startScanner();
        }
        else {
            stopScanner()
        }
        return () => stopScanner()
    }, [isScanning])

    function startScanner() {
        if (scannerRef.current) return
        const scanner = new Html5QrcodeScanner("reader",
            {
                fps: 10,
                qrbox: {
                    width: 300,
                    height: 300
                }
            },
            false
        )
        scanner.render(onSuccessScanner, onErrorScanner);
        scannerRef.current = scanner
    }

    async function stopScanner() {
        if (scannerRef.current) {
            await scannerRef.current.clear().catch(() => {
                console.warn("somethinng invalid input")
            })
            scannerRef.current = null
        }
    }
    async function onSuccessScanner(result) {
        setLoading(true)
        await stopScanner()
        try {
            await verifyPassVisitor(result)
        } catch (error) {
            console.log("server issue please try aging  leater...", error);
        } finally {
            setLoading(false);
            if (isScanning) {
                setTimeout(() => {
                    startScanner()
                }, 3000);
            }
        }
    }
    function onErrorScanner(error) {
        console.log("Somthing is worng please try aging leater...", error);
    }
    return (
        <>
            <div className='p-2 '>
                {!isScanning ?
                    <button onClick={() => setIsScanning(true)} className='px-5 py-4 cursor-pointer hover:bg-blue-700 duration-200 bg-blue-500 text-white rounded-2xl capitalize'>scan now</button> :
                    <button onClick={() => setIsScanning(false)} className='px-5 py-4 cursor-pointer hover:bg-blue-700 duration-200 bg-blue-500 text-white rounded-2xl capitalize'>scan stop</button>
                }
            </div>
            {
                loading && <span className='font-medium capitalize text-2xl'>verify or code...</span>
            }
            {
                isScanning &&
                <div id='reader' style={{ width: 400, borderRadius:22 }} >
                </div>
            }
        </>
    )
}

export default ScanQRCode

