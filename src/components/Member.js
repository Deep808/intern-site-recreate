import React from 'react';
import MemberCard from './MemberCard';

const Member = () => {
  const members = [
    {
      id: 101,
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      name: 'Team Members',
      numbers: '105+',
    },
    {
      id: 102,
      icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5',
      name: 'Completed Works',
      numbers: '458+',
    },
    {
      id: 103,
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      name: "Client's Feedback",
      numbers: '215+',
    },
    {
      id: 104,
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      name: 'Winning Awards',
      numbers: '105+',
    },
  ];

  return (
    <div className="bg-blue-800 text-white text-center items-center mx-auto p-12 mb-12 md:grid md:grid-cols-2 lg:flex lg:justify-evenly">
      <>
        {members.map((member) => (
          <MemberCard
            key={member.id}
            icon={member.icon}
            numbers={member.numbers}
            name={member.name}
          />
        ))}
      </>
    </div>
  );
};

export default Member;
