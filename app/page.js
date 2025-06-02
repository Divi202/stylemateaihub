import Image from "next/image";
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <Features></Features>
    <Steps></Steps>
    <WhyChoose></WhyChoose>
    
    </>
  );
}
