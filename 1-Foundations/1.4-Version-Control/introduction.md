# 1.4 Version Control

The safety net and time machine for your code. Version control is the single most important collaboration tool in software development—enabling teams to work together and individuals to experiment fearlessly.

---

## What I Will Learn

- **Git Fundamentals**: Repositories, commits, branches, and merging—the core concepts that power modern development
- **Branching Strategies**: GitFlow, trunk-based development, and feature branches—organizing work effectively
- **Collaboration Workflows**: Pull requests, code review, fork-and-clone, and resolving conflicts
- **Code Review Practices**: How to give and receive feedback that improves code and builds teams

---

## Why I Need to Learn This

### Career Relevance

| Context | Why It Matters |
|---------|----------------|
| **Universal Requirement** | 100% of professional development jobs use version control |
| **Collaboration** | You cannot work on a team without Git proficiency |
| **Interview Expectation** | Git competence is assumed; incompetence is disqualifying |
| **Open Source** | Contributing to any project requires Git skills |

### How It Connects to Other Areas

- **Frontend/Backend**: Every line of code you write gets committed
- **DevOps**: CI/CD pipelines are triggered by Git events
- **Product Management**: Release management and changelog generation
- **Professional Skills**: Code review is a critical collaboration skill
- **All Development**: History enables debugging, auditing, and accountability

### Real-World Applications

```
Feature Development     → Branch, develop, merge workflow
Bug Fixing              → Hotfix branches, cherry-picking
Release Management      → Tags, release branches
Collaboration           → Pull requests, code review
Rollback                → Reverting bad deployments
Investigation           → Git blame, bisect for bug hunting
```

---

## Theoretical Concepts to Learn

| Concept | Description | Why It Matters |
|---------|-------------|----------------|
| **DAG (Directed Acyclic Graph)** | Git's internal data structure—commits pointing to parents | Understand how history really works |
| **Three Trees** | Working directory, staging area (index), repository | Master the add/commit workflow |
| **Commit SHA** | 40-character hash uniquely identifying each commit | Reference specific points in history |
| **HEAD** | Pointer to current commit/branch | Understand where you are in history |
| **Refs** | Pointers to commits (branches, tags, HEAD) | Navigate and organize history |
| **Fast-Forward Merge** | Linear merge when no divergence exists | Understand merge types |
| **Three-Way Merge** | Merge with a common ancestor | Understand how conflicts arise |
| **Rebase** | Replay commits on top of another base | Create linear history |
| **Detached HEAD** | HEAD pointing directly to a commit, not a branch | Avoid accidentally losing work |
| **Remote Tracking Branches** | Local references to remote branch states | Understand fetch vs pull |

---

## Practical Skills to Learn

### Git Basics
```
□ Initialize a repository (git init)
□ Clone repositories (git clone)
□ Check status (git status)
□ Stage changes (git add)
□ Commit with meaningful messages (git commit)
□ View history (git log, git log --oneline --graph)
□ See differences (git diff, git diff --staged)
□ Ignore files with .gitignore
```

### Branching & Merging
```
□ Create branches (git branch, git checkout -b)
□ Switch branches (git checkout, git switch)
□ List branches (git branch -a)
□ Merge branches (git merge)
□ Delete branches (git branch -d)
□ Understand fast-forward vs merge commits
□ Use rebase for linear history (git rebase)
□ Interactive rebase to clean up history (git rebase -i)
```

### Remote Collaboration
```
□ Add remotes (git remote add)
□ Fetch changes (git fetch)
□ Pull changes (git pull)
□ Push changes (git push)
□ Set upstream branches (git push -u)
□ Track remote branches
□ Fork repositories and keep in sync
□ Create and manage pull requests
```

### Conflict Resolution
```
□ Understand why conflicts happen
□ Identify conflicting files
□ Read conflict markers (<<<<<<<, =======, >>>>>>>)
□ Resolve conflicts manually
□ Use merge tools (VS Code, meld, etc.)
□ Abort a conflicted merge (git merge --abort)
□ Continue after resolving (git add, git commit)
```

### Advanced Git
```
□ Stash changes (git stash, git stash pop)
□ Cherry-pick commits (git cherry-pick)
□ Reset commits (soft, mixed, hard)
□ Revert commits (git revert)
□ Find bug-introducing commits (git bisect)
□ Find who changed a line (git blame)
□ Recover from mistakes (git reflog)
□ Clean up untracked files (git clean)
```

### Code Review
```
□ Create descriptive pull requests
□ Review others' code constructively
□ Request changes appropriately
□ Respond to feedback professionally
□ Approve and merge PRs
□ Use review comments effectively
□ Squash commits when appropriate
```

---

## Visual Connection Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       1.4 VERSION CONTROL                                │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        │                           │                           │
        ▼                           ▼                           ▼
┌───────────────┐          ┌───────────────┐          ┌───────────────┐
│   LOCAL GIT   │          │  BRANCHING    │          │    REMOTE     │
│  OPERATIONS   │          │  STRATEGIES   │          │ COLLABORATION │
├───────────────┤          ├───────────────┤          ├───────────────┤
│ • init/clone  │          │ • Feature     │          │ • push/pull   │
│ • add/commit  │          │ • GitFlow     │          │ • fetch       │
│ • diff/log    │          │ • Trunk-based │          │ • fork/clone  │
│ • status      │          │ • Hotfix      │          │ • upstream    │
└───────┬───────┘          └───────┬───────┘          └───────┬───────┘
        │                          │                          │
        └──────────────────────────┼──────────────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    │                             │
                    ▼                             ▼
           ┌───────────────┐             ┌───────────────┐
           │   CONFLICT    │             │  CODE REVIEW  │
           │  RESOLUTION   │             │   PRACTICES   │
           ├───────────────┤             ├───────────────┤
           │ • Markers     │             │ • PRs         │
           │ • Merge tools │             │ • Feedback    │
           │ • Strategies  │             │ • Approval    │
           └───────┬───────┘             └───────┬───────┘
                   │                             │
                   └──────────────┬──────────────┘
                                  │
                                  ▼
                   ┌──────────────────────────────┐
                   │          CI/CD               │
                   │    DEVOPS PIPELINES          │
                   ├──────────────────────────────┤
                   │  Triggered by Git events     │
                   │  (push, PR, merge)           │
                   └──────────────────────────────┘
