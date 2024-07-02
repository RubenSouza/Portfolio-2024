type Props = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, name, placeholder, value, onChange }: Props) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={true}
      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-accent 
      focus:ring-accent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 
      dark:border-neutral-700 dark:text-primary-100 dark:placeholder-primary-500 
      dark:focus:ring-accent "
      placeholder={placeholder}
    />
  );
};

export default Input;
