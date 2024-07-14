import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jmmznkokxulndywkbbpk.supabase.co";

const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbXpua29reHVsbmR5d2tiYnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTI2NTQsImV4cCI6MjAyMzkyODY1NH0.2wVhIu3xBJUjyaQUPMadKX8aVyaWUQmjkgJtgAclzpU`;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
