import { useEffect, useState } from "react";

interface QuoteIF {
  author: string;

  authorSlug: string;

  content: string;

  dateAdded: string;

  dateModified: string;

  length: number;

  tags: string[];

  _id: string;
}

export default function Quote() {
  const [quote, SetQuote] = useState("");

  useEffect(() => {
    try {
      getQuote();
    } catch (err) {
      console.error("Error fetching quote:", err);
    }

    async function getQuote() {
      const response = await fetch(
        "http://api.quotable.io/quotes/random?maxLength=150&tags=success|time",
      );
      if (!response.ok) throw new Error("Failed to fetch quote1");
      const data: QuoteIF[] = await response.json();
      if (!data.length) throw new Error("No quote Found");
      quoteHandler(data[0].content);
    }
    function quoteHandler(newQuote: string) {
      SetQuote(newQuote);
    }
  }, []);
  return (
    <div className="flex h-34 w-11/12 flex-col items-center justify-end md:w-4/10">
      <p className="text-center text-2xl">{quote}</p>
    </div>
  );
}
