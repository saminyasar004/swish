export default function Contact() {
  return (
    <section className="py-16 md:py-28">
      <div className="container max-w-3xl">
        <div className="w-full flex flex-col gap-3 text-center items-center">
          <h3 className="font-bold text-4xl">
            Do you need to get in touch with
          </h3>
          <h3 className="text-primary text-4xl font-bold">swish.ma?</h3>
          <p className="text-sm">
            Find opening hours for customer service and contact information for
            swish.ma.
          </p>
        </div>

        <div className="w-full pt-20 pb-8 flex flex-col gap-3">
          <h5 className="font-semibold text-lg">
            E-Post: <span className="text-primary">contact@swish.ma</span>
          </h5>
          <h5 className="font-semibold text-lg">Whatsapp: +212(0)712148800</h5>
          <h5 className="font-semibold text-lg">
            Organization number: 003754318000063
          </h5>
        </div>

        <div className="w-full py-8 flex flex-col gap-3">
          <h4 className="font-bold text-2xl">Opening hours customer service</h4>

          <div className="w-full flex flex-col gap-2 py-3">
            <span>Weekdays: 9:00 am - 9:00 pm</span>
            <span>Holidays: Closed</span>
            <span>Weekends: 9:00 am - 9:00 pm</span>
          </div>
        </div>

        <div className="w-full py-8 flex flex-col gap-3">
          <h4 className="font-bold text-2xl">Mailing Address</h4>

          <div className="w-full flex flex-col gap-2 py-3">
            <span>Rue Soumaya 82 Quartier Palmier</span>
            <span>Casablanca</span>
            <span>Maroc</span>
          </div>
        </div>
      </div>
    </section>
  );
}
