"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import logoBlack from "@/assets/providerIcon/logo-black.svg";
import oktick from "@/assets/providerIcon/oktick.svg";
import { ButtonProvider } from "@/components/ui/buttonProvider";

interface BuyClipsModalProps {
  open: boolean;
  onClose: () => void;
}

const plans = [
  { id: "50", label: "50 clips /mo", price: "Included", cost: 122 },
  { id: "100", label: "100 clips /mo", price: "+ 2000 MAD/mo", cost: 2000 },
  { id: "150", label: "150 clips /mo", price: "+ 2000 MAD/mo", cost: 2000 },
];

export const BuyClipsModal = ({ open, onClose }: BuyClipsModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState("50");

  const total = plans.find((p) => p.id === selectedPlan)?.cost ?? plans[0].cost;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <div className="flex items-center justify-center">
          <img src={logoBlack} alt="Logo" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-providerPrimary">
            Get clips to unlock new jobs on swish.ma
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-600 dark:text-slate-300">
            Get more jobs and build a strong digital profile with verified jobs
            and reviews for your craftsmanship!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 text-sm">
          <ul className="space-y-2">
            {[
              "Complete profile page",
              "Visibility in Google and Swish.ma",
              "Answer 30 credit-free jobs every month",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <img src={oktick} alt="tick" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button variant="link" className="px-0 text-blue-700">
            Read more
          </Button>
        </div>

        <div className="">
          <h4 className="text-base font-medium mb-2">
            Select the number of clips in your membership
          </h4>
          <p className="text-sm text-muted-foreground mb-6">
            With credits you respond to the latest jobs. You can easily buy more
            credits when you need them!
          </p>
          <RadioGroup
            defaultValue={selectedPlan}
            onValueChange={setSelectedPlan}
            className="space-y-2"
          >
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="flex items-center justify-between rounded-md border p-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={plan.id} id={plan.id} />
                  <Label htmlFor={plan.id}>{plan.label}</Label>
                </div>
                <span className="text-sm text-muted-foreground">
                  {plan.price}
                </span>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="mt-4 flex justify-between text-sm font-medium">
          <span>Total (excl. VAT)</span>
          <span>{total} MAD/mo</span>
        </div>

        <div>
          <ButtonProvider className="w-full">Complete purchase</ButtonProvider>
          <p className="text-xs text-muted-foreground mt-2">
            {" "}
            All clips are available for 12 months from the purchase date.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
