import { Organization } from '@prisma/client';
import prisma from '../../utils/prisma';
import bcrypt from 'bcrypt';
import config from '../../config';

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

const createOrganization = async (data: Organization) => {
  const hashedPassword = await bcrypt.hash(
    '123456',
    Number(config.bcrypt_salt_rounds),
  );

  const createOrganizationInfo = await prisma.organization.create({
    data: {
      name: data.name,
      email: data.email,
      slug: `${data.name}-${Date.now()}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-'),
      phone: data.phone || '',
      address: data.address || '',
      isActive: true,

      users: {
        create: {
          name: data.name,
          email: data.email!,
          password: hashedPassword,
          role: 'ADMIN',
        },
      },
    },
    include: {
      users: true,
    },
  });

  return createOrganizationInfo;
};



export const UserService = {
  createOrganization,
  GetAllUsers,
  GetSingleUser,
  DeleteUser,
  userProfile
};
