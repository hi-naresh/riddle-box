import { useRef, useState } from 'react';
// import ThemeBtn from './components/ThemeBtn';
import FormQrCustom from './components/FormQrCustom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyCHuYzreIyskWWKEn3cqxPlf6Gii38WBpg",
	authDomain: "riddle-box.firebaseapp.com",
	projectId: "riddle-box",
	storageBucket: "riddle-box.appspot.com",
	messagingSenderId: "39993997150",
	appId: "1:39993997150:web:f1fe610d9147c72ba4c1cf",
	measurementId: "G-YFFGZZK57S"
  };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
window.db = db;  // Making it globally accessible


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
			{/* <header>
				<ThemeBtn/>
			</header> */}

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