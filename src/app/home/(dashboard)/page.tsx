"use client";

import { useEffect, useState } from "react";
import TitleH1 from "../_components/title-h1";
import { checkHour } from "@/components/lib/check-hour";
import Dashboard from "./_components";

const DashboardPage = () => {
  const [time, setTime] = useState<string>("");
  
  useEffect(() => {
      let hour = checkHour();
      setTime(hour)
    }, []);

  return (
    <>
      <TitleH1>Olá, Nome, {time}.</TitleH1>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