```

---

## Git Mental Model: The Three Trees

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         GIT'S THREE TREES                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   ┌─────────────────┐    git add    ┌─────────────────┐    git commit   │
│   │    WORKING      │ ───────────►  │    STAGING      │ ───────────►   │
│   │   DIRECTORY     │               │   AREA (INDEX)  │                 │
│   │                 │  ◄───────────  │                 │                 │
│   │ Your actual     │   git restore │ Files ready to  │                 │
│   │ files on disk   │               │ be committed    │                 │
│   └─────────────────┘               └─────────────────┘                 │
│                                                                          │
│                                            ┌─────────────────┐          │
│                                            │   REPOSITORY    │          │
│                                       ◄────│    (HEAD)       │          │
│                       git checkout         │                 │          │
│                       git restore --staged │ Committed       │          │
│                                            │ history         │          │
│                                            └─────────────────┘          │
│                                                                          │
│   WORKFLOW:                                                              │
│   1. Edit files in working directory                                    │
│   2. Stage changes you want to commit (git add)                         │
│   3. Commit staged changes to repository (git commit)                   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Branching Strategies Compared

### Feature Branch Workflow
```
main ─────●─────●─────────────────●─────●─────
           \                     /
feature     ●─────●─────●───────●
```
**Best for:** Most teams, clear feature isolation

### GitFlow
```
main     ─────●─────────────────────●───────────
              │                     │
release       │    ●────●───●───────●
              │   /           \
develop  ─────●──●─────────────●────────────────
               \             /
feature         ●─────●─────●
```
**Best for:** Projects with scheduled releases

### Trunk-Based Development
```
main ─────●─────●─────●─────●─────●─────●─────
          │     │     │     │     │     │
          ▼     ▼     ▼     ▼     ▼     ▼
        Small, frequent commits
        Feature flags for incomplete work
```
**Best for:** Continuous deployment, experienced teams

---

## Commit Message Best Practices

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
```
feat:     New feature
fix:      Bug fix
docs:     Documentation only
style:    Formatting, no code change
refactor: Code change, no feature/fix
test:     Adding tests
chore:    Maintenance tasks
```

### Examples

**Good:**
```
feat(auth): add OAuth2 login with Google

- Implement OAuth2 flow using passport.js
- Add Google strategy configuration
- Create callback route handler

Closes #123
```

**Bad:**
```
fixed stuff
```

---

## Subtopics Covered

1. **Git Fundamentals**
   - Repository initialization
   - Staging and committing
   - Viewing history
   - .gitignore patterns

2. **Branching Strategies**
   - Feature branches
   - GitFlow workflow
   - Trunk-based development
   - Release management

3. **Collaboration Workflows**
   - Pull/merge requests
   - Fork and clone
   - Upstream synchronization
   - Conflict resolution

4. **Code Review Practices**
   - Creating effective PRs
   - Reviewing code constructively
   - Giving and receiving feedback
   - Approval workflows

---

## Common Git Scenarios & Solutions

| Scenario | Command |
|----------|---------|
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |
| Undo last commit (discard changes) | `git reset --hard HEAD~1` |
| Discard all local changes | `git checkout -- .` |
| See what changed in a commit | `git show <commit>` |
| Find who wrote a line | `git blame <file>` |
| Find which commit broke something | `git bisect start` |
| Save work without committing | `git stash` |
| Apply stashed work | `git stash pop` |
| Recover deleted branch | `git reflog` then `git checkout <sha>` |
| Squash last N commits | `git rebase -i HEAD~N` |
| Change last commit message | `git commit --amend` |
| Cherry-pick a commit | `git cherry-pick <sha>` |

---

## The Golden Rules of Git

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       GOLDEN RULES OF GIT                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  1. COMMIT OFTEN, PUSH REGULARLY                                        │
│     Small commits are easier to understand, review, and revert          │
│                                                                          │
│  2. NEVER FORCE PUSH TO SHARED BRANCHES                                 │
│     Rewriting shared history breaks everyone else's work                │
│                                                                          │
│  3. WRITE MEANINGFUL COMMIT MESSAGES                                    │
│     Your future self (and teammates) will thank you                     │
│                                                                          │
│  4. BRANCH FOR EVERY FEATURE/FIX                                        │
│     Keep main stable and always deployable                              │
│                                                                          │
│  5. REVIEW BEFORE YOU MERGE                                             │
│     A second pair of eyes catches bugs and improves quality             │
│                                                                          │
│  6. PULL BEFORE YOU PUSH                                                │
│     Stay in sync with the team to avoid conflicts                       │
│                                                                          │
│  7. WHEN IN DOUBT, BRANCH OUT                                           │
│     Experiments are free when you branch first                          │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

*"Git gets easier once you understand branches are homeomorphic endofunctors mapping submanifolds of a Hilbert space." — Just kidding. Git gets easier with practice.*

Version control is your safety net. With Git, every experiment is reversible, every mistake is recoverable, and every contribution is tracked.
