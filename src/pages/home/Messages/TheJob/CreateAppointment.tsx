import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const CreateAppointment = () => {
  const [step, setStep] = useState(1);

  // Form state
  const [priceType, setPriceType] = useState<"fixed" | "hourly" | "other" | null>(null);
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");

  const nextStep = () => {
    // Simple validation per step
    if (step === 1) {
      if (!priceType || !price) {
        setError("The field cannot be empty.");
        return;
      }
    }
    if (step === 2) {
      if (!startDate || !endDate) {
        setError("Both start and end date are required.");
        return;
      }
    }
    setError("");
    setStep(step + 1);
  };

  const handleSubmit = () => {
    const payload = {
      priceType,
      price,
      startDate,
      endDate,
      description,
    };
    console.log("Submitting appointment:", payload);
    // API call / save action here
  };

  return (
    <div className="p-6 w-full mx-auto bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold">Agreement</h2>
      <p className="text-sm text-gray-600 mb-4">
        The agreement is sent to the company for signing.
      </p>
      <hr className="my-4" />

      {/* Step 1: Price */}
      {step === 1 && (
        <div>
          <h3 className="font-medium mb-3">
            1. What price have you agreed on?
          </h3>
          <div className="flex gap-3 mb-4">
            {["Fixed price", "Hourly rate", "Other"].map((label) => {
              const val =
                label === "Fixed price"
                  ? "fixed"
                  : label === "Hourly rate"
                  ? "hourly"
                  : "other";
              return (
                <button
                  key={val}
                  onClick={() => setPriceType(val as any)}
                  className={`flex-1 py-2 border rounded-md ${
                    priceType === val
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <label className="block text-sm font-medium mb-1">
            Fixed price including VAT
          </label>
          <Input
            type="text"
            placeholder="E.g. 10,000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className=" ring-1 ring-gray-300"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      )}

      {/* Step 2: Dates */}
      {step === 2 && (
        <div>
          <h3 className="font-medium mb-4">2. When will the job be performed?</h3>
          <label className="block text-sm font-medium mb-1">Start date</label>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mb-3 ring-1 ring-gray-300"
          />
          <label className="block text-sm font-medium mb-1">End date</label>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="ring-1 ring-gray-300"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      )}

      {/* Step 3: Description */}
      {step === 3 && (
        <div>
          <h3 className="font-medium mb-4 text-lg">3. Write a good description</h3>
          <label className="block text-sm font-medium mb-2 ">
            Describe the agreement
          </label>
          <Textarea
            placeholder="What have you agreed on..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="ring-1 ring-gray-300"
          />
        </div>
      )}

      {/* Step indicators */}
      <div className="flex flex-col items-center mt-8">
        <div className="flex space-x-2 mb-4">
          {[1, 2, 3].map((dot) => (
            <span
              key={dot}
              className={`w-2 h-2 rounded-full ${
                step === dot ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        {step < 3 ? (
          <Button className="w-full bg-primary " onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button
            className="w-full bg-primary"
            onClick={handleSubmit}
          >
            Submit Agreement
          </Button>
        )}
      </div>
    </div>
  );
};
