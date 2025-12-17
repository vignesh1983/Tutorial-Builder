# Claude Code Tutorial

A practical guide to using Claude Code effectively, including token management, context handling, and best practices.

---

## Table of Contents

1. [Checking Token Usage & Costs](#1-checking-token-usage--costs)
2. [Understanding Context Length](#2-understanding-context-length)
3. [Best Practices](#3-best-practices)
4. [Essential Commands Reference](#4-essential-commands-reference)

---

## 1. Checking Token Usage & Costs

### Using the `/cost` Command

The primary way to track token usage in Claude Code is the `/cost` command:

```
/cost
```

This displays:
| Metric | Description |
|--------|-------------|
| **Total cost** | Monetary cost of your current session |
| **Total duration (API)** | Time spent communicating with the API |
| **Total duration (wall)** | Total elapsed wall-clock time |
| **Total code changes** | Lines added and removed in this session |

**Example output:**
```
Session Cost Summary
────────────────────
Total cost:           $0.45
API duration:         2m 34s
Wall duration:        15m 22s
Code changes:         +127 / -43 lines
```

### Historical Usage Tracking

For comprehensive usage tracking:

| Method | Description | Access |
|--------|-------------|--------|
| **Claude Console** | View historical usage and costs | Admin or Billing role required |
| **Workspace Spend Limits** | Set budget caps for teams | Admin role in Claude Console |
| **LiteLLM** | For Bedrock/Vertex deployments | Self-hosted tracking |

### Typical Usage Costs

Understanding cost expectations:

```
┌─────────────────────────────────────────────────────────────┐
│                    TYPICAL USAGE COSTS                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Individual Developer                                        │
│  ├── Average: ~$6 per day                                   │
│  ├── 90th percentile: < $12 per day                         │
│  └── Background tasks: ~$0.04 per session (summarization)   │
│                                                              │
│  Team (Monthly)                                              │
│  ├── Typical: $100-200 per developer                        │
│  └── High variance based on usage patterns                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

> **Note:** The `/cost` command is for API users. Claude Max and Pro subscribers have different billing.

---

## 2. Understanding Context Length

### Checking Your Current Model

Use the `/status` command to see your current model and account information:

```
/status
```

### Available Models & Context Windows

| Model Alias | Description | Best For |
|-------------|-------------|----------|
| `default` | Recommended model | General use |
| `sonnet` | Latest Sonnet model | Balanced performance |
| `opus` | Most capable model | Complex reasoning tasks |
| `haiku` | Fast and efficient | Quick tasks, lower cost |
| `sonnet[1m]` | **1 million token context** | Long sessions, large codebases |

### Switching Models

**During a session:**
```
/model sonnet[1m]
```

**Via environment variable:**
```bash
export ANTHROPIC_MODEL=sonnet[1m]
```

**At startup:**
```bash
claude --model sonnet[1m]
```

### Managing Context Length

#### Auto-Compact Feature

Claude Code automatically compacts conversations when context exceeds **95% capacity**. This happens transparently to maintain session continuity.

#### Manual Compaction

Reduce context size manually when needed:

```
/compact
```

With custom instructions to preserve specific content:
```
/compact Focus on the authentication code and API endpoints
```

#### Clear Context Completely

Start fresh between unrelated tasks:
```
/clear
```

### Context Management Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                 CONTEXT MANAGEMENT FLOW                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   Start Session                                              │
│        │                                                     │
│        ▼                                                     │
│   ┌─────────────┐                                           │
│   │ Work on     │                                           │
│   │ Task        │◄─────────────────────────────┐            │
│   └──────┬──────┘                              │            │
│          │                                      │            │
│          ▼                                      │            │
│   ┌─────────────┐    No     ┌─────────────┐   │            │
│   │ Context     │──────────►│ Continue    │───┘            │
│   │ Getting     │           │ Working     │                 │
│   │ Large?      │           └─────────────┘                 │
│   └──────┬──────┘                                           │
│          │ Yes                                               │
│          ▼                                                   │
│   ┌─────────────┐           ┌─────────────┐                 │
│   │ Same Topic? │────Yes───►│ /compact    │─────────────┐  │
│   └──────┬──────┘           └─────────────┘              │  │
│          │ No                                             │  │
│          ▼                                                │  │
│   ┌─────────────┐                                        │  │
│   │ /clear      │                                        │  │
│   │ Start fresh │────────────────────────────────────────┘  │
│   └─────────────┘                                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Best Practices

### Cost Optimization

#### Write Specific Queries

```
# ❌ Vague - triggers broad file scanning
> Look at my code and find issues

# ✅ Specific - focused and efficient
> Review the error handling in src/api/auth.js for potential null pointer issues
```

#### Use File References

Reference files directly with `@` to avoid unnecessary scanning:

```
# ✅ Direct reference
> Explain the authentication flow in @src/utils/auth.js

# ✅ Multiple files
> Compare @src/old-handler.js with @src/new-handler.js
```

#### Break Down Complex Tasks

```
# ❌ Monolithic request
> Refactor the entire authentication system, add OAuth, update tests, and document everything

# ✅ Incremental approach
> Step 1: Analyze the current auth system in @src/auth/
> Step 2: Design the OAuth integration approach
> Step 3: Implement OAuth for Google login
> Step 4: Add tests for the new OAuth flow
> Step 5: Update documentation
```

### Security Best Practices

#### Use Plan Mode for Analysis

Read-only analysis before making changes:

```bash
# Start in plan mode
claude --permission-mode plan
```

Or switch during session:
```
/plan
```

#### Enable Sandboxing

Restrict bash command execution:
```
/sandbox
```

#### Permission Levels

| Mode | Description | Use Case |
|------|-------------|----------|
| `plan` | Read-only, no modifications | Code review, analysis |
| `default` | Prompts for dangerous operations | Normal development |
| `full` | Auto-approves most operations | Trusted environments |

### Effective Workflows

#### Starting a Session

```bash
# Continue previous conversation
claude --continue

# Resume specific conversation (shows picker)
claude --resume

# Start fresh with a specific model
claude --model sonnet[1m]
```

#### Using Extended Thinking

For complex architectural decisions, use thinking prefixes:

```
# Standard thinking
> think: How should I structure the caching layer?

# Extended thinking
> ultrathink: Design a distributed caching system for our microservices
```

#### Parallel Sessions with Git Worktrees

Run multiple Claude Code instances on isolated code:

```bash
# Create a worktree
git worktree add ../feature-branch feature-branch

# Run Claude Code in the worktree
cd ../feature-branch
claude
```

### Team Configuration

#### Custom Slash Commands

Create team-shared workflows in `.claude/commands/`:

```markdown
<!-- .claude/commands/review.md -->
Review the code changes in this PR for:
1. Security vulnerabilities
2. Performance issues
3. Code style consistency
4. Test coverage gaps

Focus on files: $ARGUMENTS
```

Usage:
```
/project:review src/api/
```

#### Rate Limit Recommendations

| Team Size | TPM (per user) | RPM (per user) |
|-----------|----------------|----------------|
| Small (1-5) | 100,000 | 100 |
| Medium (6-20) | 80,000 | 80 |
| Large (20+) | 50,000 | 50 |

---

## 4. Essential Commands Reference

### Session Management

| Command | Description |
|---------|-------------|
| `/status` | Show account info and current model |
| `/cost` | Display token usage and costs |
| `/clear` | Clear conversation history |
| `/compact` | Compress context to save tokens |
| `/model <name>` | Switch to a different model |

### Mode Commands

| Command | Description |
|---------|-------------|
| `/plan` | Enter read-only planning mode |
| `/sandbox` | Enable bash sandboxing |
| `/help` | Show all available commands |

### Navigation

| Command | Description |
|---------|-------------|
| `/resume` | Resume a previous conversation |
| `/tasks` | Show background tasks |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+C` | Cancel current operation |
| `Ctrl+D` | Exit Claude Code |
| `↑` / `↓` | Navigate command history |
| `Tab` | Autocomplete file paths |
| `Esc` | Clear current input |

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│                CLAUDE CODE QUICK REFERENCE                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  CHECK USAGE        /cost                                    │
│  CHECK STATUS       /status                                  │
│  CHANGE MODEL       /model sonnet[1m]                        │
│                                                              │
│  SAVE TOKENS        /compact [instructions]                  │
│  FRESH START        /clear                                   │
│                                                              │
│  SAFE MODE          /plan                                    │
│  SANDBOX            /sandbox                                 │
│                                                              │
│  REFERENCE FILES    @path/to/file.js                        │
│  EXTENDED THINK     ultrathink: [question]                  │
│                                                              │
│  CONTINUE SESSION   claude --continue                        │
│  PICK SESSION       claude --resume                          │
│  MAX CONTEXT        claude --model sonnet[1m]                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Further Resources

- **Cost & Usage Reporting**: https://support.claude.com/en/articles/9534590
- **Workspace Management**: https://support.claude.com/en/articles/9796807
- **Official Documentation**: https://docs.anthropic.com/claude-code

---

*Last updated: December 2024*
