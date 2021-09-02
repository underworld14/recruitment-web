import React from "react";
import AdminLayout from "app/components/layout/admin";
import BannerCompany from "../../components/banner-company";
import Content from "./content";

const Index = () => {
  return (
    <AdminLayout>
      <BannerCompany />
      <Content />
    </AdminLayout>
  );
};

export default Index;
