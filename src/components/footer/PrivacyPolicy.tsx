import React from "react";
import Classes from "../../utils/styles/Global.module.css";
const privacyPolicyData = [
  {
    title: "Privacy Policy",
    content: `Shri Ramswaroop Memorial College of Engineering & Management, Lucknow has created this Privacy Policy in order to demonstrate our firm commitment to your privacy. We collect no personal information about you unless you choose to provide that information to us. We do not give, share, sell, or transfer any personal information to a third party.`,
  },
  {
    title: "Non-personal Information We Record",
    content: `We use this information for statistical analysis, to help us make our site more useful to visitors. This tracking system does not record information about individuals.`,
  },
  {
    title: "Cookies",
    content: `On certain Shri Ramswaroop Memorial College of Engineering & Management web pages, we use "cookies" to help you use our websites interactively. A cookie is a small file that a website transfers to your computer's hard disk, usually to keep track of you while you are connected to that site.`,
  },
  {
    title: "Email Policy",
    content: `We will not share, sell, rent, swap or authorize any third party to use your email address for commercial purposes without your permission.`,
  },
  {
    title: "Information Collected from Interactive Forms",
    content: `On some of our web pages we offer interactive forms that let you voluntarily submit personal information (such as your e-mail address, name, or organization). This occurs when you are registering for online counseling, various tests, quizzes, seminars.`,
  },
  {
    title: "External links",
    content: `Our website may contain links to external websites not owned by, or officially affiliated with, Shri Ramswaroop Memorial College of Engineering & Management in any way. We are not responsible for the privacy practices or the content of such websites.`,
  },
  {
    title: "Changes to this Policy",
    content: `This privacy policy may be amended from time to time. Any such changes will be posted on this page.`,
  },
  {
    title: "Note",
    content: `When you voluntarily send us electronic mail, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form.`,
  },
];

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
      <div className="w-full">
        {privacyPolicyData.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className={` ${index === 0 ? "text-3xl" : "text-2xl"} font-semibold mb-2`}>{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
