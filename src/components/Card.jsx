import React from 'react'

const card = ({ datesLocation, change, changeDegrees, temperature, descrptionData, img, color, btn}) => {

    return (
            <div className={`${color[descrptionData]} card`}>
                <h1>Weather</h1>
                <h3 className='card__h3'>
                    {datesLocation.name}. {datesLocation.sys?.country}
                </h3>

                <div className='content__img__dates'>
                    <article>
                        <img className="article__img" src={img[descrptionData]} alt="" />
                        <ul className='ul__items'>
                            <li  className={color[descrptionData]}>  {change ? `${temperature?.celcius} °C` : `${temperature?.fahrenheit} °F`}</li>
                        </ul>
                    </article>

                    <article>
                        <h2> {datesLocation.weather?.[0].main} </h2>
                        <ul className='ul__items'>
                            <li className='li__item'>  {datesLocation.weather?.[0].description}</li>
                            <li> Clouds: {datesLocation.clouds?.all} % </li>
                            <li> Wind: {datesLocation.wind?.speed} m/s </li>
                        </ul>
                    </article>

                </div>

                <img className='btn' onClick={changeDegrees} src={btn[change]}/>
            </div>
        )
    }

    export default card