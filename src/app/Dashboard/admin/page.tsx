// dashboard/admin/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { PlusCircle, FileText, Users, CheckCircle } from "lucide-react";
import DashboardLayout from "../../components/dashboard-layout";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <DashboardLayout>
      {/* Header with buttons */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-2">
          <Link href="/dashboard/admin/create-paper">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Paper
            </Button>
          </Link>
          <Link href="/dashboard/admin/manage-team">
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Manage Team
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs navigation */}
      <Tabs
        defaultValue="overview"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="papers">Papers</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        {/* Tab content */}
        <TabsContent value="overview" className="space-y-4">
          {/* Overview content */}
        </TabsContent>

        {/* Other tab contents */}
      </Tabs>
    </DashboardLayout>
  );
}
