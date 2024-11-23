interface ButtonProp {
  title: string;
}

const Button: React.FC<ButtonProp> = ({ title }) => {
  return (
    <>
      <button className="bg-black   hover:bg-gray-700 hover:text-white text-white font-medium mt-4 w-full px-4 py-2 rounded-md">
        {title}
      </button>
    </>
  );
};

export default Button;
