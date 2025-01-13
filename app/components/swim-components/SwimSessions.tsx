interface SwimSessionsProps {
    title: string;
    sundays: string;
    mondays: string;
    thursdays: string;
}

export default function SwimSessions({ title, sundays, mondays, thursdays }: SwimSessionsProps) {
    return (
        <div className="border-solid rounded flex flex-col">
            <h2 className="text-center font-bold text-1xl"><b>{title}</b></h2>
            <ul className="list-none p-1 text-center">
                <li><b>Sundays:</b> {sundays}</li>
                <li><b>Mondays:</b> {mondays}</li>
                <li><b>Thursdays:</b> {thursdays}</li>
            </ul>
        </div>
    )
}