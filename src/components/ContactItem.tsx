type Props = {
  name: string;
  icon: React.ReactNode;
  description: string;
};

const ContactItem = ({ name, icon, description }: Props) => {
  return (
    <div className="flex gap-6 items-center">
      <div className="bg-secondary-300/60 h-16 w-16 rounded-md flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-primary-500">{name}</span>
        <p className="text-primary-100 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ContactItem;
