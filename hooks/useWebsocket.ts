import { useEffect, useRef, useState } from 'react'

import { Match } from '@/types'

export const useWebsocket = (url: string, onMessage: (data: Match[]) => void) => {
  const [error, setError] = useState<string | null>(null)
  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    if (socketRef.current) return
    const socket = new WebSocket(url)
    socketRef.current = socket

    socket.onopen = () => console.log('WebSocket подключен')

    socket.onmessage = (event) => {
      try {
        const response = JSON.parse(event.data)
        if (Array.isArray(response.data)) {
          onMessage(response.data)
        } else {
          console.error('WebSocket прислал не массив:', response.data)
          setError('Ошибка: неверный формат данных WebSocket')
        }
      } catch (err) {
        setError('Ошибка обработки данных WebSocket')
      }
    }

    socket.onerror = () => setError('Ошибка WebSocket соединения')
    socket.onclose = () => console.log('WebSocket отключен')

    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close()
      }
      socketRef.current = null
    }
  }, [url])

  return { error }
}
