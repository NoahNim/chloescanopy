import Image from "next/image";

export default function Camps() {

    return (
        <div className="border-solid rounded mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-center font-bold text-4xl m-2"><b>2025 Summer Camp</b></h1>
            <div className="bg-lime-300/90 border-solid rounded p-4 flex flex-col">
                <p>
                    Chloe&apos;s Canopy Summer Camps provide an exciting, adventurous way for your child to spend their Summer. With an emphasis on outdoor exploration, physical activities, team-building games, and creative arts & crafts, we inspire children to discover new strengths while developing essential life skills. At camp, children work together to overcome challenges, form friendships through group activities, and build self-confidence and resilience.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-solid p-4 max-w-6xl mx-auto">
                <div className="bg-lime-300/90 border-solid rounded p-4 flex flex-col">
                    <div className="flex justify-center border-solid rounded">
                        <Image src="/images/beachcamp.JPG" alt="Image error" width={400}
                            height={300}
                            className="rounded object-cover w-full h-[300px]" />
                    </div>
                    <ul className="list-none p-2 text-center">
                        <li><h2><b>June 23-27 King Tide Beach Camp</b></h2></li>
                        <li><b>Location:</b> Carkeek & Golden Gardens </li>
                        <li><b>Hours:</b> 9am - 3pm</li>
                    </ul>
                    <p>
                        Explore the Beach at Low Tide! Join us for an exciting beach adventure as we explore the shoreline during an extremely low tide! As we walk along the beach, we&apos;ll observe fascinating tide pool creatures and learn about the diverse marine life of the Puget Sound. Our days will be spent between Carkeek Park and Golden Gardens, exploring, playing at the beach, creating beach art, and hearing captivating stories of the Salish Sea.

                        On Tuesday & Thursday we will have the opportunity to walk the 1-mile stretch of beach between these two local parks. It&apos;s a perfect opportunity to enjoy a Summers day by the water, surrounded by friends and the wonders of nature. We will split the walk up into two parts with lunch in between. .
                    </p>
                </div>
                <div className="bg-lime-300/90 border-solid rounded p-4 flex flex-col">
                    <div className="flex justify-center border-solid rounded">
                        <Image src="/images/createandexplore.jpeg" alt="Image error" width={400}
                            height={300}
                            className="rounded object-cover w-full h-[300px]" />
                    </div>
                    <ul className="list-none p-2 text-center">
                        <li><h2><b>July 7-11 Create & Explore Things that Fly!</b></h2></li>
                        <li><b>Location:</b> North Acres Park</li>
                        <li><b>Hours:</b> 9am - 3pm</li>
                    </ul>
                    <p>
                        Create and Explore Camp is about having fun while connecting with the great outdoors! We offer a balance of group games, nature exploration, creative projects, and outdoor play. Get ready to go on treasure hunts through the woods, run through the sprinklers on a hot day  at the water park, tackle exciting team-building challenges, and unleash your creativity. This week&apos;s theme is Things that Fly, where we&apos;ll discover the wonders of flight through fun activities and projects!
                    </p>
                </div>
                <div className="bg-lime-300/90 border-solid rounded p-4 flex flex-col">
                    <div className="flex justify-center border-solid rounded">
                        <Image src="/images/beachcamp2.jpeg" alt="Image error" width={400}
                            height={300}
                            className="rounded object-cover w-full h-[300px]" />
                    </div>
                    <ul className="list-none p-2 text-center">
                        <li><h2><b>July 21-25  King Tide Beach Camp</b></h2></li>
                        <li><b>Location:</b> Carkeek & Golden Gardens </li>
                        <li><b>Hours:</b> 9am - 3pm</li>
                    </ul>
                    <p>
                        Our Beach Camp has been a Summer Camp favorite for several years, so here&apos;s to Beach camp Round 2. Join us for another exciting beach adventure as we explore the shoreline during an extremely low tide! Our days will be spent between Carkeek Park and Golden Gardens, exploring tide pool creatures, playing at the beach, creating beach art, and story tellings  of the Salish Sea.

                        On Wednesday & Friday we will have the opportunity to walk the 1-mile stretch of beach between these two local parks. We will split the walk up into two parts with lunch in between.
                    </p>
                </div>
                <div className="bg-lime-300/90 border-solid rounded p-4 flex flex-col">
                    <div className="flex justify-center border-solid rounded">
                        <Image src="/images/createandexplore2.jpeg" alt="Image error" width={400}
                            height={300}
                            className="rounded object-cover w-full h-[300px]" />
                    </div>
                    <ul className="list-none p-2 text-center">
                        <li><h2><b>August 4-8 Create & Explore</b></h2></li>
                        <li><b>Location:</b> North Acres Park  </li>
                        <li><b>Hours:</b> 9am - 3pm</li>
                    </ul>
                    <p>
                        Another exciting week of Create and Explore! This week&apos;s theme is Wild Clay! Campers will be immersed in the wonders of nature as we discover where clay comes from and explore creative ways to work with it outdoors. Along the way, we&apos;ll explore the park and all it has to offer, enjoying group games, nature exploration, and outdoor play.
                    </p>
                </div>
            </div>
            <div className="text-center m-3">
                <b>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScWji_cy3fVgNh6z61WhP2uSSQyliT-XjF4dH0UKDCk6KN2fw/viewform" target="_blank" className="bg-lime-500/90 border-solid rounded p-2 font-bold text-2xl">Click Here to Enroll Now</a>
                </b>
            </div>
        </div>
    )
}