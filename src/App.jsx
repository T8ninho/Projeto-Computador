import './App.css'
import { Icones } from './Components/IconeDesktop/IconeDesktop.styles'
import Desktop from './Pages/Desktop/Desktop.page'
import { TaskBar } from './Pages/Desktop/Desktop.styles'
import Background_desktop from './assets/background_desktop.jpg'
import Logo_Windows1 from './assets/Logo_Windows.png'
import Logo_Windows2 from './assets/Logo_Windows2.png'

export default function App() {

  return(
    <>
      <Desktop ImageUrl={Background_desktop}/>
      <TaskBar>
        <Icones 
          title='Iniciar'
          Icon={Logo_Windows1} 
          IconHover={Logo_Windows2}
        />
      </TaskBar>
    </>
  )
}