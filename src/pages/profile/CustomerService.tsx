import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CustomerService() {
  interface FAQ {
  question: string;
  answer: string;
}
  const faqs: FAQ[] = [
    {
      question: "What is Swish.ma?",
      answer: "Swish.ma is a platform that connects customers with verified suppliers for various services."
    },
    {
      question: "How do I put a job out to tender?",
      answer: "You can easily submit your request by filling out our tender form in your profile."
    },
    {
      question: "When will my tender become active and visible on Swish.ma?",
      answer: "Once reviewed, your tender will usually go live within 24 hours."
    },
    {
      question: "How long is my tender active?",
      answer: "Tenders remain active for 30 days unless removed or extended."
    },
    {
      question: "How can I remove, change or extend my tender?",
      answer: "You can manage your tenders from your profile settings under 'My Tenders'."
    },
    {
      question: "Do I have to use a supplier via Swish.ma?",
      answer: "No, but we recommend it for quality assurance and support."
    },
    {
      question: "Has Swish.ma quality assured the companies for me?",
      answer: "Yes, all suppliers are verified for compliance and quality."
    },
    {
      question: "Can Swish.ma help me if a dispute arises with a supplier?",
      answer: "Yes, we provide mediation support between customers and suppliers."
    },
    {
      question: "How does Swish.ma manage to obtain so many offers for me?",
      answer: "We notify multiple suppliers in your category to ensure you get the best offers."
    },
    {
      question: "How can it be free to use Swish.ma?",
      answer: "Our service is free for customers. Suppliers cover platform costs."
    },
  ];

  return (
    <section className="container mx-auto border py-6 my-2 ">
      <div className="space-y-6">
        {/* Contact Header */}
        <div>
          <h2 className="text-2xl font-semibold text-blackPrimary">Contact us</h2>
          <p className=" text-blackSecondary">
            Contact us by WhatsApp or email for guidance or questions.
          </p>

          <div className="mt-4 ">
             <h2 className="text-lg font-semibold text-blackPrimary">Customer service</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Whatsapp:</span>{" "}
              <a
                href="https://wa.me/2120202020202"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                +212 0202020202
              </a>
            </p>
            <p className="text-blackPrimary mt-2">
              <span className="font-semibold text-lg ">Case worker</span>
              <br />
              Email:{" "}
              <a
                href="mailto:info@swish.ma@gmail.com"
                className="text-secondary hover:underline"
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
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`q${idx + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
