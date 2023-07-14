import QrCode from 'qrcode.react';

function QrCard({ qrRef, url, bgColor, qrColor, customImg, noImg }) {
	let imgCustom =  undefined;

	noImg ?
		imgCustom = null :
		customImg ?
			imgCustom = customImg :
			imgCustom = './logo-apple-icon192.png';

	return (
		<article className="card">
			<div className="qr-box"
				ref={qrRef}
				style={{ backgroundColor: bgColor }}>
			
				<QrCode
					size={250}
					value={url ? url : 'https://google.com'}
					bgColor={bgColor}
					fgColor={qrColor}
					level='H'
					includeMargin
					imageSettings={{
						src: imgCustom,
						height: 45,
						width: 45,
						excavate: true,
					}}
				/>

			</div>
			<h2 className="word-wrap">{url ? url : 'Solve Me'}</h2>
			<p>Enter your details to generate QR and enter the RIDDLE BOX </p>
		</article>
	);
}

export default QrCard;