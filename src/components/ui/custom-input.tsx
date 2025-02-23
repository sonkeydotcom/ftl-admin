interface CustomInoutProps {
  title: string;
  placeholder: string;
  type?: string; // Added a new property named 'type' to the CustomInput component to allow custom input types
  value?: string | number; // Added a new property named 'value' to the CustomInput component to allow custom input values
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name?: string; // Added a new property named 'name' to the CustomInput component
  required?: boolean; // Added a new property named'required' to the CustomInput component to allow input fields to be required
}

const CustomeInput: React.FC<CustomInoutProps> = ({
  title,
  placeholder,
  value,
  onChange,
  name,
  type,
  required = false, // Added a new property named'required' to the CustomInput component to allow input fields to be required
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
        type={title === "password" ? "password" : type ? type : "text"}
        onChange={onChange}
        required={required} // Added a new property to enforce required input fields
      />
    </div>
  );
};

export default CustomeInput;
