//importo il logo di React 
import reactLogo from '../assets/react.svg'

//creo il componente dell'header
export default function AppHeader() {

    //creo una costante dove salvare il nome dell'applicazione
    const appName = 'React Tasklist';

    //eseguo il return dell'header
    return (
        <header>
            <div className="logo">
                <img src={reactLogo} alt="Logo React" />
                {title.toUpperCase()}
            </div>
        </header>
    )
};