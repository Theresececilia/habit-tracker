import supabase from "@/lib/supabaseClient";

export const POST = async (req) => {
    const habit = await req.json()
 
    const { data, error, status } = await supabase
        .from('habits')
        .insert(habit)
        .select()
        .single()
        // add single to return as object instead of array
 
    if (error) return Response.status(status).json({ error })
 
    return Response.json(habit)
}

// export const POST = async (req, Response) => {

//     // const body = req.json()
//     // // const newHabit = Object.keys(body).length === 0 ? undefined : body;

//     // // if (!newHabit) {
//     // //     return Response
//     // //         .status(400)
//     // //         .json({ message: "Please provide data." });
//     // // }

//     //     const { data, error, status } = await supabase
//     //         .from('habits')
//     //         .insert(body)
//     //         .single();

//     //     console.log(body, error, body);

//     //     if (error) {
//     //         return Response.status(status).json({ message: "Failed to add new data." });
//     //     }

//     //     return Response.json(body)
// };
