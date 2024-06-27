import PropTypes from 'prop-types';
import { AreaIcones, Background, TaskBar } from './Desktop.styles';
import Logo_Windows1 from '../../assets/Logo_Windows.png'
import Logo_Windows2 from '../../assets/Logo_Windows2.png'
import Chrome_Logo from '../../assets/Chrome_Logo.png'
import VSCode_Logo from '../../assets/VSCode_Logo.webp'
import Photoshop_Logo from '../../assets/Photoshop_Logo.png'
import Janela from '../../Components/Janela/Janela.page';
import IconeDesktop from '../../Components/IconeDesktop/IconeDesktop.page';
import { Icones } from '../../Components/IconeDesktop/IconeDesktop.styles';

export default function Desktop({ImageUrl}) {

	return(
		<Background Image={ImageUrl}>
			<AreaIcones>
				<IconeDesktop Icon={Chrome_Logo} name='Chrome'/>
				<IconeDesktop Icon={VSCode_Logo} name='VS Code'/>
				<IconeDesktop Icon={Photoshop_Logo} name='Photoshop'/>
				<Janela />
			</AreaIcones>
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