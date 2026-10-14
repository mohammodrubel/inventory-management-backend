import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { OrganizationService } from "./Organization.srvice"

const createOrganization = catchAsync(async(req,res)=>{
    const result = OrganizationService.createOrganization(req.body)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"successfully create Organization",
        data:result 
    })
})

const getAllOrganization = catchAsync(async (req, res) => {
  const result = await OrganizationService.getAllOrganization(
    req.query,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Successfully shown Organization List',
    meta:result.meta,
    data: result.data
  });
});

const getSingleOrganization = catchAsync(async(req,res)=>{
    const result = OrganizationService.getSingleOrganization(req.params.id)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"successfully get Organization",
        data:result
    }) 
})

export const OrganizationController = {
    createOrganization,
    getAllOrganization,
    getSingleOrganization
}