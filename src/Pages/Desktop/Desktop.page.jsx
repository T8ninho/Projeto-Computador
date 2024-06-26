import PropTypes from 'prop-types';
import { Background, Icones, TaskBar } from './Desktop.styles';
import Logo_Windows1 from '../../assets/Logo_Windows.png'
import Logo_Windows2 from '../../assets/Logo_Windows2.png'
import Chrome_Logo from '../../assets/Chrome_Logo.png'
import VSCode_Logo from '../../assets/VSCode_Logo.webp'
import Photoshop_Logo from '../../assets/Photoshop_Logo.png'
import { useState } from 'react';

export default function Desktop({ImageUrl}) {
	const [logoSrc, setLogoSrc] = useState(Logo_Windows1);

	return(
		<Background Image={ImageUrl}>
			<div className='areaIcones'>
				<Icones src={Chrome_Logo} />
				<Icones src={VSCode_Logo} />
				<Icones src={Photoshop_Logo} />
			</div>
				<TaskBar>
					<Icones 
						src={logoSrc} 
						onMouseEnter={() => setLogoSrc(Logo_Windows2)}
						onMouseLeave={() => setLogoSrc(Logo_Windows1)}
					/>
				</TaskBar>
		</Background>
	)
}

Desktop.propTypes = {
	ImageUrl: PropTypes.string.isRequired
};