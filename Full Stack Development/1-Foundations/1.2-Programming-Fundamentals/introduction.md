# 1.2 Programming Fundamentals

The building blocks of every program ever written. Master these concepts once, and they transfer to any programming language you'll ever learn.

---

## What I Will Learn

- **Variables & Data Types**: How computers store and represent different kinds of information—numbers, text, booleans, and complex structures
- **Operators**: Arithmetic, comparison, logical, and assignment operators that manipulate data
- **Control Flow**: Making decisions with conditionals (if/else) and repeating actions with loops (for, while)
- **Functions**: Creating reusable blocks of code with inputs, outputs, and well-defined behavior
- **Scope & Closures**: Understanding where variables live and how inner functions capture outer variables
- **Error Handling**: Anticipating what can go wrong and handling failures gracefully
- **File I/O**: Reading from and writing to files—persisting data beyond program execution

---

## Why I Need to Learn This

### Career Relevance

| Context | Why It Matters |
|---------|----------------|
| **Every Job** | 100% of programming jobs require these fundamentals |
| **Code Quality** | Clean, readable code depends on proper use of fundamentals |
| **Debugging** | Most bugs come from misunderstanding basic concepts |
| **Learning Speed** | Strong fundamentals make learning new languages 10x faster |

### How It Connects to Other Areas

- **Frontend**: React components are functions; state management uses closures
- **Backend**: APIs are functions that take requests and return responses
- **Databases**: Query results need to be processed with loops and conditionals
- **DevOps**: Automation scripts use all these fundamental concepts
- **Testing**: Test cases are functions that verify other functions work correctly

### Real-World Applications

```
User Input Validation   → Conditionals checking data format
Shopping Cart Total     → Loops summing item prices
Login Systems           → Functions checking credentials
Configuration Files     → File I/O reading settings
Error Messages          → Error handling showing user-friendly feedback
```

---

## Theoretical Concepts to Learn

| Concept | Description | Why It Matters |
|---------|-------------|----------------|
| **Type Systems** | Static vs dynamic, strong vs weak typing | Prevent bugs, write safer code |
| **Pass by Value vs Reference** | How data is copied or shared when passed to functions | Avoid unexpected mutations |
| **Lexical Scope** | Variables are resolved based on where they're written, not where they're called | Understand closures and module patterns |
| **Closures** | Functions that remember their creation environment | Enable private state, callbacks, currying |
| **Hoisting** | Variable and function declarations moved to top of scope | Avoid subtle bugs in JavaScript |
| **Truthy/Falsy Values** | Non-boolean values that evaluate to true or false | Write cleaner conditionals |
| **Short-Circuit Evaluation** | Logical operators stop evaluating when result is determined | Write efficient conditions |
| **Immutability** | Creating new data instead of modifying existing | Prevent bugs, enable features like undo |
| **Pure Functions** | Same input always produces same output, no side effects | Predictable, testable code |
| **Side Effects** | Changes to state outside the function's scope | Understand when they're necessary vs harmful |

---

## Practical Skills to Learn

### Variables & Data Types
```
□ Declare variables using appropriate keywords (let, const, var)
□ Choose correct data types for different scenarios
□ Convert between data types (parsing, casting)
□ Work with strings (concatenation, interpolation, methods)
□ Handle null and undefined values safely
□ Use arrays and objects to structure data
□ Destructure arrays and objects
□ Use spread and rest operators
```

### Control Flow
```
□ Write if/else statements for simple decisions
□ Use else-if chains for multiple conditions
□ Implement switch statements for multiple cases
□ Write for loops with proper initialization, condition, increment
□ Use while and do-while loops appropriately
□ Break out of loops early when needed
□ Skip iterations with continue
□ Nest loops for multi-dimensional data
□ Avoid infinite loops
```

### Functions
```
□ Define functions with parameters and return values
□ Use default parameter values
□ Understand the difference between parameters and arguments
□ Return values vs returning undefined
□ Create arrow functions and understand their differences
□ Use callback functions
□ Implement higher-order functions (map, filter, reduce)
□ Create immediately invoked function expressions (IIFE)
□ Understand recursion and write recursive functions
```

### Error Handling
```
□ Use try/catch blocks to handle exceptions
□ Throw custom errors with meaningful messages
□ Create custom error types/classes
□ Handle async errors (promises, async/await)
□ Implement graceful degradation
□ Log errors appropriately for debugging
□ Distinguish recoverable from fatal errors
```

### File I/O
```
□ Read text files synchronously and asynchronously
□ Write data to files
□ Append to existing files
□ Handle file not found errors
□ Work with JSON files (parse/stringify)
□ Read environment variables
□ Work with file paths correctly
```

---

## Visual Connection Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    1.2 PROGRAMMING FUNDAMENTALS                          │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        │                           │                           │
        ▼                           ▼                           ▼
