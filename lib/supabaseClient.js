import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_API_KEY

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey)

export const getHabits = async () => {
    const { data, error } = await supabase.from('habits').select()
    console.log(data, error)

    return data
}

export const postHabits = async () => {
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
