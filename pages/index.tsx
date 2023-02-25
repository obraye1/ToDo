import type { NextPage } from 'next'

import TodoApp from "../components/TodoApp"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <TodoApp />
    </div>
  )
}

export default Home
