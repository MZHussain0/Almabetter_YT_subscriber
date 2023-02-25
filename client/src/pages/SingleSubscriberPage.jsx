import axios from "axios";
import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";

const SingleSubscriberPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/subscribers/63f78075ad07a7f651fdd9b8").then(({ data }) => {
      setData(JSON.stringify(data));
    });
  }, []);
  return (
    <div className=" max-w-md rounded-md overflow-hidden">
      <p className="text-xs">Details of ID: 63f78075ad07a7f651fdd9b8</p>
      <CodeBlock data={data} />
    </div>
  );
};

export default SingleSubscriberPage;
