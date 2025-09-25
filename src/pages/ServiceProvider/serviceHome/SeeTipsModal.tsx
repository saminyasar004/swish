import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ButtonProvider } from "@/components/ui/buttonProvider";

interface SeeTipsModalProps {
  open: boolean;
  onClose: () => void;
}

export const SeeTipsModal = ({ open, onClose }: SeeTipsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        {/* Top heading */}
        <div className="flex items-center justify-center text-sm font-medium text-muted-foreground">
          Get started
        </div>

        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            How to best respond to a job application?
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground text-center">
            Here are three smart tips to help you win jobs
          </DialogDescription>
        </DialogHeader>

        {/* Accordion Tips */}
        <Accordion type="single" collapsible className="w-full mt-4 space-y-2">
          <AccordionItem value="tip1" className="border rounded-md px-3">
            <AccordionTrigger className="font-medium">
              Respond quickly to new jobs
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Those who respond first have the best chance of getting the job.
              Turn on notifications and saved searches to be the first to know
              when relevant jobs appear!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tip2" className="border rounded-md px-3">
            <AccordionTrigger className="font-medium">
              Write responses that customers want to reply to
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Your reply is your chance to make a great first impression – be
              personal and engaging.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tip3" className="border rounded-md px-3">
            <AccordionTrigger className="font-medium">
              Make sure your profile creates a good impression
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              A good reply sparks interest and makes people want to visit your
              profile. That’s why it’s important that your profile appears
              professional and relevant to customers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Footer Buttons */}
        <DialogFooter className="flex gap-3 mt-6">
          <ButtonProvider
            variant="ghost"
            className="w-full text-muted-foreground"
            onClick={onClose}
          >
            May be later
          </ButtonProvider>
          <ButtonProvider className="w-full">Find more job</ButtonProvider>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
