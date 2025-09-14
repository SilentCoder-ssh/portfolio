import { createFileRoute } from '@tanstack/react-router'
import Stack from '../components/Stack'

export const Route = createFileRoute('/stack')({
  component: RouteComponent,
})

function RouteComponent() {
  return <><Stack/></>
}
