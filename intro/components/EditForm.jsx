//"use server"
import { editTask } from "@/utils/actions";


const EditForm = ({ task }) => {
  const { id, content, completed } = task;
  return (
    <form action={editTask} className="max-w-sm p-12 border border-base-300 rounded-lg">
      <input type="hidden" name="id" value={id} />
      <input type="text" name="content" required defaultValue={content} className="input input-bordered w-full" />
      <input type="text" name="completed" value={completed} />
      <button className="btn btn-xs btn-error">edit</button>
    </form>
  )
}
export default EditForm;