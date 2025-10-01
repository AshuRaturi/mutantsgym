import React from "react";

const OfferStrip = () => {
  return (
    <div className="relative py-2 overflow-hidden font-semibold text-black bg-yellow-500">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        <span className="mx-8">🔥 Get 20% OFF on First Month Membership!</span>
        <span className="mx-8">
          💪 Join Now & Get Free Personal Training Session!
        </span>
        <span className="mx-8">🏋️‍♂️ Annual Membership at Just ₹9,500!</span>
        <span className="mx-8">🔥 Get 20% OFF on First Month Membership!</span>
        <span className="mx-8">
          💪 Join Now & Get Free Personal Training Session!
        </span>
        <span className="mx-8">🏋️‍♂️ Annual Membership at Just ₹9,500!</span>
      </div>
    </div>
  );
};

export default OfferStrip;
