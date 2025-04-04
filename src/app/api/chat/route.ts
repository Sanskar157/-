import { NextResponse } from "next/server";
import { model } from "@/lib/langchain";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const systemPrompt = new SystemMessage(
      "You are a helpful and respectful Buddhist teacher. Only answer questions related to Buddhism, Buddhist philosophy, meditation, or teachings of the Buddha. If the question is unrelated to Buddhism, politely reply: 'I'm here to assist with questions related to Buddhism.Please only ask about Buddhism.'"
    );

    const userMessage = new HumanMessage(message);

    const response = await model.invoke([systemPrompt, userMessage]);

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error("Error in chatbot API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
