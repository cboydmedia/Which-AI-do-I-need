import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const tools = [
  {
    name: "Jasper AI",
    category: "Writing",
    description: "AI content creation tool for blogs, ads, and more.",
    link: "https://jasper.ai?ref=yourID",
  },
  {
    name: "Midjourney",
    category: "Image Generation",
    description: "Text-to-image generator with stunning results.",
    link: "https://midjourney.com",
  },
  {
    name: "Notion AI",
    category: "Productivity",
    description: "AI integrated into Notion for note-taking and summaries.",
    link: "https://notion.so",
  },
  {
    name: "Copy.ai",
    category: "Marketing",
    description: "AI writing assistant for emails, ads, and social content.",
    link: "https://copy.ai",
  },
  {
    name: "Runway ML",
    category: "Video Editing",
    description: "AI-powered video editing and special effects platform.",
    link: "https://runwayml.com",
  }
];

export default function AIToolMatchmaker() {
  const [category, setCategory] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = tools.filter(tool =>
      tool.category.toLowerCase().includes(category.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">AI Tool Matchmaker</h1>
      <p className="mb-6 text-center">Find the perfect AI tool based on what you need. Try categories like: Writing, Image Generation, Video Editing, Marketing, or Productivity.</p>

      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Enter category..."
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <Button onClick={handleSearch}>Find Tools</Button>
      </div>

      <div className="grid gap-4">
        {results.map(tool => (
          <Card key={tool.name}>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{tool.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{tool.category}</p>
              <p>{tool.description}</p>
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 inline-block"
              >
                Visit Tool
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
initial code upload
