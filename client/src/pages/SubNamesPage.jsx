import axios from "axios";
import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";

const SubNamesPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/subscribers/names").then(({ data }) => {
      setData(JSON.stringify(data));
    });
  }, []);
  return (
    <div className=" max-w-md rounded-md overflow-hidden">
      <p className="text-xs">names and subscribedChannel of subscribers</p>
      <CodeBlock data={data} />
    </div>
  );
};

export default SubNamesPage;
