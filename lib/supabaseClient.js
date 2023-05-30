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
    console.log(req.body);
    const newHabit = Object.keys(req.body).length === 0 ? undefined : req.body

    if(!newHabit) {
        return res
        .status(404)
        .json( {message: "Human made fault.. Add data pls.."})
    }

    // const { powers, ...character } = newHabit
    // const powerArg = powers.map(power => ({power}))

    try {
    const { data, error } = await supabase
        .from('habits')
        .insert(habit)
        .select()
        .single()

    // const { data: powersData, error: powersError } = await supabase
    //     .from('powers')
    //     .insert(powerArg)
    //     .select()
        
    // const relationArg = powersData.map(power => ({character_id : characterData.id, power_id : power.id}))

    // const { error: relationError } = await supabase
    // .from('character_powers')
    // .insert(relationArg)
    
    console.log(error, data);

    if (error) {
        return res.status(500).json({ message: "Failed to add new data." });
    }

    res.json(data);
} catch (error) {
    return res.json(error)
}
}

export default supabase;
