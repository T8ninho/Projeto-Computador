import { useEffect, useState } from 'react';
import Logo_Windows1 from '../../assets/Logo_Windows.png';
import Logo_Windows2 from '../../assets/Logo_Windows2.png';
import Chrome_Logo from '../../assets/Chrome_Logo.png'
import VSCode_Logo from '../../assets/VSCode_Logo.webp'
import { ContainerIcone, IconesTaskBar, TaskBarContainer } from "./TaskBar.style";
import { SlArrowUp, SlScreenDesktop, SlVolume2, SlSpeech, SlPrinter } from "react-icons/sl";

export default function TaskBar() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const Intervalo = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(Intervalo);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    //   second: '2-digit',
      hour12: false
    });
  };

  return (
    <TaskBarContainer>
      <div>
        <IconesTaskBar
          title='Iniciar'
          Icon={Logo_Windows1}
          IconHover={Logo_Windows2}
        />
      </div>
      <div>
        <ContainerIcone>
          <IconesTaskBar
            title='Navegador Internet'
            Icon={Chrome_Logo}
          />
        </ContainerIcone>
        <ContainerIcone>
          <IconesTaskBar
            title='Visual Studio Code'
            Icon={VSCode_Logo}
          />
        </ContainerIcone>
      </div>
      <div>
        <ContainerIcone>
          <SlArrowUp title='Mostrar icones ocultos' />
        </ContainerIcone>
        <ContainerIcone>
          <SlScreenDesktop title='Rede Acesso a internet' />
        </ContainerIcone>
        <ContainerIcone>
          <SlVolume2 title='Alto-falantes: 100%' />
        </ContainerIcone>
        <ContainerIcone>
          <SlPrinter title='Impressora vazia'/>
        </ContainerIcone>
        <ContainerIcone title={formatDate(dateTime)}>
          <p>{formatTime(dateTime)}</p>
          <p>{dateTime.toLocaleDateString()}</p>
        </ContainerIcone>
        <ContainerIcone>
          <SlSpeech title='Não há notificações novas'/>
        </ContainerIcone>
      </div>
    </TaskBarContainer>
  );
}