┌───────────────┐          ┌───────────────┐          ┌───────────────┐
│   VARIABLES   │          │    CONTROL    │          │   FUNCTIONS   │
│   & TYPES     │          │     FLOW      │          │               │
├───────────────┤          ├───────────────┤          ├───────────────┤
│ • Primitives  │          │ • if/else     │          │ • Parameters  │
│ • Objects     │          │ • switch      │          │ • Return      │
│ • Arrays      │          │ • for/while   │          │ • Scope       │
│ • Type coerce │          │ • break/cont  │          │ • Closures    │
└───────┬───────┘          └───────┬───────┘          └───────┬───────┘
        │                          │                          │
        └──────────────────────────┼──────────────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    │                             │
                    ▼                             ▼
           ┌───────────────┐             ┌───────────────┐
           │    ERROR      │             │   FILE I/O    │
           │   HANDLING    │             │               │
           ├───────────────┤             ├───────────────┤
           │ • try/catch   │             │ • Read files  │
           │ • throw       │             │ • Write files │
           │ • Custom err  │             │ • JSON        │
           └───────┬───────┘             └───────┬───────┘
                   │                             │
                   └──────────────┬──────────────┘
                                  │
                                  ▼
                   ┌──────────────────────────────┐
                   │     ALL OTHER PROGRAMMING    │
                   │                              │
                   │  Frontend  │  Backend  │  DB │
                   │  DevOps    │  Testing  │  AI │
                   └──────────────────────────────┘
```

---

## Code Examples: The Same Concepts in Multiple Languages

### Variables and Types

**JavaScript:**
```javascript
let name = "Alice";          // String
const age = 30;              // Number
let isActive = true;         // Boolean
let scores = [95, 87, 92];   // Array
let user = { name, age };    // Object
```

**Python:**
```python
name = "Alice"               # String
age = 30                     # Integer
is_active = True             # Boolean
scores = [95, 87, 92]        # List
user = {"name": name, "age": age}  # Dictionary
```

**Go:**
```go
name := "Alice"              // String
age := 30                    // Int
isActive := true             // Bool
scores := []int{95, 87, 92}  // Slice
user := map[string]interface{}{"name": name, "age": age}
```

### Functions

**JavaScript:**
```javascript
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
```

**Python:**
```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"
```

**Go:**
```go
func greet(name string, greeting string) string {
    if greeting == "" {
        greeting = "Hello"
    }
    return fmt.Sprintf("%s, %s!", greeting, name)
}
```

---

## Subtopics Covered

1. **Variables, Types & Operators**
   - Primitive types (numbers, strings, booleans)
   - Reference types (objects, arrays)
   - Type coercion and conversion
   - Arithmetic, comparison, logical operators

2. **Control Flow & Loops**
   - Conditional statements (if, else, switch)
   - Iteration (for, while, do-while, for-of, for-in)
   - Loop control (break, continue)

3. **Functions & Scope**
   - Function declarations vs expressions
   - Parameters, arguments, return values
   - Scope chain and closures
   - Arrow functions and `this` binding

4. **Error Handling**
   - Try/catch/finally blocks
   - Throwing and catching exceptions
   - Error types and custom errors

5. **File I/O**
   - Reading and writing files
   - Working with JSON
   - Environment variables

---

## Common Mistakes to Avoid

| Mistake | Problem | Solution |
|---------|---------|----------|
| Using `==` instead of `===` | Type coercion causes unexpected equality | Always use strict equality |
| Mutating function parameters | Unexpected side effects | Copy objects/arrays before modifying |
| Forgetting to return | Function returns undefined | Explicit return statements |
| Off-by-one errors in loops | Accessing invalid indices | Double-check loop boundaries |
| Ignoring error handling | Crashes on unexpected input | Wrap risky code in try/catch |
| Variable shadowing | Inner variable hides outer | Use unique, descriptive names |
| Not handling async properly | Race conditions, unhandled rejections | Use async/await with try/catch |

---

## Practice Projects

### Beginner
1. **Calculator**: Basic arithmetic operations
2. **Temperature Converter**: Celsius ↔ Fahrenheit ↔ Kelvin
3. **FizzBuzz**: Classic loop and conditional exercise
4. **Palindrome Checker**: String manipulation and logic

### Intermediate
5. **Todo List (CLI)**: CRUD operations, file persistence
6. **Word Counter**: File I/O, string processing
7. **Number Guessing Game**: Loops, conditionals, user input
8. **Simple Quiz App**: Arrays, objects, functions, scoring

### Advanced
9. **Mini Markdown Parser**: String processing, recursion
10. **File Organizer**: File I/O, conditionals, automation

---

*"Programs must be written for people to read, and only incidentally for machines to execute." — Harold Abelson*

The goal isn't just to make code work—it's to make code that humans can understand, modify, and trust.
