// components/JobDetailsModal.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaLocationArrow } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Contact, Heart, Home, TableProperties, Timer } from "lucide-react";
import { AllJob } from "../serviceTypes/ServiceProvider.types";
import Property from "../../../assets/images/Porperty.svg";

type Props = {
  open: boolean;
  onClose: () => void;
  onApplyBid: () => void;
  job: AllJob | null;
};

export const JobDetailsModal = ({ open, onClose, job, onApplyBid }: Props) => {
  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-12 ">
        <DialogHeader className="flex flex-row justify-between items-center">
          <DialogTitle className="text-2xl truncate">{job.title}</DialogTitle>
          <button className="p-2 bg-muted rounded-full">
            <Heart size={22} />
          </button>
        </DialogHeader>

        <p className="text-muted-foreground text-sm mt-4">{job.description}</p>

        <div className="flex flex-wrap justify-between items-center mt-4">
          <p className="text-lg font-semibold ">
            Project Value: <span className="text-primary">{job.price}</span>
          </p>
          <p className="flex items-center gap-1 text-muted-foreground">
            <FaLocationArrow className="text-primary" />
            {job.user.location}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6">
          <div className="border p-3 rounded  ">
            <p className="text-xs text-muted-foreground mb-2">
              👥 Employee Needs
            </p>
            <p className="font-semibold">{job.employeeNeeds}</p>
          </div>
          <div className="border p-3 rounded shadow-sm">
            <p className="text-xs text-muted-foreground flex items-center gap-2 mb-2">
              <Contact size={16} />
              Contact
            </p>
            <p className="font-semibold">{job.user.contact}</p>
          </div>
          <div className="border p-3 rounded shadow-sm">
            <p className="text-xs text-muted-foreground flex items-center gap-2 mb-2">
              <Home size={16} />
              Property Type
            </p>

            <p className="font-semibold">{job.propertyType}</p>
          </div>
          <div className="border p-3 rounded shadow-sm">
            <p className="text-xs text-muted-foreground flex items-center gap-2 mb-2">
              <Timer size={16} />
              Start the jobs
            </p>
            <p className="font-semibold">{job.startTime}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold mb-2">Property Pictures</p>
          <div className="grid grid-cols-3 gap-3 rounded-md">
            {job.images.map((img, index) => (
              <img
                key={index}
                src={Property || img}
                alt={`Property ${index}`}
                className="h-28 w-full object-cover rounded"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline" className="text-primary">
            Message With Client
          </Button>
          <Button onClick={onApplyBid} className="bg-primary text-solidWhite">
            Apply Bid
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
