'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

const ErrorContext = createContext<{ error: string | null; setError: (error: string | null) => void }>({
  error: null,
  setError: () => {},
})

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<string | null>(null)
  return <ErrorContext.Provider value={{ error, setError }}>{children}</ErrorContext.Provider>
}

export const useError = () => useContext(ErrorContext)
