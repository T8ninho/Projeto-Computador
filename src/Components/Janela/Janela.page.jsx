import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { JanelaContainer, JanelaCabecalho, JanelaConteudo } from './Janela.styles';

export default function Janela({ children, title }) {
  const draggableRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [maximized, setMaximized] = useState(false);

  const handleMouseDown = (e) => {
    if (maximized) return;

    const rect = draggableRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (maximized) return;

    const rect = draggableRef.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let newX = e.clientX - offset.x;
    let newY = e.clientY - offset.y;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + rect.width > windowWidth) newX = windowWidth - rect.width;
    if (newY + rect.height > windowHeight) newY = windowHeight - rect.height;

    setPosition({
      x: newX,
      y: newY,
    });
  };

  const handleMouseUp = () => {
    if (maximized) return;

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const toggleMaximize = () => {
    if (maximized) {
      setPosition({ x: 100, y: 100 }); // Volta para a posição original ou outra que desejar
      setMaximized(false);
    } else {
      setPosition({ x: 0, y: 0 });
      setMaximized(true);
    }
  };

  return (
    <JanelaContainer
      ref={draggableRef}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: maximized ? '100%' : '500px',
        height: maximized ? '95vh' : '500px',
      }}
    >
      <JanelaCabecalho onMouseDown={handleMouseDown}>
        <p><b>{title}</b></p>
        <div>
          <span className='CursorDesativado'>–</span>
          <span onClick={toggleMaximize}>❐</span>
          <span className='CursorDesativado'>✖</span>
        </div>
      </JanelaCabecalho>
      <JanelaConteudo style={{ width: '100%', height: 'calc(100% - 3%)' }}>
        {children}
      </JanelaConteudo>
    </JanelaContainer>
  );
}

Janela.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};
