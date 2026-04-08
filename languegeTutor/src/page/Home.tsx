import Box from '../components/box/Box.tsx';
import Button from '../components/button/Button.tsx';
import Sidebar from '../components/historico/Sidebar.tsx';
import { useState } from 'react'

function Home() {
    const [historicoAberto, setHistoricoAberto] = useState(false)
    const handleToggleAberto = () => {
        setHistoricoAberto((aberto) => !aberto);
    }
    return(
        <div>
            <Sidebar aberto={ historicoAberto }/>
            <Button onToggleHistorico={ handleToggleAberto }/>
            <Box />
        </div>
    )
}

export default Home;