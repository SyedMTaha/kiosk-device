import React from 'react';

const Subscription = () => {
  return (
    <div className="py-16 px-6 bg-[#F9FAFB]">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-[#1A1A1A] mb-12">
        Subscription Plans
      </h1>

      {/* Subscription Plans */}
      <div className="flex justify-center gap-8 flex-wrap">
        {/* Plan 1 */}
        <div className="w-full sm:w-[300px] border border-[#143761] rounded-lg shadow-md p-6 bg-white text-center">
          <h2 className="text-xl font-semibold text-[#143761]">Basic</h2>
          <h2 className="text-xl font-semibold text-[#143761] mb-4">1 month</h2>
          <p className="text-[#4A4A4A] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.
          </p>
          <p className="text-2xl font-bold text-[#143761] mb-6">$10/month</p>
          <button className="bg-[#143761] text-white py-2 px-6 rounded-md hover:bg-[#0D2B3A]">
            Select this Plan
          </button>
        </div>

        {/* Plan 2 */}
        <div className="w-full sm:w-[300px] border border-[#143761] rounded-lg shadow-md p-6 bg-white text-center">
        <h2 className="text-xl font-semibold text-[#143761]">Standard</h2>
        <h2 className="text-xl font-semibold text-[#143761] mb-4">6 month</h2>
          <p className="text-[#4A4A4A] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.
          </p>
          <p className="text-2xl font-bold text-[#143761] mb-6">$25/month</p>
          <button className="bg-[#143761] text-white py-2 px-6 rounded-md hover:bg-[#0D2B3A]">
            Select this Plan
          </button>
        </div>

        {/* Plan 3 */}
        <div className="w-full sm:w-[300px] border border-[#143761] rounded-lg shadow-md p-6 bg-white text-center">
        <h2 className="text-xl font-semibold text-[#143761]">Premium</h2>
        <h2 className="text-xl font-semibold text-[#143761] mb-4">12 month</h2>
          <p className="text-[#4A4A4A] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.
          </p>
          <p className="text-2xl font-bold text-[#143761] mb-6">$50/month</p>
          <button className="bg-[#143761] text-white py-2 px-6 rounded-md hover:bg-[#0D2B3A]">
            Select this Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
