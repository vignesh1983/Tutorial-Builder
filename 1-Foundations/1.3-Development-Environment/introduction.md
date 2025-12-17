# 1.3 Development Environment

Your digital workshop. A well-configured development environment is like a craftsman's perfectly organized workbench—every tool in reach, every action optimized, friction eliminated.

---

## What I Will Learn

- **Terminal/Command Line**: Navigate filesystems, run programs, chain commands, and automate tasks using the shell
- **Code Editors & IDEs**: Master your primary tool—keyboard shortcuts, extensions, customization, and debugging features
- **Package Managers**: Install, update, and manage dependencies and tools (npm, pip, brew, apt)
- **Debugging Tools**: Use debuggers, profilers, and diagnostic tools to find and fix problems efficiently

---

## Why I Need to Learn This

### Career Relevance

| Context | Why It Matters |
|---------|----------------|
| **Daily Efficiency** | You'll spend 8+ hours/day in your dev environment—small optimizations compound |
| **10x Productivity** | Masters of their tools complete tasks in minutes that take others hours |
| **Professional Credibility** | Fumbling with tools in pair programming or interviews undermines confidence |
| **Remote Work** | Can't ask someone to fix your setup when working from home |

### How It Connects to Other Areas

- **All Development**: Every line of code you write passes through these tools
- **DevOps**: CI/CD pipelines use the same terminal commands you use locally
- **Collaboration**: Shared configurations ensure team consistency
- **Debugging**: Environment mastery is essential for troubleshooting production issues

### Real-World Applications

```
Project Setup          → Package managers installing dependencies
Code Navigation        → Editor's go-to-definition, find all references
Bug Investigation      → Debugger stepping through code execution
Automation             → Shell scripts for repetitive tasks
Remote Servers         → SSH and terminal-only environments
```

---

## Theoretical Concepts to Learn

| Concept | Description | Why It Matters |
|---------|-------------|----------------|
| **Shell vs Terminal** | Terminal is the window; shell (bash, zsh, fish) is the interpreter | Understand what you're actually configuring |
| **PATH Environment Variable** | Directories searched when you run a command | Fix "command not found" errors |
| **Standard Streams** | stdin, stdout, stderr—input/output channels | Understand piping and redirection |
| **Exit Codes** | Numeric status returned by commands (0 = success) | Chain commands conditionally |
| **Process Management** | Foreground, background, signals (SIGTERM, SIGKILL) | Control running programs |
| **File Permissions** | Read, write, execute for user/group/others | Debug permission denied errors |
| **Environment Variables** | Key-value pairs available to all processes | Configure applications without code changes |
| **Symbolic Links** | Pointers to files/directories elsewhere | Organize projects flexibly |
| **LSP (Language Server Protocol)** | Standard protocol for editor intelligence | Understand how autocomplete works |
| **Dotfiles** | Hidden config files (.bashrc, .vimrc, .gitconfig) | Customize and backup your environment |

---

## Practical Skills to Learn

### Terminal Navigation
```
□ Navigate directories with cd, pwd, ls
□ Use tab completion for paths and commands
□ Navigate command history with up/down and Ctrl+R
□ Use wildcards (*, ?, []) for pattern matching
□ Understand absolute vs relative paths
□ Use pushd/popd for directory stack navigation
□ Find files with find and locate commands
□ Search file contents with grep
```

### Terminal Power Features
```
□ Pipe output between commands (command1 | command2)
□ Redirect output to files (>, >>)
□ Run commands in background (&)
□ Use Ctrl+Z and bg/fg for job control
□ Chain commands with && (success) and || (failure)
□ Use xargs to build commands from input
□ Create command aliases for common operations
□ Write basic shell scripts for automation
```

