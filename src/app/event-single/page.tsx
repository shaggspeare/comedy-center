import React from 'react';
import ScrollSection from '@/components/common/ScrollSection';
import Gallery from '@/components/gallery/Gallery';
import Cta from '@/components/cta/Cta';
import SubscriptionOne from '@/components/subscriptions/SubscriptionOne';
import LineupOne from '@/components/lineups/LineupOne';
import SeparatorTwo from '@/components/common/SeparatorTwo';

import Pricing from '@/components/pricing/Pricing';
import BannerEventSingle from '@/components/heroes/BannerEventSingle';
import HighlightOne from '@/components/highlights/HighlightOne';
import ScheduleOne from '@/components/schedules/ScheduleOne';
import Faq from '@/components/faq/Faq';
import SponsorSlider from '@/components/sponsores/SponsorSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eventiva next.js - Event-single',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
};
const EventSingle = (): JSX.Element => {
  return (
    <>
      <BannerEventSingle />
      <HighlightOne styleNum={3} />
      <ScrollSection prentClass={'py-30 py-lg-50'} />
      <LineupOne />
      <SeparatorTwo className={'mt-100 mt-lg-150 mt-xxl-180'} />
      <Pricing styleNum={0} styleNum2={1} />
      <ScheduleOne />
      <Faq />
      <SponsorSlider styleNum={0} />
      <Gallery styleNum={4} />
      <Cta styleNum={5} />
      <SubscriptionOne styleNum={0} />
    </>
  );
};

export default EventSingle;
