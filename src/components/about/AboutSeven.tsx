import React from 'react';
import SectionName from '@/components/common/sectionTitle/SectionName';
import SectionDesc from '@/components/common/sectionTitle/SectionDesc';
import ButtonCustom from '@/components/common/buttons/ButtonCustom';
import TicketIcon from '@/components/common/icons/TicketIcon';
import AboutCard from '@/components/common/cards/AboutCard';
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo';

interface AboutSevenProps {
  styleNum?: number;
}

const AboutSeven: React.FC<AboutSevenProps> = ({ styleNum }) => {
  // styleNum 0 from home page 5
  // styleNum 1 from home page 7

  let subTitleClass: string;
  let sectionDescClass: string;

  switch (styleNum) {
    case 0:
      subTitleClass = 'custom-roboto primary-text-shadow';
      sectionDescClass = '';
      break;
    case 1:
      subTitleClass = 'primary-text-shadow';
      sectionDescClass = 'custom-roboto';
      break;
    default:
      subTitleClass = 'custom-roboto primary-text-shadow';
      sectionDescClass = '';
      break;
  }

  // ----- Change classname define in home page

  return (
    <section className="about-section about-1 pb-50 pb-lg-80 pb-xxl-100">
      <div className="container">
        <div className="row gy-50 gy-lg-0 gx-80 justify-content-lg-between">
          <div className="col-lg-5">
            <div className="wow fadeInRight">
              <div className="section-title section-title-style-2 mb-4 mb-lg-30 mb-xxl-40">
                <SectionName name={'About The Event'} className={''} />
                <SectionTitleTwo
                  title={'Soulful'}
                  subTitle={'Symphony'}
                  titleClass={''}
                  subTitleClass={subTitleClass}
                />
              </div>

              {/* -- section-title -- */}
              <SectionDesc
                desc={
                  'Experience Harmonia: where melodies transcend boundaries. Immerse in captivating performances that ignite the stage. Unleash your musical senses and embrace rhythmic bliss.'
                }
                className={`mb-4 mb-lg-30 ${sectionDescClass}`}
              />
              <SectionDesc
                desc={
                  "Don't miss this extraordinary celebration of music and create memories that will last a lifetime."
                }
                className={sectionDescClass}
              />
              <ButtonCustom
                link={'#ticket'}
                className={'btn-gradient  gap-2 mt-4 mt-lg-30 mt-xxl-40'}
              >
                <TicketIcon height={'25'} width={'25'} />
                Get Ticket
              </ButtonCustom>
            </div>
          </div>
          {/* -- col-5 -- */}
          <div className="col-lg-6">
            <AboutCard />
            {/* -- about-content-wrapper -- */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSeven;
