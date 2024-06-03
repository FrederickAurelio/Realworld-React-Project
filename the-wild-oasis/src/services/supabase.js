import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://cnntqpnnuuablcgyavaa.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNubnRxcG5udXVhYmxjZ3lhdmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyNTcyMzIsImV4cCI6MjAzMTgzMzIzMn0.FYUfyTHaZECgXufYsfelJggUiQ8jiX57LHT8vsq-ZqE";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;