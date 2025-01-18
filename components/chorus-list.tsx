'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Chorus } from '@/types/chorus';

import { X } from 'lucide-react';
import SongNotFound from './song-not-found';
import Link from 'next/link';

type Props = {
  choruses: Chorus[];
};

const ChorusList = ({ choruses }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter choruses based on the search query
  const filteredChoruses = choruses.filter((chorus: Chorus) =>
    chorus.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group choruses by the first letter of their title
  const groupedChoruses = filteredChoruses.reduce(
    (groups: Record<string, Chorus[]>, Chorus: Chorus) => {
      const firstLetter = Chorus.title.charAt(0).toUpperCase();
      groups[firstLetter] = groups[firstLetter] || [];
      groups[firstLetter].push(Chorus);
      return groups;
    },
    {}
  );

  return (
    <div>
      {/* Header */}
      <div className='mb-4 flex flex-row items-center gap-2 justify-between'>
        {/* Search Input */}
        <div className='relative w-full'>
          <Input
            type='text'
            placeholder='Search songs...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300'
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className='absolute top-2.5 right-3 text-gray-500 hover:text-gray-700'
            >
              <X className='w-5 h-5' />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className='grid gap-2'>
        {filteredChoruses.length > 0 ? (
          <div>
            {Object.keys(groupedChoruses)
              .sort()
              .map((letter) => (
                <div key={letter}>
                  <h2 className='font-semibold'>{letter}</h2>
                  <ul className='ml-4 list-disc'>
                    {groupedChoruses[letter].map((chorus) => (
                      <li key={chorus.id} className='text-gray-700'>
                        <Link
                          href={`/chorus/${chorus.id}`}
                          className='hover:underline no-underline'
                        >
                          {chorus.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ) : (
          <SongNotFound text='No songs found.' />
        )}
      </div>
    </div>
  );
};

export default ChorusList;
