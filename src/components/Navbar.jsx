import Image from "next/image";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  let user = null;

  try {
    const { getUser } = getKindeServerSession();
    user = await getUser();
  } catch (error) {
    console.error("Error fetching user:", error.message);
  }

  return (
    <div className="bg-gray-200 w-full">
      <div className="flex items-center justify-between px-10 py-6">
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={"/logo.png"} width={50} height={50} alt="MindCrest" />
          <h1 className="font-bold text-4xl">MindCrest</h1>
        </Link>
        <div>
          <ul className="flex items-center gap-10 font-semibold text-base">
            <Link href={"/"}>Home</Link>

            {user ? (
              <>
                <Link href={"/profile"}>Profile</Link>
                <LogoutLink className="border bg-red-100 text-red-600 border-red-200 px-2 py-1 rounded-lg">
                  Log out
                </LogoutLink>
              </>
            ) : (
              <LoginLink className="border bg-green-100 text-green-600 border-green-200 px-2 py-1 rounded-lg">
                Login
              </LoginLink>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
