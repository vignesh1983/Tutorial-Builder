# Session Prompts Archive

A collection of all prompts used in this Tutorial Builder session. Use these for reference, reuse, and improvement.

---

## Table of Contents

1. [Taxonomy Creation](#1-taxonomy-creation)
2. [Folder Structure Generation](#2-folder-structure-generation)
3. [Learning Strategy Document](#3-learning-strategy-document)
4. [Section Introductions](#4-section-introductions)
5. [PDF Generator Script](#5-pdf-generator-script)
6. [Claude Code Tutorial](#6-claude-code-tutorial)
7. [Prompt Patterns & Tips](#7-prompt-patterns--tips)

---

## 1. Taxonomy Creation

### Original Prompt
```
I want to partner with GenAI to create tutorials for learning all different
technologies to become a good Full Stack Engineer. The Full Stack also involves
UI/UX and product management. First we have to come up with a taxonomy like
which can be used to organize the knowledge in an intuitive and easy to
understandable way. Can you suggest a good taxonomy to hold this knowledge.
Create a file called taxonomy.md and store this information
```

### Analysis
| Element | Assessment |
|---------|------------|
| **Context** | Clear - explains the overall goal |
| **Scope** | Defined - Full Stack + UI/UX + Product Management |
| **Output** | Specific - taxonomy.md file |
| **Format** | Implicit - left to AI judgment |

### Potential Improvements
```
Create a hierarchical taxonomy for Full Stack Engineering education that includes:
- Traditional development (frontend, backend, databases, DevOps)
- UI/UX Design
- Product Management
- Professional/soft skills

Requirements:
- Use numbered sections for easy reference (1.1, 1.2, etc.)
- Include 3 levels of hierarchy
- Make it suitable for organizing tutorials
- Include brief descriptions for each category

Save to: taxonomy.md
```

---

## 2. Folder Structure Generation

### Original Prompt
```
Based on taxonomy.md, create a hierarchical folder structure. Retain the
numbering in folder name so that they are in the same order in taxonomy.md
```

### Analysis
| Element | Assessment |
|---------|------------|
| **Reference** | Good - points to existing file |
| **Requirement** | Clear - numbered folders |
| **Reasoning** | Explained - maintain order |

### Potential Improvements
```
Based on taxonomy.md, create a folder structure where:
- Each main section (1, 2, 3...) becomes a top-level folder
- Each subsection (1.1, 1.2...) becomes a subfolder
- Folder names follow pattern: "1-Foundations", "1.1-Computer-Science-Fundamentals"
- Use hyphens instead of spaces for CLI compatibility

Example: 1-Foundations/1.1-Computer-Science-Fundamentals/
```

---

## 3. Learning Strategy Document

### Original Prompt
```
Based on taxonomy.md, Can you provide a strategy to gather and learn knowledge
for each topic. It should be interesting and information. Create this
information in strategy.md
```

### Analysis
| Element | Assessment |
|---------|------------|
| **Reference** | Good - links to taxonomy |
| **Tone** | Specified - interesting and informative |
| **Output** | Clear - strategy.md |
| **Structure** | Implicit - left to AI |

### Potential Improvements
```
Create strategy.md - a learning strategy guide based on taxonomy.md.

For each major section, include:
1. Recommended learning approach/methodology
2. Specific exercises and projects
3. Resources (types, not specific URLs that may expire)
4. Estimated progression path
5. Common pitfalls to avoid

Make it actionable with:
- Concrete exercises, not just theory
- Time-boxed activities
- Measurable milestones
- Tables for quick reference

Tone: Motivating but practical, like advice from a senior engineer
```

---

## 4. Section Introductions

### Original Prompt
```
Based on taxonomy.md, create an introduction for each of the top level items
marked 1,2 etc. In each of this introduction create the following sections,
what I will learn, why I need to learn this, Theoritical concepts to learn,
Practical skills to learn.
```

### Analysis
| Element | Assessment |
|---------|------------|
| **Scope** | Clear - top-level items only |
| **Structure** | Explicit - 4 required sections |
| **Location** | Implicit - assumed in respective folders |

### Potential Improvements
```
Create introduction.md for each top-level folder (1-Foundations through
9-Professional-Skills).

Each introduction must contain these exact sections:

## What I Will Learn
- Bullet points of key topics and skills

## Why I Need to Learn This
- Career relevance
- How it connects to other areas
- Real-world applications

## Theoretical Concepts to Learn
- Table format: Concept | Description | Why It Matters

## Practical Skills to Learn
- Checkbox-style list of actionable skills

Additional requirements:
- Include a visual diagram showing connections to other sections
- End with an inspiring quote relevant to the topic
- List subtopics covered in this section
```

---

## 5. PDF Generator Script

### Original Prompt
```
Write a PDFGenerator javascript file at the root folder. It iterates through
the folders and extracts all .md files and convert them to a single pdf file.
```

### Analysis
| Element | Assessment |
|---------|------------|
| **Language** | Specified - JavaScript |
| **Location** | Specified - root folder |
| **Function** | Clear - iterate, extract, convert |
| **Output** | Clear - single PDF |

### Potential Improvements
```
Create PDFGenerator.js in the root folder with these requirements:

Functionality:
- Recursively scan all subdirectories for .md files
- Sort files by folder number (1-*, 2-*, etc.)
- Put introduction.md first within each section
- Combine all markdown into a single styled PDF

Features needed:
- Cover page with title and generation date
- Auto-generated table of contents
- Page numbers in footer
- Code syntax highlighting
- Professional typography

Technical:
- Use Node.js with npm packages
- Include package.json with dependencies
- Add configuration options at top of file
- Handle errors gracefully with useful messages

Output: FullStackEngineeringGuide.pdf
```

---

## 6. Claude Code Tutorial

### Original Prompt
```
Please create a Claude Code tutorial file. Explain the following. How do I see
the number of tokens used, remaining. How do I check the context length. What
are the best practices.
```

### Analysis
| Element | Assessment |
|---------|------------|
| **Topic** | Specific - Claude Code |
| **Questions** | Listed - 3 specific topics |
| **Format** | Implicit - tutorial file |

### Potential Improvements
```
Create claude-code-tutorial.md covering:

1. Token Usage & Costs
   - Commands to check current usage
   - How to view historical usage
   - Cost estimation guidelines

2. Context Length Management
   - How to check current context size
   - Available models and their context limits
   - Commands to manage/reduce context

3. Best Practices
   - Cost optimization techniques
   - Security recommendations
   - Effective workflow patterns
   - Team configuration tips

Format requirements:
- Include command examples with expected output
- Add tables for quick reference
- Include a "quick reference card" section
- Link to official documentation where applicable
```

---

## 7. Prompt Patterns & Tips

### Effective Prompt Patterns Used

#### Pattern 1: Reference + Transform
```
Based on [existing file], create [new output] with [specific requirements]
```
**Example:** "Based on taxonomy.md, create a hierarchical folder structure"

#### Pattern 2: Explicit Structure
```
Create [output] with the following sections:
- Section 1
- Section 2
- Section 3
```
**Example:** "create the following sections: what I will learn, why I need to learn this..."

#### Pattern 3: Tool + Location + Function
```
Write a [tool type] [file name] at [location]. It [does X, Y, Z]
```
**Example:** "Write a PDFGenerator javascript file at the root folder. It iterates through..."

### Tips for Better Prompts

#### Be Specific About Output Format
```
# ❌ Vague
Create documentation for the project

# ✅ Specific
Create README.md with sections: Overview, Installation, Usage, API Reference, Contributing
```

#### Provide Context and Purpose
```
# ❌ No context
Create a taxonomy

# ✅ With context
I want to create tutorials for Full Stack Engineering. Create a taxonomy
to organize this knowledge in an intuitive way.
```

#### Specify Constraints
```
# ❌ Open-ended
Create folder structure

# ✅ Constrained
Create folder structure with numbered prefixes (1-, 2-) to maintain order,
using hyphens instead of spaces
```

#### Request Specific Sections
```
# ❌ Implicit structure
Write an introduction

# ✅ Explicit structure
Write an introduction with these sections:
1. What I Will Learn
2. Why I Need to Learn This
3. Theoretical Concepts (as a table)
4. Practical Skills (as checkboxes)
```

### Prompt Template for Tutorial Creation

```markdown
Create [filename] for [topic/section].

## Purpose
[Why this document exists and who it's for]

## Required Sections
1. [Section 1 name] - [brief description]
2. [Section 2 name] - [brief description]
3. [Section 3 name] - [brief description]

## Format Requirements
- [Tables/lists/code blocks as needed]
- [Tone: technical/casual/motivating]
- [Length: brief/comprehensive]

## References
- Base content on: [existing files]
- Link to: [related documents]

## Output Location
Save to: [path/filename.md]
```

---

## Session Statistics

| Metric | Value |
|--------|-------|
| **Total Prompts** | 7 |
| **Files Created** | 14 |
| **Folders Created** | 48 |
| **PDF Generated** | 1 (2.22 MB) |

### Files Created This Session

```
Tutorial Builder/
├── taxonomy.md
├── strategy.md
├── PDFGenerator.js
├── package.json
├── claude-code-tutorial.md
├── Prompts.md (this file)
├── FullStackEngineeringGuide.pdf
├── output.html
├── 1-Foundations/introduction.md
├── 2-Frontend-Development/introduction.md
├── 3-Backend-Development/introduction.md
├── 4-Databases-Data/introduction.md
├── 5-DevOps-Infrastructure/introduction.md
├── 6-UI-UX-Design/introduction.md
├── 7-Product-Management/introduction.md
├── 8-Emerging-Technologies/introduction.md
└── 9-Professional-Skills/introduction.md
```

---

## Reusable Prompt Templates

### For Creating New Sections
```
Based on taxonomy.md section [X.X], create a comprehensive tutorial covering:
- Core concepts with examples
- Hands-on exercises
- Common mistakes to avoid
- Project ideas for practice

Save to: [folder]/[topic].md
```

### For Generating Code Examples
```
Create a practical code example demonstrating [concept] in [language].

Requirements:
- Working, runnable code
- Comments explaining key parts
- Common variations shown
- Error handling included

Save to: [folder]/examples/[name].[ext]
```

### For Creating Assessments
```
Create a self-assessment quiz for [section] with:
- 10 multiple choice questions
- 5 practical exercises
- Answer key with explanations
- Scoring rubric

Save to: [folder]/assessment.md
```

---

*This file serves as both documentation and a prompt engineering reference for future sessions.*
