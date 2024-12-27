import Image from "next/image";

export default function Camps() {

    return (
        <div className="">
            <h1><b>2025 Summer Camp Details</b></h1>
            <div className="space-y-3 flex flex-col border-solid rounded justify-center">
                <div className="bg-teal-200 flex-auto border-solid rounded">
                    <div>
                        <Image src="/images/beachcamp.JPG" alt="Image error" height="500" width="500" className="rounded" />
                    </div>
                    <ul>
                        <li><h2><b>June 23-27 Beach Camp</b></h2></li>
                        <li><b>Location:</b> North Acres Park</li>
                        <li><b>Hours:</b> 9am - 3pm</li>
                    </ul>
                    <p>
                        Discover what the beach has to offer during a negative low tide. We&apos;ll observe tide pool creatures, practice proper beach etiquette, walk the shoreline from park to park, and share stories of our native lands and the Salish Sea.
                    </p>
                </div>
                <div className="bg-teal-200 flex-auto border-solid rounded">
                    <div>
                        <Image src="/images/createandexplore.jpeg" alt="Image error" height="200" width="200" className="rounded" />
                    </div>
                    <ul>
                        <li><h2><b>July 7-11 Create & Explore</b></h2></li>
                        <li><b>Location:</b> North Acres Park</li>
                        <li><b>Hours:</b> 9am - 3pm</li>
                    </ul>
                    <p>
                        We&apos;ll be playing outside, exploring the woods, enjoying time at the park, splashing around in the water, playing group games, and doing arts and crafts. Don&apos;t forget to bring a swimsuit and a towel, as we&apos;ll be heading to the water park!
                    </p>
                </div>
                <div className="bg-teal-200 flex-auto border-solid rounded">
                    <div>
                        <Image src="/images/beachcamp2.jpeg" alt="Image error" height="300" width="300" className="rounded" />
                    </div>
                    <ul>
                        <li><h2><b>July 21-25  King Tide Beach Camp</b></h2></li>
                        <li><b>Location:</b> Carkeek & Golden Gardens </li>
                        <li><b>Hours:</b> 9am - 3pm</li>
                    </ul>
                    <p>
                        Discover what the beach has to offer during a negative low tide. We&apos;ll observe tide pool creatures, practice proper beach etiquette, walk the shoreline from park to park, and hear stories about the Salish Sea.
                    </p>
                </div>
                <div className="bg-teal-200 flex-auto border-solid rounded">
                    <div>
                        <Image src="/images/createandexplore2.jpeg" alt="Image error" height="300" width="300" className="rounded" />
                    </div>
                    <ul>
                        <li><h2><b>August 4-8 Create & Explore</b></h2></li>
                        <li><b>Location:</b> North Acres Park  </li>
                        <li><b>Hours:</b> 9am - 3pm</li>
                    </ul>
                    <p>
                        Just like our other previous Create and explore camp, We&apos;ll be playing outside, exploring the woods, enjoying time at the park, splashing around in the water, playing group games, and doing arts and crafts. Don&apos;t forget to bring a swimsuit and a towel, as we&apos;ll be heading to the water park!
                    </p>
                </div>
            </div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfNUWWMK4NuEAqIcFNfEA2x7EmPpUDNy_Pl5JXKauxCsHqhPg/viewform?embedded=true" width="640" height="700">Loading…</iframe>
        </div>
    )
}