export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://image-tc.galaxy.tf/wijpeg-9ejbzxgbvwvsdxa6p6w2653gz/room-1-a-deluxe-a-king-bedroom_wide.jpg?crop=0%2C188%2C2000%2C1125&width=1140')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl mt-10">
          Experience Luxury & Comfort
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48">
          At our hotel, we offer an unparalleled experience, combining modern amenities with timeless elegance. Enjoy the serenity, comfort, and personalized service designed to make your stay unforgettable.
        </p>
        <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-center text-white bg-emerald-600 rounded-full hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-900">
          Book Your Stay
          <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  );
}
