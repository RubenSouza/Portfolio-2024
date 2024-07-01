export type ResumeData = {
  about: {
    title: string;
    description: string;
    info: {
      fieldName: string;
      description: string;
    }[];
  };
  education: {
    icon: string;
    title: string;
    description: string;
    items: {
      title: string;
      subtitle: string;
      date: string;
      description: string;
    }[];
  };
  skills: {
    title: string;
    description: string;
    skillList: {
      title: string;
      icon: any;
    }[];
  };
};
