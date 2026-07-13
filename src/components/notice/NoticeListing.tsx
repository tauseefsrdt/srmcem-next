import React, { useEffect, useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
// import { noticeData } from "../../data/NoticeData";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { getNoticeData } from "../../store/notice/noticeThunk";
import { AppDispatch, RootState } from "../../store";

const NoticeListing: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.getNotice);

  const [items, setItems] = useState(data.slice(0, 10)); // Initial load of 20 items
  const [hasMore, setHasMore] = useState(true);

  console.log("data", data);

  const fetchMoreData = () => {
    if (items.length >= data.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...data.slice(prevItems.length, prevItems.length + 20)]);
    }, 2000);
  };
  useEffect(() => {
    dispatch(getNoticeData());
  }, []);

  if (loading) return <p>Loading notices...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={`${Classes["container"]} py-7 md:py-10 lg:py-14 bg-[#ecf0f9] shadow-md rounded-lg mb-7 md:mb-10 lg:mb-14`}>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 className=" text-xl mt-10 text-center text-[#ffb703]">Loading...</h4>}
        endMessage={
          <p className={`${data.length >= 10 && "mt-10"}   text-[#ffb703]`} style={{ textAlign: "center" }}>
            {data.length >= 1 ? <b>You have seen all notices</b> : <b>No Data ...</b>}
          </p>
        }
      >
        {items.map((item) => (
          <div key={item.id} className="cursor-pointer px-4 py-6 border-b border-gray-300 border-l-4 border-l-[#ecf0f9] hover:bg-white hover:border-l-4 hover:border-[#ffb703]">
            <h2 className="font-semibold">{item.title}</h2>
            <a
              // @ts-ignore
              href={item?.files[0].fileUrl || '#'} 
              target="_blank"
              className="bg-[#FFB703] px-3 py-1 font-medium text-sm border-[#ffb703] rounded-full inline-flex gapx-x-1 items-center mt-6 text-[#0f4a85]"
            >
              View Notice
            </a>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default NoticeListing;
