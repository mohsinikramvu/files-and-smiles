import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <>
            <div className='card d-flex flex-row gap-2 w-100'>
                <div className='card-setting'>{props.settingIcon}</div>
                <div className="content d-flex flex-column flex-wrap gap-3 w-100">
                    <div className='d-flex justify-content-between gap-3 align-items-center w-100'>
                        <h2>{props.CardHeading}</h2>
                        <a href={props.link}>{props.icon}</a>
                    </div>
                    <ul>
                        {props.list?.length > 0 && props.list.map((item, index) => {
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card
