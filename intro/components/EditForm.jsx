//"use server"
import { editTask } from "@/utils/actions";


const EditForm = ({ task }) => {
  const { id, content, completed } = task;
  return (
    <form action={editTask} className="max-w-sm p-12 border border-base-300 rounded-lg">
      <input type="hidden" name="id" value={id} />
      <input type="text" name="content" required defaultValue={content} className="input input-bordered w-full" />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input type="checkbox" id="completed" name="completed" defaultChecked={completed} className="checkbox checkbox-primary checkbox-sm" />
        </label>
      </div>
      <button type="submit" className="btn btn-sm btn-block btn-primary">edit</button>
    </form>
  )
}
export default EditForm;