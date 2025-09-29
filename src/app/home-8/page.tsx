import React from 'react';
import BannerEight from '@/components/heroes/BannerEight';
import CountDown from '@/components/common/CountDown';
import HighlightOne from '@/components/highlights/HighlightOne';
import Award from '@/components/awards/Award';
import ScrollSection from '@/components/common/ScrollSection';
import LineupOne from '@/components/lineups/LineupOne';
import ScheduleOne from '@/components/schedules/ScheduleOne';
import Separator from '@/components/common/Separator';
import Pricing from '@/components/pricing/Pricing';
import Faq from '@/components/faq/Faq';
import SponsorSlider from '@/components/sponsores/SponsorSlider';
import BlogOne from '@/components/blogs/BlogOne';
import Cta from '@/components/cta/Cta';
import SubscriptionOne from '@/components/subscriptions/SubscriptionOne';
import Gallery from '@/components/gallery/Gallery';
import TicketOne from '@/components/tickets/TcketOne';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eventiva next.js - Home8',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
};
const Home8 = (): JSX.Element => {
  return (
    <>
      <BannerEight />
      <TicketOne styleNum={1} />
      <CountDown styleNum={0} />
      <HighlightOne styleNum={0} />
      <Award />
      <ScrollSection />
      <LineupOne />
      <Separator className={'mt-100 mt-lg-150 mt-xxl-180'} />
      <ScheduleOne />
      <Pricing styleNum={0} styleNum2={0} />
      <Faq styleNum={0} />
      <SponsorSlider styleNum={0} />
      <Gallery styleNum={0} />
      <BlogOne />
      <Cta styleNum={0} />
      <SubscriptionOne styleNum={0} />
    </>
  );
};

export default Home8;
