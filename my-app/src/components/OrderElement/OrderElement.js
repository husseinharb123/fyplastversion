import React, { useEffect } from 'react';
import image from './product-1.jpg';
import './OrderElement.scoped.css';

export default function OrderElement({
  date,
  arrivaldate,
  status,
  productname,
  price,
  productid,
  orderid,
  imgurl,
}) {
  return (
    <tr>
      <td className="align-middle font-weight-bolder">
        <img src={image} alt="" style={{ width: '50px' }} />
        {productname}
      </td>
      <td className="align-middle font-weight-bolder">{price}</td>
      <td className="align-middle font-weight-bolder">{date}</td>
      <td className="align-middle font-weight-bolder">{arrivaldate}</td>
      <td className="align-middle font-weight-bolder">{status}</td>
      <td>

      </td>
    </tr>
  );
}