import Image from "next/image";

export default function Camps() {

    return (
        <div className="border-solid rounded mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-center font-bold text-2xl"><b>2025 Summer Camp Details</b></h1>
            <div className="text-center m-3">
                <b>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScWji_cy3fVgNh6z61WhP2uSSQyliT-XjF4dH0UKDCk6KN2fw/viewform" target="_blank" className="bg-lime-500/90 border-solid rounded p-2 font-bold text-2xl">Enroll Here</a>
                </b>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-solid p-4 max-w-6xl mx-auto">
                <div className="bg-lime-300/90 border-solid rounded p-4 flex flex-col">
                    <div className="flex justify-center border-solid rounded">
                        <Image src="/images/beachcamp.JPG" alt="Image error" width={400}
                            height={300}
                            className="rounded object-cover w-full h-[300px]" />
                    </div>
                    <ul className="list-none p-2 text-center">
                        <li><h2><b>June 23-27 Beach Camp</b></h2></li>
                        <li><b>Location:</b> Carkeek & Golden Gardens </li>
                        <li><b>Hours:</b> 9am - 3pm</li>
                    </ul>
                    <p>
                        Discover what the beach has to offer during a negative low tide. We&apos;ll observe tide pool creatures, practice proper beach etiquette, walk the shoreline from park to park, and share stories of our native lands and the Salish Sea.
                    </p>
                    {/* <div className="text-center m-3">
                        <b>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNUWWMK4NuEAqIcFNfEA2x7EmPpUDNy_Pl5JXKauxCsHqhPg/viewform" target="_blank" className="bg-lime-500/90 border-solid rounded p-2">Sign Up Here!</a>
                        </b>
                    </div> */}
                </div>
                <div className="bg-lime-300/90 border-solid rounded p-4 flex flex-col">
                    <div className="flex justify-center border-solid rounded">
                        <Image src="/images/createandexplore.jpeg" alt="Image error" width={400}
                            height={300}
                            className="rounded object-cover w-full h-[300px]" />
                    </div>
                    <ul className="list-none p-2 text-center">
                        <li><h2><b>July 7-11 Create & Explore</b></h2></li>
                        <li><b>Location:</b> North Acres Park</li>
                        <li><b>Hours:</b> 9am - 3pm</li>
                    </ul>
                    <p>
                        We&apos;ll be playing outside, exploring the woods, enjoying time at the park, splashing around in the water, playing group games, and doing arts and crafts. Don&apos;t forget to bring a swimsuit and a towel, as we&apos;ll be heading to the water park!
                    </p>
                    {/* <div className="text-center m-3">
                        <b>
                            <a href="https://forms.gle/eAHDqNVVbvREs8DRA" target="_blank" className="bg-lime-500/90 border-solid rounded p-2">Sign Up Here!</a>
                        </b>
                    </div> */}
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
                        Discover what the beach has to offer during a negative low tide. We&apos;ll observe tide pool creatures, practice proper beach etiquette, walk the shoreline from park to park, and hear stories about the Salish Sea.
                    </p>
                    {/* <div className="text-center m-3">
                        <b>
                            <a href="https://forms.gle/GacYNMuc1xEPgmy19" target="_blank" className="bg-lime-500/90 border-solid rounded p-2">Sign Up Here!</a>
                        </b>
                    </div> */}
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
                        Just like our other previous Create and explore camp, We&apos;ll be playing outside, exploring the woods, enjoying time at the park, splashing around in the water, playing group games, and doing arts and crafts. Don&apos;t forget to bring a swimsuit and a towel, as we&apos;ll be heading to the water park!
                    </p>
                    {/* <div className="text-center m-3">
                        <b>
                            <a href="https://forms.gle/bKpkeYFPDv1TXfrY8" target="_blank" className="bg-lime-500/90 border-solid rounded p-2">Sign Up Here!</a>
                        </b>
                    </div> */}
                </div>
            </div>
        </div>
    )
}