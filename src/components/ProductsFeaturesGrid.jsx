"use client";
import Image from "next/image";
import Text from "./common/Text";

const AnimatedFeature = ({ title, description, gifSrc, alt }) => {
  return (
    <article className="relative max-w-[558px] max-h-[548px] rounded-2xl shadow-lg overflow-hidden">
      <div className=" max-w-[400px] lg:max-w-[558px] h-[400px] md:h-[460px] lg:h-[548px] relative">
        <Image
          src={gifSrc}
          alt={alt}
          width={558}
          height={548}
          objectFit="cover"
          loading="lazy"
          className="object-center object-cover w-full h-full"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-[548px] bg-custom-gradient3"></div>
      <div className="absolute top-[250px] md:top-[310px] lg:top-[357px] left-5 right-4 sm:right-0 sm:left-7 max-w-[490px] flex flex-col gap-3 text-primary">
        <h2 className="font-MontserratMedium leading-[18px] xsm:leading-6 md:leading-7 lg:leading-[24.38px] text-xs xsm:text-sm md:text-base lg:text-lg xl:text-xl">
          {title}
        </h2>
        <p className="max-w-[403px]">
          <Text label={description} size="xsm" />
        </p>
      </div>
    </article>
  );
};

const ProductsFeaturesGrid = () => {
  const introText1 =
    "Erleben Sie eine perfekte Ausleuchtung mit einem dynamischen Beleuchtungssystem. Der Spiegel schaltet die LED-Funktion durch den Touch-Schalter in der Mitte in. ";
  const introText2 =
    "Der Wärmemacher Badezimmerspiegel wertet die Ästhetik eines jeden Badezimmers auf – durch sein puristisches und zeitloses Design wird er in Kombination mit seinen Smart Home Funktionen zum Highlight Ihres Bads.";
  return (
    <section className="container max-w-[1140px] 4xl:max-w-[1440px mt-[150px] mx-auto flex flex-col sm:flex-row gap-6">
      <AnimatedFeature
        title="LED Display"
        description={introText1}
        gifSrc="/gif-1.gif"
        alt="LED Display Spiegel"
      />
      <AnimatedFeature
        title="Zeitloses und elegantes Design"
        description={introText2}
        gifSrc="/gif-2.gif"
        alt="Eleganter Badezimmer Spiegel"
      />
    </section>
  );
};

export default ProductsFeaturesGrid;
