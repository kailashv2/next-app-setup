"use client";

import { useState } from "react";
import { proposalSections, getSectionById } from "@/lib/proposalContent";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

export default function ProposalPage() {
  const [selectedSectionId, setSelectedSectionId] = useState<string>("executive-summary");
  const selectedSection = getSectionById(selectedSectionId);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900 mb-2">
            Smart Community Health Monitoring System
          </h1>
          <p className="text-sm text-gray-600">
            Investment-Grade Project Proposal
          </p>
          <Badge variant="secondary" className="mt-2">
            MedTech / HealthTech
          </Badge>
        </div>

        <ScrollArea className="flex-1 p-4">
          <nav className="space-y-2">
            {proposalSections.map((section, index) => (
              <Button
                key={section.id}
                variant={selectedSectionId === section.id ? "default" : "ghost"}
                className="w-full justify-start text-left h-auto p-3"
                onClick={() => setSelectedSectionId(section.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-medium flex items-center justify-center mt-0.5">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">
                      {section.title}
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </nav>
        </ScrollArea>

        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 space-y-1">
            <div>Total Budget: ₹45.8 crores</div>
            <div>Duration: 36 months</div>
            <div>Target: 500,000+ people</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedSection?.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Section {proposalSections.findIndex(s => s.id === selectedSectionId) + 1} of {proposalSections.length}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const currentIndex = proposalSections.findIndex(s => s.id === selectedSectionId);
                  if (currentIndex > 0) {
                    setSelectedSectionId(proposalSections[currentIndex - 1].id);
                  }
                }}
                disabled={proposalSections.findIndex(s => s.id === selectedSectionId) === 0}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const currentIndex = proposalSections.findIndex(s => s.id === selectedSectionId);
                  if (currentIndex < proposalSections.length - 1) {
                    setSelectedSectionId(proposalSections[currentIndex + 1].id);
                  }
                }}
                disabled={proposalSections.findIndex(s => s.id === selectedSectionId) === proposalSections.length - 1}
              >
                Next
              </Button>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-8">
            <Card>
              <CardContent className="p-8">
                {selectedSection && (
                  <MarkdownRenderer content={selectedSection.content} />
                )}
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
