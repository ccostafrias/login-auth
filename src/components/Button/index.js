import React from 'react'

export default function Button(props) {
    const {
        Text, 
        onClick, 
        Type = "button",
    } = props

    return (
        <button
            type={Type}
            onClick={onClick}
        >
            {Text}
        </button>
    )
}