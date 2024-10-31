import React from "react";

function Product({ productName, price }) {
  //   function Product(props) bunun yerine
  //   console.log(props);
  //   const { productName, price } = props; //Object Destructuring Object { productName: "Ayakkabı", price: 3200 }
  return (
    <div>
      <h2>Product</h2>
      <div>ÜRÜN BİLGİLERİ</div>
      <div>
        <div>İsim : {productName}</div>
        <div>Fiyat : {price}</div>
      </div>
    </div>
  );
}

export default Product;
