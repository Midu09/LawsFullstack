import { useState, useEffect } from "react";

const LawsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://vanbanphapluat.co/api/search?l=/loai-van-ban/quyet-dinh"
        );
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dữ liệu văn bản</h1>
    </div>
  );
};

export default LawsPage;
