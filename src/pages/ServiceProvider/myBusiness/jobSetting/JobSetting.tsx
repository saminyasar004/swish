import { Link, useLocation } from "react-router-dom";
import { ButtonProvider } from "@/components/ui/buttonProvider";
import companyInfoBag from "@/assets/providerIcon/settingIcon/companyInfoBag.svg";
import passwordIcon from "@/assets/providerIcon/settingIcon/passwordIcon.svg";
import bankIcon from "@/assets/providerIcon/settingIcon/bankIcon.svg";
import JobSettingNotification from "./JobSettingNotification";
import JobSettingNotifications from "./JobSettingNotifications";

const userSettings = [
  {
    name: "User Settings",
    subcategories: [
      {
        subname: "Company info",
        url: "/provider/my-business/job-setting/company-info",
      },
      {
        subname: "Notifications",
        url: "/provider/my-business/job-setting/notifications",
      },
      {
        subname: "Job search",
        url: "/provider/my-business/job-setting/job-search",
      },
      {
        subname: "Help guide",
        url: "/provider/my-business/job-setting/help-guide",
      },
      {
        subname: "Customer service",
        url: "/provider/my-business/job-setting/customer-service",
      },
    ],
  },
  {
    name: "Billing",
    subcategories: [{ subname: "Receipts", url: "/receipts" }],
  },
];

export default function JobSetting() {
  const location = useLocation();
  const pathname = location.pathname;

  // ✅ Map path → content
  const contentMap: Record<string, JSX.Element> = {
    "/provider/my-business/job-setting/company-info": <CompanyInfo />,
    // add other pages here later:
    "/provider/my-business/job-setting/notifications": <JobSettingNotifications />,
    // "/provider/my-business/job-setting/job-search": <JobSearch />,
  };

  const content = contentMap[pathname] ?? (
    <p className="text-gray-500">Select a setting from the sidebar.</p>
  );

  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 ">
          <NavigationMenuContent />
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-6 mt-8 space-y-6 container mx-auto border rounded-lg bg-white">
          {content}
        </main>
      </div>
    </section>
  );
}

export function NavigationMenuContent() {
  return (
    <div className="w-full min-w-max flex flex-col gap-2 relative overflow-hidden px-6">
      <div className="py-5 space-y-2">
        <div className="flex flex-col mb-6">
          <Link to="">
            <h3 className="font-bold text-2xl text-primaryDark px-2">
              Settings
            </h3>
          </Link>
        </div>

        <div className="w-full flex flex-col gap-4">
          {userSettings.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category title */}
              <h3 className="font-semibold text-xl text-primaryDark px-2 mb-2">
                {category.name}
              </h3>

              {/* Subcategories */}
              <div className="flex flex-col">
                {category.subcategories.map((subcategory, subIndex) => (
                  <Link key={subIndex} to={subcategory.url}>
                    <ButtonProvider
                      variant="link"
                      className="w-full flex items-center justify-between font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md hover:no-underline text-left"
                    >
                      {subcategory.subname}
                    </ButtonProvider>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col mb-6">
          <Link to="">
            <h3 className="font-semibold text-xl text-primaryDark px-2">
              Other
            </h3>
          </Link>
        </div>
        <div className="flex flex-col ">
          <ButtonProvider
            variant="link"
            className="w-full flex items-center justify-between font-semibold text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md hover:no-underline text-left"
          >
            Switch account
          </ButtonProvider>
          <ButtonProvider
            variant="link"
            className="w-full flex items-center text-red-500 justify-between font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md hover:no-underline text-left"
          >
            Logout
          </ButtonProvider>
        </div>
      </div>
    </div>
  );
}

export function CompanyInfo() {
  return (
    <>
      {/* Company Info */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <img src={companyInfoBag} alt="company-info" className="w-5 h-5" />
          <h2 className="text-lg font-semibold text-primaryDark">
            Company Info
          </h2>
        </div>

        <p className="text-sm text-text-[#151515]">
          Make sure the company information here is correct.
        </p>

        <div className="text-sm space-y-2">
          <div>
            <span className="font-semibold">Email Company</span>
            <p className="text-gray-700">alimounji@outlook.com</p>
          </div>
          <div>
            <span className="font-semibold">Telephone Company</span>
            <p className="text-gray-700">+123456789</p>
          </div>
          <div>
            <span className="font-semibold">Org. No.</span>
            <p className="text-gray-700">123456789</p>
          </div>
          <div>
            <span className="font-semibold">Postal Address</span>
            <p className="text-gray-700">
              12 Australia
              <br />
              1234 Haven
            </p>
          </div>
        </div>

        <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50">
          Change Company Information
        </button>
      </section>

      <hr />

      {/* Password */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <img src={passwordIcon} alt="password" className="w-5 h-5" />
          <h2 className="text-lg font-semibold text-primaryDark">Password</h2>
        </div>

        <p className="text-sm text-[#151515]">
          Press the button below to change your password.
        </p>

        <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50">
          Change Password
        </button>
      </section>

      <hr />

      {/* Bank Account Verification */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <img src={bankIcon} alt="bank" className="w-5 h-5" />
          <h2 className="text-lg font-semibold text-primaryDark">
            Bank Account Verification
          </h2>
        </div>

        {/* <p className="text-sm text-gray-700">✅ verified</p> */}

        <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50">
          Verify Bank Account
        </button>
      </section>
    </>
  );
}
