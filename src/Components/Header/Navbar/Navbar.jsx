import logo from "../../../assets/logo.svg";
import moon from "../../../assets/icons/moon.svg";
import sun from "../../../assets/icons/sun.svg";
import ring from "../../../assets/ring.svg";
import cart from "../../../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import Cart from "../../Cart/Cart";
import { MovieContext, ThemeContext } from "../../../../public/Scripts/context";


function Navbar() {
	const [showCart, setShowCart] = useState(false);
	const {state} = useContext(MovieContext);
	const {darkMode, setDarkMode} = useContext(ThemeContext);


 function handleShowCart(){
	setShowCart(true)
 }

  return (
    <>
        <section>
			{
				showCart && <Cart onClose={()=>setShowCart(false)}/>
			}
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src={logo} width="139" height="26" alt="" />
			</a>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={ring} width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a onClick={()=>setDarkMode(darkMode =>!darkMode)} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={darkMode? sun : moon} width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a onClick={()=>handleShowCart()} className={`bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block`} href="#">
						<img src={cart} width="24" height="24" alt=""/>
						{state.cartData.length > 0 && (<span className="w-[20px] h-[20px] grid place-items-center text-xs text-center rounded-full bg-primary/85 text-white absolute -top-2 -right-2">{state.cartData.length}</span>)}
					</a>
				</li>
			</ul>
		</nav>
	</section>
    </>
  )
}

export default Navbar