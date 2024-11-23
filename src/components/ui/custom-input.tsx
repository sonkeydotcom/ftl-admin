interface CustomInoutProps {
  title: string;
  placeholder: string;
  value?: string;
  onChange: () => void;
  name?: string; // Added a new property named 'name' to the CustomInput component
}

const CustomeInput: React.FC<CustomInoutProps> = ({
  title,
  placeholder,
  value = "",
  onChange,
  name,
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
        name={name}
        placeholder={placeholder}
        value={value}
        type={title === "password" ? "password" : "text"}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomeInput;