### Code Editor Mastery (VS Code / Your Editor)
```
□ Navigate files with Cmd/Ctrl+P (quick open)
□ Search across project with Cmd/Ctrl+Shift+F
□ Use multi-cursor editing (Alt+Click, Cmd+D)
□ Master find and replace with regex
□ Use keyboard shortcuts for common actions
□ Navigate with go-to-definition (F12)
□ See all references (Shift+F12)
□ Use integrated terminal
□ Configure useful extensions
□ Create code snippets for boilerplate
□ Use workspace settings for project config
```

### Debugging Skills
```
□ Set breakpoints in code
□ Step through code (step over, step into, step out)
□ Inspect variables and watch expressions
□ Use conditional breakpoints
□ Debug async code and promises
□ Read and understand stack traces
□ Use console.log strategically (when, where, what)
□ Profile code for performance bottlenecks
```

### Package Management
```
□ Initialize projects (npm init, pip venv, etc.)
□ Install packages locally and globally
□ Understand dependency versions and semver
□ Lock dependency versions (package-lock.json, etc.)
□ Update packages safely
□ Remove unused packages
□ Audit for security vulnerabilities
□ Publish packages (if creating libraries)
```

### Environment Configuration
```
□ Set environment variables (export, .env files)
□ Configure shell profile (.bashrc, .zshrc)
□ Create and manage dotfiles
□ Set up version control for configurations
□ Configure git globally (user, editor, aliases)
□ Set up SSH keys for GitHub/servers
```

---

## Visual Connection Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    1.3 DEVELOPMENT ENVIRONMENT                           │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
        ┌───────────────────────────┴───────────────────────────┐
        │                                                       │
        ▼                                                       ▼
┌───────────────────────────────────┐       ┌───────────────────────────────┐
│         COMMAND LINE              │       │         CODE EDITOR           │
├───────────────────────────────────┤       ├───────────────────────────────┤
│                                   │       │                               │
│  ┌───────────┐   ┌───────────┐   │       │  ┌───────────┐ ┌───────────┐ │
│  │  Terminal │   │   Shell   │   │       │  │  Editor   │ │Extensions │ │
│  │  (Window) │   │ (bash/zsh)│   │       │  │  (Core)   │ │ (Plugins) │ │
│  └───────────┘   └───────────┘   │       │  └───────────┘ └───────────┘ │
│                                   │       │                               │
│  ┌───────────┐   ┌───────────┐   │       │  ┌───────────┐ ┌───────────┐ │
│  │ Commands  │   │  Scripts  │   │       │  │ Shortcuts │ │ Debugger  │ │
│  │ & Pipes   │   │ & Aliases │   │       │  │ & Actions │ │  & Tools  │ │
│  └───────────┘   └───────────┘   │       │  └───────────┘ └───────────┘ │
│                                   │       │                               │
└───────────────┬───────────────────┘       └───────────────┬───────────────┘
                │                                           │
                └─────────────────┬─────────────────────────┘
                                  │
                ┌─────────────────┴─────────────────┐
                │                                   │
                ▼                                   ▼
       ┌─────────────────┐                ┌─────────────────┐
       │     PACKAGE     │                │    DEBUGGING    │
       │    MANAGERS     │                │      TOOLS      │
       ├─────────────────┤                ├─────────────────┤
       │ npm │ pip │ brew│                │ Breakpoints     │
       │ Dependencies    │                │ Stack traces    │
       │ Version control │                │ Profilers       │
       └────────┬────────┘                └────────┬────────┘
                │                                  │
                └─────────────────┬────────────────┘
                                  │
                                  ▼
                        ┌─────────────────┐
                        │    WORKFLOW     │
                        │    EFFICIENCY   │
                        ├─────────────────┤
                        │  Write code     │
                        │  Test & debug   │
                        │  Commit & push  │
                        │  Deploy         │
                        └─────────────────┘
