import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

export default function FindSkilledOne() {
  return (
    <div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
      <h4 className="text-lg font-semibold text-primaryDark">
        Find skilled plumbers
      </h4>
      <p className="text-sm leading-normal font-medium">
        Register the job with swish.ma
      </p>

      <div className="">
        <Link to="/">
          <Button size="sm">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
