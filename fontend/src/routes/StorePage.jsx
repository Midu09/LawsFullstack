import { products } from "../products";

const StorePage = () => {
  return (
    <div>
      <h1 className="text-3xl my-5">List Products</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover mb-3 rounded"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
