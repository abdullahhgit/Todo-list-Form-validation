import { useState } from 'react'

const useToggle = (initialValue = false) => {
    const [isVisible, setState] = useState(initialValue);
    const toggle = () => {
        setState((prev) => !prev)
    };

  return {isVisible, toggle};
}

export default useToggle
