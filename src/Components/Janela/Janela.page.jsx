import { useRef, useState } from 'react';
import { JanelaContainer, JanelaCabecalho, JanelaConteudo } from './Janela.styles';

export default function Janela() {
	const draggableRef = useRef(null);
	const [position, setPosition] = useState({ x: 1000, y: 300 });
	const [offset, setOffset] = useState({ x: 0, y: 0 });
  
	const handleMouseDown = (e) => {
	const rect = draggableRef.current.getBoundingClientRect();
	setOffset({
		x: e.clientX - rect.left,
		y: e.clientY - rect.top,
	});
  
	document.addEventListener('mousemove', handleMouseMove);
	document.addEventListener('mouseup', handleMouseUp);
	};
  
	const handleMouseMove = (e) => {
	setPosition({
		x: e.clientX - offset.x,
		y: e.clientY - offset.y,
	});
	};
  
	const handleMouseUp = () => {
	document.removeEventListener('mousemove', handleMouseMove);
	document.removeEventListener('mouseup', handleMouseUp);
	};
  
	return (
		<JanelaContainer
			ref={draggableRef}
			style={{ left: `${position.x}px`, top: `${position.y}px` }}
		>
			<JanelaCabecalho onMouseDown={handleMouseDown}>
				<p>Anotações</p>
				<div>
					<span className='CursorDesativado'>–</span>
					<span className='CursorDesativado'>❐</span>
					<span className='CursorDesativado'>✖</span>
				</div>
			</JanelaCabecalho>
			<JanelaConteudo>
				<p>
					Sei lá sou um Post-It
				</p>
			</JanelaConteudo>
		</JanelaContainer>
	);
}