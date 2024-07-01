import { ResumeData } from "../../types";

type TabContentProps = {
  activeTab: number;
  data: ResumeData;
};

const TabContent = ({ activeTab, data }: TabContentProps) => {
  return (
    <div className="flex flex-wrap">
      <div className="md:ms-3">
        {activeTab === 1 && (
          <div
            className="flex flex-col gap-10 max-w-[350px] md:max-w-none
          "
          >
            <h3 className="text-3xl font-bold">{data.education.title}</h3>
            <p className="text-primary-500">{data.education.description}</p>
            <div
              className="flex flex-col items-center md:grid grid-cols-1 xl:grid-cols-2 gap-10
            md:max-h-[450px] xl:overflow-y-scroll xl:custom-scrollbar"
            >
              {data.education.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between w-[320px] xl:w-[350px] h-[200px] 
                  py-8 px-10 rounded-lg bg-secondary-300/60"
                >
                  <p className="text-accent">{item.date}</p>
                  <h4 className="text-xl font-medium">{item.title}</h4>
                  <p className="text-primary-500 list-item mx-5 list marker:text-accent">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="flex flex-col gap-10">
            <h3 className="text-3xl font-bold">{data.skills.title}</h3>
            <p className="text-primary-500">{data.skills.description}</p>
            <div>
              <ul className="flex flex-wrap gap-5">
                {data.skills.skillList.map((skill, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center gap-2 text-primary-500"
                  >
                    <skill.icon size={50} />
                    <p className="text-lg font-semibold">{skill.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <p className="text-gray-500">
              This is the <em className="font-semibold text-gray-800">third</em>{" "}
              item`s tab body.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabContent;
50;
