import Desktop from './Pages/Desktop/Desktop.page'
import Background_desktop from './assets/background_desktop.jpg'
import TaskBar from './Components/TaskBar/TaskBar.page'

export default function App() {

  return(
    <>
      <Desktop ImageUrl={Background_desktop}/>
      <TaskBar />
    </>
  )
}