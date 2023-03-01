import Head from 'next/head'
import Image from 'next/image'
import Slider from "@/components/home/Slider";
import PostSection from "@/components/home/PostSection";
import Culture from "@/components/home/Culture";
import Business from "@/components/home/Business";
import LifeStyle from "@/components/home/LifeStyle";


export default function Home() {
  return (
      <>
        <main id="main">
          {/* ======= Hero Slider Section ======= */}
            <Slider/>
          {/* End Hero Slider Section */}
          {/* ======= Post Grid Section ======= */}
          <PostSection/>
          {/* End Post Grid Section */}
          {/* ======= Culture Category Section ======= */}
          <Culture/>
          {/* End Culture Category Section */}
          {/* ======= Business Category Section ======= */}
          <Business/>
          {/* End Business Category Section */}
          {/* ======= Lifestyle Category Section ======= */}
          <LifeStyle/>
          {/* End Lifestyle Category Section */}
        </main>
        {/* End #main */}
      </>

  )
}
