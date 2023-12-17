import { NextResponse } from "next/server";
import { dbconnect } from "../../../config/dbconfig";
import  animeblogs from "../../../Models/blogs"

dbconnect();


//Create Blog-------------------------
export async function POST(req){

    const body = await req.json()

    const saveddata = await animeblogs.create(body)

    return(
        NextResponse.json({
            success:true,
            message:saveddata
        })
    )
}

// Find Blog------------------------------

export async function GET(req){

    const users = await animeblogs.find()

    return(
        NextResponse.json(users)
    )
}

// Delete Blog-----------------------------

export async function DELETE(req){

    const body = await req.json()

    const users = await animeblogs.findByIdAndDelete(body.id)

    return(
        NextResponse.json({success:true, message})
    )

}
//Upadate Blog-------------------------------
export async function PUT(req){

    const body = await req.json()
    
    var updatedblog = await animeblogs.findByIdAndUpdate(body.id,{$set:body},{new:true})

    return(
        NextResponse.json({
            success:true,
            message:updatedblog
        })
    )}