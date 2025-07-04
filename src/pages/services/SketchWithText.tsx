import SectionBgSketch from "@/assets/images/section-bg-sketch.svg";

export default function SketchWithText({description}) {
  return (
   <div className="py-5 my-20 relative">
              <img
                src={SectionBgSketch}
                alt="section bg"
                className="absolute max-w-full top-0 left-0 -z-10"
              />
              <p className="w-[70%] mx-auto text-base leading-loose text-center">
                {description}
              </p>
            </div>
  )
}
