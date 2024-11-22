import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/library')({
  component: About,
})

function About() {
  return (
    <div className="p-2 prose">
      <h1>Library Page</h1>
    </div>
  )
}
