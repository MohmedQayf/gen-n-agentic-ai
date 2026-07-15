import { Pinecone } from "@pinecone-database/pinecone";
import "dotenv/config";

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

await pc.createIndex({
  name: "demo-index",
  dimension: 8,
  metric: "cosine",
  spec: {
    serverless: {
      cloud: "aws",
      region: "us-east-1",
    },
  },
});

console.log("✅ Index created");