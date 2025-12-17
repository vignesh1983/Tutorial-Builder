# 1.1 Computer Science Fundamentals

The timeless principles that separate coders from engineers. These concepts have remained relevant for over 60 years and will continue to be essential throughout your career.

---

## What I Will Learn

- **Data Structures**: Arrays, linked lists, stacks, queues, trees, graphs, and hash tables—how to store and organize data efficiently
- **Algorithms**: Sorting, searching, recursion, and dynamic programming—systematic approaches to solving problems
- **Big O Notation**: Analyzing time and space complexity to predict how code performs at scale
- **Object-Oriented Programming**: Classes, inheritance, polymorphism, encapsulation—organizing code into reusable components
- **Functional Programming**: Pure functions, immutability, higher-order functions—a different paradigm for thinking about code

---

## Why I Need to Learn This

### Career Relevance

| Context | Why It Matters |
|---------|----------------|
| **Technical Interviews** | FAANG and most tech companies test heavily on algorithms and data structures |
| **Senior Roles** | Architectural decisions require understanding performance implications |
| **Code Reviews** | Spot inefficient algorithms that could cause production issues |
| **Problem Solving** | Recognize patterns that match known solutions |

### How It Connects to Other Areas

- **Frontend**: Virtual DOM diffing uses tree algorithms; state management uses data structures
- **Backend**: Database indexing, caching strategies, API optimization all rely on these concepts
- **Databases**: Query optimization, B-trees for indexing, graph databases
- **DevOps**: Load balancing algorithms, scheduling, resource allocation
- **AI/ML**: Most ML algorithms are built on fundamental CS concepts

### Real-World Applications

```
E-commerce Search       → Hash tables, tries for autocomplete
Social Media Feeds      → Graph traversal, ranking algorithms
Maps & Navigation       → Dijkstra's algorithm, A* pathfinding
Video Streaming         → Buffering queues, compression algorithms
Recommendation Systems  → Graph algorithms, similarity metrics
```

---

## Theoretical Concepts to Learn

| Concept | Description | Why It Matters |
|---------|-------------|----------------|
| **Time Complexity** | How execution time grows with input size (O(1), O(n), O(log n), O(n²)) | Predict performance at scale |
| **Space Complexity** | How memory usage grows with input size | Avoid out-of-memory errors |
| **Recursion** | Functions that call themselves with smaller inputs | Solve hierarchical/nested problems elegantly |
| **Divide & Conquer** | Break problems into smaller subproblems, solve, combine | Foundation of efficient algorithms |
| **Dynamic Programming** | Store solutions to subproblems to avoid recomputation | Optimize exponential problems to polynomial |
| **Greedy Algorithms** | Make locally optimal choices at each step | Quick solutions when global optimum isn't needed |
| **Graph Theory** | Vertices, edges, paths, cycles, connectivity | Model relationships and networks |
| **Hashing** | Map keys to array indices for O(1) lookup | Fast data retrieval |
| **Tree Traversal** | In-order, pre-order, post-order, level-order | Process hierarchical data systematically |
| **Amortized Analysis** | Average cost over a sequence of operations | Understand data structure performance |

---

## Practical Skills to Learn

### Data Structure Implementation
```
□ Implement a dynamic array with resizing
□ Build a linked list with insert, delete, search operations
□ Create a stack and queue from scratch
□ Implement a hash table with collision handling
□ Build a binary search tree with insert, delete, search
□ Implement a min/max heap
□ Create a graph using adjacency list and matrix
□ Build a trie for string operations
```

### Algorithm Implementation
```
□ Implement bubble, selection, insertion sort (understand why they're slow)
□ Implement merge sort and quicksort (understand divide & conquer)
□ Write binary search iteratively and recursively
□ Implement BFS and DFS for graphs
□ Solve classic DP problems: fibonacci, knapsack, longest common subsequence
□ Implement Dijkstra's shortest path algorithm
□ Write a topological sort
```

