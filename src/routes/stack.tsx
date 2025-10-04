import { createFileRoute } from '@tanstack/react-router'
import Stack from '../components/pages/Stack'

export const Route = createFileRoute('/stack')({
  component: RouteComponent,
})

function RouteComponent() {
  return <><Stack/></>
}
