import { Organization } from "@prisma/client"
import prisma from "../../utils/prisma"
import calculatePagination, { PaginationOptions } from "../../utils/pagination";

const createOrganization = async (data: Organization) => {
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
          password: '123456',
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

const getAllOrganization = async (options: PaginationOptions) => {
  const { page, limit, skip, sort, order } =
    calculatePagination(options);

  const result = await prisma.organization.findMany({
    skip,
    take: limit,
    orderBy: {
      [sort]: order,
    },
  });

  const total = await prisma.organization.count();

  const totalPage = Math.ceil(total / limit);

  return {
    meta: {
      page,
      limit,
      total,
      totalPage,
    },
    data: result,
  };
};

const getSingleOrganization = async(id:string)=>{
    const reuslt = await prisma.organization.findUnique(
        {
            where:{
                id:id
            }
        }
    )
    return reuslt
}



export const OrganizationService = {
    createOrganization,
    getAllOrganization,
    getSingleOrganization
}