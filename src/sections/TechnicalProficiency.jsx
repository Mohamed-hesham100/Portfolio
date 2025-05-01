import { useState } from "react";
import { Skills_tabs } from "../utils/data";
import { Skills } from "../utils/data";
import Tabs from "../components/Tabs";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(Skills);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabValueChange = (value) => {
    if (value === "all") {
      setTabData(Skills);
      setActiveTab("all");
      return;
    }
    const updatedList = Skills.filter((skill) => skill.type === value);
    setTabData(updatedList);

    setActiveTab(value);
  };

  return (
    <section id="skills" className="bg-orange-50/40 py-20 mt-20">
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-[60vw] mx-auto text-center">
          <h4 className="section-title">Technical Proficiency</h4>
          <p className="text-sm mt-4 leading-6 text-gray-700">
            A passionate Full Stack Developer with solid experience in building
            scalable web applications from front to back.
          </p>
          <p className="text-sm mt-2 leading-6 text-gray-700">
            Proficient in both frontend and backend technologies, with a strong
            focus on performance, clean code, and user experience.
          </p>
        </div>

        <div className="mt-5">
          <Tabs
            tabList={Skills_tabs}
            activeTab={activeTab}
            onChange={handleTabValueChange}
          />
          <div className="px-5 sm:px-20 md:px-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[340px]">
            {tabData.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <SkillCard
                    icon={
                      <IconComponent className="!w-6 !h-6 !text-amber-600" />
                    }
                    skillName={skill.skill}
                    description={skill.description}
                    progress={skill.progress}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
