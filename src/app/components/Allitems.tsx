

// src/app/compoments/Allitems.tsx
// src/app/components/Allitems.tsx
import Navbar from '@/app/components/Navbar';
import OurPromise from '@/app/components/OurPromise';
import Footer from '@/app/components/Footer';
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Product {
  productName: string;
  productPrice: number;
  imageUrl: string;
  _id: string;
}

export default async function Allitems() {
  try {
    // Fetching data from Sanity
    const data: Product[] = await client.fetch(`*[_type == "product"] | order(productName asc) {
  productName,
  productPrice,
  "imageUrl": productImage.asset->url,
  _id
}
`);

    return (
      <div className='bg-pink-300'>
        <Navbar />
        <h1 className="text-gray-700 font-bold text-center text-3xl sm:text-4xl lg:text-5xl mt-8 hover:scale-y-150 lg:hover:scale-150 hover:text-white">
          All Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-10 mb-4 px-4">
          {data.map((item) => (
            <div
              key={item._id}
              className="shadow-lg p-4 bg-pink-200 rounded-lg flex flex-col items-center text-center"
            >
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.productName || "Unnamed Product"}
                  height={250}
                  width={250}
                  className="object-cover max-h-40 rounded"
                />
              ) : (
                <div className="h-40 w-40 bg-gray-300 flex items-center justify-center rounded">
                  <span className="text-gray-700">No Image</span>
                </div>
              )}
              <h1 className="text-blue-600 font-bold mt-2 text-lg">
                {item.productName || "Unnamed Product"}
              </h1>
              <p className="text-red-600 font-bold">
                Rs. {item.productPrice || "N/A"}
              </p>
              <button className="bg-pink-500 font-bold text-white py-2 px-4 rounded-md mt-2">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <OurPromise />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="text-center mt-10">
        <h1 className="text-red-500 font-bold text-2xl">Error Loading Products</h1>
        <p className="text-gray-400">Please check your Sanity setup or client configuration.</p>
      </div>
    );
  }
}
