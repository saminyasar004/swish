import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Trash, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const SeeTheJob = () => {
  const [files, setFiles] = useState<
    { id: number; name: string; src: string }[]
  >([]);
  // Example dummy data (replace with props/state later)
  const heading = "Installation of new door and door frame";
  const description =
    "Our bathroom door is old and needs to be replaced. I have removed the door, but need help removing the door frame and installing a new door and door frame.";
  const address = "Kalbakkveien 3b , 0953 Oslo";
  const attachments = [{ id: 1, name: "image.jpg", src: "/image.jpg" }];
  const desiredStartUp = null; // not set
  const postedInfo = "Posted Oct 11, 2023 - ID 3334000";

  const additionalInfo = [
    {
      question: "Desired start-up",
      answer: "As soon as possible",
    },
    {
      question:
        "Is the floor area exactly 6.4 sq m, or could there be slight variations?",
      answer: "6.4",
    },
    {
      question:
        "Will the materials for flooring and door treatment be purchased by the company, or have you already arranged for the materials?",
      answer:
        "Flooring has been purchased. Skirting boards have been purchased.",
    },
    {
      question:
        "Are there any special challenges with the subfloor in the kitchen that could affect the flooring?",
      answer: "No",
    },
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles).map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        src: URL.createObjectURL(file), // preview image
      }));
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDelete = (id: number) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  return (
    <div className="p-4 mx-auto bg-white rounded-lg shadow overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Job information</h2>
        <Button variant="outline" className="text-sm">
          Change company
        </Button>
      </div>
      <Separator className="my-4" />

      {/* Heading */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Heading</h3>
        <p className="text-sm text-providerAccent">{heading}</p>
      </div>

      {/* Description */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Description</h3>
        <p className="text-sm text-providerAccent whitespace-pre-wrap">
          {description}
        </p>
      </div>

      {/* Address */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Address</h3>
        <p className="text-sm text-providerAccent">{address}</p>
      </div>

      {/* Attachments */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Attachment</h3>

        {/* Upload Box */}
        <label
          htmlFor="file-upload"
          className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg mb-2 cursor-pointer block"
        >
          <p className="text-gray-500 flex items-center justify-center gap-4">
            {" "}
            <Upload size={16} /> Upload or drop files here{" "}
          </p>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* File List */}
        <div className="space-y-2">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between bg-gray-50 p-2 rounded-md"
            >
              <div className="flex items-center">
                <img
                  src={file.src}
                  alt={file.name}
                  className="w-12 h-12 object-cover rounded mr-2"
                />
                <span className="text-sm text-gray-700">{file.name}</span>
              </div>
              <div className="flex space-x-2">
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(file.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Additional information</h3>
        <div className="space-y-3">
          {additionalInfo.map((item, index) => (
            <Card key={index} className="rounded-md border">
              <CardContent className="flex items-start gap-2 p-3">
                <CheckCircle2 className="text-green-500 mt-0.5 w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">{item.question}</p>
                  <p className="text-sm text-gray-700">{item.answer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Posted info */}
      <div className="text-sm text-gray-500 mt-4">{postedInfo}</div>
    </div>
  );
};
