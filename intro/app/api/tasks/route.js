import prisma from "@/utils/db";


export const GET = async (req, res) => {
  const tasks = await prisma.task.findMany();
  return Response.json({ data: tasks });
}
