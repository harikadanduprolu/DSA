export const getInitialTasks = () => {
  return [
    { id: 1, day: 1, topic: 'Arrays & Strings', subtopics: ['Basic operations', 'Two-pointer technique'], solved: false },
    { id: 2, day: 2, topic: 'Arrays & Strings', subtopics: ['Sliding window', 'Subarray problems'], solved: false },
    { id: 3, day: 3, topic: 'Linked Lists', subtopics: ['Singly linked list', 'Cycle detection', 'Reverse a list'], solved: false },
    { id: 4, day: 4, topic: 'Stacks & Queues', subtopics: ['Balanced parentheses', 'Queue using stacks', 'Next Greater Element'], solved: false },
    { id: 5, day: 5, topic: 'Recursion & Backtracking', subtopics: ['N-Queens', 'Permutations', 'Sudoku Solver'], solved: false },
    { id: 6, day: 6, topic: 'Binary Search', subtopics: ['Finding peaks', 'Search in rotated array', 'K-th element'], solved: false },
    { id: 7, day: 7, topic: 'Sorting & Searching', subtopics: ['Merge Sort', 'Quick Sort', 'Binary Search variations'], solved: false },
    { id: 8, day: 8, topic: 'Bit Manipulation', subtopics: ['XOR tricks', 'Counting set bits', 'Power of Two'], solved: false },
    { id: 9, day: 9, topic: 'Dynamic Programming', subtopics: ['0/1 Knapsack', 'Longest Increasing Subsequence', 'Coin Change'], solved: false },
    { id: 10, day: 10, topic: 'Graphs', subtopics: ['BFS', 'DFS', 'Dijkstra’s Algorithm'], solved: false },
    { id: 11, day: 11, topic: 'Heaps & Priority Queues', subtopics: ['Heap Sort', 'Kth Largest Element'], solved: false },
    { id: 12, day: 12, topic: 'Greedy Algorithms', subtopics: ['Activity Selection', 'Huffman Coding'], solved: false },
    { id: 13, day: 13, topic: 'Trie', subtopics: ['Prefix Trie', 'Auto-completion'], solved: false },
    { id: 14, day: 14, topic: 'Segment Trees', subtopics: ['Range Queries', 'Lazy Propagation'], solved: false },
    { id: 15, day: 15, topic: 'Fenwick Tree', subtopics: ['Binary Indexed Tree'], solved: false },
    { id: 16, day: 16, topic: 'Graph Theory', subtopics: ['Bellman-Ford', 'Floyd-Warshall'], solved: false },
    { id: 17, day: 17, topic: 'Disjoint Set', subtopics: ['Union-Find', 'Kruskal’s Algorithm'], solved: false },
    { id: 18, day: 18, topic: 'Topological Sorting', subtopics: ['Kahn’s Algorithm'], solved: false },
    { id: 19, day: 19, topic: 'String Algorithms', subtopics: ['KMP', 'Rabin-Karp'], solved: false },
    { id: 20, day: 20, topic: 'Pattern Matching', subtopics: ['Z Algorithm'], solved: false },
    { id: 21, day: 21, topic: 'Number Theory', subtopics: ['Sieve of Eratosthenes', 'Modular Exponentiation'], solved: false },
    { id: 22, day: 22, topic: 'Mathematical Algorithms', subtopics: ['GCD, LCM', 'Fibonacci Modulo'], solved: false },
    { id: 23, day: 23, topic: 'Advanced Graphs', subtopics: ['Bridges & Articulation Points'], solved: false },
    { id: 24, day: 24, topic: 'Combinatorics', subtopics: ['Pascal’s Triangle', 'Catalan Numbers'], solved: false },
    { id: 25, day: 25, topic: 'Game Theory', subtopics: ['Nim Game', 'Grundy Numbers'], solved: false },
    { id: 26, day: 26, topic: 'Advanced Dynamic Programming', subtopics: ['Bitmask DP', 'Digit DP'], solved: false },
    { id: 27, day: 27, topic: 'Divide and Conquer', subtopics: ['Closest Pair of Points'], solved: false },
    { id: 28, day: 28, topic: 'Graph Coloring', subtopics: ['Bipartite Graph'], solved: false },
    { id: 29, day: 29, topic: 'Bitmasking', subtopics: ['Subset Generation'], solved: false },
    { id: 30, day: 30, topic: 'Interview Mock Tests', subtopics: ['Practice & Revision'], solved: false },
  ];
};

export const resources = [
  { id: 1, title: 'GeeksforGeeks DSA', url: 'https://www.geeksforgeeks.org/data-structures/' },
  { id: 2, title: 'LeetCode', url: 'https://leetcode.com/' },
  { id: 3, title: 'CP-Algorithms', url: 'https://cp-algorithms.com/' },
  { id: 4, title: 'Striver’s SDE Sheet', url: 'https://www.codingninjas.com/codestudio/guided-paths/strivers-sde-sheet' },
  { id: 5, title: 'NeetCode - Algorithm Roadmap', url: 'https://neetcode.io/' },
  { id: 6, title: 'MIT OpenCourseWare - Algorithms', url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/' },
  { id: 7, title: 'CodeForces', url: 'https://codeforces.com/' },
  { id: 8, title: 'HackerRank - Interview Preparation', url: 'https://www.hackerrank.com/interview/preparation-kits' },
  { id: 9, title: 'CS50 Harvard - Introduction to Computer Science', url: 'https://cs50.harvard.edu/' },
  { id: 10, title: 'Competitive Programming Handbook by Antti Laaksonen', url: 'https://cses.fi/book.html' },
];

export const getProblemsData = () => {
  return [
    { id: 1, topic: 'Arrays', subtopic: 'Two Sum', title: 'LeetCode 1: Two Sum', solved: false },
    { id: 2, topic: 'Arrays', subtopic: 'Subarray Sum', title: 'LeetCode 560: Subarray Sum Equals K', solved: false },
    { id: 3, topic: 'Strings', subtopic: 'Palindrome', title: 'LeetCode 125: Valid Palindrome', solved: false },
    { id: 4, topic: 'Linked Lists', subtopic: 'Cycle Detection', title: 'LeetCode 141: Linked List Cycle', solved: false },
    { id: 5, topic: 'Stacks', subtopic: 'Balanced Parentheses', title: 'LeetCode 20: Valid Parentheses', solved: false },
    { id: 6, topic: 'Queues', subtopic: 'Sliding Window Maximum', title: 'LeetCode 239: Sliding Window Maximum', solved: false },
    { id: 7, topic: 'Recursion', subtopic: 'N-Queens', title: 'LeetCode 51: N-Queens', solved: false },
    { id: 8, topic: 'Graph', subtopic: 'Dijkstra', title: 'LeetCode 743: Network Delay Time', solved: false },
    { id: 9, topic: 'Dynamic Programming', subtopic: 'LCS', title: 'LeetCode 1143: Longest Common Subsequence', solved: false },
  ];
};
