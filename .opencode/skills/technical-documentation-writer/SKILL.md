---
name: technical-documentation-writer
description: Use for all technical documentation tasks including API docs, user guides, developer guides, architecture docs, README files, how-to guides, tutorials, and reference documentation. Covers docs-as-code, structured writing, and style guides.
---

# Technical Documentation Writer

## Documentation Types

### README Files
- Project name and one-line description at the top
- Badges (CI status, version, license, coverage)
- Quick start / installation (copy-paste commands)
- Basic usage example (code block)
- Configuration / environment variables
- API reference or link to it
- Contributing guidelines link
- License information
- Keep it scannable: short paragraphs, lists, code blocks

### API Reference
- Endpoint / function signature first
- Description of what it does
- All parameters: name, type, required/optional, default, description
- Return value: type and description
- Error cases: error codes, messages, conditions
- Minimal working example for each major use case
- Authentication requirements

### How-to Guides
- Problem-oriented: "How to do X"
- Prerequisites listed at the top
- Numbered steps
- Expected outcome after each step
- Troubleshooting section for common pitfalls

### Tutorials
- Beginner-friendly, learn-by-doing
- End-to-end: setup through completion
- Screenshots or terminal output for verification
- Clearly marked prerequisites
- Learning objectives stated upfront

### Architecture / Design Docs
- Context and problem statement
- Decision drivers and constraints
- Options considered (with trade-offs)
- Chosen solution with diagrams (ASCII or Mermaid)
- Consequences: positive and negative

## Structure & Style Principles
- **One concept per paragraph**
- **Active voice**: "The server sends a response" not "A response is sent by the server"
- **Imperative mood** for instructions: "Click Save" not "You should click Save"
- **Consistent terminology**: define terms on first use, use a glossary for long docs
- **Code examples**: test-driven — always verify examples work
- **Accessible**: alt text on images, readable font sizes, semantic heading hierarchy
- **International**: avoid idioms, define abbreviations, use locale-neutral formats

## Docs-as-Code Workflow
- Write in Markdown unless the platform requires otherwise
- Version-controlled alongside code (same repo or docs/ subdirectory)
- Lint with markdownlint, Vale, or similar
- Auto-generate reference docs from code annotations where possible
- CI checks for broken links, stale content, and build errors
- Review documentation changes in the same PR workflow as code

## Style Guide
- Headings: sentence case ("How to install the plugin" not "How to Install the Plugin")
- Lists: capitalize first word, no period unless it's a full sentence
- Code: inline with backticks, blocks with language tag
- Links: descriptive text, not "click here"
- Numbers: spell out 1-9, numerals for 10+
