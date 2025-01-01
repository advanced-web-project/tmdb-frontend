interface PersonalInfo {
  stageName: string;
  knownFor: string;
  credits: number;
  gender: string;
  birthday: string;
  placeOfBirth: string;
  alsoKnownAs: string[];
}

interface ProfileInfoProps {
  personalInfo: PersonalInfo;
}

export function ProfileInfo({ personalInfo }: ProfileInfoProps) {
  return (
    <div className="">
      <img
        src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/i6kFnYMpez6MBE2SjOpNd9bSlxF.jpg"
        className="w-full h-auto object-cover rounded-[10px] shadow-lg"
      />
      <h2 className="text-xl font-semibold mb-2 mt-6">Personal Info</h2>
      <dl className="grid gap-4">
        {Object.entries(personalInfo).map(([key, value]) => (
          <div key={key}>
            <dt className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
            <dd className="text-gray-600">{Array.isArray(value) ? value.join(', ') : value.toString()}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
