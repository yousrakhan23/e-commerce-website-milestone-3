"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";
import SuccessModal from "@/components/SuccessModel";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}

const SingleProduct = () => {
  const [data, setData] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!data) return;

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productExists = existingCart.find(
      (item: Product) => item.id === data.id
    );
    let updatedCart;
    if (productExists) {
      updatedCart = existingCart.map((item: Product) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...existingCart, { ...data, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setSuccessMessage("Product added to cart successfully!");
    setIsModalOpen(true);
  };
  return (
    <div className="bg-slate-400 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!data ? (
          <div className="text-center">
            <Loader />
          </div>
        ) : (
          <div className=" p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
              <Image
                src={data.image}
                alt={data.title}
                width={1000}
                height={1000}
                className="w-full h-auto max-w-md rounded-lg"
              />
            </div>

            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {data.title}
              </h1>
              <p className="text-xl text-gray-700 mb-6">{data.description}</p>
              <p className="text-2xl text-white font-bold mb-4">
                ${data.price}
              </p>
              <p className="text-lg text-gray-900 mb-4">
                <strong>Category:</strong> {data.category}
              </p>
              <p className="text-lg text-gray-900 mb-6">
                <strong>Rating:</strong> {data.rating.rate} ({data.rating.count}{" "}
                reviews)
              </p>

              <button
                onClick={handleAddToCart}
                className="bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gary-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vCart={true}
        message={successMessage}
      />
    </div>
  );
};

export default SingleProduct;
