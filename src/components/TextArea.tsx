type Props = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ name, value, onChange }: Props) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={true}
      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm 
      focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none 
      dark:bg-neutral-900 dark:border-neutral-700 dark:text-primary-100
      dark:placeholder-primary-500 dark:focus:ring-accent min-h-[180px]"
      rows={3}
      placeholder="Escreva sua mensagem aqui."
    />
  );
};

export default TextArea;
