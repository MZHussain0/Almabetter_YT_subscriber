import axios from "axios";
import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";

const SubscriberPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/subscribers").then(({ data }) => {
      setData(JSON.stringify(data));
    });
  }, []);

  return (
    <div className=" max-w-md rounded-md overflow-hidden">
      <p className="text-xs">Details of all subscribers</p>
      <CodeBlock data={data} />
    </div>
  );
};

export default SubscriberPage;
