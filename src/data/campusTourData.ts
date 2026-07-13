const RectangleBG = "/images/rectangle/RectangleBG.png";
const PdfImg = "/images/campusTour/Pdf-img.png";
const RectangleCarousel1 = "/images/campusTour/RectangleCarousel1.png";
const RectangleCarousel2 = "/images/campusTour/RectangleCarousel2.png";
const RectangleCarousel3 = "/images/campusTour/RectangleCarousel3.png";
const Environment_Audit = "/pdf/campusTour/Environment Audit Report 6 Feb 22.pdf";
const energy_audit = "/pdf/campusTour/Energy Audit Report.pdf";
const Fire_Safety_NOC = "/pdf/campusTour/Fire.pdf";

export const campusTourCards = [
    {
        icon: PdfImg,
        title: "Energy Audit",
        pdf : energy_audit,
        backgroundImage: RectangleBG,
      },
      {
        icon: PdfImg,
        title: "Fire Safety NOC",
        pdf: Fire_Safety_NOC,
        backgroundImage: RectangleBG,
      },
      {
        icon: PdfImg,
        title: "Environment Audit",
        pdf: Environment_Audit,
        backgroundImage:RectangleBG,
      },
];

export const CampusTourCarouselImages = [
    { src: RectangleCarousel1, alt: "Image 1" },
    { src: RectangleCarousel2, alt: "Image 2" },
    { src: RectangleCarousel3, alt: "Image 3" },
  ];
