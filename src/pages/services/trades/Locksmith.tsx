import locksmithBannerImg from "@/assets/images/locksmithImg.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";
import CanHelpYou from "../CanHelpYou";

export default function Locksmith() {
  const locksmithHeaderContent = {
    title: "Do you need Locksmith?",
    description:
      "Our locksmith services provide fast, reliable solutions for lockouts, key replacements, and security upgrades. Whether it’s for your home, office, or car, we ensure your property stays secure with expert craftsmanship and prompt service.",

    items: [
      "Post the job completely free of charge",
      "Receive non-binding offers from companies",
      "Choose the offer that suits you best.",
    ],
  };

  // Content Section

  const locksmithServiceList = [
    "Lock Picks & Tension Wrenches",
    "Key Cutters",
    "Drills & Extractors",
    "Key Programming Tools",
    "Lock Lubricants & Cleaning Solutions",
    "Digital Tools",
    "Protective Gloves & Eye Protection",
  ];

  return (
    <section className="py-10">
      <div className="container px-32">
        {/* Header Section */}
        <ServiceHeader
          headerContent={locksmithHeaderContent}
          bannerImg={locksmithBannerImg}
        />

        {/* // Content Section */}

        <div className="w-full grid grid-cols-3 py-5 mt-8">
          <div className="col-span-2 w-full py-8 px-12 flex flex-col gap-5">
            <h4 className="text-xl font-semibold text-primaryDark mb-6">
              Expert Solutions for Your Security Needs
            </h4>
            <p className="text-sm leading-normal">
              Locksmith services provide essential expertise in securing homes,
              businesses, and other properties by installing, maintaining, and
              repairing locking systems. Whether it's for new installations,
              emergency lockouts, or enhancing security, a locksmith ensures the
              safety and security of valuable assets, offering professional
              solutions tailored to individual requirements.
            </p>
            <p className="text-sm leading-normal">
              A locksmith begins with a consultation to understand the specific
              security needs of the property. This could include installing new
              locks, upgrading existing systems, or adding additional security
              measures such as deadbolts, smart locks, or high-security locks.
              The locksmith evaluates the property to determine the best
              solutions based on its layout and security vulnerabilities. The
              locksmith may suggest the most suitable locking mechanisms,
              including deadbolts, keyless entry systems, and advanced security
              features like biometric or electronic locks.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mb-6">
              Lock Installation & Replacement
            </h4>

            <h4 className="text-xl font-semibold text-primaryDark mb-6">
              New Lock Installation
            </h4>
            <p className="text-sm leading-normal">
              Whether it’s for doors, windows, cabinets, or safes, the locksmith
              ensures the installation of secure, high-quality locking systems.
              Options include traditional keyed locks, digital locks, keyless
              entry systems, and high-security locks.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mb-6">
              Rekeying Locks
            </h4>
            <p className="text-sm leading-normal">
              If the security of a property has been compromised (for example,
              if keys have been lost or stolen), the locksmith can rekey
              existing locks, changing the internal mechanism so that previous
              keys no longer work.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mb-6">
              Lock Replacement
            </h4>
            <p className="text-sm leading-normal">
              When locks are worn out, outdated, or broken, a locksmith replaces
              them with new, more secure models that meet modern safety
              standards.
            </p>
            <p className="text-sm leading-normal">
              One of the most common locksmith services is assisting with
              lockouts. If a person is locked out of their home, office, or
              vehicle, the locksmith uses professional tools and techniques to
              safely gain access to the property without causing damage to the
              lock or door. In cases where a key breaks inside the lock, the
              locksmith can extract the broken key and replace it. Specialized
              tools ensure that the lock is not damaged during this process.
            </p>

            <p className="text-sm leading-normal mt-8">
              Locksmiths can install or upgrade to smart locking systems that
              provide greater control and flexibility, such as remote access,
              timed access, or biometric identification. For businesses or
              multi-unit properties, locksmiths can install master key systems
              that allow different levels of access to various areas. These
              systems provide enhanced security by controlling who can access
              specific rooms or areas.
            </p>
            <p className="text-sm leading-normal">
              Locksmiths offer regular maintenance services to ensure that locks
              and security systems are functioning correctly. This includes
              lubricating locks, tightening screws, adjusting deadbolts, and
              inspecting lock mechanisms for wear and tear. If a lock becomes
              faulty or shows signs of damage, locksmiths can repair the lock
              mechanism to restore its functionality, ensuring that the door or
              security system remains secure.
            </p>

            <CanHelpYou
              title={"Tools & Instruments Used by Locksmiths"}
              electricianServiceList={locksmithServiceList}
            />

            <div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
              <h4 className="text-lg font-semibold text-primaryDark">
                Are you need Locksmith?
              </h4>
              <p className="text-sm leading-normal font-medium">
                Register the job with Swish.ma
              </p>

              <div className="">
                <Link to="/">
                  <Button size="sm">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
