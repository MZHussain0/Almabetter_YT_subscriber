import axios from "axios";
import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";

const SubNamesPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/subscribers/names").then(({ data }) => {
      setData(JSON.stringify(data, null, 2));
    });
  }, []);
  return (
     <>
        <CodeBlock
           data={data}
           text={"names and subscribedChannel of subscribers"}
        />
        <sub className="text-[0.5rem]">
           Note: this route has been set to id "/63f78075ad07a7f651fdd9b8" except for "/names"
        </sub>
     </>
  );
};

export default SubNamesPage;
