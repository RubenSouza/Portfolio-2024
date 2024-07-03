import { ResumeData } from "../../types";

type TabOptionsProps = {
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

const TabOptions = ({ activeTab, setActiveTab }: TabOptionsProps) => {
  return (
    <div className="">
      <nav className="flex flex-col space-y-2 gap-3">
        <button
          type="button"
          className={`rounded-md py-3 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-base whitespace-nowrap text-primary-100 focus:outline-none focus:text-secondary-500 disabled:opacity-50 disabled:pointer-events-none justify-center font-bold ${
            activeTab === 1
              ? "text-secondary-500 bg-accent"
              : "bg-secondary-300/60"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Formações
        </button>
        <button
          type="button"
          className={`rounded-md py-3 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-base whitespace-nowrap text-primary-100 focus:outline-none focus:text-secondary-500 disabled:opacity-50 disabled:pointer-events-none justify-center font-bold ${
            activeTab === 2
              ? "text-secondary-500 bg-accent"
              : "bg-secondary-300/60"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Habilidades
        </button>
        <button
          type="button"
          className={`rounded-md py-3 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-base whitespace-nowrap text-primary-100 focus:outline-none focus:text-secondary-500 disabled:opacity-50 disabled:pointer-events-none justify-center font-bold ${
            activeTab === 3
              ? "text-secondary-500 bg-accent"
              : "bg-secondary-300/60"
          }`}
          onClick={() => setActiveTab(3)}
        >
          Sobre mim
        </button>
      </nav>
    </div>
  );
};

export default TabOptions;
