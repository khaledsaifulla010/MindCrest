import Image from "next/image";

const Navbar = () => {
  return (
    <div className="border-2 border-red-600 w-full p-8">
      <div>
        <div>
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            alt="MindCrest"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
