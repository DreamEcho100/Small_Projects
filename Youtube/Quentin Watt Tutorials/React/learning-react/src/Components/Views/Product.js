import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Product() {//debugger
	let url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${3}`;
	const { id } = useParams();
	url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
	console.log(`${id} -=> ${url}`);
	const [product, setProduct] = useState(null);
	let content = null;

	useEffect( () => {
		axios.get(url)
			.then( res => {
				setProduct(res);
			})
	}, [url]);

	if (product) {
		content = 
		<div>
			<h1 className="text-2xl font-bold mb-3">
				{product.data.name}
			</h1>
			<div>
				<img
					src={product.data.images[0].imageUrl}
					alt={product.data.name}
				/>
			</div>
			<div className="font-bold text-xl mb-3">
				$ {product.data.price}
			</div>
		</div>
	} else {
		content = <h1>The product page</h1>
	}

	return (
		<div>
			{content}
		</div>
	)
}

export default Product;