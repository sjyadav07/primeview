import React, { useState } from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading";

const AppLayout = () => {
  // ==> To avoid use the "useNavigation()" hook for "loading" to everywhere we define it in "AppLayout" component
  // ==> so here haeder and footer are fix and "Outlet" is change so it track it

  const navigation = useNavigation();

  // console.log(navigation); //=> it give the all state which we got in the navigation

  if (navigation.state === "loading") return <Loading />;
  //=> state is a property which we got in "useNavigation()" and it's have 3 state idle,loading,submitting if loading then show loading we use to show the loading data

  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Outlet context={{ search }} />
      <Footer />
    </>
  );
};

export default AppLayout;
