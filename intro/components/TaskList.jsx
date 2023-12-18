import prisma from "@/utils/db";

const TaskList = async () => {

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createAt: 'desc',
    },
  });

  if (allTasks.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg">No tasks to show . . . </h2>
    )
  }

  return (
    <ul className="mt-8">
      {allTasks.map(task => {
        return <li key={task.id} className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lf shadow-lg">
          <h2 className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>
            {task.content}
          </h2>
        </li>
      })}
    </ul>
  )
}
export default TaskList;