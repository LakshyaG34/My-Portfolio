import HeroP1 from "@/components/Product/HeroP1";
import HeroP2 from "@/components/Product/HeroP2";
import HeroP3 from "@/components/Product/HeroP3";
import HeroP4 from "@/components/Product/HeroP4";
import HeroP5 from "@/components/Product/HeroP5";
import HeroP6 from "@/components/Product/HeroP6";
import HeroP7 from "@/components/Product/HeroP7";

const Products = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* GLOBAL BACKGROUND */}

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Glow 1 */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Glow 2 */}
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full" />

      {/* Glow 3 */}
      <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative sm:pt-18 space-y-32">
        <HeroP1 />
        <HeroP2 />
        <HeroP3 />
        <HeroP4 />
        <HeroP5 />
        <HeroP6 />
        <HeroP7 />
      </div>
    </div>
  );
};

export default Products;
