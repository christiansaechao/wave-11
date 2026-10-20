import type { AboutMeProps } from "../types/contact";

export const AboutMe = ({ aboutMe, hobby, biography, address }: AboutMeProps) => {
  return (
    <div className="mx-auto my-4 w-100 flex flex-col gap-y-4 rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
      <p className = "text-xl font-bold text-red-900">{aboutMe}</p>
      <p className = "text-sm text-indigo-600">{hobby}</p>
      <p className = "text-sm text-indigo-600">{biography}</p>
      <p className = "text-sm text-indigo-600">{address}</p>
    </div>
  );
};