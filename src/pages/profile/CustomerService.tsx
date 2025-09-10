import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CustomerService() {
  return (
    <section className="container mx-auto border py-6 my-2 ">
      <div className=" space-y-6">
        {/* Contact Header */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Contact us</h2>
          <p className="mt-2 text-gray-600">
            Contact us by WhatsApp or email for guidance or questions.
          </p>

          <div className="mt-4 space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Whatsapp:</span>{" "}
              <a
                href="https://wa.me/2120202020202"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +212 0202020202
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Case worker</span>
              <br />
              Email:{" "}
              <a
                href="mailto:info@swish.ma@gmail.com"
                className="text-blue-600 hover:underline"
              >
                info@swish.ma@gmail.com
              </a>
            </p>
          </div>

          <p className="mt-4 text-gray-600 text-sm">
            We recommend that you contact us via email for larger inquiries, as
            these must be handled in writing by our case managers. Response
            time: 1–3 business days.
          </p>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Frequently asked questions
          </h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>What is Swish.ma?</AccordionTrigger>
              <AccordionContent>
                Swish.ma is a platform that connects customers with verified
                suppliers for various services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>How do I put a job out to tender?</AccordionTrigger>
              <AccordionContent>
                You can easily submit your request by filling out our tender form in your profile.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>
                When will my tender become active and visible on Swish.ma?
              </AccordionTrigger>
              <AccordionContent>
                Once reviewed, your tender will usually go live within 24 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>How long is my tender active?</AccordionTrigger>
              <AccordionContent>
                Tenders remain active for 30 days unless removed or extended.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>
                How can I remove, change or extend my tender?
              </AccordionTrigger>
              <AccordionContent>
                You can manage your tenders from your profile settings under "My Tenders".
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>Do I have to use a supplier via Swish.ma?</AccordionTrigger>
              <AccordionContent>
                No, but we recommend it for quality assurance and support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>
                Has Swish.ma quality assured the companies for me?
              </AccordionTrigger>
              <AccordionContent>
                Yes, all suppliers are verified for compliance and quality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>
                Can Swish.ma help me if a dispute arises with a supplier?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we provide mediation support between customers and suppliers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>
                How does Swish.ma manage to obtain so many offers for me?
              </AccordionTrigger>
              <AccordionContent>
                We notify multiple suppliers in your category to ensure you get the best offers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10">
              <AccordionTrigger>How can it be free to use Swish.ma?</AccordionTrigger>
              <AccordionContent>
                Our service is free for customers. Suppliers cover platform costs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
