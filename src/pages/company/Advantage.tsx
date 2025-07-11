
import pencilIcon from "../../assets/images/edit.svg";
import mailIcon from "../../assets/images/mail.svg";
import chatIcon from "../../assets/images/mail.svg";
import blueprintImage from "../../assets/images/poster.svg";

export default function Advantage() {
  return (
   <section className="py-12 lg:py-24 bg-white">
  <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
    
    {/* Left - Text Content */}
    <div className="w-full md:w-1/2 flex flex-col gap-6">
      <h2 className="text-2xl md:text-3xl font-bold text-primaryDark mb-4">
        Many advantages of <span className="text-primary">Swish.ma</span>
      </h2>

      {/* Features */}
      <div className="flex items-start gap-4">
        <img src={pencilIcon} alt="Access to jobs icon" className="w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold text-primaryDark mb-4">Access to jobs</h3>
          <p className="text-sm text-gray-600">
            Join Swish.ma and get relevant jobs for your company.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <img src={mailIcon} alt="Contact icon" className="w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold text-primaryDark mb-4">Customers get in touch directly</h3>
          <p className="text-sm text-gray-600">
            Your business will be visible in search, and customers can get in touch directly through your profile page.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <img src={chatIcon} alt="Showcase company icon" className="w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold text-primaryDark mb-4">We showcase your company</h3>
          <p className="text-sm text-gray-600">
            With the Profile Page and homepage on Swish.ma, you can showcase your logo, employees, photos and more. It’s easy to make a great first impression.
          </p>
        </div>
      </div>
    </div>

    {/* Right - Image */}
    <div className="w-full md:w-1/2 relative">
      <div className="relative w-full max-w-md mx-auto shadow-xl rounded overflow-hidden">
        <img
          src={blueprintImage} // <-- Replace with your actual image path
          alt="Architecture plan"
          className="rounded-lg object-cover"
        />
        {/* Tape effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-greyWhite z-10 rotate-[2deg]"></div>
      </div>
    </div>
  </div>
</section>

  )
}
