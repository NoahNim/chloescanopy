export default function Pricing() {
    return (
        <div className="bg-lime-300/90 border-solid rounded p-4 flex flex-col m-3">
            <h1 className="text-center font-bold text-2xl"><b>Pricing</b></h1>
            <h2 className="text-center font-bold"><b>Group Classes 3-4 students (30 mins)</b></h2>
            <ul className="list-none p-2 text-center">
                <li><b>Single Class:</b> $50</li>
                <li><b>Six Class Sessions:</b> $270</li>
                <li><b>Make Up Class:</b> $15</li>
            </ul>
            <h2 className="text-center font-bold"><b>Private Lessons</b></h2>
            <ul className="list-none p-2 text-center">
                <li><b>15 minutes:</b> $55</li>
                <li><b>30 minutes:</b> $100</li>
                <li>$10/per additional student</li>
            </ul>
        </div>
    )
}