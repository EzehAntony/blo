"use client";

import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Content from "./components/Content";
import Steps from "./components/Steps";

const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Content />
      <Steps />
    </div>
  );
};

export default page;
