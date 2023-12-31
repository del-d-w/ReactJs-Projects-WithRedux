// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Products=()=> {
//   const [myData, setMyData] = useState([]);

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products').then((res) => setMyData(res.data));
//   }, []);

//   const TruncateDescription = ({ description, maxLength }) => {
//     const [showFullDescription, setShowFullDescription] = useState(false);

//     const words = description.split(' ');

//     if (words.length <= maxLength || showFullDescription) {
//       return <p className="card-text">{description}</p>;
//     }

//     const truncatedWords = words.slice(0, maxLength);
//     const displayText = truncatedWords.join(' ');

//     const toggleDescription = () => {
//       setShowFullDescription(!showFullDescription);
//     };

//     return (
//       <>
//         <p className="card-text">{displayText}</p>
//         <button className="btn btn-secondary m-1" onClick={toggleDescription}>
//           {showFullDescription ? 'Read less' : 'Read more'}
//         </button>
//       </>
//     );
//   };

//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//       {myData.map((post) => {
//         const { id, title, body, price, description, image } = post;

//         return (
//           <div className="card" key={id} style={{ width: '300px', margin: '10px' }}>
//             <div className="card-body">
//               <img src={image} style={{ height: 200, width: 150 }} alt={title} />
//               <h5 className="card-title">{title}</h5>
//               <p className="card-text">{body}</p>
//               <p className="card-text">Price: ${price}</p>
//               <TruncateDescription description={description} maxLength={6}/>
//               <Link to={`/Products/${id}`}>
//                 <button className="btn btn-secondary">View Details</button>
//                 </Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Products;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Products = () => {
//   const [myData, setMyData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 10;

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products').then((res) => setMyData(res.data));
//   }, []);

//   const TruncateDescription = ({ description, maxLength }) => {
//     const [showFullDescription, setShowFullDescription] = useState(false);

//     const words = description.split(' ');

//     if (words.length <= maxLength || showFullDescription) {
//       return <p className="card-text">{description}</p>;
//     }

//     const truncatedWords = words.slice(0, maxLength);
//     const displayText = truncatedWords.join(' ');

//     const toggleDescription = () => {
//       setShowFullDescription(!showFullDescription);
//     };

//     return (
//       <>
//         <p className="card-text">{displayText}</p>
//         <button className="btn btn-secondary m-1" onClick={toggleDescription}>
//           {showFullDescription ? 'Read less' : 'Read more'}
//         </button>
//       </>
//     );
//   };

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = myData.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {currentProducts.map((post) => {
//           const { id, title, body, price, description, image } = post;

//           return (
//             <div className="card" key={id} style={{ width: '300px', margin: '10px' }}>
//               <div className="card-body">
//                 <img src={image} style={{ height: 200, width: 150 }} alt={title} />
//                 <h5 className="card-title">{title}</h5>
//                 <p className="card-text">{body}</p>
//                 <p className="card-text">Price: ${price}</p>
//                 <TruncateDescription description={description} maxLength={6} />
//                 <Link to={`/Products/${id}`}>
//                   <button className="btn btn-secondary">View Details</button>
//                 </Link>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <nav aria-label="Page navigation example">
//         <ul className="pagination justify-content-center mt-3">
//           <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//             <button className="page-link" onClick={() => paginate(currentPage - 1)}>
//               Previous
//             </button>
//           </li>
//           {Array.from({ length: Math.ceil(myData.length / productsPerPage) }, (_, i) => (
//             <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
//               <button className="page-link" onClick={() => paginate(i + 1)}>
//                 {i + 1}
//               </button>
//             </li>
//           ))}
//           <li className={`page-item ${currentPage === Math.ceil(myData.length / productsPerPage) ? 'disabled' : ''}`}>
//             <button className="page-link" onClick={() => paginate(currentPage + 1)}>
//               Next
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Products;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../actions';

// const Products = () => {
//   const [myData, setMyData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 10;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products').then((res) => setMyData(res.data));
//   }, []);



//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = myData.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {currentProducts.map((post) => {
//           const { id, title, body, price, description, image } = post;

//           const truncateDescription = () => {
//             const words = description.split(' ');
//             const truncatedWords = words.slice(0, 6);
//             return truncatedWords.join(' ');
//           };

//           return (
//             <div className="card" key={id} style={{ width: '300px', margin: '10px' }}>
//               <div className="card-body">
//                 <img src={image} style={{ height: 200, width: 150 }} alt={title} />
//                 <h5 className="card-title">{title}</h5>
//                 <p className="card-text">{body}</p>
//                 <p className="card-text">Price: ${price}</p>
//                 {/*<p className="card-text">{truncateDescription()}...</p> */}
//                 <Link to={`/Products/${id}`}>
//                   <button className="btn btn-secondary">View Details</button>
//                 </Link>
//                 <button
//                   className="btn btn-secondary m-1"
//                   onClick={() => dispatch(addToCart(post))}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <nav aria-label="Page navigation example">
//         <ul className="pagination justify-content-center mt-3">
//           <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//             <button className="page-link" onClick={() => paginate(currentPage - 1)}>
//               Previous
//             </button>
//           </li>
//           {Array.from({ length: Math.ceil(myData.length / productsPerPage) }, (_, i) => (
//             <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
//               <button className="page-link" onClick={() => paginate(i + 1)}>
//                 {i + 1}
//               </button>
//             </li>
//           ))}
//           <li className={`page-item ${currentPage === Math.ceil(myData.length / productsPerPage) ? 'disabled' : ''}`}>
//             <button className="page-link" onClick={() => paginate(currentPage + 1)}>
//               Next
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Products;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions';

const Products = () => {
  const [myData, setMyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => setMyData(res.data));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = myData.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddToCart = (product) => {
    const isProductInCart = cartItems && cartItems.find((item) => item.id === product.id);
    console.log('Is product in cart?', isProductInCart);
    if (isProductInCart) {
      alert('This item is already in your cart!');
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div style={{ paddingTop: '40px' }}>
      {myData.length > 0 && (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {currentProducts.map((post) => {
              const { id, title, body, price, description, image } = post;

              const truncateDescription = () => {
                const words = description.split(' ');
                const truncatedWords = words.slice(0, 6);
                return truncatedWords.join(' ');
              };

              return (
                <div className="card" key={id} style={{ width: '300px', margin: '10px', textAlign: 'center' }}>
                  <div className="card-body">
                    <img src={image} style={{ height: 150, width: 120 }} alt={title} />
                    <h5 className="card-title mt-2">{title}</h5>
                    <p className="card-text">{body}</p>
                    <p className="card-text">Price: ${price}</p>
                    <Link to={`/Products/${id}`}>
                      <button className="btn btn-secondary">View Details</button>
                    </Link>
                    <button className="btn btn-secondary m-1" onClick={() => handleAddToCart(post)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-3">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                  Previous
                </button>
              </li>
              {Array.from({ length: Math.ceil(myData.length / productsPerPage) }, (_, i) => (
                <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === Math.ceil(myData.length / productsPerPage) ? 'disabled' : ''
                }`}
              >
                <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Products;


