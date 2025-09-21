import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Phone,
  MapPin,
  AtSign,
  PhoneCall,
  Plug,
  Sprout,
  Wrench,
  Star,
  PhoneCallIcon,
  Mail,
  X,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import BusinessProfileImage from "@/assets/images/BusinessProfileImage.svg";
import SearchCompanyLogo from "@/assets/images/SearchCompanyLogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

type RatingBarProps = { label: string; value: number; total: number };
const RatingBar: React.FC<RatingBarProps> = ({ label, value, total }) => {
  const pct = total ? Math.round((value / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="w-4 text-xs font-medium">{label}</span>
      <div className="h-2 w-48 rounded bg-muted">
        <div
          className="h-2 rounded bg-foreground/70"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-8 text-right text-xs text-muted-foreground">
        {value}
      </span>
    </div>
  );
};

type IconType = React.ElementType;

function InfoRow({
  icon: Icon,
  children,
}: {
  icon: IconType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Icon className="h-4 w-4" aria-hidden />
      <span>{children}</span>
    </div>
  );
}

function VerifiedPill({ label = "verified" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs text-emerald-600 border-emerald-200 bg-emerald-50">
      <ShieldCheck className="h-3.5 w-3.5" />
      <span className="font-medium">{label}</span>
    </span>
  );
}

// --- Sections ---------------------------------------------------------------

type ReviewsSummaryProps = {
  average: number;
  totalReviews: number;
  breakdown: { stars: 5 | 4 | 3 | 2 | 1; count: number }[];
};

export const ReviewsSummary: React.FC<ReviewsSummaryProps> = ({
  average,
  totalReviews,
  breakdown,
}) => {
  return (
    <div className="w-full border rounded-xl p-2 flex justify-between items-center bg-white">
      {/* Left: Breakdown */}
      <div className="flex-1 space-y-2">
        {breakdown
          .sort((a, b) => b.stars - a.stars)
          .map((b) => {
            const percentage =
              totalReviews > 0 ? (b.count / totalReviews) * 100 : 0;
            return (
              <div key={b.stars} className="flex items-center gap-3">
                <span className="w-4 text-sm font-medium text-gray-700">
                  {b.stars}
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
      </div>

      {/* Right: Average & Stars */}
      <div className="ml-4 text-center ">
        <div className="text-2xl font-semibold text-gray-900">
          {average.toFixed(1)}{" "}
          <span className="text-base font-normal">out of 5</span>
        </div>
        <div className="flex justify-center my-2">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`text-yellow-400 text-xl ${
                average >= index + 1 ? "" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          ({totalReviews} {totalReviews === 1 ? "evaluation" : "evaluations"})
        </div>
      </div>
    </div>
  );
};

type ReviewsListProps = { reviews: Review[] };

export const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <Card className="rounded-lg border-0 shadow-none">
      <CardContent className="p-0">
        {reviews.map((r, idx) => (
          <ReviewItem key={idx} {...r} />
        ))}
      </CardContent>
    </Card>
  );
};

type Review = {
  author: string;
  avatar?: string;
  rating: number; // 1..5
  title: string;
  date?: string;
  text: string;
};

const ReviewItem: React.FC<Review> = ({
  author,
  avatar,
  rating,
  date,
  text,
  title,
}) => {
  return (
    <div className="py-4 ">
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10">
          {avatar ? (
            <AvatarImage src={avatar || "/placeholder.svg"} alt={author} />
          ) : (
            <AvatarFallback className="text-xs">
              {author.slice(0, 2)}
            </AvatarFallback>
          )}
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div className="text-lg font-semibold">{author}</div>
            {date && <div className="text-sm text-gray-500">{date}</div>}
          </div>

          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-400"
                }`}
              />
            ))}
          </div>

          <h4 className="mt-4 text-sm text-blackPrimary">{title}</h4>
          <p className="mt-1 text-sm text-blackSecondary">{text}</p>
        </div>
      </div>
      <Separator className="mt-4" />
    </div>
  );
};

type JobItem = {
  title: string;
  location?: string;
  timestamp?: string;
  totalJobs?: number;
};
export const JobsList: React.FC<{ jobs: JobItem[]; title?: string }> = ({
  jobs,
  title = "Last completed jobs in swish.ma",
}) => {
  return (
    <section className="py-4 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-semibold text-blackPrimary">{title}</h3>
        {jobs.length > 0 && jobs[0].totalJobs && (
          <div className="text-xs text-gray-400">
            {jobs[0].totalJobs} jobs via My Bid
          </div>
        )}
      </div>
      <div className="rounded-lg">
        <div className="flex flex-col gap-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex items-start gap-2 px-4 py-3 bg-liquidGreen border border-gray-300 rounded-md"
            >
              <span className="text-green-600 mt-1">✔</span>
              <div className="flex-1">
                <div className="text-lg font-medium text-secondary">
                  {job.title}
                </div>
                <div className="flex gap-3">
                  {job.location && (
                    <div className="text-xs text-secondary">{job.location}</div>
                  )}
                  {job.timestamp && (
                    <div className="text-xs text-secondary">
                      {job.timestamp}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProjectsGallery: React.FC<{
  images: string[];
  title?: string;
}> = ({ images, title = "Corporate projects" }) => {
  return (
    <section>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <div className="flex gap-2 flex-wrap justify-center">
        {images.map((src, i) => (
          <img
            key={i}
            src={src || "/placeholder.svg"}
            alt={`project-${i}`}
            className="h-24  max-w-32 rounded-sm object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export const EmployeesList: React.FC<{
  employees: { name: string; email?: string; phone?: string; role?: string }[];
}> = ({ employees }) => {
  return (
    <section>
      <h3 className="mb-2 text-xl font-semibold">Employees</h3>
      <Card className="">
        <CardContent className="p-3">
          <div className="space-y-3">
            {employees.map((e, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border-b last:border-0 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border border-primary">
                    <AvatarFallback className="font-semibold">
                      {e.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm ">
                    {" "}
                    <h3 className="font-semibold text-secondary">
                      {e.name}
                    </h3>{" "}
                    <h3 className="text-secondary">{e.role}</h3>{" "}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full p-2 w-10 h-10 flex items-center justify-center border border-primary"
                    aria-label="Call"
                  >
                    <PhoneCallIcon className="h-4 w-4 text-primary" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full p-2 w-10 h-10 flex items-center justify-center border border-primary"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export const ContactWithMap: React.FC<{
  companyLogo: string;
  companyName: string;
  orgNo: string;
  address: string;
  phone?: string;
  email?: string;
  mapSrc?: string;
}> = ({ companyLogo, companyName, orgNo, address, phone, email, mapSrc }) => {
  // Mask the phone number (e.g., show only first few digits and last digit)
  const maskedPhone = phone
    ? `${phone.slice(0, 6)} ${phone.slice(6).replace(/\d/g, "*")}`
    : "+47 455 2 ***";

  return (
    <section className="mx-auto my-8 ">
      <h3 className="mb-2 text-xl font-semibold">Contact</h3>
      <div className="flex flex-col  gap-6">
        <Card className="w-full  bg-liquidGreen rounded-lg py-5 shadow-sm">
          <CardContent className="space-y-4">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={companyLogo || "/placeholder.svg"}
                  className="h-12 w-12 rounded-full"
                  alt={`${companyName} logo`}
                />
                <div className="text-base font-semibold">{companyName}</div>
              </div>
              <Button variant="default" className="w-full text-sm">
                Request a quote
              </Button>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <InfoRow icon={MapPin}>Tvetenveien 231, Oslo</InfoRow>
              <InfoRow icon={Mail}>info@tolvsystem.no</InfoRow>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Get a call from the company</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Send a message to the company</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* <Card className="w-full  overflow-hidden">
          <CardContent className="p-0">
            {mapSrc ? (
              <iframe
                src={mapSrc}
                className="h-[300px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-[300px] w-full items-center justify-center bg-gray-200 text-sm text-gray-500">
                Map preview
              </div>
            )}
          </CardContent>
        </Card> */}
      </div>

      <Link to="/company-search/1">
        <Button className="mb-12 mt-4 w-full ">View Full Page</Button>
      </Link>
    </section>
  );
};

export default function CompanyProfileInfoInMsg({
  setSelectedProfilePage,
}: any) {
  const profile = [
    {
      name: "Ali Mounji",
      image: BusinessProfileImage,
    },
  ];

  const company = {
    name: "Tolvstyttflem AS",
    corpId: "925 512 613",
    description:
      "Tømmerhandverk AS, et firma som spesialiserer seg på tømmerarbeid. Vi tilbyr et bredt spekter av tjenester, inkludert gulvlegging, kjøkkenmontering, isolering, kledning, oppsetting av vegger, gipsplater, dører, vinduer og listing.\n\nMed norsk svennebrev og erfaring fra Skanska Norge AS, kan vi garantere høy kvalitet og profesjonalitet i alle våre prosjekter. Vi er dedikert til å levere skreddersydde løsninger som møter våre kunders behov.\n\nHvis du har prosjekter hvor jeg kan bidra, ta gjerne kontakt hvis du har spørsmål eller ønsker mer informasjon om våre tjenester.",
    services: [
      { label: "Electrician", icon: Plug },
      { label: "Gardener", icon: Sprout },
      { label: "Plumber", icon: Wrench },
    ] as { label: string; icon: React.ElementType }[],
    areas: ["Casablanca", "Rabat"],
    contact: {
      name: "Ali Mounji",
      address: "2972 Westheimer Rd.",
      email: "alimounji@gmail.com",
      phone: "+41 212 635 00",
    },
    logo: SearchCompanyLogo,
    cover: BusinessProfileImage,
    id: 1,
  };

  const [expanded, setExpanded] = useState(false);

  const fullText = company.description || "";
  const previewText = fullText.slice(0, 85);

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <section className="w-full  overflow-y-auto py-10">
      {/* Hero / Cover */}

      <div className="w-full px-4 flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Profile</h3>
        <X
          className="cursor-pointer text-gray-black font-semibold"
          size={20}
          onClick={() => setSelectedProfilePage(false)}
        />
      </div>
      <Separator className="mt-6" />

      <div className="mx-auto grid gap-6 px-2 md:grid-cols-3 md:px-4">
        {/* Main */}
        <div className="space-y-6 col-span-3">
          {/* Company blurb */}

          <div>
            <h3 className="my-3 text-xl font-semibold ">{company.name}</h3>

            <Card className="border-0">
              <CardContent className="prose prose-sm px-0 text-sm pb-6 dark:prose-invert border-0">
                <p className="my-1 text-sm">
                  {expanded ? fullText : previewText}
                  {fullText.length > 85 && !expanded && "…"}
                </p>

                {fullText.length > 85 && (
                  <button
                    onClick={toggleExpand}
                    className="text-green-600 text-sm font-medium hover:underline "
                  >
                    {expanded ? "Read less" : "Read more"}
                  </button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Services */}
          <section>
            <h3 className="mb-2 text-xl font-semibold">
              What does the company offers?
            </h3>
            <h3 className="mb-2 text-lg font-semibold">Services</h3>
            <div className="flex flex-wrap gap-3">
              {company.services.map(({ label, icon: Icon }) => (
                <Badge
                  key={label}
                  variant="secondary"
                  className="px-3 py-1 text-[13px]"
                >
                  <Icon className="mr-1.5 h-3.5 w-3.5" /> {label}
                </Badge>
              ))}
            </div>
          </section>

          {/* Areas */}
          <section>
            <h3 className="mb-2 text-lg font-semibold">Areas we cover</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {company.areas.map((city) => (
                <InfoRow key={city} icon={MapPin}>
                  {city}
                </InfoRow>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <h3 className="mb-2 text-xl font-semibold">Contact</h3>
            <Card className="overflow-hidden">
              <CardContent className="p-0 bg-liquidGreen">
                <div className="flex flex-col gap-4 p-2 ">
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="text-lg font-semibold">
                      {company.contact.name}
                    </div>
                    <div className="space-y-2 font-medium text-base">
                      <InfoRow icon={MapPin}>{company.contact.address}</InfoRow>
                      <InfoRow icon={AtSign}>{company.contact.email}</InfoRow>
                      <InfoRow icon={Phone}>{company.contact.phone}</InfoRow>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="w-full md:w-auto">
                    <Button className="w-full font-medium text-base  flex items-center justify-center">
                      <PhoneCall className="mr-2 h-5 w-5" />
                      Get a call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Reviews Summary */}
          <section>
            <h3 className="mb-2 text-xl font-semibold">
              Overview of all reviews
            </h3>
            <ReviewsSummary
              average={4.8}
              totalReviews={8}
              breakdown={[
                { stars: 5, count: 6 },
                { stars: 4, count: 2 },
                { stars: 3, count: 0 },
                { stars: 2, count: 0 },
                { stars: 1, count: 0 },
              ]}
            />
          </section>

          {/* Reviews List */}
          <section>
            <ReviewsList
              reviews={[
                {
                  author: "George",
                  rating: 5,
                  date: "Oct 3, 2024",
                  title: "Pour garage floor",
                  text: "Highly skilled, diligent, and very punctual.",
                },
                {
                  author: "Tony",
                  rating: 4,
                  date: "March 17, 2024",
                  title: "Pre-scaling work",
                  text: "Great service. Good communication.",
                },
                {
                  author: "Kristine",
                  rating: 5,
                  date: "March 17, 2024",
                  title: "Groundwork and concrete work",
                  text: "My go-to for fixing doors. A+",
                },
              ]}
            />
          </section>

          {/* Jobs List */}
          {/* <section>
            <JobsList
              jobs={[
                {
                  title: "Pour garage floor",
                  location: "Heimdal",
                  timestamp: "© 11 months ago",
                  totalJobs: 33,
                },
                {
                  title:
                    "Foundation work and casting for extension approx. 60 m2 on flat plot",
                  location: "Trondheim",
                  timestamp: "© 11 months ago",
                  totalJobs: 33,
                },
                {
                  title: "Pre-scaling work",
                  location: "Trondheim",
                  timestamp: "© A year ago",
                  totalJobs: 33,
                },
              ]}
            />
          </section> */}

          {/* Projects Gallery */}
          <section>
            <ProjectsGallery
              images={[
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=300",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=300",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=300",
              ]}
            />
          </section>

          {/* Employees List */}
          <section>
            <EmployeesList
              employees={[
                {
                  name: "JY  Javier Ykram",
                  email: "javier.ykram@me.com",
                  phone: "+212 6 00 00 00",
                  role: "CEO",
                },
                {
                  name: "AM  Ali Mounji",
                  email: "ali.mounji@me.com",
                  phone: "+212 6 00 00 00",
                  role: "CTO",
                },
              ]}
            />
          </section>
        </div>

        {/* Sidebar */}
        {/* <aside className="md:sticky md:top-6">
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt="company logo"
                    className="h-12 rounded-full object-contain"
                  />
                  {company.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <VerifiedPill />
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <PhoneCall className="mr-2 h-4 w-4" /> Get a call from the
                  company
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className=" py-5 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">
                    Bank id verified
                  </span>
                </div>
                <div className="rounded-lg bg-muted text-xs">
                  <div className="font-medium text-base">{company.name}</div>
                  <div className="font-medium text-xs">
                    {company.contact.address}
                  </div>
                  <div className="text-muted-foreground mt-2">
                    Org no. {company.corpId}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside> */}
      </div>
      <div>
        {/* Contact with Map */}
        <section className="mx-auto mt-8 gap-6 px-2 md:grid-cols-3">
          <ContactWithMap
            companyLogo={company.logo}
            companyName={company.name}
            orgNo={company.corpId}
            address={company.contact.address}
            email={company.contact.email}
            phone={company.contact.phone}
            mapSrc={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13296.336!2d-7.6200!3d33.5899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd5fda0d1c1b%3A0x4d2!2sCasablanca!5e0!3m2!1sen!2sma!4v0000000000"
            }
          />
        </section>
      </div>
    </section>
  );
}
