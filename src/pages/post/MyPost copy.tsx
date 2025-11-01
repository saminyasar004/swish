import AvatarImg from "@/assets/images/avatar.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calendar,
  Check,
  Clock3,
  Edit,
  Filter,
  MessageCircle,
  Pause,
  StarIcon,
  Trash,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetMyJobsQuery } from "@/redux/features/jobsApi/myJob.api";

interface Post {
  id: number;
  title: string;
  date: string;
  status: "Open" | "In Progress" | "Completed" | "Paused";
  content: string;
  author?: string;
  image?: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Introducing New Features",
    date: "2025-06-30",
    status: "Completed",
    content: "We've added exciting new features to enhance your experience.",
    author: "John Doe",
    image: "https://example.com/post1.jpg",
  },
  {
    id: 2,
    title: "Upcoming Updates",
    date: "2025-06-29",
    status: "In Progress",
    content: "Stay tuned for the latest updates coming next week.",
    author: "Jane Smith",
    image: "https://example.com/post2.jpg",
  },
  {
    id: 3,
    title: "Bug Fix Release",
    date: "2025-06-28",
    status: "Open",
    content: "Addressing reported bugs to improve stability.",
    author: "Alice Johnson",
    image: "https://example.com/post3.jpg",
  },
  {
    id: 4,
    title: "User Feedback Session",
    date: "2025-06-27",
    status: "Completed",
    content: "Thank you for your valuable feedback during our session!",
    author: "Bob Wilson",
    image: "https://example.com/post4.jpg",
  },
  {
    id: 5,
    title: "Performance Optimization",
    date: "2025-06-26",
    status: "In Progress",
    content: "Working on optimizing app performance for better speed.",
    author: "Clara Davis",
    image: "https://example.com/post5.jpg",
  },
];

export default function MyPost() {
  const [selectedPostStatus, setSelectedPostStatus] = useState("active");
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  // GET MY JOBS
  const {
    data: myJobsData,
    isLoading: isMyJobsLoading,
    isError: isMyJobsError,
  } = useGetMyJobsQuery(undefined);
  console.log({ myJobsData });

  // ✅ Filtering logic here
  const filteredPosts = posts.filter((post) => {
    if (selectedPostStatus === "active")
      return post.status === "Open" || post.status === "In Progress";

    if (selectedPostStatus === "finished")
      return post.status === "Completed" || post.status === "Paused";
  });

  return (
    <section className="py-16 flex flex-col gap-5">
      <div className="w-full mx-auto rounded-md">
        <div className="container flex items-center justify-between w-full">
          <h3 className="text-primaryDark font-semibold text-2xl">My jobs</h3>

          {/* ✅ Styled Tabs */}
          <Tabs
            value={selectedPostStatus}
            onValueChange={setSelectedPostStatus}
            className="w-auto bg-[#E7E7E7] rounded-full px-2 py-1.5"
          >
            <TabsList className="flex bg-muted p-1 rounded-full gap-1">
              <TabsTrigger
                value="active"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm 
                           data-[state=active]:text-primaryDark text-primaryDark 
                           px-4 py-2.5 text-sm font-medium rounded-full transition"
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                value="finished"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm 
                           data-[state=active]:text-primaryDark text-primaryDark 
                           px-4 py-2.5 text-sm font-medium rounded-full transition"
              >
                Finished
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="container py-4 flex flex-col gap-4"></div>
    </section>
  );
}

// function PostCard({ post, onSelect }: { post: Post; onSelect: () => void }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <AccordionItem
//       value={post.id.toString()}
//       onSelect={onSelect}
//       className="border border-neutral-200 rounded-lg py-1 px-4"
//     >
//       <AccordionTrigger className="hover:no-underline items-start">
//         <div className="flex flex-col gap-4">
//           <div className="w-full flex gap-4 items-center justify-start">
//             <h3 className="font-semibold text-2xl">{post.title}</h3>
//             <Badge
//               variant={
//                 post.status === "Completed"
//                   ? "success"
//                   : post.status === "In Progress"
//                   ? "info"
//                   : "default"
//               }
//               className="gap-[0.3rem] py-1"
//             >
//               <Clock3 size={12} />
//               {post.status}
//             </Badge>
//           </div>
//           <p className="text-left w-full font-normal text-sm">{post.content}</p>

//           <div className="flex gap-3">
//             <div className="flex gap-2 items-center justify-center text-[#727272]">
//               <Calendar size={12} />
//               <span className="text-xs">{post.date}</span>
//             </div>
//             <div className="flex gap-2 items-center justify-center text-[#727272]">
//               <UserRound size={12} />
//               <span className="text-xs">5 Bids</span>
//             </div>
//           </div>
//         </div>
//       </AccordionTrigger>

//       <AccordionContent className="flex flex-col gap-4 text-balance">
//         <Separator className="bg-neutral-200" />

//         {post.status === "Open" && (
//           <>
//             <h4 className="text-lg font-semibold">Bidders (5)</h4>
//             {Array.from({ length: 5 }).map((_, index) => (
//               <BidderCard key={index} />
//             ))}

//             <div className="w-full flex items-center justify-center">
//               <Button className="text-primary underline" variant="link">
//                 View All
//               </Button>
//             </div>
//           </>
//         )}

//         {["In Progress", "Completed"].includes(post.status) && (
//           <>
//             <div className="flex justify-between w-full ">
//               <h4 className="text-lg font-semibold">Project Assign by</h4>

