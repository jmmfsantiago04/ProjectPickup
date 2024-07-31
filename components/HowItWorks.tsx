import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const data = [
  {
    title: "Get your <br/> Korean address",
    description:
      "Click the MY menu after you sign up. You can find your address.",
    image: "/location.png",
  },
  {
    title: "Shop <br/> in Korea",
    description:
      "You can order product by yourself with your free address. Or ask us to help buying instead.",
    image: "/cart.png",
  },
  {
    title: "Pick up <br/> your Package",
    description:
      "Once your items arrive, we are ready to deliver your package. You can ask us Free consolidation and packing or other optional services.",
    image: "/package.png",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center max-w-7xl w-full mx-auto">
      <h2 className="text-center text-[4rem] font-bold mb-16 text-black">
        How It Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-20">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-8">
            <img
              src={item.image}
              alt={item.title}
              height={80}
              width={80}
              className={cn(
                index === 0 && "w-[3.85rem] h-20",
                index === 1 && "size-20",
                index === 2 && "w-[4.469rem] h-20"
              )}
            />
            <dl className="flex flex-col gap-4 sm:gap-8 text-lg sm:text-2xl text-center">
              <dt className="font-bold bg-black text-white flex items-center justify-center rounded-[2.25rem] h-[5rem] sm:h-[7.25rem] px-4">
                <span dangerouslySetInnerHTML={{ __html: item.title }} />
              </dt>
              <dd className="">{item.description}</dd>
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
