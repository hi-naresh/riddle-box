import { useEffect, useState } from 'react';

function ThemeBtn() {
	const [theme, setTheme] = useState(true);

	useEffect(() => {
		theme ?
			document.body.classList.remove('dark') :
			document.body.classList.add('dark');
	}, [theme]);
		
	return (
		<>
		
			<input
				id="toggle"
				type="checkbox"
				className="toggle-checkbox"
				onClick={()=>setTheme(!theme)}
			/>

			<label htmlFor="toggle" className="toggle-label">
				<span className="toggle-label-bg"></span>
			</label>

		</>
	);
}

export default ThemeBtn;