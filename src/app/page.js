import Banner from "@/components/Banner";
import CareTips from "@/components/CareTips";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <CareTips />
      <TopBrands />

    </div>
  );
}
