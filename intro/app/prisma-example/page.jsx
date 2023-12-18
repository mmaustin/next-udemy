import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: 'wake up'
    },
  });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allTasks;
};

const Prisma = () => {
  return (
    <div>Prisma</div>
  )
}
export default Prisma;