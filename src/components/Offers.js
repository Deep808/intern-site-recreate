import React from 'react';
import OfferCard from './OfferCard';

const Offers = () => {
  const offer_data = [
    {
      id: 1,
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      offers: 'Mobile app development',
      more: 'We can provide you impactful and notable app designing services that will represent your...',
    },
    {
      id: 2,
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      offers: 'IOT development',
      more: 'Internet fueled gadgets have made strides over the working environment internationally...',
    },
    {
      id: 3,
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      offers: 'Web Development',
      more: 'An engaging and immaculately running website can serve different business targets. At Shine...',
    },
    {
      id: 4,
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      offers: 'AI Development',
      more: 'Profound information driven analysis is the distinction between a battling and a successful...',
    },
    {
      id: 5,
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      offers: 'E-commerce Development',
      more: 'Kick start your online business with our E-commerce solutions. E-commerce has brought...',
    },
    {
      id: 6,
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      offers: 'CRM development',
      more: 'We will help you making important client associations with the CRM development solutions...',
    },
  ];

  return (
    <div className="mt-6 max-w-sm mx-auto text-center  md:flex md:flex-col md:max-w-2xl lg:max-w-6xl">
      <h1 className="mt-2 text-2xl text-blue-800 font-bold md:text-3xl lg:text-5xl">
        We Offer Wide Array Of Services
      </h1>
      <p className="text-gray-600 mx-auto text-sm mt-4 mb-16 lg:w-6/12 ">
        We offer customised services in areas of mobile app development, web
        development, AR development, e-commerce development and much more. We
        are here for your business to grab attention on online platforms and to
        resolve all your technical issues.
      </p>
      <div className="w-11/12 mx-auto md:mx-4 md:grid md:grid-cols-2 md:gap-6 lg:mx-4 lg:grid lg:grid-cols-3 lg:gap-6">
        {offer_data.map((offer) => (
          <OfferCard
            key={offer.id}
            icon={offer.icon}
            offers={offer.offers}
            more={offer.more}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;
