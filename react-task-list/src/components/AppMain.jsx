//creo il componente AppMain
export default function AppMain() {

    //creo una variabile che stampi welcome to my react app
    const welcomeMessage = 'welcome to my react app';

    //creo un array di tasks
    const tasks = [
        {
            id: 1,
            title: "Implementare la homepage",
            priority: 1,
            estimatedTime: 120,
            state: "completed"
        },
        {
            id: 2,
            title: "Sviluppare il menu di navigazione",
            priority: 2,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 3,
            title: "Creare il footer del sito",
            priority: 3,
            estimatedTime: 30,
            state: "completed"
        },
        {
            id: 4,
            title: "Ottimizzare le performance",
            priority: 1,
            estimatedTime: 180,
            state: "completed"
        },
        {
            id: 5,
            title: "Scrivere test per i componenti",
            priority: 2,
            estimatedTime: 90,
            state: "completed"
        },
        {
            id: 6,
            title: "Implementare la pagina dei contatti",
            priority: 3,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 7,
            title: "Aggiungere animazioni CSS",
            priority: 2,
            estimatedTime: 30,
            state: "backlog"
        },
        {
            id: 8,
            title: "Integrare l'API di autenticazione",
            priority: 1,
            estimatedTime: 120,
            state: "in_progress"
        },
        {
            id: 9,
            title: "Aggiornare la documentazione",
            priority: 3,
            estimatedTime: 60,
            state: "backlog"
        },
        {
            id: 10,
            title: "Rifattorizzare il codice CSS",
            priority: 2,
            estimatedTime: 90,
            state: "in_progress"
        }
    ];

    console.log(tasks);

    const uncompletedTasks = tasks.filter(task => task.state !== 'completed');

    const completedTasks = tasks.filter(task => task.state === 'completed');
    //eseguo il return del main
    return (
        <main>
            <h2>{welcomeMessage}</h2>

            <h2>Current tasks</h2>
            <section className="uncompletedTasks">

                {uncompletedTasks.map(task =>
                    <ul>
                        <li><strong>{task.title} {task.state}</strong></li>
                        <li>Priority: {task.priority}</li>
                        <li>Estimated Time {task.estimatedTime}</li>
                    </ul>
                )}

            </section>

            <h2>Completed tasks</h2>
            <section className="completedTasks">
                {completedTasks.map(task =>
                    <ul>
                        <li><strong>{task.title} {task.state}</strong></li>
                        <li>Priority: {task.priority}</li>
                        <li>Estimated Time {task.estimatedTime}</li>
                    </ul>
                )}
            </section>
        </main>
    )
};