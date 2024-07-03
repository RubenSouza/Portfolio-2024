type Props = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectInput = ({ name, value, onChange }: Props) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={true}
      className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm 
    focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none 
    dark:bg-neutral-900 dark:border-neutral-700 dark:text-primary-500 
    dark:placeholder-neutral-500 dark:focus:ring-accent"
    >
      <option value="">Selecione um serviço</option>
      <option value="Web development">Web development</option>
      <option value="Mobile development">Mobile development</option>
      <option value="UX/UI">UX/UI</option>
    </select>
  );
};

export default SelectInput;
