import { useState } from 'react';
export function Biography() {
  const [showFullBio, setShowFullBio] = useState(false);
  const biography =
    'Jung Yun-ha (정윤하) is a South Korean actress. She was born on March 4, 1986 in Seoul, South Korea. She is known for her work in the film industry and has appeared in various films and television dramas. Jung Yun-ha made her acting debut in 2008 and has since starred in numerous films and television dramas. She has received critical acclaim for her performances and has won several awards for her work. Jung Yun-ha is considered one of the most talented and versatile actresses in South Korea.';
  return (
    <>
      <h1 className="text-3xl font-bold text-dark">Le Minh Hoang</h1>
      <h2 className="text-xl font-semibold mb-2 mt-7">Biography</h2>
      <p className="text-gray-700">{showFullBio ? biography : `${biography.slice(0, 200)}...`}</p>
      <button
        className="mt-2 text-blue-600 hover:underline focus:outline-none"
        onClick={() => setShowFullBio(!showFullBio)}
      >
        {showFullBio ? 'Show Less' : 'Read More'}
      </button>
    </>
  );
}
