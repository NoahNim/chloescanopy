import SwimSessions from "../components/swim-components/SwimSessions"
import Pricing from "../components/swim-components/Pricing"
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
            <h1 className="text-center font-bold text-4xl"><b>Swim Lessons</b></h1>
            <div className="bg-lime-300/90 border-solid rounded p-4 flex flex-col">
                <p>
                    Swimming is a vital life skill, and ensuring safety while fostering a love for the water is Chloe&apos;s top priority. Chloe offers group lessons for children ages 3-12, as well as private lessons for all ages. The pool is heated to a comfortable 89-91°F, creating the perfect environment for learning and enjoyment.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 border-solid p-1 m-2 max-w-2xl mx-auto bg-lime-300/90">
                <h1 className="text-center font-bold text-2xl"><b>Session Schedule</b></h1>
                <SwimSessions title={sessions[0].title} sundays={sessions[0].sundays} mondays={sessions[0].mondays} thursdays={sessions[0].thursdays} />
                <SwimSessions title={sessions[1].title} sundays={sessions[1].sundays} mondays={sessions[1].mondays} thursdays={sessions[1].thursdays} />
                <SwimSessions title={sessions[2].title} sundays={sessions[2].sundays} mondays={sessions[2].mondays} thursdays={sessions[2].thursdays} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 border-solid p-4 max-w-2xl mx-auto bg-lime-300/90">
                <h1 className="text-center font-bold text-2xl"><b>Swim Levels</b></h1>
                <ul className="text-center">
                    <li><b>Beginner:</b> Swimmer is learning to dunk their head, blow bubbles, front float, back float, kick rhythmically, and love the water</li>
                    <li><b>Beginner Shallow End:</b> Swimmer is comfortable putting their head in the water, has an independent back float, learning to safely make their way across the short length of the pool on their stomach and on their back</li>
                    <li><b>Intermediate 1/2 & Full pool:</b> Swimmer is comfortable trying things on their own, learning Front crawl with sidebreating and backstroke</li>
                    <li><b>Advanced Full Pool:</b> Swimmer can independently make their way across the long length of the pool, Swimmer is refining technique, leaning advanced swim stokes and building endurance (Crawlstroke, Backstroke, Breaststroke, Butterfly)</li>
                    <li><b>All classes:</b> Games and Water Safety</li>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 border-solid p-4 max-w-2xl mx-auto">
                <Pricing />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 border-solid p-2 m-1 max-w-2xl mx-auto bg-lime-300/90">
                <h1 className="text-center font-bold text-2xl"><b>More Information</b></h1>
                <div>
                    <b className=" font-bold">Location</b>
                    <p>The indoor pool is located in a residential neighborhood in Shoreline, near 155th & Meridian. The exact address will be provided upon sign-up.</p>
                </div>
                <div>
                    <b className=" font-bold">Payment</b>
                    <p>Please send payment via Venmo to @chloeolson93.</p>
                </div>
                <div>
                    <b>Missed Classes, Cancellations & Make-Ups</b>
                    <ul className="">
                        <li>No refunds for missed classes.</li>
                        <li>No make-ups for no-shows.</li>
                        <li>If you notify me at the start of the session about any planned absences, I will do my best to accommodate a make-up class</li>
                        <li>After the session begins, any missed classes will incur a $15 per class make-up fee if a make-up is requested.</li>
                    </ul>
                </div>
                <div>
                    <b>Upon Arrival</b>
                    <p>Please arrive 5-10 minutes early to allow your child time to:</p>
                    <ul>
                        <li>Use the bathroom (Remind your child not to pee in the pool!)</li>
                        <li>Get changed</li>
                        <li>Rinse off in the shower, at the pool (Showering before class is a must!) Note: Kids with long hair should have their hair tied back in a ponytail.</li>
                    </ul>
                </div>
                <div>
                    <b>What To Bring</b>
                    <ul>
                        <li>Swimsuit</li>
                        <li>Goggles (masks are not preferred)</li>
                        <li>Towel</li>
                        <li>Hair tied back (for children with long hair)</li>
                    </ul>
                </div>
                <div>
                    <b>Important Note</b>
                    <p>Please make sure to double-check for personal belongings before leaving. While I will do my best to collect any forgotten items, since this is a shared rental pool, items can occasionally go missing.</p>
                </div>
            </div>
            <div className="text-center m-3">
                <b>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXdJXTiw_mwH4669VwqsvbpHg465T3Jb6IoCoT0CtE0Ip7tw/viewform" target="_blank" className="bg-lime-500/90 border-solid rounded p-2 font-bold text-2xl">Click Here to Enroll Now</a>
                </b>
            </div>
        </div>
    )
}