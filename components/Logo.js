import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          src="/assets/icons/logo.svg"
          alt="Protocol"
          className="w-auto h-6"
          width={100}
          height={24}
        />
      </Link>
    </div>
  );
}
