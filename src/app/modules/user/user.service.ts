import prisma from '../../utils/prisma';

const GetAllUsers = async () => {
  const result = await prisma.user.findMany({});
  return result;
};

const GetSingleUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const DeleteUser = async (id: string) => {
  await prisma.user.delete({
    where: {
      id: id,
    },
  });
};

const userProfile = async (id:string)=>{
  const reuslt = await prisma.user.findUnique(
    {
      where:{
        id:id 
      },
      include:{
        profile:true,
        educations:true,
        experiences:true,
        skills:true,
        
      }
    }
  ) 
  return reuslt
}


export const UserService = {
  GetAllUsers,
  GetSingleUser,
  DeleteUser,
  userProfile
};
