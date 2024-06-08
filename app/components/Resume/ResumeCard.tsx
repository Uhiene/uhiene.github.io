import React, { ReactNode } from 'react';

interface ResumeCardProps {
  dateRange: string;
  jobTitle: string;
  company: string;
  location: string;
  children: React.ReactNode;
  className?: string;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ dateRange, jobTitle, company, location, children, className = '' }) => {
  return (
    <div className={`shadow-slate-300 shadow-lg border border-slate-200 bg-white p-12 rounded-xl w-full flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-8 ${className}`}>
      <div className='bg-slate-50 p-6 rounded-xl mb-4 w-full lg:w-52 h-40'>
        <h2 className='font-bold text-md text-pink-500 '>{dateRange}</h2>
        <p className='font-semibold my-2 text-sm'>{jobTitle}</p>
        <p className='text-slate-600  text-sm'>{company}</p>
        <p className='text-slate-600  text-sm'>{location}</p>
      </div>
      <div className='flex-1 lg:p-2 text-slate-600 text-md w-full lg:w-fit'>
      {children}
      </div>
    </div>
  );
};

export default ResumeCard;
