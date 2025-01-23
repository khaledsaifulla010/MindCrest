import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-gray-200 w-full">
      <div className=" flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-1">
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            alt="MindCrest"
          ></Image>
          <h1 className="font-bold text-4xl">MindCrest</h1>
        </div>
        <div>
          <ul className="flex items-center gap-10 font-semibold text-base">
            <Link href={"/"}>Home</Link>
            <Link href={"/profile"}>Profile</Link>
            <Link href={"/login"}>Login</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
