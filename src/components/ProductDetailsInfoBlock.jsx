"use client";
import React, { useState } from "react";
import ProductDetailsSlider from "./common/ProductDetailsSlider";
import { Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";

function ProductDetailsInfoBlock({ selectedImage }) {
  const [quantity, setQuantity] = useState(1);
  
  // Ensure selectedImage is a valid string path
  const currentImage = selectedImage || '/images/w-6.png';
  
  // Create images array with the selected image three times
  const images = [currentImage, currentImage, currentImage];

  return (
    <div className="mt-[156px] z-20 h-full w-full">
      <main className=" mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[19px]">
          <ProductDetailsSlider images={images} />

          {/* Product Info */}
          <div className="flex flex-col bg-primary rounded-2xl">
            <h1 className="text-4xl font-bold mb-2">
              Erleben Sie schon heute das
              <div className="italic text-gray-700">Badezimmer von Morgen</div>
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Entdecken Sie den Badezimmerspiegel SOLIS mit integrierter
              Infrarotheizung und Smart Home in Premium-Qualität.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Größe</span>
                <span className="font-medium">60x60cm</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Smart Mirror</span>
                <span className="font-medium">SOLIS</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Qualität</span>
                <span className="font-medium">Premium Qualität</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-red-500 font-medium">
                Nur solange der Vorrat reicht – jetzt sichern!
              </p>

              <div className="mt-4 flex items-center">
                <span className="text-gray-600 mr-4">Anzahl:</span>
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Produktpreis:</span>
                  <span className="text-3xl font-bold text-orange-500">
                    259 €
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                  Jetzt kaufen
                </button>
                <button className="w-full border-2 border-orange-500 text-orange-500 py-3 px-6 rounded-lg hover:bg-orange-50 transition-colors">
                  In den Warenkorb
                </button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <Truck className="w-8 h-8 text-gray-600 mb-2" />
                <h3 className="font-medium">
                  Kostenloser und schneller Versand
                </h3>
              </div>
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <Shield className="w-8 h-8 text-gray-600 mb-2" />
                <h3 className="font-medium">2 Jahre Garantie</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                <RotateCcw className="w-8 h-8 text-gray-600 mb-2" />
                <h3 className="font-medium">30-tägiges Rückgaberecht</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetailsInfoBlock;
