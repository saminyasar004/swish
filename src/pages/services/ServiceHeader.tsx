import ArrowUpImg from "@/assets/images/arrow-up.svg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";



export default function ServiceHeader({  headerContent,bannerImg}) {
  return (
        <div className="w-full grid grid-cols-3 rounded-lg bg-liquidGreen relative">

          <div className="col-span-2 py-32 px-12 flex flex-col gap-2 relative pr-20">
            <h2 className="text-3xl font-semibold text-primaryDark mb-6">
              {headerContent.title}
            </h2>
            <p className="xl:w-[65%] lg:w-[75%] leading-normal text-sm font-medium">
              {headerContent.description}
            </p>

            <div className="py-2 space-y-1">
              {headerContent.items.map((item, index) => (
                <div key={index} className="w-full flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <img
              src={ArrowUpImg}
              alt="Arrow up"
              className="w-max absolute lg:top-[60%] lg:w-[30%]  xl:top-[70%] right-24 -translate-y-[70%] hidden lg:block"
            />
          </div>

          {/* Question form */}
          <div className="rounded-br-lg rounded-tr-lg overflow-hidden ">

            <div className="flex flex-col gap-4  bg-white rounded-lg p-5 py-8 absolute    lg:w-[20rem] lg:right-0 lg:top-1/2 lg:-translate-y-1/2     xl:w-[25rem] xl:right-12 xl:top-1/2 xl:-translate-y-1/2 z-10">
              <h3 className="font-semibold text-xl text-primaryDark">
                What do you need help with?
              </h3>

              <Input
                placeholder="Title of the projects"
                className="ring-1 ring-neutral-200"
              />

              <Textarea
                placeholder="Describe what needs to be done"
                className="ring-1 ring-neutral-200"
                rows={5}
              />

              <div className="w-full flex items-center">
                <Button size="lg" className="w-full">
                  Post a job
                </Button>
              </div>
            </div>

            <img
              src={bannerImg}
              alt="Plumber banner"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
  )
}
