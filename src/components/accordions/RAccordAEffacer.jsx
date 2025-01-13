import React, { useState, useEffect, useRef } from 'react'
import "./accord.css"
import Chevron from "../../pictures/logo/arrow-down.webp"

export default function Accordion10({ title, content }) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <div className="accordion-item">
            <button
                onClick={toggleState}
                className="dropdownTitle">
                <span>{title}</span>
                <img
                    className={toggle ? "active" : ""}
                    src={Chevron} />
            </button>
            <div
                className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
                style={{ height: toggle ? `${heightEl}` : "0px" }}
                ref={refHeight}
            >
                <p>{content}</p>
            </div>
        </div>
    )
}