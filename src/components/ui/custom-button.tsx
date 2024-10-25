interface ButtonProp {
  title: string;
}

const Button: React.FC<ButtonProp> = ({ title }) => {
  return (
    <>
      <button className="bg-[#FFC727] w-[200px]  hover:bg-gray-700 hover:text-white text-black font-medium py-3 px-4 rounded-md">
        {title}
      </button>
    </>
  );
};

export default Button;
