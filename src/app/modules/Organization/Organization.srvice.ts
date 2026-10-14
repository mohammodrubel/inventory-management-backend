import { Organization } from "@prisma/client"
import prisma from "../../utils/prisma"
import calculatePagination, { PaginationOptions } from "../../utils/pagination";


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
    getAllOrganization,
    getSingleOrganization
}