'use client'
interface CardProps {
  image: string;
  heading: string;
  date: string;
  place: string;
  link: string;
}
import Image from 'next/image';
import Link from 'next/link';

export default function Cards( {image, heading, date, place , link }: CardProps) {
  return (
    <div  className="bg-white p-4 shadow-md rounded-md relative">
        <div className="relative">
          <Image width={150} height={100} src={`/${image}`} className="w-auto h-32 object-contain rounded-md border-2 border-orange-400" alt="Event" />
          
          {/* Circle date */}
          <div className="text-center bg-orange-400 text-gray-50 w-18 h-18 rounded-full flex items-center justify-center absolute left-4 -bottom-8 shadow-md z-10 text-sm font-semibold">
            {date}
          </div>
        </div>

        <h3 className="font-bold text-md text-gray-800 mt-12 text-center">
          {heading}
        </h3>

        <div className="text-center mt-4">
          <h6 className="py-2 text-gray-600 text-sm">{place}</h6>
          <Link href={link} className="border border-orange-400 text-orange-400 px-4 py-2 text-sm hover:bg-orange-50 transition">
            Visit Site
          </Link>
        </div>
      </div>
  );
}
