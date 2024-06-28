import { useState, useEffect } from 'react';

export default function TamanhoJanela() {
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		// Remove o event listener quando o componente desmontar
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div>
			<br />
			<h2>Medidas Janela</h2>
			<b>Largura:</b> <q>{windowDimensions.width}px</q>.
			<br />
			<b>Altura:</b> <q>{windowDimensions.height}px</q>.
		</div>
	);
}