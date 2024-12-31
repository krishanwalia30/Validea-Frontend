import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="md:flex md:justify-evenly content-center mt-8 py-4 text-sm text-gray-600">
      <div className="flex flex-col gap-2 flex-wrap content-center ">
        <Image
          src="/Logo.png"
          alt="Validea Logo"
          width={120}
          height={40}
          //   priority
        />
        <div className="flex flex-col text-left content-center flex-wrap">
          <p className="font-bold text-base">Validate your ideas,</p>
          <p className="font-bold text-base">Uncover Hidden Opportunities</p>
          <p className="text-s">Copyright © 2024 - All rights reserved</p>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-8 md:gap-32 mt-6">
        <div className="flex flex-col ">
          <div>
            <h4 className="font-semibold !text-left">LINKS</h4>
          </div>
          <div className="flex-col gap-4">
            <Link href={"/"} className="hover:underline hover:cursor-pointer">
              <p>Home</p>
            </Link>
            <Link
              href={"/#features"}
              className="hover:underline hover:cursor-pointer"
            >
              <p>Features</p>
            </Link>
            <Link href={"#howitworks"} className="hover:underline hover:cursor-pointer">
              <p>How it works</p>
            </Link>
            <Link
              href={"/validate"}
              className="hover:underline hover:cursor-pointer"
            >
              <p>Validate!</p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col ">
          <div>
            <h4 className="font-semibold">CONTACT US</h4>
          </div>
          <Link
            href={"mailto:thedohub@gmail.com"}
            className="hover:underline hover:cursor-pointer"
          >
            <p>Email</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
