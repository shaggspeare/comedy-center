import React from 'react'
import Link from 'next/link'
import TopUpArrow from '../icons/TopUpArrow'
import Image from 'next/image'
import ClockIcon from '../icons/ClockIcon'
import Calendar from '../icons/Calendar'
import MapPin from '../icons/MapPin'

const EventCard = ({img, time, date, location, title, desc, link, speakers }) => {
    return (
        <div className="blog-content mb-30 mb-md-50">
            <div className="blog-content-2 custom-inner-bg">
                <div className='row justify-content-between g-5'>
                    <div className='col-lg-3'>
                        <div className="blog-image h-100">
                            <Image src={img} className="img-fluid object-fit-cover h-100" alt='event img'/>
                        </div>
                    </div>
                    <div className='col-lg-9'>
                        <div className="d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-4 pb-15">
                            <p className="mb-0"><span className="time me-10"><ClockIcon/></span>{time}</p>
                            <p className="mb-0"><span className="calendar me-10"><Calendar/></span>{date}</p>
                            <p className="mb-0"><span className="location me-10"><MapPin/></span>{location}</p>
                        </div>

                        <div className="blog-left-content">
                            <h2 className="blog-link fs-4 fw-bold mb-15">
                                <Link className="text-decoration-none" href={`/${link}`}>{title}</Link>
                            </h2>

                            <p className="mb-0">{desc}</p>
                        </div>

                        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 gap-md-1 mt-3">
                            <ul className="invited-guests list-unstyled d-flex align-items-center gap-2 mb-0">
                                {
                                    speakers.map(({id, speaker, name }) =>
                                            <li key={id} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={name}>
                                                <Image src={speaker} alt='event img'/>
                                            </li>
                                        )
                                }
                            </ul>

                            <div>
                                <Link href="/event-single" className="download-link d-flex align-items-center gap-30" aria-label="buttons">
                                    View Details<TopUpArrow height={"32"} width={"32"} className={"ticket-arrow"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard