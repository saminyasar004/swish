import React, { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const Evaluation = () => {
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [reason, setReason] = useState("");
  const [feedback, setFeedback] = useState("");
  const [cost, setCost] = useState("");
  const [includeMaterials, setIncludeMaterials] = useState(false);

  const dissatisfactionReasons = [
    "Quality of work",
    "The price I paid",
    "Communication during the process",
    "Tidiness",
    "Reliability and efficiency",
    "Professionalism in execution",
  ];

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const renderStars = () => {
    return (
      <div className="flex space-x-4 my-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
          >
            <Star
              className={`w-10 h-10 ${
                (hover ?? rating) >= star
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-yellow-500"
              }`}
            />
            <span className="text-sm mt-1">
              {star === 1 && "Terrible"}
              {star === 2 && "Poor"}
              {star === 3 && "Average"}
              {star === 4 && "Good"}
              {star === 5 && "Excellent"}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 w-full mx-auto bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Evaluation</h2>
        <Button variant="outline" className="text-sm">
          Change company
        </Button>
      </div>
      <hr className="my-4" />

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <p className="text-sm text-gray-600 mb-4">
            Evaluation of <b>Flislegging Oslo AS</b> must be approved by{" "}
            <b>Swish.ma</b>
          </p>
          <h3 className="text-lg font-medium mb-2">
            How many stars do you give the company?
          </h3>
          {renderStars()}
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <h3 className="text-lg font-medium mb-4">
            What are you particularly dissatisfied with?
          </h3>
          <div className="space-y-2 ">
            {dissatisfactionReasons.map((r, idx) => (
              <label
                key={idx}
                className={`block border rounded-md px-4 py-2 cursor-pointer ${
                  reason === r ? "border-green-500" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="reason"
                  value={r}
                  checked={reason === r}
                  onChange={() => setReason(r)}
                  className="mr-2"
                />
                {r}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div>
          <h3 className="text-lg font-medium mb-2">Tell others about your experience</h3>
          <p className="text-sm text-gray-600 mb-2 ">Evaluate the company here</p>
          <Textarea
            placeholder="What do you think about the job that was done?"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="mb-2  ring-1 ring-gray-300"
          />
          <p className="text-xs text-gray-400 mb-4">{feedback.length}/700</p>

          <h3 className="text-lg font-medium mb-2">
            How much did the job cost?{" "}
            <span className="text-gray-500 text-sm">(Optional)</span>
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            The price information is used internally only and will not be shared with
            companies or others.
          </p>
          <Input
            type="text"
            placeholder="E.g. 10 000"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="mb-2 ring-1 ring-gray-300"
          />
          <label className="flex items-center space-x-2 text-sm">
            <Checkbox
              checked={includeMaterials}
              onCheckedChange={(v) => setIncludeMaterials(Boolean(v))}
            />
            <span>Including materials and equipment</span>
          </label>
        </div>
      )}

      {/* Step Indicators + Buttons */}
      <div className="flex flex-col items-center mt-6">
        {/* Step indicator dots */}
        <div className="flex space-x-2 mb-4">
          {[1, 2, 3].map((dot) => (
            <span
              key={dot}
              className={`w-2 h-2 rounded-full ${
                step === dot ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Action buttons */}
        {step < 3 ? (
          <Button className="w-full bg-green-600 hover:bg-green-700" onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Complete evaluation
          </Button>
        )}

        <button className="mt-3 text-sm text-green-700 underline">
          Don’t want to evaluate now
        </button>
      </div>
    </div>
  );
};
