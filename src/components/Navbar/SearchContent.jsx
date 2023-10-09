import React, { useContext, useEffect, useState } from 'react';
import './SearchContent.css';
import Optionss from './Optionss.jsx';
import { DataParentContext } from '../App.js'

const SearchContent = ({ data, data1 }) => {
  const [resp, setResp] = useState([])
  console.log('data1--', data1, 'data--', data)
  const context = useContext(DataParentContext)
  const { filters, setfilter, destination, setDestination, source, setSource } = context
  const searchFlight = (source, destination) => {
    console.log('source---', source)
    if (data === 'Hotel') {
      console.log('filter----in hotel')
      let filterdata = data1.filter((item) => {
        return item.city === source
      })
      console.log('filterdata hotel', filterdata)
      setfilter(filterdata)
    } else {
      let filterdata = data1.filter((item) => {
        return item.from === source && item.to === destination
      })
      setfilter(filterdata)
      console.log('filterdata', filterdata)
    }
  }
  console.log('resp-', resp)
  useEffect(() => {
    setfilter(data1)
  }, [data1]);

  return (
    <div className="SearchContentContainer">
      <span className='BIDF'>Book International and Domestic {data}</span>
      <div className='SearchContentSmall_container'>
        <Optionss data={data} source={source} destination={destination} setDestination={setDestination} setSource={setSource} />
      </div>
      <div className='btnSearch'>
        <button onClick={() => searchFlight(source, destination)} >Search</button>
      </div>
    </div>
  )
}
export default SearchContent
