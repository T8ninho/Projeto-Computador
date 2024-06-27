import PropTypes from 'prop-types';
import { Background, Icones, TaskBar } from './Desktop.styles';
import Logo_Windows1 from '../../assets/Logo_Windows.png'
import Logo_Windows2 from '../../assets/Logo_Windows2.png'
import Chrome_Logo from '../../assets/Chrome_Logo.png'
import VSCode_Logo from '../../assets/VSCode_Logo.webp'
import Photoshop_Logo from '../../assets/Photoshop_Logo.png'
import Janela from '../../Components/Janela/Janela.page';

export default function Desktop({ImageUrl}) {

	return(
		<Background Image={ImageUrl}>
			<div className='areaIcones'>
				<Icones Icon={Chrome_Logo} />
				<Icones Icon={VSCode_Logo} />
				<Icones Icon={Photoshop_Logo} />
				<Janela />
			</div>
				<TaskBar>
					<Icones 
						title='Iniciar'
						Icon={Logo_Windows1} 
						IconHover={Logo_Windows2}
					/>
				</TaskBar>
		</Background>
	)
}

Desktop.propTypes = {
	ImageUrl: PropTypes.string.isRequired
};