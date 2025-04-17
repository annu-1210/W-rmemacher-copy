"use client";
import React, { useState } from "react";
import ProductDetailsSlider from "./common/ProductDetailsSlider";
import { Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";

function ProductDetailsInfoBlock({ selectedImage }) {
  const [quantity, setQuantity] = useState(1);
  const introText =
    "Entdecken Sie den Badezimmerspiegel SOLIS mit integrierter Infrarotheizung und Smart Home in Premium-Qualität.";

  // Ensure selectedImage is a valid string path
  const currentImage = selectedImage || "/images/w-6.png";

  // Create images array with the selected image three times
  const images = [currentImage, currentImage, currentImage];

  return (
    <div className="mt-[156px] z-20 h-full w-full">
      <main className=" mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[19px]">
          <ProductDetailsSlider images={images} />

          {/* Product Info */}
          <div className="flex flex-col bg-primary rounded-2xl p-10 gap-[60px]">
            <div className="flex flex-col space-y-[30px]">
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] leading-5 sm:leading-[51.2px] text-start max-w-[632px]">
                  <span className="font-MontserratMedium">
                    Erleben Sie schon heute das
                  </span>{" "}
                  <span className="font-PpEditorialRegular italic leading-5 sm:leading-[53.7px]">
                    Badezimmer von Morgen
                  </span>
                </h3>
                <div className="max-w-[613px] !text-secondary !opacity-70">
                  <Text label={introText} size="md" />
                </div>
              </div>

              <div className="max-w-[306px] flex items-center">
                <div className="flex flex-col gap-y-0.5 font-MontserratMedium text-secondary sm:max-w-[95px]">
                  <p className="text-xs lg:text-sm xl:text-base opacity-70 leading-tight">
                    Größe
                  </p>
                  <p className="text-xs xsm:text-sm lg:text-base xl:text-xl leading-tight">
                    60x60cm
                  </p>
                  <p className="text-xs lg:text-sm xl:text-base opacity-70 leading-tight">
                    SOLIS
                  </p>
                </div>
                <div className="h-[50px] sm:h-[70px] border border-secondary opacity-30 mx-8"></div>
                <div className="flex flex-col gap-y-0.5 font-MontserratMedium text-secondary sm:max-w-[147px]">
                  <p className="text-xs lg:text-sm xl:text-base opacity-70 leading-tight">
                    Smart Mirror
                  </p>
                  <p className="text-xs xsm:text-sm lg:text-base xl:text-xl leading-tight">
                    259 €
                  </p>
                  <p className="text-xs lg:text-sm xl:text-base opacity-70 leading-tight">
                    Premium Qualität
                  </p>
                </div>
              </div>

              <hr className="border border-secondary opacity-30" />

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-3.5">
                  <p className="text-tertiaryRed text-sm font-MontserratSemibold">
                    Nur solange der Vorrat reicht – jetzt sichern!
                  </p>

                  <div className=" flex items-center max-w-[203px] space-x-5">
                    <p className="text-base font-MontserratMedium text-secondary opacity-70">
                      Anzahl:
                    </p>
                    <div className="flex items-center border border-charcoalGray rounded-lg max-w-[123px] py-3 px-5 space-x-5 text-lg font-GilroyMedium text-secondary">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className=""
                      >
                        <Minus className="w-[18px] h-[18px]" />
                      </button>
                      <span className=" ">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className=" "
                      >
                        <Plus className="w-[18px] h-[18px]" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between max-w-[257px] space-x-5">
                  <p className="text-base font-MontserratMedium text-secondary opacity-70">
                    Produktpreis:
                  </p>
                  <span className="text-transparent bg-clip-text bg-custom-gradient font-MontserratSemibold text-[42px]">
                    259 €
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[51px] w-full"> 
              <div className="w-full flex items-center justify-between gap-[18px]">
                <ActionButton
                  label="Jetzt kaufen"
                  color="quaternary"
                  size="xxxl"
                />
                <ActionButton
                  label="In den Warenkorb"
                  color="tertiary"
                  size="xxxl"
                />
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <Truck className="w-8 h-8 text-gray-600 mb-2"/>
                  <h3 className="font-medium">
                    Kostenloser und schneller Versand
                  </h3>
                </div>
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <Shield className="w-8 h-8 text-gray-600 mb-2"/>
                  <h3 className="font-medium">2 Jahre Garantie</h3>
                </div>
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <RotateCcw className="w-8 h-8 text-gray-600 mb-2"/>
                  <h3 className="font-medium">30-tägiges Rückgaberecht</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetailsInfoBlock;
