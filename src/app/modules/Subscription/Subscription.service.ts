import { Prisma, Subscription } from "@prisma/client"

const createSubscription = (data:Subscription)=>{

}

const getAllSubscription = ()=>{

}


const getSingleSubscription = (id:string)=>{

}

const updateSubscription = (id:string,data:Partial<Subscription>)=>{

}

const deleteSubscription = (id:string)=>{

}


export const SubscriptionService = {
    createSubscription,
    getAllSubscription,
    getSingleSubscription,
    updateSubscription,
    deleteSubscription
}