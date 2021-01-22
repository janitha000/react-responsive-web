import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'

import './Sections.css'

const Sections = ({ lightBg, topLine, lightText, lightTextDesc, headline,
    description, buttonLabel, img, alt, imgStart }) => {
    return (
        <>
            <div className={lightBg ? "section" : "section darkBg"}>
                <div className="container">
                    <div className="row section__row"
                        style={{ display: "flex", flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className="col">
                            <div className="section__text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'subtitle' : 'subtitle dark'}>{description}</p>
                                <Link to="/">
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="section__img-wrapper">
                            <img src={img} alt={alt} className="section__img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sections
