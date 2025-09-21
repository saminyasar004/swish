import React from "react";
import CompanyProfileInfo from "./CompanyProfileInfoInMsg";
import CompanyProfileInfoInMsg from "./CompanyProfileInfoInMsg";

export default function CompanyProfileHomeInMsg({
  setSelectedProfilePage,
}: any) {
  return (
    <section className=" mx-1 shadow-xl overflow-x-hidden overflow-y-auto">
      <CompanyProfileInfoInMsg
        setSelectedProfilePage={setSelectedProfilePage}
      />
    </section>
  );
}
