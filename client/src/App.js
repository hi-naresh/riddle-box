import { useRef, useState } from 'react';
import ThemeBtn from './components/ThemeBtn';
import FormQrCustom from './components/FormQrCustom';

function App() {
	const qrRef = useRef();

	const [url, setUrl] = useState(''),
			[qrColor, setQrColor] = useState('#1F3150'),
			[qrBgColor, setQrBgColor] = useState('#96DCEE'),
			[customImg, setCustomImg] = useState(''),
			[noImg, setNoImg] = useState(false);
			
	const handleQrReset = () => {
		setUrl('');
		setQrColor('#1F3150');
		setQrBgColor('#96DCEE');
		setCustomImg('');
		setNoImg(false);
	}

	return (
		<>
			<header>
				<ThemeBtn/>
			</header>

			<main>
				<FormQrCustom
					qrRef={qrRef}
					url={url}
					qrColor={qrColor}
					qrBgColor={qrBgColor}
					noImg={noImg}
					setUrl={setUrl}
					setQrColor={setQrColor}
					setQrBgColor={setQrBgColor}
					setCustomImg={setCustomImg}
					setNoImg={setNoImg}
					handleQrReset={handleQrReset}
				/>

				{/* <QrCard
					qrRef={qrRef}
					url={url}
					qrColor={qrColor}
					bgColor={qrBgColor}
					customImg={customImg}
					noImg={noImg}
				/> */}
			</main>
		</>
	);
}

export default App;