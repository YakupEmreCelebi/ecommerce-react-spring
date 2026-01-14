import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import apiClient from "../api/apiClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faShoppingCart,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
  const params = useParams();
  const location = useLocation();
  const product = location.state?.product;

  const [isHovering, setIsHovering] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const imageDivRef = useRef(null);

  const [productData, setProductData] = useState(product);
  const [loading, setLoading] = useState(!product);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!product) fetchProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.productId]);

  async function fetchProductById() {
    try {
      setLoading(true);
      const response = await apiClient.get(`/products/${params.productId}`);
      setProductData(response.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  function onMouseEnter() {
    setIsHovering(true);
  }
  function onMouseLeave() {
    setIsHovering(false);
    setBackgroundPosition("center");
  }
  function onMouseMove(e) {
    if (!imageDivRef.current) return;
    const { left, top, width, height } = imageDivRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] font-display font-bold text-2xl sm:text-4xl px-4 text-center">
        Something went wrong
      </div>
    );
  }

  if (loading || !productData) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] font-display font-bold text-2xl sm:text-4xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-start lg:items-center px-4 sm:px-6 lg:px-8 pt-8 lg:pt-0">
      {/* içerik genişliğini kontrol et */}
      <div className="w-full max-w-6xl py-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-6 md:gap-10">
          {/* IMAGE */}
          <div
            ref={imageDivRef}
            className="w-full md:w-[420px] aspect-square rounded-xl overflow-hidden bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${productData.imageUrl})`,
              backgroundPosition,
              backgroundSize: isHovering ? "170%" : "cover",
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
          />

          {/* DETAILS */}
          <div className="w-full md:max-w-xl flex flex-col gap-3">
            <Link to="/home" className="font-display text-sm sm:text-base w-fit">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to All Products
            </Link>

            <h1 className="text-primary font-display font-bold text-2xl sm:text-3xl">
              {productData.name}
            </h1>

            <p className="font-display text-base sm:text-xl font-semibold text-gray-700">
              {productData.description}
            </p>

            <h2 className="text-primary font-display font-bold text-xl sm:text-2xl">
              {"$" + productData.price}
            </h2>

            <div className="flex items-center gap-2">
              <label htmlFor="qty" className="font-display">
                Qty:
              </label>
              <input
                className="border border-gray-500 rounded-sm w-20 px-2 py-1"
                type="number"
                min={1}
                defaultValue={1}
                id="qty"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="rounded-sm bg-primary text-white px-4 py-2">
                <span className="mr-2">Add To Cart</span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>

              <button className="rounded-sm bg-primary text-white px-4 py-2">
                <span className="mr-2">View Cart</span>
                <FontAwesomeIcon icon={faShoppingBasket} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ProductDetail;
