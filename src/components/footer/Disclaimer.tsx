import React from 'react'
import Classes from "../../utils/styles/Global.module.css";
const disclaimerContent = [
  {
    title: "Disclaimer",
    content: `Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use our website.`,
  },
  {
    title: "Ownership",
    content: `The terms Indian Geotechnical Society, or IGS, or ‘us’ or ‘we’ refers to the owner of the website whose Secretariat is located in New Delhi, India. The address for the Secretariat is: Indian Geotechnical Society, 206, Manisha Building, 75-76, Nehru Place, New Delhi - 110 019, INDIA.`,
  },
  {
    title: "Content",
    content: `The content of the pages of this website is for your general information and use only. It is subject to change without notice.`,
  },
  {
    title: "Cookies/Privacy",
    content: `This website uses cookies to monitor browsing preferences. We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.`,
  },
  {
    title: "Accuracy",
    content: `While every care is taken to ensure that factual information is correct, neither the IGS nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. Your use of any information or materials on this website is entirely at your own risk. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.`,
  },
  {
    title: "Trademark and Copyright",
    content: `All contents of this website are Copyright to IGS. All Rights Reserved. The IGS logo may not be used without express permission from the IGS Secretariat. All other trademarks, service marks, and logos used on this website are the property of their respective owners. This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited.`,
  },
  {
    title: "External Links",
    content: `This website includes links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).`,
  },
];
const Disclaimer: React.FC = () => {
  return (
    <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
      {disclaimerContent.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className={` ${index === 0 ? "text-3xl" : "text-2xl"} font-semibold mb-2`}>{section.title}</h2>
          <p className="text-gray-700">{section.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Disclaimer;