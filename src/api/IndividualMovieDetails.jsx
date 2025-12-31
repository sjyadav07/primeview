import React from "react";
const individualMovieDetails = async ({ params }) => {
  //=> yha pe hume direct params ko destructure ke form me likh dena hai so hume "useParams()" hook use nhi karna padega
  const id = params.id;

  //   console.log(id);

  try {
    const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default individualMovieDetails;
