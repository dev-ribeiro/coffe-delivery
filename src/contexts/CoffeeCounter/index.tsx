import { createContext, ReactNode, useState } from 'react';

interface ICoffeeCounterContextType {
    count: number
    addCoffeeToCart: () => void
    removeCoffeeToCart: () => void
}

export const CoffeeCounterContext = createContext({} as ICoffeeCounterContextType)

interface ICoffeeCounterContextProviderProps {
    children: ReactNode
}

export function CoffeeCounterContextProvider({ children }: ICoffeeCounterContextProviderProps) {
    const [count, setCount] = useState(0);

    function addCoffeeToCart() {
        setCount(state => state + 1);
    }

    function removeCoffeeToCart() {
        setCount(state => state - 1);
    }

    return (
        <CoffeeCounterContext.Provider value={{
            count,
            addCoffeeToCart,
            removeCoffeeToCart
        }}>
            {children}
        </CoffeeCounterContext.Provider>
    )
}
