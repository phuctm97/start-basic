import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? <Outlet /> : null
}
