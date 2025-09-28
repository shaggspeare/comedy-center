// "use client"
import React from 'react';
import Link from 'next/link';
import EventCard from '../common/cards/EventCard';
import { eventsData } from '@/lib/eventsData';
import Pagination from '../common/Pagination';

const EventListing = () => {
  return (
    <section className="blog-content-section py-50 py-lg-80 py-xxl-100">
      <div className="container col-xxl-10">
        <div className="blog-wrapper">
          {eventsData.map(
            ({
              id,
              img,
              time,
              date,
              location,
              title,
              desc,
              link,
              speakers,
            }) => (
              <div key={id}>
                <EventCard
                  img={img}
                  time={time}
                  date={date}
                  location={location}
                  title={title}
                  desc={desc}
                  link={link}
                  speakers={speakers}
                />
              </div>
            )
          )}
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default EventListing;
