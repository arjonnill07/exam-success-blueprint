
import React from 'react';

export interface Strategy {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: StrategyCategory;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  howTo?: string[];
  benefits?: string[];
  realWorldExamples?: string[];
  examPrepFocus?: string[]; // Added for direct exam application
  interactiveComponent?: React.ReactNode;
  visualExplainerComponent?: React.FC<React.SVGProps<SVGSVGElement>>; // For visual explanation
  visualExplainerCaption?: string; // Caption for the visual explainer
}

export enum StrategyCategory {
  TIME_MANAGEMENT = "Time Management",
  LEARNING_TECHNIQUES = "Learning Techniques",
  MEMORY_ENHANCEMENT = "Memory Enhancement",
  STRESS_MANAGEMENT = "Stress Management",
  CONCEPT_MASTERY = "Concept Mastery",
}

export interface Subject {
  id: string;
  name: string;
  progress: number; // 0-100
  notes?: string;
  examDate?: string; // Added for exam scheduling
}

export interface PlannerTask {
  id: string;
  subjectId?: string;
  taskName: string;
  dueDate?: string; // ISO string for date input
  isCompleted: boolean;
  priority: 'low' | 'medium' | 'high';
  linkedStrategyIds?: string[]; // For linking strategies to tasks
}

export enum BloomLevel {
  REMEMBERING = "Remembering",
  UNDERSTANDING = "Understanding",
  APPLYING = "Applying",
  ANALYZING = "Analyzing",
  EVALUATING = "Evaluating",
  CREATING = "Creating",
}

export interface BloomStage {
  level: BloomLevel;
  description: string;
  activities: string[];
}