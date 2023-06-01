import supabase from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req, res) => {
    const { data, error } = await supabase.from('habits').select()
    console.log(data, error)

    return Response.json({data})
}