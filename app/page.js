import Image from "next/image";
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <Features></Features>
    <Steps></Steps>
    <WhyChoose></WhyChoose>
    <CTA></CTA>
    </>
  );
}
