import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-lime-200/70 border-solid rounded mt-4">
        <h1 className="text-center text-2xl"><b>Chloe&apos;s Canopy</b></h1>
        <Image src="/images/image0.jpeg" alt="Image error" width={400}
          height={300}
          className="rounded object-cover w-full h-[300px]" />
      </div>
      <div className="bg-lime-200/90 border-solid rounded mt-4">
        <p className="text-center">Welcome to Chloe&apos;s Canopy - Extra-curricular programs for children and adults! From the Water to Land and up the Mountain, Rain or Shine, we explore the world year-round! Build confidence by learning to navigate a variety of environments.

          You&apos;ll have fun discovering your outdoor abilities in a safe, supportive space designed to help develop the foundational  skills you can use on your next adventure.
        </p>
      </div>
      <div className="text-center m-3">
        <b>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeivVl2FR8R-shYEYyLsBf58-zdyPukTi0XGf39vJO4wr4_2Q/viewform" target="_blank" className="bg-lime-500/90 border-solid rounded p-2">Join Mailing List</a>
        </b>
      </div>
    </div>
  );
}
