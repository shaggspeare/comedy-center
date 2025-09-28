import event_image_1 from '@/assets/images/gallery-3.jpg';
import event_image_2 from '@/assets/images/gallery-4.jpg';
import event_image_3 from '@/assets/images/gallery-5.jpg';
import event_image_4 from '@/assets/images/gallery-2.jpg';

import schedule_img_1 from '@/assets/images/home-2/schedule-1.png';
import schedule_img_2 from '@/assets/images/home-2/schedule-2.png';
import schedule_img_3 from '@/assets/images/home-2/schedule-3.png';
import schedule_img_4 from '@/assets/images/home-2/schedule-4.png';
import schedule_img_5 from '@/assets/images/home-2/schedule-5.png';
import schedule_img_6 from '@/assets/images/home-2/schedule-6.png';
import schedule_img_7 from '@/assets/images/home-2/schedule-7.png';
import schedule_img_8 from '@/assets/images/home-2/schedule-8.png';
import schedule_img_9 from '@/assets/images/home-2/schedule-9.png';
export const eventsData = [
  {
    id: 1,
    img: event_image_1,
    link: 'event-single',
    time: '9:00 AM - 12:00 MP',
    date: '09 Dec 2024',
    location: '135W, 46nd Street, New York',
    title: 'Astral Beats on the Main Stage',
    desc: 'Get ready to dance as the electrifying duo Astral Beats takes the main stage, delivering an immersive blend of electronic and live instruments.',
    speakers: [
      {
        id: 1,
        name: 'Kathleen R. Franklin',
        speaker: schedule_img_1,
      },
      {
        id: 2,
        name: 'Cristina A. Marcum',
        speaker: schedule_img_2,
      },
      {
        id: 3,
        name: 'Rebecca N. Cullen',
        speaker: schedule_img_3,
      },
    ],
  },
  {
    id: 2,
    img: event_image_2,
    link: 'event-single',
    time: '9:00 AM - 12:00 MP',
    date: '20 Dec 2024',
    location: 'India',
    title: 'Lunar Lounge with Luna Serenade (VIP Area)',
    desc: 'VIP ticket holders can unwind and indulge in the soothing melodies of Luna Serenade at the exclusive Lunar Lounge, offering a more intimate and unique experience.',
    speakers: [
      {
        id: 1,
        name: 'Franklin R. Franklin',
        speaker: schedule_img_4,
      },
      {
        id: 2,
        name: 'Luna R. Franklin',
        speaker: schedule_img_5,
      },
      {
        id: 3,
        name: 'Kathleen R. Lunar',
        speaker: schedule_img_6,
      },
    ],
  },
  {
    id: 3,
    img: event_image_3,
    link: 'event-single',
    time: '10:00 AM - 12:00 MP',
    date: '11 Dec 2024',
    location: '135W, 46nd Street,  India',
    title: 'Yoga & Meditation with Echo Harmony',
    desc: 'Kick off the festivities as the gates open to welcome music enthusiasts from all around.',
    speakers: [
      {
        id: 1,
        name: 'Harmony R. Franklin',
        speaker: schedule_img_7,
      },
      {
        id: 2,
        name: 'Franklin R. Celestial',
        speaker: schedule_img_8,
      },
      {
        id: 3,
        name: 'Kathleen R. Celestial',
        speaker: schedule_img_9,
      },
    ],
  },
  {
    id: 4,
    img: event_image_4,
    link: 'event-single',
    time: '8:00 AM - 1:00 MP',
    date: '10 Dec 2024',
    location: '135W, 46nd Street,  Canada',
    title: 'Opening Ceremony with Celestial Rhythms',
    desc: 'Begin the musical journey with a mesmerizing opening ceremony by the celestial music ensemble, Celestial Rhythms, setting the harmonious tone for the event.',
    speakers: [
      {
        id: 1,
        name: 'Franklin R. Franklin',
        speaker: schedule_img_4,
      },
      {
        id: 2,
        name: 'Kathleen R. Franklin',
        speaker: schedule_img_1,
      },
      {
        id: 3,
        name: 'Luna R. Franklin',
        speaker: schedule_img_5,
      },
    ],
  },
];
