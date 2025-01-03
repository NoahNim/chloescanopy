interface SwimSessionsProps {
    title: string;
    sundays: string;
    mondays: string;
    thursdays: string;
}

export default function SwimSessions({ title, sundays, mondays, thursdays }: SwimSessionsProps) {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                <li><b>Sundays:</b> {sundays}</li>
                <li><b>Mondays:</b> {mondays}</li>
                <li><b>Thursdays:</b> {thursdays}</li>
            </ul>
        </div>
    )
}