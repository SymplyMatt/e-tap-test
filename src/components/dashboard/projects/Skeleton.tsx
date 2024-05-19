import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="w-full px-40 flex justify-between items-center">
        <div className="flex gap-20 items-center h-full">
            <div className="h-[180px] w-[180px] bg-gray-200 animate-pulse rounded-md"></div>
            <div className="flex flex-col h-full justify-between">
                <div className="w-[70px] h-[20px] bg-gray-200 animate-pulse rounded-md"></div>
                <div className="w-[170px] h-[25px] bg-gray-200 animate-pulse rounded-md"></div>
                <div className="w-[300px] h-[25px] bg-gray-200 animate-pulse rounded-md"></div>
                <div className="w-[250px] h-[25px] bg-gray-200 animate-pulse rounded-md"></div>
                <div className="w-[200px] h-[15px] bg-gray-200 animate-pulse rounded-md"></div>
            </div>

        </div>
        <div className="w-[250px] h-[45px] bg-gray-200 animate-pulse rounded-md"></div>
    </div>
  );
};

export default Skeleton;