### Analysis Skills
```
□ Determine Big O complexity of any code snippet
□ Identify the bottleneck in a given algorithm
□ Compare trade-offs between different data structures
□ Recognize which algorithm pattern fits a problem
□ Optimize a brute force solution to better complexity
```

### Problem Solving Practice
```
□ Solve 50+ LeetCode Easy problems
□ Solve 30+ LeetCode Medium problems
□ Solve 10+ LeetCode Hard problems
□ Complete a structured curriculum (NeetCode, Blind 75)
□ Explain solutions verbally while coding
```

---

## Visual Connection Diagram

```
                         ┌─────────────────────────────────────┐
                         │    1.1 COMPUTER SCIENCE             │
                         │        FUNDAMENTALS                 │
                         └────────────────┬────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            │                             │                             │
            ▼                             ▼                             ▼
   ┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
   │      DATA       │         │   ALGORITHMS    │         │   COMPLEXITY    │
   │   STRUCTURES    │         │   & PATTERNS    │         │    ANALYSIS     │
   └────────┬────────┘         └────────┬────────┘         └────────┬────────┘
            │                           │                           │
            │                           │                           │
    ┌───────┴───────┐          ┌───────┴───────┐          ┌───────┴───────┐
    │               │          │               │          │               │
    ▼               ▼          ▼               ▼          ▼               ▼
┌───────┐      ┌───────┐  ┌───────┐      ┌───────┐  ┌───────┐      ┌───────┐
│Arrays │      │Trees  │  │Sorting│      │Search │  │Time O │      │Space O│
│Lists  │      │Graphs │  │       │      │       │  │       │      │       │
│Stacks │      │Hash   │  │Divide │      │Dynamic│  │Best   │      │Memory │
│Queues │      │Tables │  │Conquer│      │Program│  │Worst  │      │Trade  │
└───────┘      └───────┘  └───────┘      └───────┘  └───────┘      └───────┘
    │               │          │               │          │               │
    └───────────────┴──────────┴───────────────┴──────────┴───────────────┘
                                          │
                              ┌───────────┴───────────┐
                              │                       │
                              ▼                       ▼
                    ┌─────────────────┐     ┌─────────────────┐
                    │    FRONTEND     │     │    BACKEND      │
                    │ State, DOM, UI  │     │ APIs, DB, Scale │
                    └─────────────────┘     └─────────────────┘
```

---

## Subtopics Covered

1. **Data Structures**
   - Arrays, Lists, Trees, Graphs, Hash Tables
   - Stacks, Queues, Heaps, Tries

2. **Algorithms**
   - Sorting (Merge, Quick, Heap)
   - Searching (Binary, BFS, DFS)
   - Dynamic Programming
   - Greedy Algorithms

3. **Big O Notation & Complexity Analysis**
   - Time Complexity
   - Space Complexity
   - Amortized Analysis

4. **Object-Oriented Programming Principles**
   - Encapsulation, Inheritance, Polymorphism
   - SOLID Principles
   - Design Patterns Introduction

5. **Functional Programming Concepts**
   - Pure Functions
   - Immutability
   - Higher-Order Functions

---

## Recommended Learning Path

```
Week 1-2: Arrays, Strings, Hash Tables
    └── Focus: Two pointers, sliding window, frequency counting

Week 3-4: Linked Lists, Stacks, Queues
    └── Focus: Pointer manipulation, LIFO/FIFO patterns

Week 5-6: Trees (Binary, BST, N-ary)
    └── Focus: Recursion, traversals, tree properties

Week 7-8: Graphs
    └── Focus: BFS, DFS, connected components, shortest path

Week 9-10: Dynamic Programming
    └── Focus: Memoization, tabulation, common patterns

Week 11-12: Advanced Topics & Review
    └── Focus: Tries, heaps, system design basics
```

---

*"An algorithm must be seen to be believed." — Donald Knuth*

The beauty of computer science fundamentals is that once you truly understand them, you see them everywhere—in the products you use, the systems you build, and the problems you solve.
