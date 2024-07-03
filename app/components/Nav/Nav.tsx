import Image from "next/image";
import { NAV_ITEMS } from "./constant";
import logoPng from "@/public/logo.png";
import { NavItem } from "./NavItems";

export function Nav() {
  return (
    <div>
      {/* logo */}
      <Image src={logoPng} alt="Logo" className="w-40" />
      <nav className="space-y-4 mt-4">
        {NAV_ITEMS.map((navItem) => (
          //   <li key={navItem.alt}>{navItem.category}</li>
          <NavItem key={navItem.alt} {...navItem} />
        ))}
      </nav>
    </div>
  );
}
