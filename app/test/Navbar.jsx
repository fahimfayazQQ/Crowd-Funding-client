"use client";
import { motion, useCycle } from "framer-motion";
import Navigation from "./Navigation";
import MenuToggler from "./MenuToggler";

const sidebarVariants = {
  open: {
    clipPath: `circle(1000px at 40px 40px)`,
    transition: {
        duration: 0.4,
    },
},
closed: {
    clipPath: `circle(30px at 40px 40px)`,
    transition: {
      duration: 0.4,
    },
  },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useCycle(false, true)
  return (
      <div className="absolute top-0 left-0 bottom-0 w-[300px]">{/* nav */}
        <motion.div className="bg-white absolute top-0 left-0 bottom-0 w-[300px]" variants={sidebarVariants} initial={false} animate={isOpen?"open":"closed"}>{/* background */}
          <MenuToggler toggle={()=>setIsOpen()}/>
          <Navigation />
        </motion.div>
      </div>
  );
};

export default Navbar;
