import BusinessProfileImage from "@/assets/images/BusinessProfileImage.svg";

export default function BusinessHeader() {
  return (
    <div className="relative w-full">
      {/* Cover Image */}
      <img
        src={BusinessProfileImage}
        alt="Business cover"
        className="w-full h-[320px] object-cover rounded-md"
      />

      {/* Bottom Gradient Layer */}
      <div className="absolute bottom-0 left-0 w-full h-24 rounded-b-md bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Profile Row */}
      <div className="flex justify-between items-center px-4 md:px-8 absolute bottom-4 w-full">
        {/* Left: Profile Info */}
        <div className="flex items-center gap-4">
          <div className="bg-[#B8D8CA] border-grayWhite border-2 text-black text-3xl font-semibold rounded-md w-16 h-14 flex items-center justify-center shadow-md">
            A
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Ali Mounji
          </h2>
        </div>

        {/* Right: Reviews */}
        <div className="text-sm md:text-base font-medium text-gray-700">
          <span className="font-semibold text-black">Reviews:</span>{" "}
          <span className="text-yellow-500">⭐</span> (5)
        </div>
      </div>
    </div>
  );
}
