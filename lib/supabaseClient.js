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

export default supabase;
