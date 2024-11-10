"use client";
import "./globals.css";
import  Hero  from "@/components/hero";

import  Events  from "@/components/events";
import Testimonials  from "@/components/testimonials";
import Contact  from "@/components/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Gallery from "@/components/Gallery";
export default function Home() {
  return (
    <main className="min-h-screen bg-blue-900">
      <Navbar />
      <Hero />
      <Events />
      <Gallery/>
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}