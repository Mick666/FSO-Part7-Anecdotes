import { useState } from 'react'

export const useField = (input = '') => {
    const [value, setValue] = useState(input)

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const reset = () => setValue('')

    return {
        value,
        reset,
        onChange
    }
}