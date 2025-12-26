import { streamText } from "ai"
import { createOpenAI } from "@ai-sdk/openai"
import { getPortAransasContext } from "@/lib/chat-context"

// Configure OpenAI provider to use Vercel AI Gateway
const gateway = createOpenAI({
  baseURL: "https://ai-gateway.vercel.sh/v1",
  apiKey: process.env.AI_GATEWAY_API_KEY,
})

const SYSTEM_PROMPT = `You are Sandy, a friendly and knowledgeable Port Aransas real estate assistant for Port Aransas Estates.

Your expertise includes:
- Port Aransas real estate market, property values, and neighborhoods
- Local restaurants, bars, shops, and attractions
- Fishing (deep sea, bay, pier), water sports, and outdoor activities
- Annual events and festivals (Texas SandFest, Deep Sea Roundup, etc.)
- Best times to visit and seasonal information
- Vacation rental investment opportunities
- Beach lifestyle and what makes Port A special

Guidelines:
- Be warm, helpful, and enthusiastic about Port Aransas
- Keep responses concise (2-3 paragraphs max) but informative
- When someone shows serious interest, suggest they contact the team through the website's contact form
- Share local tips and insider knowledge when relevant
- Reference specific properties, restaurants, or events from your knowledge when appropriate
- If asked about specific listings or prices, mention you can help them explore options and they should reach out for current availability
- Always be honest - if you don't know something specific, say so and offer to connect them with the team

Here is current information about Port Aransas to help you answer questions:

{context}
`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Get Port Aransas context for the AI
    const context = getPortAransasContext()

    const result = await streamText({
      model: gateway("gpt-4o-mini"),
      system: SYSTEM_PROMPT.replace("{context}", context),
      messages,
      maxTokens: 500,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response(
      JSON.stringify({ error: "Failed to process chat request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}