```

---

## Essential Commands Reference

### Navigation & Files
```bash
pwd                     # Print working directory
ls -la                  # List all files with details
cd ~/projects           # Change to projects directory
cd -                    # Go to previous directory
mkdir -p path/to/dir    # Create nested directories
touch file.txt          # Create empty file
cp source dest          # Copy file
mv source dest          # Move/rename file
rm -rf directory        # Delete directory recursively (careful!)
```

### Searching
```bash
find . -name "*.js"                    # Find files by name
find . -type f -mtime -7               # Files modified in last 7 days
grep -r "pattern" .                    # Search for text in files
grep -rn "TODO" --include="*.js"       # With line numbers, specific files
```

### Process Management
```bash
ps aux                  # List all processes
top / htop              # Interactive process viewer
kill PID                # Terminate process
kill -9 PID             # Force kill process
command &               # Run in background
jobs                    # List background jobs
fg %1                   # Bring job to foreground
```

### Pipes & Redirection
```bash
command > file.txt      # Output to file (overwrite)
command >> file.txt     # Append to file
command 2>&1            # Redirect stderr to stdout
command1 | command2     # Pipe output to next command
command1 && command2    # Run command2 if command1 succeeds
command1 || command2    # Run command2 if command1 fails
```

---

## Subtopics Covered

1. **Terminal/Command Line**
   - Shell basics (bash, zsh)
   - File system navigation
   - Process management
   - Pipes and redirection
   - Shell scripting

2. **Code Editors & IDEs**
   - Keyboard shortcuts
   - Extensions and plugins
   - Workspace configuration
   - Multi-cursor and advanced editing

3. **Package Managers**
   - npm (Node.js)
   - pip (Python)
   - brew (macOS)
   - apt/yum (Linux)
   - Version management

4. **Debugging Tools**
   - Breakpoint debugging
   - Console debugging
   - Memory and performance profiling
   - Network debugging

---

## Editor Recommendations

| Editor | Best For | Learning Curve |
|--------|----------|----------------|
| **VS Code** | Most developers, great extensions | Low |
| **Vim/Neovim** | Speed, server editing, customization | High |
| **WebStorm** | JavaScript/TypeScript heavy projects | Medium |
| **PyCharm** | Python development | Medium |
| **Sublime Text** | Lightweight, fast startup | Low |

### Essential VS Code Extensions

```
Language Support:
- ESLint
- Prettier
- Python
- Go

Productivity:
- GitLens
- GitHub Copilot
- Path Intellisense
- Auto Rename Tag

Visual:
- Material Icon Theme
- One Dark Pro (theme)
- Indent Rainbow
```

---

## One-Time Setup Checklist

```
□ Install a modern terminal (iTerm2, Windows Terminal, Warp)
□ Set up your shell (zsh with Oh My Zsh recommended)
□ Configure shell aliases and functions
□ Install your code editor with essential extensions
□ Set up version managers (nvm, pyenv, etc.)
□ Configure git with name, email, default branch
□ Generate SSH keys and add to GitHub
□ Create a dotfiles repository
□ Install common CLI tools (jq, tree, htop, etc.)
□ Set up a consistent color scheme across tools
```

---

## The Keyboard-First Philosophy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     MOUSE vs KEYBOARD                                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   Mouse-heavy workflow:                                                  │
│   ────────────────────                                                   │
│   Click File → Click Open → Navigate folders → Click file → Click Open  │
│   Time: ~5-10 seconds                                                    │
│                                                                          │
│   Keyboard-first workflow:                                               │
│   ───────────────────────                                                │
│   Cmd+P → type filename → Enter                                         │
│   Time: ~1-2 seconds                                                     │
│                                                                          │
│   Over a day: 5-10x faster for common operations                        │
│   Over a career: Hundreds of hours saved                                │
│                                                                          │
│   Challenge: Try a "no mouse" hour once a week                          │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

*"I'm not a great programmer; I'm just a good programmer with great tools." — Kent Beck*

Your tools are an extension of your mind. Invest the time to master them, and they'll multiply everything you do.
