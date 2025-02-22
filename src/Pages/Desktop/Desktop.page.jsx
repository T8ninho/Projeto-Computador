import PropTypes from 'prop-types';
import { AreaIcones, Background } from './Desktop.styles';
import Chrome_Logo from '../../assets/Chrome_Logo.png'
import VSCode_Logo from '../../assets/VSCode_Logo.webp'
import Photoshop_Logo from '../../assets/Photoshop_Logo.png'
import Janela from '../../Components/Janela/Janela.page';
import IconeDesktop from '../../Components/IconeDesktop/IconeDesktop.page';
// import Navegador from '../../Components/Navegador/Navegador.page';

export default function Desktop({ImageUrl}) {

	return(
		<Background Image={ImageUrl}>
			<AreaIcones>
				<IconeDesktop Icon={Chrome_Logo} name='Chrome'/>
				<IconeDesktop Icon={VSCode_Logo} name='VS Code'/>
				<IconeDesktop Icon={Photoshop_Logo} name='Photoshop'/>
				{/* <Janela title='Toni Navegador'>
					<Navegador Url='http://t8ninho.com/'/>
				</Janela> */}
				<Janela title='Anotações'>
					<textarea type='text'/>
				</Janela>
			</AreaIcones>
		</Background>
	)
}

Desktop.propTypes = {
	ImageUrl: PropTypes.string.isRequired
};