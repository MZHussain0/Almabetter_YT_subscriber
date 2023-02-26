import axios from "axios";
import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";

const SingleSubscriberPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/subscribers/63f78075ad07a7f651fdd9b8").then(({ data }) => {
      setData(JSON.stringify(data, null, 2));
    });
  }, []);
  return (
     
        <CodeBlock
           data={data}
           text={"Details of ID: 63f78075ad07a7f651fdd9b8"}
        />
  );
};

export default SingleSubscriberPage;
