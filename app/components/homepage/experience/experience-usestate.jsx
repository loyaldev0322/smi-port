"use client";

// @flow strict
import { experiences } from "@/utils/data/experience";
import { useState } from "react";
import { experiencelist } from "@/utils/data/experiencelist";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";
import './experience.css';

function Experience_usestate() {
  const [Id, setId] = useState(1);
  const handleId = (id) => {
    setId(id);
    console.log("experience", experiencelist[id - 1].data);
  }
  return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
                <GlowCard>
                <div className="p-3 relative">
                    <div className="flex justify-center">
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                        <div>
                            {
                                experiencelist[Id - 1].data.map((exper, i) => (
                                    <p key={i} className="text-sm sm:text-base listP listItem">
                                        {exper}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                </GlowCard>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative" onClick={() => handleId(experience.id)}>
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
  );
};

export default Experience_usestate;