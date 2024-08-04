import { Project } from '@/types/appTypes';

type Props = {
  project: Project;
};

export const Card = ({ project }: Props) => {
  const { name, category } = project;
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-5">
      <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" />

      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
          {name}
        </h3>

        <div className="flex items-center justify-center px-3 py-2 bg-gray-200">
          <p
            className={`px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform ${
              category === 'LIBRARY'
                ? 'bg-[#d20f30]'
                : category === 'BACKEND'
                ? 'bg-[#26a13c]'
                : category === 'APPMOVIL'
                ? 'bg-[#36d5f5]'
                : 'bg-[#00bdb4]'
            } rounded`}
          >
            {category === 'APPMOVIL'
              ? 'Mobile App'
              : category === 'BACKEND'
              ? 'Server'
              : category}
          </p>
        </div>
      </div>
    </div>
  );
};
