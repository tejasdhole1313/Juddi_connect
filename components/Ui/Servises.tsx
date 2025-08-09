"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
const services = [
  {
    icon: "/Images/plane-icon.png",
    title: "Flights",
    features: ["Ticket Booking", "Baggage Assistance", "Chartered Flights"],
  },
  {
    icon: "/Images/home.png",
    title: "Stay",
    features: ["Hotel Booking", "Accommodation", "Serviced Apartments"],
  },
  {
    icon: "/Images/drop-shipping.png",
    title: "Tour Packages",
    features: ["Holiday Packages", "Staycation", "Bespoke Packages"],
  },
  {
    icon: "/Images/car.png",
    title: "Car Rentals",
    features: ["Self Driving Cars", "Chauffeurs", "Corporate Commute"],
  },
  {
    icon: "/Images/reception.png",
    title: "Hospitality",
    features: ["Concierge Service", "Private Events", "Event Tickets"],
  },
  {
    icon: "/Images/handshake.png",
    title: "Meet & Assist",
    features: ["Airport Pickup/drop", "Baggage Assistance", "Guest Pampering"],
  },
];

export default function ServicesSection() {
  return (
    <section id="servises" className="relative w-full p-6 lg:p-16 overflow-hidden pt-24">
      {/* Background Image */}
  <div className="absolute inset-0 z-0 bg-center bg-cover" />
  <div className="absolute inset-0 z-0 bg-center bg-cover" style={{ backgroundImage: "url('/Images/02.jpg')" }} />
      {/* Light overlay for soft shadow effect */}
  <div className="absolute inset-0 z-10 bg-black/20" />
      <div className="relative z-20 max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-8 text-left">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-ubuntu"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            A round up of
            <br />
            <span className="italic">the services we offer</span>
          </motion.h2>
          <motion.div
            className="w-40 h-1 bg-[#000000] mx-auto md:mx-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              key={index}
              className="flex flex-col items-center justify-between rounded-3xl shadow-md transition-all duration-500 ease-in-out bg-white hover:shadow-lg hover:scale-105 group space-y-4 p-6 min-h-[340px] cursor-pointer border-2 border-transparent hover:border-[#34618B]"
            >

              {/* Service Icon */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full ">
                <div className="w-12 h-12 flex items-center justify-center ">
                  <Image
                    width={36}
                    height={36}
                    src={service.icon}
                    alt={service.title}
                    className="mx-auto filter brightness-0"
                  />
                </div>
              </div>


              {/* Service Title */}
              <h3 className="text-2xl font-bold leading-tight font-ubuntu text-center text-[#34618B] group-hover:text-[#1a3550] transition-colors duration-500">
                {service.title}
              </h3>


              {/* Service Features */}
              <div className="space-y-2 w-auto max-w-xs text-center">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start  w-full"
                  >
                    <Check className="w-4 h-4 text-[#34618B] mr-2 flex-shrink-0 group-hover:text-[#1a3550] transition-colors duration-500" />
                    <span className="text-left text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Know More Link */}
              <button className="mt-4 font-medium text-[#34618B] transition-all duration-500 flex items-center justify-center group cursor-pointer hover:text-[#1a3550]">
                <span className="mr-1 group-hover:translate-x-1 transition-transform duration-500">▶</span>
                <span className="group-hover:underline">Know More</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
