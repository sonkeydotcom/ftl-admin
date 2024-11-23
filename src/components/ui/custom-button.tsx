interface ButtonProp {
  title: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProp> = ({ title, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-black   hover:bg-gray-700 hover:text-white text-white font-medium mt-4 w-full px-4 py-2 rounded-md"
      >
        {title}
      </button>
    </>
  );
};

export default Button;
