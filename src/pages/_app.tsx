import type { AppProps } from "next/app";
import { useEffect, Fragment } from "react";
import { Provider } from "react-redux";
import { store } from "../store/index";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CopyrightFooter from "../components/footer/CopyrightFooter";
import Classes from "../utils/styles/Global.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import "../App.css";

const Breadcrumbs = () => {
  const router = useRouter();
  const pathnames = router.pathname.split("/").filter((x) => x);

  // We map the route segments to labels (simple implementation of Breadcrumbs)
  // For a more advanced one we can map specific full routes
  const breadcrumbLabels: Record<string, string> = {
    about: "About Us",
    message: "Message",
    administration: "Administration",
    iqac: "IQAC",
    membership: "Membership",
    achievements: "Achievements",
    visitors: "Visitor's Testimonial",
    academics: "Academics",
    "academics-calender": "Academic Calendar",
    admissions: "Admissions",
    "course-offered": "Course Offered",
    "how-to-apply": "How to Apply",
    "contact-us": "Contact Us",
    department: "Department",
    "applied-science": "Applied Sciences",
    chemistry: "Department of Chemistry",
    miscellaneous: "Department of Miscellaneous",
    humanities: "Department of Humanities",
    mathmetics: "Department of Mathematics",
    physics: "Department of Physics",
    "cse-ai-ml": "Department of CSE AI & ML",
    "data-science": "Department of Data Science",
    iot: "Department of IOT",
    "cyber-cecurity": "Department of Cyber Security",
    "civil-engineering": "Department of Civil Engineering",
    "computer-science": "Department of Computer Science",
    "computer-application": "Department of Computer Application",
    it: "Department of Information Technology",
    management: "Department of Management",
    "mechanical-engineering": "Department of Mechanical Engineering",
    "electrical-engineering": "Department of Electrical Engineering",
    "electronics&communication-engineering": "Department of Electronics & Communication Engineering",
    pharmacy: "Department of Pharmacy",
    placements: "Placements",
    "training-placement": "Training & Placement",
    "campus-life": "Campus Life",
    "student-corner": "Student Corner",
    outreach: "Outreach",
    clubs: "Clubs",
    entrepreneurship: "Innovation & Entrepreneurship",
    events: "Events",
    "campus-tour": "Campus Tour",
    facilities: "Facilities",
    other: "Other Facilities",
    "wiwa-club": "WIWA Club",
    abhivyakti: "Abhivyakti",
    abhivyakti2026: "Abhivyakti 2026",
    gantavya: "Gantavya",
    spardha: "Spardha",
    library: "Central Library",
    "central-library": "Central Library",
    career: "Career Page",
    "uptac-2025": "UPTAC-2025",
    notice: "Notice Page",
    "acount-cell": "Accounts Cell",
    "imp-policies": "Important Policies",
    newsletters: "Newsletters",
    "list-holidays": "List Of Holidays",
    download: "Download",
    "enquiry-form": "Enquiry Form",
    "privacy-policy": "Privacy Policy",
    disclaimer: "Disclaimer",
    "terms-and-conditions": "Terms and Condition",
  };

  const crumbs = [];
  let currentPath = "";

  for (let i = 0; i < pathnames.length; i++) {
    currentPath += `/${pathnames[i]}`;
    crumbs.push({
      label: breadcrumbLabels[pathnames[i]] || pathnames[i],
      path: currentPath,
    });
  }

  // The original breadcrumbs kept only length max 2
  const displayCrumbs = [{ label: "Home", path: "/" }, ...crumbs];
  if (displayCrumbs.length > 2) {
    displayCrumbs.splice(1, displayCrumbs.length - 2);
  }

  return (
    <section className={`banner-section ${router.pathname === "/abhivyakti" ? "abhivyakt" : ""} flex items-center`}>
      <div className={`${Classes["container"]} `}>
        <div className={`${Classes["page-title-content"]}`}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0 flex flex-wrap gap-[0.5rem] ">
              {displayCrumbs.map((crumb, index) => (
                <li key={index} className={`${Classes["breadcrumb-item"]} max-sm:text-[12px]`}>
                  {index === displayCrumbs.length - 1 ? (
                    <span className={Classes["active_breadcrumbs"]}>{crumb.label}</span>
                  ) : (
                    <Link href={crumb.path}>{crumb.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      document.documentElement.classList.add("js-reveal");

      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -4% 0px" }
      );

      const reveal = () => {
        const els = document.querySelectorAll(".reveal:not(.is-visible)");
        els.forEach((el) => io.observe(el));
      };

      window.requestAnimationFrame(() => setTimeout(reveal, 100));
      window.addEventListener("load", reveal);

      const observer = new MutationObserver((mutations) => {
        let shouldCheck = false;
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const el = node as HTMLElement;
              if (el.classList?.contains("reveal") || el.querySelector?.(".reveal")) {
                shouldCheck = true;
                break;
              }
            }
          }
          if (shouldCheck) break;
        }
        if (shouldCheck) {
          reveal();
        }
      });

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [router.asPath]);

  return (
    <Provider store={store}>
      <Header />
      <main className="mt-[51px]">
        {router.pathname !== "/" && <Breadcrumbs />}
        <Component {...pageProps} />
      </main>
      <Footer />
      <CopyrightFooter />
      <Toaster />
    </Provider>
  );
}
