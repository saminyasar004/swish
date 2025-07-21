import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { AllJob } from "../serviceTypes/ServiceProvider.types";

type ApplyBidModalProps = {
  open: boolean;
  onClose: () => void;
  job: AllJob | null;
};

type FormData = {
  price: string;
  estimate: string;
  description: string;
};

export const ApplyBidModal = ({ open, onClose, job }: ApplyBidModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted bid:", data);
    // TODO: send to API
    reset();
    onClose();
  };

  useEffect(() => {
    if (!open) reset();
  }, [open, reset]);

  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md sm:min-h-[60vh]">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl font-semibold">
            Apply Bid
          </DialogTitle>
          <DialogDescription>
            Submit your bid for:{" "}
            <span className="font-semibold text-foreground">{job.title}</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Enter your price ($)
            </label>
            <Input
              autoFocus
              type="number"
              inputMode="numeric"
              placeholder="e.g. 1500"
              onWheel={(e) => e.currentTarget.blur()}
              {...register("price", { required: "Price is required" })}
              className="ring-2 ring-gray-100"
            />
            {errors.price && (
              <p className="text-sm text-red-500 mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Time Estimate
            </label>
            <Input
              type="text"
              placeholder="e.g. 2 Weeks"
              {...register("estimate", { required: "Time estimate is required" })}
              className="ring-2 ring-gray-100"
            />
            {errors.estimate && (
              <p className="text-sm text-red-500 mt-1">
                {errors.estimate.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Proposal Description
            </label>
            <Textarea
              placeholder="Write here…"
              {...register("description", { required: "Proposal description is required" })}
              className="ring-2 ring-gray-100"
            />
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <DialogFooter className="flex justify-end gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                reset();
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-white" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Apply For Bid"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
