'use server'

import React from 'react'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { NormifyB64 } from '@/utils/normify-url';

export type MpesaLinestype = {
        code:string;
        amount:number|string;
}

export type InitiatedPaymentType = {
    id: string;
    externalReference: string;
    reference:string;
    state: 'INITIATED'|'FAILED'|'COMPLETED';
    ResultDescription: string
}

export type MpesaType ={
    name: string;
    name_error?: string;
    phone: string;
    phone_error?: string;
    district?: string;
    church?: string;
    email: string;
    email_error?: string;
    lines?:MpesaLinestype[];
    errored: boolean;
    total?:number;
    save:boolean;
}
export type PaidTransactionLineType = {
        code:string;
        amount:number;
        description:string;
        name:string;
}
export type PaidTransactionType = {
    no: string;
    name: string;
    phone: string;
    district?: string;
    church?: string;
    email: string;
    reference: string;
    externalReference: string;
    createdAt: Date;
    paymentMode: string;
    lines:PaidTransactionLineType[];
    amount:number;
}

export type PaymentType = {
    code:string;
    sequenceNo:number,
    description:string,
    name:string
}

export const PostMpesa = async (MpesaData:MpesaType) => {
    let error_message = 'Oops! It looks like there are no contributions entered. Please check and try again.'
    // console.log(MpesaData.lines)
    let lines = MpesaData.lines?.filter(line => (line!==undefined && line!==null && line.amount!==undefined && line.amount!==null && line.amount!=='' && line.amount!==0 && line.amount!=='0')).map(line=>{
      return{
        code: line.code,
        amount: line.amount
      }
    })
    let payload = {
        phone: MpesaData.phone,
        email: MpesaData.email,
        name: MpesaData.name,
        district: MpesaData.district || '',
        church: MpesaData.church || '',
        lines: lines
    }
    if(lines==undefined || lines.length==0){
        return {errors:[{message:error_message}]}
    }
    const {data, errors} = await client.mutate({
        mutation: gql`
            mutation CreateMpesa($phone:String!,$email:String!, $name:String!, $lines:[InitiateLineType]!){
                    initiateMpesaExpressPayment(
                        input: {phone: $phone, email: $email, name: $name, lines: $lines}
                    ) {
                        initiateMpesaExpress {
                            CheckoutRequestID
                            MerchantRequestID
                            ResultCode
                            externalReference
                            ResultDescription
                            mode
                            reference
                            id
                        }
                    }
            }                    
        `,
        variables:{ 
            ...payload
        },
        fetchPolicy: "no-cache",
        context: {
            fetchOptions: {
                next: { revalidate: 0 },
            },
        }
    })
    const result:InitiatedPaymentType = data.initiateMpesaExpressPayment.initiateMpesaExpress
  return {result:result, errors:errors}
}

export const ConfirmStatus = async (reference:string) => {
    const {data, errors} = await client.query({
        query: gql`
            query initiatedPayment($transId:ID!){
                initiatedPayment(id: $transId) {
                    CheckoutRequestID
                    MerchantRequestID
                    ResultCode
                    externalReference
                    reference
                    state
                    ResultDescription
                }
            }                 
        `,
        variables:{ 
            transId: reference
        },
        fetchPolicy: 'no-cache',
        context: {
            fetchOptions: {
                next: { revalidate: 0 },
            },
    },
    })
    const result:InitiatedPaymentType = data.initiatedPayment
  return {result:result, errors:errors}
}


export const FetchPaymentTypes = async () => {
    const {data, loading} = await client.query({
        variables:{ 
            active: true,
        },
        query: gql`
            query PaymentTypes {
                paymentTypes(active: true) {
                    edges {
                        node {
                            code
                            id
                            description
                            priority
                            sequenceNo
                            name
                        }
                    }
                }
            }           
        `,
        fetchPolicy: 'no-cache',
        context: {
            fetchOptions: {
                next: { revalidate: 0 },
            }
        }
    })
    const payTypes:PaymentType[] = data.paymentTypes.edges.map((type:any)=>{
        return({...type.node})
    })
  return payTypes
}


export const FetchPaymentType = async (code:string) => {
    const {data, loading} = await client.query({
        variables:{ 
            code: code
        },
        query: gql`
            query PaymentTypes($code: String) {
                paymentTypes(code: $code) {
                    edges {
                        node {
                            code
                            id
                            description
                            priority
                            sequenceNo
                            name
                        }
                    }
                }
            }           
        `,
        fetchPolicy: 'no-cache',
        context: {
            fetchOptions: {
                next: { revalidate: 0 },
            }
        }
    })
    const payTypes:PaymentType[] = data.paymentTypes.edges.map((type:any)=>{
        return({...type.node})
    })
  return payTypes
}




export const FetchTransactionReceipt = async (reference:string) => {
    reference = NormifyB64(reference)
    const {data, errors} = await client.query({
        query: gql`
            query TranSactions($reference: String) {
                transactions(reference: $reference) {
                    edges {
                        node {
                            id
                            no
                            notified
                            reference
                            phone
                            paymentMode
                            createdAt
                            confirmationCode
                            amount
                            church
                            district
                            email
                            name
                            transactionLines {
                                edges {
                                    node {
                                    amount
                                    createdAt
                                    id
                                    paymentType {
                                        code
                                        description
                                        name
                                        sequenceNo
                                    }
                                    }
                                }
                            }
                            status
                        }
                    }
                }
            }          
        `,
        variables:{ 
            reference: reference
        }
    })
    const result:PaidTransactionType = data.transactions.edges.map((transaction:any)=>{
        return({
            ...transaction.node,
            lines: transaction.node.transactionLines.edges.map((line:any)=>{
                return({
                    ...line.node,
                    ...line.node.paymentType
                })
            })
        })
    })[0]
  return {result:result, errors:errors}
}
