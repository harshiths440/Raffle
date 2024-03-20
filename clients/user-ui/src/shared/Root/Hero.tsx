import styles from "@/src/utils/style";
import { Button } from "@nextui-org/button";

const Hero = () => {
  return (
    <div className="w-full h-[92vh] banner flex items-center z-10 absolute">
      <div className="backdrop_shaders w-full" />
      <div className="w-[80%] m-auto">
        <h1 className="text-4xl py-5 xl:text-6xl font-[700] xl:leading-[80px] sm:mt-20 font-Inter">
          Welcome !
        </h1>
      </div>
    </div>
  );
};

export default Hero;