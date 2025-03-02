import mongoose from "mongoose";
import { NextResponse } from "next/server";



export default function Database(){
    try{
        const url="mongodb+srv://supriyadhal50:n6Ef2fti2ezb99f0@cluster0.pgn4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/SHC";
        mongoose.connect(url)
        .then(()=>{
            console.log("connected to database...");
        })
        .catch((err)=>{
            console.log(err);
        })
    }catch(err){
        return NextResponse.json({
            status:500,
            message:err,
        })
    }
}