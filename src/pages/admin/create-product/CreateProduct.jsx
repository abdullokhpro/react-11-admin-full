// import React, { useRef, useState } from "react";
// import axios from "../../../api";
// import { toast } from "react-toastify";

// // let initialState = {
// //   nomi: "",
// //   narxi: "",
// // };

// const CreateProduct = () => {
//   // const [newProduct, setNewProduct] = useState(initialState);
//   let obj = { name, price };
//   let [loading, setLoading] = useState(false);

//   let name = useRef();
//   let price = useRef();

//   const handleCreate = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     axios
//       .post("/products", obj)
//       .then((res) => {
//         setNewProduct(initialState);
//         toast.success("product qo'shildi");
//         console.log(res);
//       })
//       .catch((err) => console.log(err))
//       .finally(() => setLoading(false));
//   };

//   return (
//     <div className="admin__create-product">
//       <h2 className="admin__create-product__title">Create Product</h2>
//       <form
//         className="admin__create-product__form"
//         onSubmit={handleCreate}
//         action=""
//       >
//         <input
//           className="admin__create-product__input"
//           placeholder="Add name of product"
//           required
//           type="text"
//           // value={newProduct.nomi}
//           ref={name.current.value}
//           // onChange={(e) =>
//           //   setNewProduct((prev) => ({ ...prev, nomi: e.target.value }))
//           // }
//         />
//         <input
//           className="admin__create-product__input"
//           placeholder="Add the price of product"
//           // value={newProduct.narxi}
//           ref={price.current.value}
//           type="number"
//           required
//           // onChange={(e) =>
//           //   setNewProduct((prev) => ({
//           //     ...prev,
//           //     narxi: +e.target.value,
//           //   }))
//           // }
//         />
//         <button disabled={loading} className="admin__create-product__btn">
//           {loading ? "Loading..." : "Add"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateProduct;

import React, { useRef, useState } from "react";
import axios from "../../../api";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const priceRef = useRef();

  const handleCreate = (e) => {
    e.preventDefault();
    setLoading(true);

    const obj = {
      nomi: nameRef.current.value,
      narxi: priceRef.current.value,
    };

    axios
      .post("/products", obj)
      .then((res) => {
        nameRef.current.value = "";
        priceRef.current.value = "";
        toast.success("Product added successfully");
        console.log(res);
      })
      .catch((err) => {
        toast.error("Failed to add product");
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="admin__create-product">
      <h2 className="admin__create-product__title">Create Product</h2>
      <form
        className="admin__create-product__form"
        onSubmit={handleCreate}
        action=""
      >
        <input
          className="admin__create-product__input"
          placeholder="Add name of product"
          required
          type="text"
          ref={nameRef}
        />
        <input
          className="admin__create-product__input"
          placeholder="Add the price of product"
          type="number"
          required
          ref={priceRef}
        />
        <button disabled={loading} className="admin__create-product__btn">
          {loading ? "Loading..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
