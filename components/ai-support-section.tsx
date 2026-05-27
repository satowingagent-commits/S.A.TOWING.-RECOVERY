"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Send, MessageCircle } from "lucide-react";

export function AiSupportSection() {
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsLoading(true);
    // Simulate AI response - replace with actual AI integration
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert(`Your question "${question}" has been received. Our AI assistant will respond shortly.`);
    setQuestion("");
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Bot className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            24/7 AI Support Assistant
          </h2>
        </div>

        <Card className="bg-card border-border">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg text-foreground">How can we help you?</CardTitle>
            </div>
            <CardDescription className="text-base">
              Ask questions about vehicle releases, transport approvals,
              redemption requirements, fees, and appointments.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="text"
                placeholder="Ask a question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="flex-1 h-12 bg-input border-primary/30 focus:border-primary"
              />
              <Button 
                type="submit" 
                disabled={isLoading || !question.trim()}
                className="h-12 px-6 bg-secondary hover:bg-secondary/90"
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
