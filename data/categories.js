// Get categories icons from "https://react-icons.github.io/react-icons"

import { FaBitcoin, FaHandHoldingHeart } from "react-icons/fa";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { RiBankFill } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";
import { GiAmpleDress } from "react-icons/gi";
import { IoIosCloudDone } from "react-icons/io";

export const categories = [
  {
    name: "Cryptomonnaie",
    logo: <FaBitcoin />,
    slug: "cryptomonnaie",
  },
  {
    name: "CashBack",
    logo: <HiOutlineBanknotes />,
    slug: "cashBack",
  },
  {
    name: "Banques",
    logo: <RiBankFill />,
    slug: "banques",
  },
  {
    name: "E-commerce",
    logo: <HiShoppingCart />,
    slug: "e-commerce",
  },
  {
    name: "Mode, Vêtements",
    logo: <GiAmpleDress />,
    slug: "mode-vetements",
  },
  {
    name: "Beauté, Santé",
    logo: <FaHandHoldingHeart />,
    slug: "beaute-sante",
  },
  {
    name: "Hébergement, cloud",
    logo: <IoIosCloudDone />,
    slug: "hebergement-cloud",
  },
];
