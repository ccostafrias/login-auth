import React from 'react'

export default function Button(props) {
    const {
        Text, 
        onClick, 
        Type = "button",
        loading = false,
    } = props

    return (
        <button
            type={Type}
            onClick={onClick}
            style={{
                opacity: loading ? .75 : 1,
            }}
        >
            {loading ? "Loading..." : Text}
        </button>
    )
}