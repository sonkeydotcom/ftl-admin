interface CustomInoutProps {
  title: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomeInput: React.FC<CustomInoutProps> = ({
  title,
  placeholder,
  value = "",
  onChange,
}) => {
  return (
    <div className="max-w-lg ">
      <label
        className="text-[#757575]  mb-2 text-sm capitalize"
        htmlFor={title}
      >
        {title}
      </label>
      <br />

      <input
        className="w-full text-sm font-light px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        type="text"
        id="title"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e)}
      />
    </div>
  );
};

export default CustomeInput;
