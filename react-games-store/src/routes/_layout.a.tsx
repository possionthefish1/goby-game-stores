import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/a')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_layout/a!'
}
