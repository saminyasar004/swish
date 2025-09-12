import React from 'react';
import ArrowRight from "@/assets/images/arrowRight.svg";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MoreProjectsCard = () => {
  return (
    <div className="bg-liquidGreen flex flex-col items-center justify-center gap-6 p-12 mt-6 rounded-sm">
          <h4 className="text-xl font-semibold">More projects underway?</h4>
          <p className="text-sm font-medium text-center">
            Create a new job to recive offers from qualified companies,
            completrly non-binding and free charge! Post a job
          </p>
          <Link to="/post-job">
              <Button
                variant="outline"
                className="rounded-md  border-primary  font-semibold text-primary py-5  hover:bg-liquidGreen/80 hover:text-primary"
              >
                Post a job <img src={ArrowRight} alt="Post a job" />
              </Button>
            </Link>
        </div>
  );
};

export default MoreProjectsCard;