//               <div className="gap-2 flex items-start justify-start">
//                 {post.status === "In Progress" ? (
//                   <>
//                     <Button size="md">
//                       <Pause size={16} />
//                       Pause Job
//                     </Button>
//                     <Button size="md" className="bg-secondary">
//                       <Edit size={16} />
//                       Edit Details
//                     </Button>
//                     <Button size="md" variant="destructive">
//                       <Trash size={16} />
//                       Delete
//                     </Button>
//                   </>
//                 ) : (
//                   <Button size="md" variant="destructive">
//                     <Trash size={16} />
//                     Delete
//                   </Button>
//                 )}
//               </div>
//             </div>

//             <div className="w-full flex flex-col gap-2">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 flex items-center justify-center rounded-full overflow-hidden">
//                   <img src={AvatarImg} alt="Avatar" className="max-w-full" />
//                 </div>
//                 <h4 className="font-semibold text-lg">John Doe</h4>
//               </div>

//               <p className="text-[#3C3C3C] text-xs font-medium">
//                 I have 10+ years experience in home renovations. Can complete in
//                 6 weeks.
//               </p>
//               <p className="text-[#3C3C3C] text-xs flex gap-3">
//                 Timeline: <span className="font-medium">6 weeks</span>
//                 Placed: <span className="font-medium">16/02/2025</span>
//               </p>

//               <div className="flex gap-5">
//                 <h6 className="font-medium text-[#727272]">Project Value:</h6>
//                 <h4 className="text-primary font-semibold text text-xl">
//                   $ 15,000
//                 </h4>
//               </div>

//               <div className="flex gap-5">
//                 <h6 className="font-medium text-[#727272]">Telephone:</h6>
//                 <h4 className="font-semibold text-xl">+41 258 654 55</h4>
//               </div>

//               {post.status === "In Progress" && (
//                 <div className="w-full flex items-start justify-start">
//                   <Button size="xs">
//                     <MessageCircle size={12} />
//                     Message
//                   </Button>
//                 </div>
//               )}

//               {post.status === "Completed" && (
//                 <div className="py-3 space-y-5 max-w-sm mt-3">
//                   <Button
//                     onClick={() => setOpen(true)}
//                     variant="outline"
//                     className=" border-primary text-primary font-semibold"
//                   >
//                     Give a Feedback
//                   </Button>
//                 </div>
//               )}
//             </div>

//             {/* Review Modal */}
//             <Dialog open={open} onOpenChange={setOpen}>
//               <DialogContent className="max-w-lg">
//                 <DialogHeader>
//                   <DialogTitle>Rate Your Experience</DialogTitle>
//                 </DialogHeader>

//                 <div className="flex gap-3 items-center my-3">
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <StarIcon
//                       className={cn(
//                         "hover:fill-primary hover:text-primary fill-[#D9D9D9] text-[#D9D9D9] cursor-pointer"
//                       )}
//                       key={index}
//                       size={40}
//                     />
//                   ))}
//                 </div>

//                 <Textarea
//                   rows={5}
//                   className="bg-[#D9D9D9] rounded-sm hover:ring-0"
//                   placeholder="Write here..."
//                 />

//                 <div className="text-right">
//                   <Button size="sm" onClick={() => setOpen(false)}>
//                     Submit
//                   </Button>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </>
//         )}
//       </AccordionContent>
//     </AccordionItem>
//   );
// }

// function BidderCard() {
//   return (
//     <div className="bg-liquidGreen rounded-lg p-4 flex gap-4 items-start justify-between">
//       <div className="flex-1 w-full flex gap-3">
//         <div className="w-8 h-8 flex items-center justify-center rounded-full overflow-hidden">
//           <img src={AvatarImg} alt="Avatar" className="max-w-full" />
//         </div>
//         <div className="flex-1 flex flex-col gap-1">
//           <h4 className="font-semibold text-lg">John Doe</h4>
//           <p className="text-[#3C3C3C] text-xs font-medium">
//             I have 10+ years experience in home renovations. Can complete in 6
//             weeks.
//           </p>
//           <p className="text-[#3C3C3C] text-xs flex gap-3">
//             Timeline: <span className="font-medium">6 weeks</span>
//             Placed: <span className="font-medium">16/02/2025</span>
//           </p>

//           <div className="flex gap-4 items-center py-2">
//             <Button size="xs">
//               <Check size={12} />
//               Accept
//             </Button>
//             <Button size="xs" variant="destructive">
//               <X size={12} />
//               Reject
//             </Button>
//             <Button size="xs" variant="outline-primary">
//               <MessageCircle size={12} />
//               Message
//             </Button>
//           </div>
//         </div>
//       </div>
//       <h3 className="text-primary font-semibold text text-2xl">$ 15,000</h3>
//     </div>
//   );
// }

//  <Accordion
//           type="single"
//           collapsible
//           className="w-full flex flex-col gap-6"
//           defaultValue={selectedPost?.toString()}
//         >
//           {/* ✅ Use filteredPosts instead of all posts */}
//           {filteredPosts.map((post, index) => (
//             <PostCard
//               key={index}
//               post={post}
//               onSelect={() => setSelectedPost(post.id)}
//             />
//           ))}

//           {/* ✅ No post message */}
//           {filteredPosts.length === 0 && (
//             <div className="text-center text-gray-500 py-10">
//               No posts found for this category.
//             </div>
//           )}
//         </Accordion>
