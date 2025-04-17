"use client";

import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Eye, CheckCircle, XCircle } from "lucide-react";
import { Paper } from "../../../models/Paper";

// Your component code
export default function ReviewerPage() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await fetch("/api/papers"); // Ensure the correct API endpoint is used

        if (!response.ok) {
          throw new Error("Failed to fetch papers");
        }
        const data = await response.json();
        setPapers(data); // Set the papers state
      } catch (err) {
        console.error("Error fetching papers:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false); // Hide loading spinner after fetching
      }
    };

    fetchPapers();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Assigned Papers</h1>

      {papers.length === 0 ? (
        <p className="text-muted-foreground">No papers assigned for review.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Review Cycle</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {papers.map((paper) => (
              <TableRow key={paper._id}>
                <TableCell className="font-medium">{paper.title}</TableCell>
                <TableCell className="capitalize">{paper.status}</TableCell>
                <TableCell>{paper.reviewCycle}/3</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{new Date(paper.dueDate).toLocaleDateString()}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(paper.dueDate) < new Date()
                        ? "Overdue"
                        : `${Math.ceil(
                            (new Date(paper.dueDate).getTime() -
                              new Date().getTime()) /
                              (1000 * 60 * 60 * 24)
                          )} days left`}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <a href={`/review/${paper._id}`}>
                    {paper.status === "completed" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    ) : paper.status === "in-progress" ? (
                      <Button size="sm" className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Continue Review
                      </Button>
                    ) : (
                      <Button size="sm" className="flex items-center">
                        <XCircle className="mr-2 h-4 w-4" />
                        Start Review
                      </Button>
                    )}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
