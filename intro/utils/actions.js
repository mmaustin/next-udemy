'use server';
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createAt: 'desc',
    },
  });
};

export const createTask = async (formData) => {
  const content = formData.get('content');
  await prisma.task.create({
    data: {
      content,
    }
  });
  revalidatePath('/tasks');
}

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

export const editTask = async (formData, id) => {
  const content = formData.get('content');
  await prisma.task.update({
    where: {
      content,
    },
  });
  revalidatePath(`/tasks/${id}`);
};