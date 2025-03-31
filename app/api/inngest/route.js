import { inngest } from "@/lib/inngest/client"; // Ensure the correct path
import { serve } from "inngest/next";
import { generateIndustryInsights } from "@/lib/inngest/functions";
// import { helloWorld } from "@/lib/inngest/functions";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    generateIndustryInsights, // Add your functions here
    // helloWorld, 
  ],
});
