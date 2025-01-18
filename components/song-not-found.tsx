import React from 'react';

type Props = {
  text: string;
};

const SongNotFound = ({ text }: Props) => {
  return <h3 className='text-center text-lg text-gray-800'>{text}</h3>;
};
export default SongNotFound;
