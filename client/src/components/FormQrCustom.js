import { useEffect, useState } from 'react';
import QrCard from './QrCard';

function FormQrCustom({ qrRef, url, qrColor, qrBgColor, noImg, setUrl, setQrColor, setQrBgColor, setCustomImg, setNoImg, handleQrReset }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [showQR, setShowQR] = useState(false); // Added this state

    const emailRgx = /^[a-zA-Z0-9._%+-]+@aurouniversity\.edu\.in$/;
    const fullNameRgx = /^[a-zA-Z]+ [a-zA-Z]+$/;

    const httpRgx = /^https?:\/\//;  // Define it here

    useEffect(() => {
        setIsValid(emailRgx.test(email) && fullNameRgx.test(fullName));
    }, [email, fullName]);

    const handleSubmit = e => {
        e.preventDefault();
        if(isValid) {
            // Show QR code
            setShowQR(true);
        } else {
            alert('Please enter valid information.');
        }
    }

    const downloadQrCode = () => {
        const qrCanvas = qrRef.current.querySelector('canvas'),
        qrImage = qrCanvas.toDataURL("image/png"),
        qrAnchor = document.createElement('a'),
        fileName = email.replace(httpRgx, '').trim(); // changed url to email
        
        qrAnchor.href = qrImage;
        qrAnchor.download = fileName+'_QrCode.png';
        document.body.appendChild(qrAnchor);
        qrAnchor.click();
        document.body.removeChild(qrAnchor);

        handleQrReset();
        // setShowQR(false); // Hide QR code after download
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <center><h1>Register only <br></br> if you're smart</h1></center>
                <label htmlFor="text">Full Name</label>
                <input
					style={{marginTop: '10px'}}
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                />
                <label htmlFor="email">Email (*only Auro id)</label>

                <input
					style={{marginTop: '10px'}}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <button type="submit" style={{marginBottom: '40px'}}>
                    <span>Register</span>
                </button>
            </form>
            {showQR && 
                <div onClick={downloadQrCode}>
                    <QrCard 
                        qrRef={qrRef} 
                        url={email} 
                        bgColor={qrBgColor} 
                        qrColor={qrColor} 
                        customImg={setCustomImg} 
                        noImg={noImg} 
                    />
                </div>
            }
        </div>
    );
}

export default FormQrCustom;
