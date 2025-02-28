import { AuroraBackground } from "@/app/components/aurora-background";
import { motion } from "framer-motion";

export function Backdrop(){

    return(
<AuroraBackground>
  <div className="z-10">


      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
        
      >
        
        <div className="text-7xl font-league md:text-8xl font-bold text-white text-center">
          VAYUDOOT '25
        </div>
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          Elevate the game, Rule the Air !!
        </div>
        <div className="flex space-x-6" >
        <button className="bg-white  dark:bg-white rounded-full w-fit text-black dark:text-black px-4 py-2">
          Register now
        </button>
        <button className="bg-white bg-opacity-20 backdrop-blur-md  dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Rulebook
        </button>
        </div>
      </motion.div>
      </div>
    </AuroraBackground>
    );
}