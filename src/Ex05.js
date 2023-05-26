import React, {useEffect, useState} from 'react'
import './Ex05.css'
import axios from 'axios'


const Ex05 = () => {
    /*
    key : d98ae2c3057b1f588501393dc077fc5f
    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    */

    let cityList = ['gwangju', 'seoul', 'busan']

    const [city, setCity] = useState('gwangju')
    const [temp, setTemp] = useState("0")
    const [icon, setIcon] = useState("")
    const [cloud, setCloud] = useState("")
    

    const getCity = ()=>{
        console.log('get City');
    }
    const getData = ()=>{
        console.log('get Data')
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d98ae2c3057b1f588501393dc077fc5f`
        axios.get(url)
        .then(res => {
            console.log('res :' ,res.data.weather[0].icon)

            // 온도세팅 : 켈빈온도 - 273 = 섭씨온도
            setTemp((res.data.main.temp-273).toFixed(2))

            // 구름 세팅
            if(res.data.clouds.all > 90) {
                setCloud("매우 흐림")
            } else if (res.data.clouds.all > 60){
                setCloud("흐림")
            } else {
                setCloud("맑음")
            }

            // 아이콘 세팅
            setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)


    })
    }

    useEffect(()=>{},[
        getData()
    ])
  return (
    <div className='weather-container'>
        <div className='weather-item'>
            <h1>날씨</h1>
            <div className='weather-data'>
                <img src={icon} width='100px'></img>
                <h1>{temp}C</h1>
                <h3>{city}</h3>
                <h4>{cloud}</h4>
            </div>

            <div className='button-container'>
                {cityList.map(item => <button key={item}>{item}</button>)}
                </div>   
            </div>
            </div>
  )
}

export default Ex05