import React from 'react'

export default function TableBody(props) {
    const { data } = props
  return (
    <tbody>
    {data.map((products, index) => {
        return (
          <tr key={index}>
            <td>{products.id}</td>
            <td>{products.category}</td>
            <td>{products.price}</td>
            <td>{products.title}</td>
            <td>
              <img
                src={products.image}
                alt=""
                width="100px"
                height="100px"
              />
            </td>
          </tr>
        );
    })}
    </tbody>
  )
}
