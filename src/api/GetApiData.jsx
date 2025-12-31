import React from "react";

const GetApiData = async () => {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default GetApiData;
