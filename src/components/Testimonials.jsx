import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react"; // star icon
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Chiraag BG",
    rating: 5,
    text: "Felt really good after joining gym. Trainers are very professional and approachable. Lost 12 KG in 3 months and now building muscles with confidence.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Shivansh Sajwan",
    rating: 4,
    text: "Best machines, friendly vibe, and huge cardio + calisthenics space. Perfect place for someone who loves free body exercises.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sonia Negi",
    rating: 4,
    text: "Wide space, motivating atmosphere and humble owner. Every workout feels positive and effective. Love this gym 💪",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Vedic Panchori",
    rating: 5,
    text: "Mutants helped me fix nutrition habits & challenge my limits. Trainers push you just enough to grow. Feeling healthier day by day.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="py-20 overflow-x-hidden bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-zinc-950"
    >
      <div className="px-6 mx-auto text-center max-w-7xl">
        {/* header */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-yellow-500 md:text-4xl">
            What Our Members Say
          </h2>
          <p className="w-20 h-1 mx-auto mb-6 bg-yellow-500 rounded-full"></p>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Our members share their journey — from first workouts to fitness milestones. Real stories of grit, real transformations of strength. Hear from the warriors who pushed their limits at Mutants Gym.
          </p>
        </div>

        {/* cards */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="px-4">
              <div className="relative h-full p-6 transition-all duration-500 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl dark:bg-zinc-900/80 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]">
                {/* avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="object-cover border-2 border-yellow-500 rounded-full w-14 h-14"
                  />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {data.name}
                    </h3>
                    <div className="flex">
                      {[...Array(data.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* text */}
                <p className="text-sm leading-relaxed text-left text-gray-600 dark:text-gray-300">
                  “{data.text}”
                </p>

                {/* quote bg mark */}
                <span className="absolute font-serif select-none right-4 bottom-2 text-7xl text-yellow-500/20">
                  ❝
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
