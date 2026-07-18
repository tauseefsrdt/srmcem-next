import React, { useState, useEffect } from "react";
const logosrmcem = "/images/header/Updatedsrmcemlogo.png";
import Classes from "../../utils/styles/Global.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa";

import { MdEmail, MdLocationPin } from "react-icons/md";
const anti_sexual = "/pdf/ragging/Gendar Senstization and Sexual Harassment -ICC.pdf";
const mandatoryDiscloserPdf = "/pdf/Mandatory Disclosure-SRMCEM - 2023-24.pdf";
import { CiGlobe } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export const footerData = {
  logo: { src: logosrmcem, alt: "SRMCEM Logo" },
  description:
    "Shri Ramswaroop Memorial College of Engineering & Management, Lucknow is one of the leading institutes of professional education in UP. SRMCEM is affiliated to Dr. A.P.J. Abdul Kalam Technical University and recognized by AICTE.",
  contact: {
    address: "Tiwariganj, Faizabad Road, Lucknow (UP) - 226028",
    phone1: "757-000-3074 , 983-901-0407",
    // phone2: "983-901-0407",
    email: "admissions@srmcem.ac.in",
  },
  otherLinks: [
    {
      id: 0,
      title: "List of Holidays",
      path: "/list-holidays",
    },
    // {
    //   id: 1,
    //   title: "Downloads",
    //   path: "/download",
    // },
    {
      id: 2,
      title: "Newsletters",
      path: "/newsletters",
    },
    {
      id: 3,
      title: "Careers",
      path: "/career",
    },
    {
      id: 4,
      title: "Grievance Redressal",
      path: "https://docs.google.com/forms/d/e/1FAIpQLSde8Ov2JDvB1vYeL-jrqNrlman0gLstQVEWEJ6DN34-EsYdCQ/viewform",
    },
    {
      id: 4,
      title: "Women Helpline - 9415115062",
      path: "tel:9415115062",
    },
  ],
  usefulLinks: [
    {
      id: 0,
      title: "Mandatory Disclosure",
      path: mandatoryDiscloserPdf,
    },
    {
      id: 1,
      title: "Important Policies",
      path: "/imp-policies",
    },
    {
      id: 2,
      title: "List of Holidays",
      path: "/list-holidays",
    },
  ],

  socialMedia: [
    { platform: "facebook", link: "https://www.facebook.com/SRMCEMOFFICIAL" },
    { platform: "twitter", link: "https://x.com/SrmgpcL" },
    { platform: "instagram", link: "https://www.instagram.com/srmcem_official/" },
    { platform: "linkedin", link: "https://www.linkedin.com/school/shri-ramswaroop-memorial-college-of-engineering-and-management-lucknow/" },
  ],

  getEnrolled: [
    {
      id: 0,
      title: "How to apply",
      path: "/admissions/how-to-apply",
    },
    {
      id: 1,
      title: "Program Finder",
      path: "/admissions/course-offered",
    },

  ],
  getConected: [
    {
      id: 0,
      title: "Careers",
      path: "/career",
    },
    {
      id: 1,
      title: "Contact us",
      path: "/contact-us",
    },
    {
      id: 2,
      title: "Newsletters",
      path: "/newsletters",
    },
    {
      id: 2,
      title: "Blogs",
      path: "/blogs",
    },
  ],
  getResponsible: [
    {
      id: 0,
      title: "Women Helpline",
      path: "/contact-us",
    },
    {
      id: 1,
      title: "Grievance Redressal System",
      path: "https://docs.google.com/forms/d/e/1FAIpQLSde8Ov2JDvB1vYeL-jrqNrlman0gLstQVEWEJ6DN34-EsYdCQ/viewform?pli=1",
    },
    {
      id: 2,
      title: "Anti-Sexual Harassment - ICC",
      path: anti_sexual,
    },
  ],
};

