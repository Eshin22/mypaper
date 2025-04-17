// pages/api/papers.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../src/lib/mongo';  // Import connection helper
import Paper from '../../src/models/Paper';  // Import your Paper model

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Ensure the database is connected
    await connectToDatabase();

    // Fetch all papers from the database
    const papers = await Paper.find({});
    
    // Return the papers as a JSON response
    res.status(200).json(papers);
  } catch (error) {
    console.error('Error fetching papers:', error);
    res.status(500).json({ error: 'Failed to fetch papers' });
  }
}
