import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SubscriptionService } from "./Subscription.service";

const createSubscription = catchAsync(async (req, res) => {
    const result = await SubscriptionService.createSubscription(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "successfully create new subscription",
        data: result
    });
});

const getAllSubscription = catchAsync(async (req, res) => {
    const result = await SubscriptionService.getAllSubscription();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "successfully get all subscriptions",
        data: result
    });
});

const getSingleSubscription = catchAsync(async (req, res) => {
    const result = await SubscriptionService.getSingleSubscription(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "successfully get single subscription",
        data: result
    });
});

const updateSubscription = catchAsync(async (req, res) => {
    const result = await SubscriptionService.updateSubscription(req.params.id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "successfully update subscription",
        data: result
    });
});

const deleteSubscription = catchAsync(async (req, res) => {
    const result = await SubscriptionService.deleteSubscription(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "successfully delete subscription",
        data: result
    });
});

export const SubscriptionController = {
    createSubscription,
    getAllSubscription,
    getSingleSubscription,
    updateSubscription,
    deleteSubscription
};
