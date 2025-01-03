import SwimSessions from "../components/swim-components/SwimSessions"

export default function SwimLessons() {
    const sessions = [
        { title: "Winter Session #1 Class Schedule", sundays: "Jan 5, 12, 19, 26, Feb 2, 9", mondays: "Jan 6, 13, 20, 27 Feb 3, 1", thursdays: "Jan 9, 16, 23, 30 Feb 6, 13" },
        {
            title: "Winter Session #2 Class Schedule", sundays: "Feb 23. Mar 2, 9, 16, 23, 30", mondays: "Feb 24. Mar 3, 10, 17, 24, 31", thursdays: "Feb 27, Mar 6, 13, 20, 27 Apr 3"
        },
        {
            title: "Spring Class Schedule", sundays: "Apr 20, 27, May 4, 11 (2 weeks off) June 1, 8", mondays: "Apr 21, 28, May 5, 12 (2 weeks off) June 2, 9", thursdays: "Apr 4, May 1, 8, 15 (2 weeks off) June 5, 12"
        },
    ]


    return (
        <div className="border-solid rounded mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-center font-bold text-2xl"><b>Swim Lessons</b></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-solid p-4 max-w-6xl mx-auto">
                <SwimSessions title={sessions[0].title} sundays={sessions[0].sundays} mondays={sessions[0].mondays} thursdays={sessions[0].thursdays} />
                <SwimSessions title={sessions[1].title} sundays={sessions[1].sundays} mondays={sessions[1].mondays} thursdays={sessions[1].thursdays} />
                <SwimSessions title={sessions[2].title} sundays={sessions[2].sundays} mondays={sessions[2].mondays} thursdays={sessions[2].thursdays} />
            </div>
        </div>
    )
}