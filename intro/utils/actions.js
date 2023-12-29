'use server';
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from 'zod';

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createAt: 'desc',
    },
  });
};

// export const createTask = async (formData) => {
//   const content = formData.get('content');
//   try {
//     await prisma.task.create({
//       data: {
//         content,
//       }
//     });
//     revalidatePath('/tasks');
//     return { message: 'sucess' };
//   } catch (error) {
//     return { message: 'error' };
//   }
// };

export const createTaskCustom = async (prevState, formData) => {
  const content = formData.get('content');
  const Task = z.object({
    content: z.string().min(5),
  })
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      }
    });
    revalidatePath('/tasks');
    return { message: 'success' };
  } catch (error) {
    return { message: 'error' };
  };
};

export const deleteTask = async (formData) => {
  const id = formData.get('id');
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath('/tasks');
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const editTask = async (formData) => {
  const content = formData.get('content');
  const id = formData.get('id');
  const completed = formData.get('completed');

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === 'on' ? true : false
    }
  });
  redirect('/tasks');
};