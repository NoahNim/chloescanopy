interface SwimSessionsProps {
    title: string;
    sundays: string;
    mondays: string;
    thursdays: string;
}

export default function SwimSessions({ title, sundays, mondays, thursdays }: SwimSessionsProps) {
    return (
        <div className="bg-lime-300/90 border-solid rounded p-4 flex flex-col m-3">
            <h2 className="text-center font-bold text-2xl"><b>{title}</b></h2>
            <ul className="list-none p-2 text-center">
                <li><b>Sundays:</b> {sundays}</li>
                <li><b>Mondays:</b> {mondays}</li>
                <li><b>Thursdays:</b> {thursdays}</li>
            </ul>
        </div>
    )
}