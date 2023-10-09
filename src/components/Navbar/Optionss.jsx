import React, { useState } from 'react'
import { useEffect } from 'react'
import './SearchContent.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const Optionss = ({ data, source, destination, setSource, setDestination, }) => {
    const [startDate, setStartDate] = useState(new Date());
    const d = new Date();
    console.log(d.toLocaleString());
    // console.log("source",source)
    const [url, setUrl] = useState('63b85b1209f0a79e89e17e3a/flights?')
    console.log('datatype in option-- ', data)
    const [values, setValues] = useState([])
    console.log(values)
    const [res, setRes] = useState([])
    useEffect(() => {
        if (data === 'Train') {
            setUrl('63b85e152cabb8fdea2673ee/trains')
        }
        else if (data === 'Flight') {
            setUrl('63b85b1209f0a79e89e17e3a/flights?')
        }
        else if (data === 'Hotel') {
            setUrl('63b85bcf735f93791e09caf4/hotels')
        }
        fetch(`https://content.newtonschool.co/v1/pr/${url}`)
            .then((res) => res.json())
            .then((val) => setValues(val))
    }, [data, url])
    const uniqueData = [...new Set(values.map((opts,index)=>opts.from))]
    const uniqueDataTo = [...new Set(values.map((opts,index)=>opts.to))]
    const uniqueDataCity = [...new Set(values.map((opts,index)=>opts.city))]
    console.log(uniqueData,"uniquedata")
    useEffect(() => {
        console.log(values, "values")
    }, [data, values])
    return (
        <>
            {
                data === 'Hotel' ? <>
                    <div>
                        <label htmlFor="" className='labels'><b>City</b></label><br />
                        <select className='All' onChange={(e) => setSource(e.target.value)}>
                            <option>--SelectHotel--</option>
                             {
                                    uniqueDataCity && new Set (uniqueDataCity.map((opts, i) => <option  key={i} >{  opts }</option>))
                                }
                        </select>
                    </div>
                </> :
                    <>
                        <div className='highlight'>
                            <label htmlFor="" className='labels'><b>From</b></label><br />
                            <select className='All' onChange={(e) => setSource(e.target.value)}>
                            <option>--Select--</option>  
                                {
                                    uniqueData && new Set (uniqueData.map((opts, i) => <option  key={i} >{  opts }</option>))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className='labels'><b>To</b></label><br />
                            <select className='All' onChange={(e) => setDestination(e.target.value)}>
                            <option>--Select--</option>
                                 {
                                    uniqueDataTo && new Set (uniqueDataTo.map((opts, i) => <option  key={i} >{  opts }</option>))
                                }
                            </select>
                        </div>
                    </>
            }
            <div className='Departure '>
                <label htmlFor="" className='labels'><b>Departure</b></label><br />
                <DatePicker className='All' selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} />
            </div>
            <div className='Return_Date '>
                <label htmlFor="" className='labels'><b>Return</b></label><br />
                <DatePicker className='All' selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} />
            </div>
        </>
    )
}
export default Optionss
