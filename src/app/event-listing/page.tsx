import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import SubscriptionOne from '@/components/subscriptions/SubscriptionOne';
import EventListing from '@/components/eventListing/EventListing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eventiva next.js - Event-Listing',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
};
const Events = (): JSX.Element => {
  return (
    <>
      <PageHeader currentPage={'Event Listing'} banner={'banner-1 banner-2'} />
      <EventListing />
      <SubscriptionOne styleNum={2} />
    </>
  );
};

export default Events;
