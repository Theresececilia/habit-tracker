import supabase from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export const POST = async (req, NextResponse) => {
    console.log(req.body);
    const newHabit = Object.keys(req.body).length === 0 ? undefined : req.body;

    if (!newHabit) {
        return NextResponse
            .status(400)
            .json({ message: "Please provide data." });
    }

    try {
        const { data, error } = await supabase
            .from('habits')
            .insert([newHabit])
            .single();

        console.log(error, data);

        if (error) {
            return NextResponse.status(500).json({ message: "Failed to add new data." });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.status(500).json({ message: "Failed to add new data.", error });
    }
};
