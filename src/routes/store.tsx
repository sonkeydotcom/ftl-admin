import { LuImagePlus } from "react-icons/lu";
import Button from "../components/ui/custom-button";

const Store = () => {
  // Function to handle file selection
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log("File uploaded:", event.target.files[0]);
    }
  };

  const summary = [
    { title: "Total Products", value: 120 },
    { title: "Total Orders", value: 65 },
    { title: "Total Sales", value: "$15,230" },
  ];

  return (
    <div className="bg-gray-200 flex flex-col h-full w-full gap-6 p-5">
      {/* Summary Cards Section */}
      <div className="flex flex-col w-full md:flex-row gap-6">
        {summary.map((item, index) => (
          <div
            key={index}
            className="bg-white h-24 px-6 py-4 rounded-md shadow-md flex flex-col justify-between md:w-1/3"
          >
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h4 className="text-lg font-bold text-gray-800">{item.value}</h4>
          </div>
        ))}
      </div>

      {/* Banner Upload Section */}
      <div className="bg-white px-6 py-6 rounded-md shadow-md w-full md:w-1/3 self-end">
        <h3 className="text-lg font-semibold mb-4">Upload Banner Image</h3>

        {/* Upload Container */}
        <div className="relative rounded border border-dashed border-gray-400 h-24 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
          <LuImagePlus className="text-gray-500 text-xl mb-2 md:text-2xl" />
          <p className="text-gray-500 text-sm md:text-base">
            Click to upload image
          </p>

          {/* Hidden File Input */}
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileUpload}
          />
        </div>

        {/* Upload Button */}
        <Button
          onClick={() => console.log("Upload triggered")}
          title="Upload"
        />
      </div>
    </div>
  );
};

export default Store;
