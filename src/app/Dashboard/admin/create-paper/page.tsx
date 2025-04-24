"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Checkbox } from "../../../components/ui/checkbox";
import DashboardLayout from "../../../components/dashboard-layout";

export default function CreatePaper() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paperData, setPaperData] = useState({
    title: "",
    description: "",
    paperType: "",
    year: "2025",
    file: null as File | null,
    assignToTeam: false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaperData({
        ...paperData,
        file: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real app, this would connect to the backend
      // Simulating API call for preview
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard/admin");
    } catch (error) {
      console.error("Error creating paper:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Create New Paper</h1>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Paper Details</CardTitle>
            <CardDescription>
              Enter the details for the new chemistry paper
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Paper Title</Label>
              <Input
                id="title"
                placeholder="e.g., Chemistry Main Paper"
                value={paperData.title}
                onChange={(e) =>
                  setPaperData({ ...paperData, title: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="paperType">Paper Type</Label>
                <Select
                  value={paperData.paperType}
                  onValueChange={(value: any) =>
                    setPaperData({ ...paperData, paperType: value })
                  }
                  required
                >
                  <SelectTrigger id="paperType">
                    <SelectValue placeholder="Select paper type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="al-class">AL Paper Class</SelectItem>
                    <SelectItem value="main-paper">Main Paper</SelectItem>
                    <SelectItem value="self-studies">Self Studies</SelectItem>
                    <SelectItem value="revision">Revision Paper</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Select
                  value={paperData.year}
                  onValueChange={(value: any) =>
                    setPaperData({ ...paperData, year: value })
                  }
                  required
                >
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter details about this paper..."
                value={paperData.description}
                onChange={(e) =>
                  setPaperData({ ...paperData, description: e.target.value })
                }
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Upload Paper (PDF)</Label>
              <Input
                id="file"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="assignToTeam"
                checked={paperData.assignToTeam}
                onCheckedChange={(checked: boolean) =>
                  setPaperData({
                    ...paperData,
                    assignToTeam: checked as boolean,
                  })
                }
              />
              <Label htmlFor="assignToTeam">
                Assign to marking team immediately
              </Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isSubmitting} className="mr-2">
              {isSubmitting ? "Creating..." : "Create Paper"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/admin")}
            >
              Cancel
            </Button>
          </CardFooter>
        </form>
      </Card>
    </DashboardLayout>
  );
}
