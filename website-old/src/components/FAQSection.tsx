import React from "react";

const faqs = [
  {
    q: "How do I start using Stockholm IMS?",
    a: "Simply click 'Get Started Free' and create your account — no credit card required.",
  },
  {
    q: "Can I import/export inventory data?",
    a: "Yes, you can import/export CSV files easily from your dashboard.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. Your data is encrypted and backed up regularly.",
  },
  {
    q: "What support is available?",
    a: "Email support for free users, and priority support for Pro.",
  },
];

const FAQSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((f) => (
          <div key={f.q} className="bg-blue-50 rounded-lg p-4 shadow">
            <div className="font-semibold mb-1 text-blue-700">{f.q}</div>
            <div className="text-gray-700">{f.a}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