const VideoPopUp = ({ setCheck }: any) => {
  return (
    <div className="w-full bg-black bg-opacity-50 h-screen fixed top-0 left-0 flex items-center justify-center px-5 z-[9999]">
      <div className="z-[999] w-full max-w-[95%] md:max-w-[80%] relative ">
        <span onClick={() => setCheck(false)} className="w-6 h-6 z-[9999] text-black rounded-full bg-white cursor-pointer flex justify-center items-center absolute top-5 right-5">
          <IoClose />
        </span>
        <video
          autoPlay
          loop
          controls
          className="w-full h-auto"
        >
          <source
            src="https://srmcem.ac.in/assets/0403.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};



const Footer: React.FC = () => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (check) {
        document.body.style.height = "100vh";
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.height = "auto";
        document.body.style.overflowY = "auto";
      }
    }
  }, [check]);
  return (
    <>
      <footer className={`bg-[#143c79] text-white pt-[60px] pb-[30px] md:pt-[60px] md:pb-[30px]`}>
        <div className={`${Classes["container"]}`}>
          <div className="w-full manage_footer_column ">
            <div className="w-fullspace-y-4 flex flex-col grid-first">
              <div className="flex items-center gap-3">
                <div>
                  <img src={logosrmcem} alt="" className="w-12 sm:w-16 h-12 sm:h-16 " />
                </div>
                <div>
                  <h2 className="text-white font-bold text-[1.3rem] sm:text-[1.6rem]">
                    SHRI RAMSWAROOP
                    <div className="text-[0.6rem] font-semibold">MEMORIAL COLLEGE OF ENGINEERING & MANAGEMENT</div>
                  </h2>
                </div>
              </div>
              <div className="space-y-4 mt-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-x-1">
                    <span>
                      <Link href="https://www.google.com/maps/place/Shri+Ramswaroop+College+Of+Engineering+and+Management/@26.8915336,81.0725835,20z/data=!3m1!5s0x399958aaf65fe185:0x5e503a417e29a304!4m14!1m7!3m6!1s0x399958aa7cde631d:0xa40f85bf5cea3cc2!2sShri+Ramswaroop+Memorial+Group+of+Professional+Colleges+MBA+Block!8m2!3d26.891466!4d81.0725151!16s%2Fg%2F11cm04667p!3m5!1s0x399958aa9da50cb7:0x8f5a1f4d75d0d691!8m2!3d26.891913!4d81.0728825!16s%2Fm%2F0280y20?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <MdLocationPin size={24} />
                      </Link>
                    </span>
                    <h3 className="font-semibold text-sm sm:text-base text-[#ffb703] uppercase">Address</h3>
                  </div>
                  <p className="text-[14px]">{footerData.contact.address}</p>
                </div>
                <div className="flex flex-col gap-1 ">
                  <div className="flex items-center gap-x-2">
                    <span>
                      <Link href="tel:7570003074" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaPhone />
                      </Link>
                    </span>
                    <h3 className="font-semibold text-sm sm:text-base text-[#ffb703] uppercase">Phone</h3>
                  </div>
                  <p className="text-[14px]">{footerData.contact.phone1}</p>
                </div>
                <div className="flex gap-1 flex-col">
                  <div className="flex items-center gap-x-2">
                    <span className="text-[1.2rem]">
                      <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&href=admissions@srmcem.ac.in" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <MdEmail />
                      </Link>
                    </span>
                    <h3 className="font-semibold text-sm sm:text-base text-[#ffb703] uppercase">Email</h3>
                  </div>
                  <p>
                    <Link href={`mailto:${footerData.contact.email}`} className=" text-[14px]">
                      {footerData.contact.email}
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                <Link href="https://www.facebook.com/SRMCEMOFFICIAL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full text-sm sm:text-base p-1  p-1  w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center transition-all duration-300 hover:rotate-[360deg]  hover:border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] cursor-pointer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </Link>
                <Link href="https://x.com/SrmgpcL"
                  target="_blank"
                  className="border rounded-full text-sm sm:text-base p-1  w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center transition-all duration-300 hover:rotate-[360deg] hover:border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] cursor-pointer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </Link>
                <Link href="https://www.instagram.com/srmcem_official/"
                  target="_blank"
                  className="border rounded-full text-sm sm:text-base p-1  w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center transition-all duration-300 hover:rotate-[360deg] hover:border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] cursor-pointer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </Link>
                <Link href="https://www.linkedin.com/school/shri-ramswaroop-memorial-college-of-engineering-and-management-lucknow/"
                  target="_blank"
                  className="border rounded-full text-sm sm:text-base p-1 p-1  w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center transition-all duration-300 hover:rotate-[360deg] hover:border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
            <div className=" w-full grid-second">
              <h3 className="font-semibold text-sm sm:text-base mb-3 text-[#ffb703]  Get Responsible uppercase">Useful links</h3>
              <ul className="space-y-2 pb-4">
                {footerData.usefulLinks.map((link, index) => (
                  <li key={index}>
                    <div className="flex items-center group hover:text-[#ffb703] ">
                      {link.title === "Mandatory Disclosure" || link.title === "Anti-Sexual Harassment - IIC" ? (
                        <a href={link.path || '#'} target="_blank" className=" text-[14px]  group-hover:text-[#ffb703]">
                          {" "}
                          {link.title}
                        </a>
                      ) : (
                        <Link href={link.path || '#'} className=" text-[14px] text-white group-hover:text-[#ffb703]">
                          {link.title}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-sm sm:text-base mb-3 text-[#ffb703] mt-4 Get Responsible uppercase">Get Connected</h3>
              <ul className="space-y-2 pb-4">
                {footerData.getConected.map((link, index) => (
                  <li key={index}>
                    <div className="flex items-center group hover:text-[#ffb703]">
                      {link.title === "Grievance Redressal" ? (
                        <a href={link.path || '#'} target="_blank" className=" text-[14px] text-white group-hover:text-[#ffb703]">
                          {link.title}
                        </a>
                      ) : (
                        <Link href={link.path || '#'} className=" text-[14px] text-white group-hover:text-[#ffb703]">
                          {link.title}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full grid-third">
              <h3 className="font-semibold text-sm sm:text-base mb-3 text-[#ffb703] uppercase ">Get Responsible</h3>
              <ul className="space-y-2  pb-4">
                {footerData.getResponsible.map((link, index) => (
                  <li key={index}>
                    <div className="flex items-center group hover:text-[#ffb703] ">
                      {link.title === "Anti-Sexual Harassment - ICC" || link.title === "Grievance Redressal System" ? (
                        <a href={link.path || '#'} target="_blank" className=" text-[14px]  group-hover:text-[#ffb703]">

                          {link.title}
                        </a>
                      ) : (
                        <Link href={link.path || '#'} className=" text-[14px] text-white group-hover:text-[#ffb703]">
                          {link.title}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-sm sm:text-base mt-4 mb-3 text-[#ffb703] uppercase">Get Enrolled</h3>
              <ul className="space-y-2  pb-4">
                {footerData.getEnrolled.map((link, index) => (
                  <li key={index}>
                    <div className="flex items-center group hover:text-[#ffb703]">
                      <Link href={link.path || '#'} className={`text-[14px] text-white group-hover:text-[#ffb703] }`}>
                        {link.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
              {/* usefulLinks */}
            </div>
            <div className="w-full grid-fourth">
              <h3 className="font-semibold text-sm sm:text-base mb-3 text-[#ffb703] Get Responsible uppercase">Explore / Engage</h3>
              <button onClick={() => setCheck(true)} className="border-2 hover:bg-white hover:text-[#0f4a85] border-[#ffb703] rounded-md flex items-center space-x-4 px-4 py-3">
                <span className="mr-2">
                  <CiGlobe size={28} color="#ffb703" />
                </span>{" "}
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </footer>
      {check && <VideoPopUp setCheck={setCheck} />}
    </>
  );
};



export default Footer;
