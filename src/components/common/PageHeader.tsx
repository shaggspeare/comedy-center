import Link from 'next/link';
import React from 'react';

interface PageHeaderProps {
  currentPage: string;
  banner?: string;
  isBlogDetails?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  currentPage,
  banner,
  isBlogDetails,
}) => {
  return (
    <section className={`banner-section ${banner} position-relative parallax`}>
      <div className="container">
        <div className="banner-wrapper d-flex gap-20 gap-lg-40 justify-content-center align-items-lg-center flex-column">
          <h2 className="banner-heading display-3 fw-extra-bold custom-jakarta mb-0">
            {currentPage}
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="blog-breadcrumb breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/home-1">Home</Link>
              </li>
              {isBlogDetails ? (
                <>
                  <li className={`breadcrumb-item active`}>
                    <Link href="/blog" aria-current="page">
                      {currentPage}
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Unveils Star-Studded Lineup
                  </li>
                </>
              ) : (
                <li className={`breadcrumb-item active`}>{currentPage}</li>
              )}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
