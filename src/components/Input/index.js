import React from 'react'

export default function Input(props) {
    const {
        type,
        placeholder,
        value,
        onChange,
    } = props

    return (
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    )
}
