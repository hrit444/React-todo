import { nanoid } from "nanoid/non-secure";
import { RiAddLine } from "@remixicon/react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { todocontext } from "../Wrapper";
import { useContext } from "react";

const Create = () => {

  const [todo, setTodo] = useContext(todocontext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const SubmitHandler = (data) => {
    data.id = nanoid()
    data.isCompleted = false

    setTodo([...todo, data]);
    toast.success("Todo created!");
    reset();
  };

  return (
    <div className="w-[60%] p-10">
      <h1 className="mb-10 text-[5vw] leading-[1] font-thin">
        Set <span className="text-red-400">Reminders</span> for <br /> tasks
      </h1>
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="flex items-center w-full justify-between"
      >
        <div className="w-[80%]">
          <input
            {...register("title", {
              required: "title can not be empty!",
            })}
            className="outline-0 border-b w-full text-[2.3vw] font-thin"
            type="text"
            placeholder="Add task"
          />
          <br />
          <small className="font-thin text-red-400 text-[1vw]">
            {errors?.title?.message}
          </small>
        </div>
        <button className="p-1.5 border rounded">
          <RiAddLine size={34} />
        </button>
      </form>
    </div>
  );
};

export default Create;
