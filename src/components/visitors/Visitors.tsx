import React, { useEffect } from "react";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import { VisitorsData } from "../../data/customOverViewData";
import Classes from "../../utils/styles/Global.module.css";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../data/customTopFooterData";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { getTestimonial } from "../../store/testimonial/testimonialThunk";
// const dummyBoy = "/images/visitors/dummy-girl.png";
// const dummyGril = "/images/visitors/dummy-boy.png";
import { gridImgData } from "../../data/visitorsData";

const Visitors: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const { data } = useSelector((state: RootState) => state.getTestimonial);

  useEffect(() => {
    dispatch(getTestimonial());
  }, [dispatch]);

  // 🔹 Date formatter: 06.04.2024
  // const formatDate = (dateString: string) => {
  //   if (!dateString) return "";

  //   const date = new Date(dateString);
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const year = date.getFullYear();

  //   return `${day}.${month}.${year}`;
  // };

  // @ts-ignore
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split(".");
    return new Date(year, month - 1, day);
  };
  return (
    <>
      <div className={Classes["container"]}>
        <CustomOverviewSection data={VisitorsData} />
      </div>

      <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14`}>
        <div className="clubs_grid_image testimonial-grid gap-12">
          {/* {data?.map((item, ind) => (
            <div key={ind} className="bg-white shadow-md rounded-lg p-4 group hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#ffb703] pb-8">
              <div className="flex justify-center -mt-16">
                <img
                  className="w-24 h-24 rounded-full border-2 border-gray-200 group-hover:border-[#ffb703] bg-white"
                  src={item.imageUrl ? item.imageUrl : item.gender === "male" ? dummyBoy : dummyGril}
                  alt={item.name || "Visitor"}
                  onError={(e) => {
                    e.currentTarget.src = item.gender === "female" ? dummyGril : dummyBoy;
                  }}
                />
              </div>

              <div className="mt-5">
                <p className="text-sm text-gray-500 mt-3">{item.description}</p>
                <p className="text-sm font-medium text-gray-600 mt-2 group-hover:font-bold">{formatDate(item.updatedAt)}</p>
              </div>

              <div className="text-sm mt-2">
                <p className="group-hover:font-semibold">{item.name}</p>
              </div>
            </div>
          ))} */}
          {gridImgData.data.cardsContent
            ?.slice() // avoid mutating original array
            // @ts-ignore
            .sort((a, b) => parseDate(b.date) - parseDate(a.date)) // LATEST FIRST
            .map((item, ind) => (
              <div key={ind} className="bg-white shadow-md rounded-lg p-4 group hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-[#ffb703] pb-8">
                <div className="flex justify-center -mt-16">
                  <img className="w-24 h-24 rounded-full border-2 border-gray-200 group-hover:border-[#ffb703] bg-white" src={item.img} alt={item.name || "Visitor"} />
                </div>

                <div className="mt-5">
                  <p className="text-sm text-gray-500 mt-3">{item.message}</p>
                  <p className="text-sm font-medium text-gray-600 mt-2 group-hover:font-bold">{item.date}</p>
                </div>

                <div className="text-sm mt-2">
                  <p className="group-hover:font-semibold">{item.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <CustomTopFooter data={CustomTopFooterData1} />
    </>
  );
};

export default Visitors;
