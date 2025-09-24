// components/JobDetailsModal.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Trash2,
  Folder,
  MoreVertical,
  User,
  MapPin,
  Image as ImageIcon,
  Send,
  Upload,
  File,
  X,
  Paperclip,
  Heart,
  Printer,
  Copy,
  AlertCircle,
  Trash,
  CheckSquare,
  Edit,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { AllJob } from "../serviceTypes/ServiceProvider.types";
import Property from "../../../assets/images/Porperty.svg";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom"; // Assuming you're using React Router

import userIcon from "@/assets/providerIcon/userIcon.svg";
import contactIcon from "@/assets/providerIcon/contactIcon.svg";
import timeIcon from "@/assets/providerIcon/timeShape.svg";
import { Input } from "@/components/ui/input";

type Props = {
  open: boolean;
  onClose: () => void;
  job: AllJob | null;
};

export const JobDetailsModal = ({ open, onClose, job }: Props) => {
  const jobId = job?.id || "unknown"; // Use job ID for unique state key in URL
  const [searchParams, setSearchParams] = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedReportReason, setSelectedReportReason] = useState("");

  // Report reasons matching the image
  const reportReasons = [
    "Requests undeclared work",
    "Inappropriate description/request from the consumer",
    "Wrong ZIP or location",
    "Wrong category or work type",
    "Company request manpower",
    "Other",
  ];

  // State with URL persistence
  const [answerText, setAnswerText] = useState(
    searchParams.get(`answerText-${jobId}`) || ""
  );
  const [isFavoritesSelected, setIsFavoritesSelected] = useState(
    searchParams.get(`isFavoritesSelected-${jobId}`) === "true"
  );
  const [newFolderName, setNewFolderName] = useState(
    searchParams.get(`newFolderName-${jobId}`) || ""
  );
  const [selectedFileNames, setSelectedFileNames] = useState(
    searchParams.get(`selectedFileNames-${jobId}`)
      ? JSON.parse(searchParams.get(`selectedFileNames-${jobId}`) || "[]")
      : []
  );

  // Non-persistable states (reset on refresh)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // Sync state with URL on change
  useEffect(() => {
    const newParams = new URLSearchParams();
    if (answerText) newParams.set(`answerText-${jobId}`, answerText);
    if (isFavoritesSelected)
      newParams.set(`isFavoritesSelected-${jobId}`, "true");
    if (newFolderName) newParams.set(`newFolderName-${jobId}`, newFolderName);
    if (selectedFileNames.length > 0)
      newParams.set(
        `selectedFileNames-${jobId}`,
        JSON.stringify(selectedFileNames)
      );
    setSearchParams(newParams);
  }, [
    answerText,
    isFavoritesSelected,
    newFolderName,
    selectedFileNames,
    jobId,
    setSearchParams,
  ]);

  // Clear URL params on close (optional, to reset for next time)
  const handleClose = () => {
    const newParams = new URLSearchParams();
    setSearchParams(newParams);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );
      if (newFiles.length > 0) {
        const oversizedFiles = newFiles.filter(
          (file) => file.size > 5 * 1024 * 1024
        );
        if (oversizedFiles.length > 0) {
          alert("One or more files exceed 5MB. Please select smaller files.");
          return;
        }
        setSelectedFiles((prev) => [...prev, ...newFiles]);
        const newPreviewUrls = newFiles.map((file) =>
          URL.createObjectURL(file)
        );
        setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
        setSelectedFileNames((prev) => [
          ...prev,
          ...newFiles.map((f) => f.name),
        ]);
      } else {
        alert("Please select image files only.");
      }
    }
  };

  const removeImage = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => {
      const newUrls = [...prev];
      URL.revokeObjectURL(newUrls[index]);
      newUrls.splice(index, 1);
      return newUrls;
    });
    setSelectedFileNames((prev) => prev.filter((_, i) => i !== index));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleReportSubmit = () => {
    if (selectedReportReason) {
      console.log("Report submitted:", selectedReportReason);
      setIsReportModalOpen(false);
      setSelectedReportReason("");
    }
  };

  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] flex flex-col p-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="px-4 py-5 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={handleClose}
                className="p-1 hover:bg-muted rounded-md"
              >
                <ArrowLeft size={18} />
              </button>
              <DialogTitle className="text-base font-medium truncate flex-1 text-center">
                {job.title}
              </DialogTitle>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-muted rounded-md">
                <Trash2 size={18} />
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-1 hover:bg-muted rounded-md">
                    <Folder size={18} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="text-sm font-semibold">
                    Select folder
                  </DropdownMenuLabel>
                  <DropdownMenuItem
                    className="flex items-center justify-between text-sm"
                    onClick={() => setIsFavoritesSelected(!isFavoritesSelected)}
                  >
                    <div className="flex items-center gap-2">
                      <CheckSquare
                        size={16}
                        className={
                          isFavoritesSelected
                            ? "text-blue-500"
                            : "text-muted-foreground"
                        }
                      />
                      Favorites
                    </div>
                    <Checkbox
                      checked={isFavoritesSelected}
                      onCheckedChange={setIsFavoritesSelected}
                      className="mr-2 h-4 w-4"
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Edit size={16} className="text-blue-500" />
                      new
                    </div>
                    <Input
                      type="text"
                      value={newFolderName}
                      onChange={(e) => setNewFolderName(e.target.value)}
                      placeholder="New folder"
                      className="w-32 h-8 text-sm border-none focus-visible:ring-0"
                    />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-1 hover:bg-muted rounded-md">
                    <MoreVertical size={18} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="flex items-center gap-2 text-xs font-semibold">
                    <Heart size={16} className="text-red-500" />
                    Remove from favorites
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 text-xs font-semibold">
                    <Printer size={16} />
                    Print job
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="flex items-center gap-2 text-xs font-semibold"
                    onClick={() => setIsReportModalOpen(true)}
                  >
                    <AlertCircle size={12} className="text-yellow-500" />
                    Report
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 text-xs font-semibold">
                    <Copy size={16} />
                    Copy job ID: (4141663)
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 text-xs font-semibold text-red-500">
                    <Trash size={16} className="text-red-500" />
                    Delete job
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </DialogHeader>

        {/* Main content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left */}
          <div className="w-3/5 px-4 overflow-y-auto border-r">
            {/* Description */}
            <p className="text-sm leading-relaxed mb-6">{job.description}</p>

            {/* Info badges row */}
            {/* Info section */}
            <Card className="mb-6">
              <CardContent className="p-4 lg:p-6 space-y-3">
                <div className="grid grid-cols-2 gap-6 text-sm">
                  {/* Answer */}
                  <div className="flex items-center gap-2">
                    <img src={userIcon} alt="" />
                    <div className="flex flex-col items-start text-muted-foreground">
                      <span className="font-normal text-xs">Answer</span>
                      <span className="font-medium">1 interested</span>
                    </div>
                  </div>
                  {/* contact */}
                  <div className="flex items-center gap-2">
                    <img src={contactIcon} alt="" />
                    <div className="flex flex-col items-start text-muted-foreground">
                      <span className="font-normal text-xs">Contact</span>
                      <span className="font-medium">Swish.ma</span>
                    </div>
                  </div>

                  {/* customer */}
                  <div className="flex items-center gap-2">
                    <img src={userIcon} alt="" />
                    <div className="flex flex-col items-start text-muted-foreground">
                      <span className="font-normal text-xs">Customer</span>
                      <span className="font-medium">Privet</span>
                    </div>
                  </div>
                  {/* customer */}
                  <div className="flex items-center gap-2">
                    <img src={timeIcon} alt="" />
                    <div className="flex flex-col items-start text-muted-foreground">
                      <span className="font-normal text-xs">Start job</span>
                      <span className="font-medium">Anytime</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Images */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-2">
                {job.images.slice(0, 5).map((img, i) => (
                  <img
                    key={i}
                    src={Property}
                    alt={`Property ${i + 1}`}
                    className="h-32 w-full object-cover rounded-md border"
                  />
                ))}
                {job.images.length > 4 && (
                  <div className="h-32 w-full border-2 border-dashed rounded-md flex items-center justify-center text-xs text-muted-foreground">
                    +{job.images.length - 5} more
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right - Customer Info */}
          <div className="w-2/5 p-6 bg-muted/10 overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-base font-semibold">Customer</h3>
            </div>
            <div className="space-y-4 text-sm mb-6">
              <div>
                <p className="text-xs text-muted-foreground">Name</p>
                <p className="font-medium">Showing after answer</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Telephone</p>
                <p>Appears after dialogue</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p>Appears after dialogue</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Address</p>
                <p>Showing after answer</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Place</p>
                <p className="font-medium">
                  {job.user.location || "1154 Oslo"}
                </p>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={14} className="text-muted-foreground" />
                <p className="text-xs font-semibold">Location</p>
              </div>
              <div className="h-56 rounded-md overflow-hidden border">
                <iframe
                  title="map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    job.user.location || "Oslo"
                  )}&output=embed`}
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 bg-white sticky bottom-0">
          <div className="w-full sticky bottom-0 bg-background p-2">
            {previewUrls.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative">
                    <img
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
                    />
                    <Button
                      onClick={() => removeImage(index)}
                      type="button"
                      size="icon"
                      className="absolute -top-3 -right-3 h-5 w-5 p-1 rounded-full bg-primary/30 text-muted-foreground"
                    >
                      <X className="size-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            <form
              // onSubmit={handleSendMessage}
              className="flex items-center justify-between w-full mx-auto bg-white rounded-lg border border-gray-300 shadow-sm p-2"
            >
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-primary hover:text-secondary h-10 w-10"
                  aria-label="Attach file"
                >
                  <Paperclip size={18} />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-primary hover:text-secondary h-10 w-10"
                  aria-label="Attach image"
                >
                  <ImageIcon size={18} />
                </Button>
              </div>

              <Textarea
                placeholder="Skriv dit svar..."
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
                className="flex-1 mx-2 h-10 border-0 focus-visible:ring-0 text-gray-700 placeholder-gray-600 resize-none hover:ring-0"
                aria-label="Message input"
              />

              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="text-primary hover:text-secondary h-12 w-12"
                disabled={!answerText.trim() && selectedFiles.length === 0}
                aria-label="Send message"
              >
                <Send size={24} />
              </Button>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                className="hidden"
              />
            </form>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            You have 6 clips left in September. You use 2 clips to answer this
            job.
          </p>
        </div>

        {/* Updated Report Modal with Radio Buttons */}
        <Dialog open={isReportModalOpen} onOpenChange={setIsReportModalOpen}>
          <DialogContent className="max-w-md bg-white rounded-lg shadow-lg p-0">
            {/* Header */}
            <DialogHeader className="p-6 border-b">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-lg font-semibold text-gray-900">
                  Why do you want to report the job?
                </DialogTitle>
                <button
                  onClick={() => setIsReportModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
            </DialogHeader>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4">
                {reportReasons.map((reason, index) => (
                  <label
                    key={index}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="reportReason"
                      value={reason}
                      checked={selectedReportReason === reason}
                      onChange={(e) => setSelectedReportReason(e.target.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">{reason}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Footer */}
            <DialogFooter className="p-6 border-t">
              <div className="flex flex-col space-y-3 w-full">
                <Button
                  onClick={handleReportSubmit}
                  disabled={!selectedReportReason}
                  className={`w-full py-3 px-4 rounded-lg text-sm font-medium ${
                    selectedReportReason
                      ? "bg-gray-800 text-white hover:bg-gray-900"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Report job
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setIsReportModalOpen(false)}
                  className="w-full py-3 px-4 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
};
