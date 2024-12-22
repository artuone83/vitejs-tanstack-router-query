import { createFileRoute,  Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <nav>This is navigation element</nav>
    <main> <div>This is main element</div><Outlet /></main>
  </div>
}
