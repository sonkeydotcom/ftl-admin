interface CustomInoutProps {
  title: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
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
        id={title}
        placeholder={placeholder}
        value={value}
        type={title === "password" ? "password" : "text"}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default CustomeInput;
