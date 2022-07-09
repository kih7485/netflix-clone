import { Product } from '@stripe/firestore-stripe-payments'
import React from 'react'

interface Props{
    products: Product[]
}

function Table({products}: Props) {
  return (
      <table>
          <tbody className='divide-y divide-[gray]'>
              <tr className='tableRow'>
                  <td>월 요금</td>
                  {products.map((product) => (
                      <td key={product.id} className='tableDataFeature'>
                          {product.prices[0].unit_amount!} 원
                      </td>
                  ))}
              </tr> 
              <tr className='tableRow'>
                  <td>화질</td>
                  {products.map((product) => (
                      <td key={product.id} className='tableDataFeature'>
                          {product.metadata.videoQuality}
                      </td>
                  ))}
              </tr> 
          </tbody>
      </table>
  )
}

export default Table