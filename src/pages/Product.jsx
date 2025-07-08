import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LOCAL_KEY = "products_saved";

const Product = () => {
  const [products, setProducts] = useState(() => {
    try {
      const stored = localStorage.getItem(LOCAL_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Error parsing localStorage:", err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(products));
  }, [products]);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
      category: "",
      description: "",
      features: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      price: Yup.number()
        .typeError("Must be a number")
        .required("Price is required"),
      image: Yup.string().url("Invalid URL").required("Image URL is required"),
      category: Yup.string().required("Category is required"),
      description: Yup.string().required("Description is required"),
      features: Yup.string().required("At least one feature is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newProduct = {
        ...values,
        price: parseFloat(values.price),
        features: values.features.split(",").map((f) => f.trim()),
      };
      setProducts([newProduct, ...products]);
      resetForm();
    },
  });

  const deleteProduct = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  const clearAll = () => {
    setProducts([]);
    localStorage.removeItem(LOCAL_KEY);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 bg-white p-4 rounded shadow"
      >
        {["name", "price", "image", "category", "features", "description"].map(
          (field) => (
            <div key={field}>
              {field === "description" ? (
                <textarea
                  name={field}
                  placeholder={field}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                <input
                  type={field === "price" ? "number" : "text"}
                  name={field}
                  placeholder={
                    field === "features" ? "Features (comma separated)" : field
                  }
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  className="w-full p-2 border rounded bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              {formik.touched[field] && formik.errors[field] && (
                <p className="text-red-500 text-sm">{formik.errors[field]}</p>
              )}
            </div>
          )
        )}
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Product
          </button>
          {products.length > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Clear All
            </button>
          )}
        </div>
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border rounded shadow p-4 relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="font-bold text-lg">{product.name}</h2>
            <p className="text-sm text-green-700">₦{product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-xs text-gray-400">
              Category: {product.category}
            </p>
            <ul className="list-disc text-sm mt-2 pl-4">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              onClick={() => deleteProduct(index)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
