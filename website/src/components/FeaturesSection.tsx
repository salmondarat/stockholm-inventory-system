import React from "react";
import { CheckCircle } from "lucide-react"; // pakai lucide-react untuk icon (npm install lucide-react)

const features = [
  {
    title: "Mobile Ready",
    desc: "Track inventory from any device, anywhere.",
  },
  {
    title: "QR & Barcode",
    desc: "Scan, label, and find items easily with QR/barcode support.",
  },
  {
    title: "Smart Alerts",
    desc: "Get notified for low stock or expiry dates automatically.",
  },
  {
    title: "Custom Reports",
    desc: "Export powerful data-driven insights anytime.",
  },
  {
    title: "Integration",
    desc: "Connect with other apps and systems for seamless workflow.",
  },
];

const FeaturesSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Features
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <CheckCircle className="text-blue-500 mb-4" size={40} />
            <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
