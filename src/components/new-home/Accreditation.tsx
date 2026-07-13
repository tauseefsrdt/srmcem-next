// import React from "react";

export const approvals = [
  {
    title: "AICTE Approved",
    image: "/aicte-approved-Cc5kd9Bh-compressed.webp",
  },
  {
    title: "NBA Accredited",
    image: "/nba-accredited-PLq4iGgv-compressed.webp",
  },
  {
    title: "Affiliated To AKTU",
    image: "/aktu-affiliated-C4ZSXhhj-compressed.webp",
  },
  {
    title: "Affiliated To University Of Lucknow",
    image: "/lu-affiliated-O317SHjQ-compressed.webp",
  },
];

const Accreditation = () => {
  return (
    <section
      className="relative bg-white/55 backdrop-blur-glass border-y border-[rgba(15,47,87,0.08)]"
      aria-label="Accreditations and approvals"
    >
      <div className="max-w-container mx-auto px-6 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {approvals.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-[86px] h-[86px] mb-4 grid place-items-center">
                <span
                  className="absolute inset-0 rounded-full border-2 border-dashed border-gold/50 transition-transform duration-700 group-hover:rotate-180"
                  aria-hidden="true"
                />

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-[64px] h-[64px] rounded-full object-contain bg-white border border-navy-mid/20 shadow-card transition-all duration-300 group-hover:scale-105 group-hover:border-gold/40"
                />
              </div>

              <h3 className="text-[13px] font-bold  uppercase text-ink">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditation;