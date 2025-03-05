"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ProductDetail() {
  const pathname = usePathname();
  const productName = pathname.split("/").pop().replace(/-/g, " ");

  return (
    <article className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="w-full bg-custom-gradient" aria-label="Breadcrumb navigation">
        <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-white hover:text-white/80 transition-colors" aria-label="Go to homepage">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-white/60" aria-hidden="true">/</span>
                <Link href="/products" className="text-white hover:text-white/80 transition-colors">
                  Products
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-white/60" aria-hidden="true">/</span>
                <span className="text-white/80 capitalize">Produktdetails </span>
              </div>
            </li>
          </ol>
        </div>
      </nav>

      {/* Product Content */}
      <main className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <figure className="relative aspect-square">
            <Image
              src="/product-image.jpg"
              alt={`${productName} product image`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
              priority
            />
          </figure>

          {/* Product Info */}
          <section className="flex flex-col space-y-6" aria-labelledby="product-title">
            <header>
              <h1 id="product-title" className="text-3xl font-bold text-gray-900 capitalize">{productName}</h1>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </header>
            
            {/* Features */}
            <section className="space-y-4" aria-labelledby="features-title">
              <h2 id="features-title" className="text-xl font-semibold text-gray-900">Features</h2>
              <ul className="space-y-2" role="list">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" aria-hidden="true"></span>
                  <span className="text-gray-600">Feature 1</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" aria-hidden="true"></span>
                  <span className="text-gray-600">Feature 2</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" aria-hidden="true"></span>
                  <span className="text-gray-600">Feature 3</span>
                </li>
              </ul>
            </section>

            {/* Specifications */}
            <section className="space-y-4" aria-labelledby="specifications-title">
              <h2 id="specifications-title" className="text-xl font-semibold text-gray-900">Specifications</h2>
              <dl className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <dt className="text-sm text-gray-500">Material</dt>
                  <dd className="text-gray-900">Premium Quality</dd>
                </div>
                <div className="space-y-2">
                  <dt className="text-sm text-gray-500">Size</dt>
                  <dd className="text-gray-900">Standard</dd>
                </div>
                <div className="space-y-2">
                  <dt className="text-sm text-gray-500">Warranty</dt>
                  <dd className="text-gray-900">2 Years</dd>
                </div>
                <div className="space-y-2">
                  <dt className="text-sm text-gray-500">Color</dt>
                  <dd className="text-gray-900">White</dd>
                </div>
              </dl>
            </section>

            {/* CTA Button */}
            <footer>
              <button 
                className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                aria-label={`Contact us about ${productName}`}
              >
                Contact Us
              </button>
            </footer>
          </section>
        </div>
      </main>
    </article>
  );
} 