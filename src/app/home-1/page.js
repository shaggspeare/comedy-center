import React from 'react'
import HighlightOne from '@/components/highlights/HighlightOne';
import Award from '@/components/awards/Award';
import ScrollSection from '@/components/common/ScrollSection'
import ScheduleOne from '@/components/schedules/ScheduleOne'
import Separator from '@/components/common/Separator'
import Pricing from '@/components/pricing/Pricing';
import Faq from '@/components/faq/Faq'
import Gallery from '@/components/gallery/Gallery';
import BannerEight from "@/components/heroes/BannerEight";
import LineupSeven from "@/components/lineups/LineupSeven";
import Direction from "@/components/direction/Direction";

export const metadata = {
  title: 'Eventiva next.js - Home1',
  description: 'Eventiva next.js multipage website with next.js and bootstrap',
}
const Home1 = () => {
  return (
    <>
      <BannerEight />
        <div style={{marginBottom: '150px'}}></div>
      <HighlightOne styleNum={0} />
      <Award />
      <ScrollSection />
      <LineupSeven />
      <Separator className={"mt-100 mt-lg-150 mt-xxl-180"} />
      <ScheduleOne />
        <Faq styleNum={0} />
        <Pricing styleNum={0} styleNum2={0} />
      <Gallery styleNum={0}/>
      <Direction styleNum={0}/>
    </>
  )
}

export default Home1



