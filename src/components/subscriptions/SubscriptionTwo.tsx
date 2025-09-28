import Link from 'next/link';
import React from 'react';

import SocialIcon2 from '@/components/common/icons/SocialIcon2';
import SocialIcon3 from '@/components/common/icons/SocialIcon3';
import SocialIcon4 from '@/components/common/icons/SocialIcon4';
import SocialIcon5 from '@/components/common/icons/SocialIcon5';
import SocialIcon1 from '@/components/common/icons/SocialIcon1';

interface SubscriptionTwoProps {
  styleNum: number;
}

const SubscriptionTwo: React.FC<SubscriptionTwoProps> = ({ styleNum }) => {
  // styleNum 0 from about page and venue

  let subscriptionClass: string;
  let wrapperClass: string;
  switch (styleNum) {
    case 0:
      subscriptionClass = 'contact-1 mt-lg-100 mt-xxl-130';
      wrapperClass = 'pt-60 pt-lg-100 pt-xxl-120 pb-40 pb-lg-50 pb-xxl-70';
      break;

    default:
      break;
  }

  // ----- Change classname define in home page

  return (
    <section
      className={`contact-section subscription-2 ${subscriptionClass} mt-50`}
    >
      <div className="container">
        <div className={`contact-wrapper ${wrapperClass}`}>
          <div className="row gy-lg-0 gy-50">
            <div className="col-lg-7">
              <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                <span className="straight-line"></span>Contact Musicfest
              </span>
              <div className="mt-20 mt-md-30 mt-lg-40 mt-xxl-60">
                <Link
                  href="#"
                  className="text-decoration-none display-6 custom-jakarta fw-extra-bold"
                >
                  contact@mail.com
                </Link>
                <div className="contact-details custom-heading-color-2 mt-10 mt-lg-30">
                  <h3 className="custom-jakarta fw-bold mb-20">BASEMENT</h3>
                  <h3 className="custom-jakarta fw-semibold mb-5">
                    135 W, 46nd Street, New York, USA
                  </h3>
                  <h3 className="custom-jakarta fw-bold">+1 800 123 456 789</h3>
                  <ul className="list-unstyled contact-icons d-flex align-items-center gap-20 gap-lg-30 mt-4 mt-lg-40 mb-0">
                    <li>
                      <Link href="#" aria-label="icons">
                        <SocialIcon1 height={'30'} width={'30'} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" aria-label="icons">
                        <SocialIcon2 height={'30'} width={'30'} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" aria-label="icons">
                        <SocialIcon3 height={'26'} width={'28'} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" aria-label="icons">
                        <SocialIcon4 height={'31'} width={'30'} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" aria-label="icons">
                        <SocialIcon5 height={'31'} width={'30'} />
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- social-share-icons --> */}
                </div>
              </div>
            </div>
            {/* <!-- col-5 --> */}
            <div className="col-lg-4">
              <span className="fs-3 straight-line-wrapper fw-semibold position-relative">
                <span className="straight-line custom-heading-color-1"></span>
                Harmonia links
              </span>
              <div className="contact-details mt-20 mt-md-30 mt-lg-40 mt-xxl-60">
                <h3 className="display-6 custom-jakarta fw-semibold custom-heading-color-1 border-bottom border-3">
                  About Us
                </h3>
                <ul className="list-unstyled contact-lists d-flex flex-column gap-2 mt-20 mt-lg-30 mb-0">
                  <li>
                    <Link
                      href="home-1.html#line-up"
                      target="_blank"
                      className="text-decoration-none custom-heading-color-2"
                    >
                      Line Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="home-3.html#about"
                      target="_blank"
                      className="text-decoration-none custom-heading-color-2"
                    >
                      Lates News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="home-1.html#sponsor"
                      target="_blank"
                      className="text-decoration-none custom-heading-color-2"
                    >
                      Become A Sponsor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#direction"
                      target="_blank"
                      className="text-decoration-none custom-heading-color-2"
                    >
                      Venue
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="home-1.html#schedule"
                      target="_blank"
                      className="text-decoration-none custom-heading-color-2"
                    >
                      Schedule
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#direction"
                      target="_blank"
                      className="text-decoration-none custom-heading-color-2"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                {/* <!-- social-share-icons --> */}
              </div>
            </div>
            {/* <!-- col-4 --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionTwo;

