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
            md:max-h-[450px] xl:overflow-y-scroll custom-scrollbar"
            >
              {data.education.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between w-[320px] xl:w-[350px] h-[200px] 
                  py-8 px-10 rounded-lg bg-secondary-300/60"
                >
                  <p className="text-accent">{item.date}</p>
                  <h4 className="text-xl font-medium">{item.title}</h4>
                  <p
                    className="text-primary-500 list-item mx-5 list 
                  marker:text-accent"
                  >
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="flex flex-col gap-10 max-w-[350px] md:max-w-none">
            <h3 className="text-3xl font-bold">{data.skills.title}</h3>
            <p className="text-primary-500">{data.skills.description}</p>
            <div>
              <ul
                className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[350px] 
              md:max-w-none md:max-h-[600px] xl:overflow-y-scroll 
              custom-scrollbar overflow-x-hidden"
              >
                {data.skills.skillList.map((skill, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center  
                    text-primary-500 group hover:text-accent cursor-pointer mr-1"
                  >
                    <p className="text-sm invisible group-hover:visible">
                      {skill.title}
                    </p>
                    <div
                      className="bg-secondary-300/60 h-[140px] w-[140px] 
                      rounded-lg flex items-center justify-center"
                    >
                      <skill.icon
                        className="w-14 h-14 text-primary-100 
                      group-hover:text-accent"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div
            className="flex flex-col gap-10 max-w-[350px] xl:max-w-none 
        overflow-x-hidden"
          >
            <h3 className="text-3xl font-bold">{data.about.title}</h3>
            <p className="text-primary-500">{data.about.description}</p>
            <div className="w-full">
              <ul
                className="flex flex-col xl:grid xl:grid-cols-2 xl:w-[800px] 
              gap-5"
              >
                {data.about.info.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-5 text-primary-500"
                  >
                    <p className="text-primary-500 ">{item.fieldName}</p>
                    <p className="text-primary-100 font-semibold text-lg">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabContent;
