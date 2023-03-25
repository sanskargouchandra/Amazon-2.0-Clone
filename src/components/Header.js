import Image from "next/image";
import {
         MenuIcon,
         SearchIcon,
         ShoppingCartIcon 
        } from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react";
import {useRouter} from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";


function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const item = useSelector(selectItems);


  return (
<header>
{/* Top Navigation */}
    <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex item-center flex-grow sm:flex-grow-0">
          <Image
          onClick={() => router.push("/")}
          src = "https://links.papareact.com/f90"
          width={150}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
          />
        </div>
        {/*Search  */}

      <div className="hidden sm:flex item-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
        <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" 
          type="text"/>
        <SearchIcon className="h-12 p-4" />

      </div>
{/*Right */}
<div  className=" text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
  <div onClick={() => (session ? signOut() : signIn())} className="cursor-pointer link">
    <p className="hover:underline">
    {session ? `Hello, ${session?.user?.name}` : "Sign In"}
    </p>
    <p className="font-extrabold md:text-sm">Account & Lists</p>
  </div>

  <div className="link">
    <p>Returns</p>
    <p className="font-extrabold md:text-sm">& Orders</p>
  </div>

  <div onClick={() => router.push("/checkout")} className="relative link flex items-center">
    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
      {item.length}
      </span>

    <ShoppingCartIcon className="h-10" />
    <p className="hidden md:inline font-extrabold md:text-sm mt-2">
      Basket
    </p>
  </div>

</div>
    </div>
{/*Bottom Navigation*/}
    <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
   <p className="link flex items-center font-bold">
    <MenuIcon className="h-6 mr-1"/>
      All
  </p>
  <p className="link">Prime Video</p>
  <p className="link">Amazon Business</p>
  <p className="link">Amazon miniTv</p>
  <p className="link">Best Sellers</p>
  <p className="link hidden lg:inline-flex">Customer Services</p>
  <p className="link hidden lg:inline-flex">Mobiles</p>
  <p className="link hidden lg:inline-flex">Electronics</p>
  <p className="link hidden lg:inline-flex">Amazon Pay</p>
  <p className="link hidden lg:inline-flex">Fashion</p>
  <p className="link hidden lg:inline-flex">New Relesed</p>
  <p className="link hidden lg:inline-flex">Home & Kitchens</p>
  <p className="link hidden lg:inline-flex">Laptops</p>
  
    </div>
</header>
  
  );
}

export default Header;
