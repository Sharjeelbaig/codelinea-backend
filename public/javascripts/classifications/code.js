const codeClasssification = [
  {
    text: "The quick brown fox jumps over the lazy dog.",
    label: "not code",
  },
  {
    text: "Mary had a little lamb, its fleece was white as snow.",
    label: "not code",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    label: "not code",
  },
  {
    text: "The cat in the hat.",
    label: "not code",
  },
  {
    text: "Twinkle, twinkle, little star, how I wonder what you are.",
    label: "not code",
  },
  {
    text: "In a hole in the ground there lived a hobbit.",
    label: "not code",
  },
  {
    text: "The sky is blue and the grass is green.",
    label: "not code",
  },
  {
    text: "Once upon a time, in a faraway land, there was a princess.",
    label: "not code",
  },
  {
    text: "To be or not to be, that is the question.",
    label: "not code",
  },
  {
    text: "The sun will come out tomorrow, bet your bottom dollar that tomorrow there'll be sun.",
    label: "not code",
  },
  {
    text: "The hills are alive with the sound of music.",
    label: "not code",
  },
  {
    text: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'",
    label: "not code",
  },
  {
    text: "A penny saved is a penny earned.",
    label: "not code",
  },
  {
    text: "All work and no play makes Jack a dull boy.",
    label: "not code",
  },
  {
    text: "The world is a book, and those who do not travel read only a page.",
    label: "not code",
  },
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    label: "not code",
  },
  {
    text: "Life is like a box of chocolates, you never know what you're gonna get.",
    label: "not code",
  },
  {
    text: "My mama always said, 'Life was like a box of chocolates. You never know what you're gonna get.'",
    label: "not code",
  },
  {
    text: "Houston, we have a problem.",
    label: "not code",
  },
  {
    text: "May the force be with you.",
    label: "not code",
  },
  {
    text: "Luke, I am your father.",
    label: "not code",
  },
  {
    text: "I'll be back.",
    label: "not code",
  },
  {
    text: "Say hello to my little friend!",
    label: "not code",
  },
  {
    text: "Here's looking at you, kid.",
    label: "not code",
  },
  {
    text: "You talking to me?",
    label: "not code",
  },
  {
    text: "Toto, I've a feeling we're not in Kansas anymore.",
    label: "not code",
  },
  {
    text: "E.T. phone home.",
    label: "not code",
  },
  {
    text: "I see dead people.",
    label: "not code",
  },
  {
    text: "There's no place like home.",
    label: "not code",
  },
  {
    text: "Elementary, my dear Watson.",
    label: "not code",
  },
  {
    text: "Frankly, my dear, I don't give a damn.",
    label: "not code",
  },
  {
    text: "Here's Johnny!",
    label: "not code",
  },
  {
    text: "Keep your friends close, but your enemies closer.",
    label: "not code",
  },
  {
    text: "May the odds be ever in your favor.",
    label: "not code",
  },
  {
    text: "Wax on, wax off.",
    label: "not code",
  },
  {
    text: "Hasta la vista, baby.",
    label: "not code",
  },
  {
    text: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, world!" << std::endl;\n    return 0;\n}',
    label: "c++",
  },
  {
    text: '#include <cmath>\n\nint main() {\n    double num = 16.0;\n    double result = sqrt(num);\n    std::cout << "The square root of " << num << " is " << result << std::endl;\n    return 0;\n}',
    label: "c++",
  },
  {
    text: '#include <iostream>\n\nint main() {\n    int num1, num2, sum;\n    std::cout << "Enter two numbers: ";\n    std::cin >> num1 >> num2;\n    sum = num1 + num2;\n    std::cout << "The sum of " << num1 << " and " << num2 << " is " << sum << std::endl;\n    return 0;\n}',
    label: "c++",
  },
  {
    text: '#include <iostream>\n#include <string>\n\nint main() {\n    std::string name;\n    std::cout << "Enter your name: ";\n    std::getline(std::cin, name);\n    std::cout << "Hello, " << name << "!" << std::endl;\n    return 0;\n}',
    label: "c++",
  },
  {
    text: '#include <iostream>\n\nint main() {\n    int num1 = 10, num2 = 20, temp;\n    std::cout << "Before swapping, num1 = " << num1 << " and num2 = " << num2 << std::endl;\n    temp = num1;\n    num1 = num2;\n    num2 = temp;\n    std::cout << "After swapping, num1 = " << num1 << " and num2 = " << num2 << std::endl;\n    return 0;\n}',
    label: "c++",
  },
  {
    text: '#include <iostream>\n\nint main() {\n    int num, i;\n    bool isPrime = true;\n    std::cout << "Enter a positive integer: ";\n    std::cin >> num;\n    for (i = 2; i <= num / 2; ++i) {\n        if (num % i == 0) {\n            isPrime = false;\n            break;\n        }\n    }\n    if (isPrime)\n        std::cout << num << " is a prime number.";\n    else\n        std::cout << num << " is not a prime number.";\n    return 0;\n}',
    label: "c++",
  },
  {
    text: '#include <iostream>\n\nint main() {\n    int num1 = 10, num2 = 20, num3 = 30, max;\n    max = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);\n    std::cout << "The maximum of " << num1 << ", " << num2 << ", and " << num3 << " is " << max << std::endl;\n    return 0;\n}',
    label: "c++",
  },
  {
    text: "print('Hello, world!')",
    label: "python",
  },
  {
    text: "x = 5\ny = 10\nz = x + y\nprint(z)",
    label: "python",
  },
  {
    text: "def fibonacci(n):\n    if n <= 0:\n        return None\n    elif n == 1:\n        return 0\n    elif n == 2:\n        return 1\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)",
    label: "python",
  },
  {
    text: "for i in range(1, 6):\n    print(i)",
    label: "python",
  },
  {
    text: "x = 5\nif x > 10:\n    print('x is greater than 10')\nelse:\n    print('x is less than or equal to 10')",
    label: "python",
  },
  {
    text: "def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)",
    label: "python",
  },
  {
    text: "x = [1, 2, 3]\ny = [4, 5, 6]\nz = x + y\nprint(z)",
    label: "python",
  },
  {
    text: '#include <iostream>\nusing namespace std;\n\nint main() {\n   cout << "Hello, World!";\n   return 0;\n}',
    label: "c++",
  },
  {
    text: 'int x = 5;\nif (x > 10) {\n    cout << "x is greater than 10";\n} else {\n    cout << "x is less than or equal to 10";\n}',
    label: "c++",
  },
  {
    text: '#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n   if (n == 0) {\n      return 1;\n   }\n   else {\n      return n * factorial(n-1);\n   }\n}\n\nint main() {\n   int n = 5;\n   int result = factorial(n);\n   cout << "Factorial of " << n << " is " << result;\n   return 0;\n}',
    label: "c++",
  },
  {
    text: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n   vector<int> x = {1, 2, 3};\n   vector<int> y = {4, 5, 6};\n   vector<int> z;\n   z.reserve(x.size() + y.size());\n   z.insert(z.end(), x.begin(), x.end());\n   z.insert(z.end(), y.begin(), y.end());\n   for (int i = 0; i < z.size(); i++) {\n      cout << z[i] << " ";\n   }\n   return 0;\n}',
    label: "c++",
  },
  {
    text: "#include <iostream>\nusing namespace std;\n\nint main() {\n   int* ptr = new int;\n   *ptr = 5;\n   cout << *ptr;\n   delete ptr;\n   return 0;\n}",
    label: "c++",
  },
  {
    text: '#include <iostream>\nusing namespace std;\n\nclass Shape {\n   protected:\n      int width;\n      int height;\n   public:\n      Shape(int w, int h) {\n         width = w;\n         height = h;\n      }\n      virtual int area() {\n         return 0;\n      }\n};\n\nclass Rectangle : public Shape {\n   public:\n      Rectangle(int w, int h) : Shape(w, h) {\n      }\n      int area() {\n         return width * height;\n      }\n};\n\nclass Triangle : public Shape {\n   public:\n      Triangle(int w, int h) : Shape(w, h) {\n      }\n      int area() {\n         return (width * height) / 2;\n      }\n};\n\nint main() {\n   Shape* s1 = new Rectangle(5, 10);\n   Shape* s2 = new Triangle(5, 10);\n   cout << s1->area() << " " << s2->area();\n   delete s1;\n   delete s2;\n   return 0;\n}',
    label: "c++",
  },
  {
    text: '#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n   if (n == 0) {\n      return 1;\n   }\n   else {\n      return n * factorial(n-1);\n   }\n}\n\nint main() {\n   int n = 5;\n   int result = factorial(n);\n   cout << "Factorial of " << n << " is " << result;\n   return 0;\n}',
    label: "c++",
  },
  {
    "text": "#include <iostream>\nusing namespace std;\n\n// Factorial template\n\ntemplate <int N>\nstruct Factorial {\n   static const int value = N * Factorial<N-1>::value;\n};\n\ntemplate <>\nstruct Factorial<0> {\n   static const int value = 1;\n};\n\nint main() {\n   const int result = Factorial<5>::value;\n   cout << \"Factorial of 5 is \" << result;\n   return 0;\n}",
    "label": "c++"
},
{
  "text": "#include <iostream>\n#include <boost/math/special_functions/gamma.hpp>\nusing namespace std;\n\nint main() {\n   double x = 1.5;\n   double result = boost::math::tgamma(x);\n   cout << \"Gamma(\" << x << \") = \" << result;\n   return 0;\n}",
  "label": "c++"
},
{
  "text": "#include <iostream>\n#include <opencv2/opencv.hpp>\nusing namespace std;\nusing namespace cv;\n\nint main() {\n   Mat img = imread(\"image.jpg\", IMREAD_COLOR);\n   if (img.empty()) {\n      cerr << \"Error: could not open image file.\" << endl;\n      return 1;\n   }\n   namedWindow(\"image\", WINDOW_AUTOSIZE);\n   imshow(\"image\", img);\n   waitKey(0);\n   destroyAllWindows();\n   return 0;\n}",
  "label": "c++"
},
{
  "text": "#include <iostream>\n#include <Eigen/Dense>\nusing namespace std;\nusing namespace Eigen;\n\nint main() {\n   MatrixXd A(2,2);\n   A(0,0) = 1;\n   A(0,1) = 2.5;\n   A(1,0) = 3;\n   A(1,1) = 4;\n   VectorXd b(2);\n   b(0) = 1;\n   b(1) = 2;\n   VectorXd x = A.colPivHouseholderQr().solve(b);\n   cout << \"Solution: \" << x.transpose();\n   return 0;\n}",
  "label": "c++"
},
{
  "text": "function factorial(n) {\n   if (n === 0) {\n      return 1;\n   } else {\n      return n * factorial(n - 1);\n   }\n}\n\nconsole.log(factorial(5));",
  "label": "javascript"
},
{
  "text": "import React from 'react';\n\nclass MyComponent extends React.Component {\n   render() {\n      return (\n         <div>\n            <h1>Hello, world!</h1>\n            <p>This is my first React component.</p>\n         </div>\n      );\n   }\n}\n\nexport default MyComponent;",
  "label": "javascript"
},
{
  "text": "function asyncFunction() {\n   return new Promise((resolve, reject) => {\n      setTimeout(() => {\n         resolve('Async function completed successfully.');\n      }, 1000);\n   });\n}\n\nasyncFunction().then((result) => {\n   console.log(result);\n}).catch((error) => {\n   console.error(error);\n});",
  "label": "javascript"
},
{
  "text": "import React from 'react';\n\nfunction Welcome(props) {\n   return <h1>Hello, {props.name}!</h1>;\n}\n\nfunction App() {\n   return (\n      <div>\n         <Welcome name=\"John\" />\n         <Welcome name=\"Jane\" />\n         <Welcome name=\"Joe\" />\n      </div>\n   );\n}\n\nexport default App;",
  "label": "javascript"
},
{
  "text": "import React from 'react';\n\nclass Counter extends React.Component {\n   constructor(props) {\n      super(props);\n      this.state = { count: 0 };\n   }\n\n   incrementCount() {\n      this.setState({ count: this.state.count + 1 });\n   }\n\n   render() {\n      return (\n         <div>\n            <p>Count: {this.state.count}</p>\n            <button onClick={() => this.incrementCount()}>Increment</button>\n         </div>\n      );\n   }\n}\n\nexport default Counter;",
  "label": "javascript"
},
{
  "text": "import React from 'react';\n\nclass Clock extends React.Component {\n   constructor(props) {\n      super(props);\n      this.state = { date: new Date() };\n   }\n\n   componentDidMount() {\n      this.timerID = setInterval(() => {\n         this.tick();\n      }, 1000);\n   }\n\n   componentWillUnmount() {\n      clearInterval(this.timerID);\n   }\n\n   tick() {\n      this.setState({ date: new Date() });\n   }\n\n   render() {\n      return (\n         <div>\n            <h1>Hello, world!</h1>\n            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>\n         </div>\n      );\n   }\n}\n\nexport default Clock;",
  "label": "javascript"
},
{
  "text": "const add = (a, b) => a + b;\n\nconsole.log(add(2, 3));",
  "label": "javascript"
},
{
  "text": "const name = 'John';\nconst greeting = `Hello, ${name}!`;\n\nconsole.log(greeting);",
  "label": "javascript"
},
{
  "text": "const person = { name: 'John', age: 30 };\nconst { name, age } = person;\n\nconsole.log(name);\nconsole.log(age);",
  "label": "javascript"
},
{
  "text": "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst arr3 = [...arr1, ...arr2];\n\nconsole.log(arr3);",
  "label": "javascript"
},
{
  "text": "console.log('Hello, World!');",
  "label": "javascript"
},
{
  "text": "let x = 5;\nconsole.log(x);",
  "label": "javascript"
},
{
  "text": "let x = 5;\nlet y = 10;\nconsole.log(x + y);",
  "label": "javascript"
},
{
  "text": "let x = 5;\nlet y = '5';\nconsole.log(x == y);\nconsole.log(x === y);",
  "label": "javascript"
},
{
  "text": "let x = 5;\nlet y = 10;\nif (x < y) {\n  console.log('x is less than y');\n} else {\n  console.log('x is greater than or equal to y');\n}",
  "label": "javascript"
},
{
  "text": "let arr = [1, 2, 3, 4, 5];\nconsole.log(arr.length);",
  "label": "javascript"
},
{
  "text": "let arr = [1, 2, 3, 4, 5];\nfor (let i = 0; i < arr.length; i++) {\n  console.log(arr[i]);\n}",
  "label": "javascript"
},
{
  "text": "let arr = [1, 2, 3, 4, 5];\narr.forEach(function(element) {\n  console.log(element);\n});",
  "label": "javascript"
},
{
  "text": "let arr = [1, 2, 3, 4, 5];\nlet sum = 0;\nfor (let i = 0; i < arr.length; i++) {\n  sum += arr[i];\n}\nconsole.log(sum);",
  "label": "javascript"
},
{
  "text": "let arr = [1, 2, 3, 4, 5];\nlet sum = arr.reduce(function(total, element) {\n  return total + element;\n});\nconsole.log(sum);",
  "label": "javascript"
},
{
  "text": "let obj = {\n  name: 'John',\n  age: 30\n};\nconsole.log(obj.name);\nconsole.log(obj.age);",
  "label": "javascript"
},
{
  "text": "let obj = {\n  name: 'John',\n  age: 30\n};\nfor (let key in obj) {\n  console.log(key + ': ' + obj[key]);\n}",
  "label": "javascript"
},
{
  "text": "function add(x, y) {\n  return x + y;\n}\nconsole.log(add(2, 3));",
  "label": "javascript"
},
{
  "text": "function multiply(x, y) {\n  return x * y;\n}\nconsole.log(multiply(2, 3));",
  "label": "javascript"
},
{
  "text": "function MyComponent(props) {\n  return <div>Hello, {props.name}!</div>;\n}",
  "label": "javascript"
},
{
  "text": "using System;\n\nclass Program {\n    static void Main(string[] args) {\n        Console.WriteLine(\"Hello, World!\");\n    }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass Program {\n    static void Main(string[] args) {\n        int num1 = 5, num2 = 10, sum;\n        sum = num1 + num2;\n        Console.WriteLine(\"The sum of {0} and {1} is {2}\", num1, num2, sum);\n    }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass Program {\n    static void Main(string[] args) {\n        Console.WriteLine(\"Hello, World!\");\n    }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass Program {\n    static void Main(string[] args) {\n        int num1 = 5, num2 = 10, sum;\n        sum = num1 + num2;\n        Console.WriteLine(\"The sum of {0} and {1} is {2}\", num1, num2, sum);\n    }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass Program {\n    static void Main(string[] args) {\n        string name = \"John\";\n        int age = 30;\n        Console.WriteLine(\"My name is {0} and I am {1} years old.\", name, age);\n    }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass Program {\n    static void Main(string[] args) {\n        int num;\n        Console.Write(\"Enter a number: \");\n        num = int.Parse(Console.ReadLine());\n        Console.WriteLine(\"The number entered is {0}\", num);\n    }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass Program {\n    static void Main(string[] args) {\n        int i, j, rows = 5;\n        for (i = 1; i <= rows; i++) {\n            for (j = 1; j <= i; j++) {\n                Console.Write(\"*\");\n            }\n            Console.Write(\"\\n\");\n        }\n    }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass Program {\n    static void Main(string[] args) {\n        int i, j, rows = 5;\n        for (i = 1; i <= rows; i++) {\n            for (j = 1; j <= i; j++) {\n                Console.Write(\"{0}\", j);\n            }\n            Console.Write(\"\\n\");\n        }\n    }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass Program {\n    static void Main(string[] args) {\n        int i, j, rows = 5;\n        for (i = 1; i <= rows; i++) {\n            for (j = 1; j <= i; j++) {\n                Console.Write(\"{0}\", i * j);\n            }\n            Console.Write(\"\\n\");\n        }\n    }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nnamespace HelloWorld\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine(\"Hello, World!\");\n        }\n    }\n}",
  "label": "c#"
},
{
  "text": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
  "label": "java"
},
{
  "text": "using System;\n\nnamespace ConsoleApp\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            int x = 5;\n            int y = 10;\n            int sum = x + y;\n            Console.WriteLine(\"The sum of \" + x + \" and \" + y + \" is \" + sum);\n        }\n    }\n}",
  "label": "c#"
},
{
  "text": "public class Fibonacci {\n    public static void main(String[] args) {\n        int n1 = 0, n2 = 1, n3, i, count = 10;\n        System.out.print(n1 + \" \" + n2);\n        for (i = 2; i < count; ++i) {\n            n3 = n1 + n2;\n            System.out.print(\" \" + n3);\n            n1 = n2;\n            n2 = n3;\n        }\n    }\n}",
  "label": "java"
},
{
  "text": "using System;\n\nnamespace ConsoleApp\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            int num = 5;\n            if (num % 2 == 0)\n            {\n                Console.WriteLine(\"The number is even\");\n            }\n            else\n            {\n                Console.WriteLine(\"The number is odd\");\n            }\n        }\n    }\n}",
  "label": "c#"
},
{
  "text": "public class Factorial {\n    public static void main(String[] args) {\n        int n = 5, fact = 1;\n        for (int i = 1; i <= n; i++) {\n            fact = fact * i;\n        }\n        System.out.println(\"Factorial of \" + n + \" is \" + fact);\n    }\n}",
  "label": "java"
},
{
  "text": "using System;\n\nnamespace ConsoleApp\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            int[] nums = { 1, 2, 3, 4, 5 };\n            foreach (int num in nums)\n            {\n                Console.WriteLine(num);\n            }\n        }\n    }\n}",
  "label": "c#"
},
{
  "label": "java",
  "text": "import java.util.*;\n\npublic class DijkstraAlgorithm {\n  public void dijkstra(int[][] graph, int startVertex) {\n    int nVertices = graph[0].length;\n    int[] shortestDistances = new int[nVertices];\n    boolean[] visited = new boolean[nVertices];\n\n    for (int vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {\n      shortestDistances[vertexIndex] = Integer.MAX_VALUE;\n      visited[vertexIndex] = false;\n    }\n\n    shortestDistances[startVertex] = 0;\n\n    for (int i = 1; i < nVertices; i++) {\n      int nearestVertex = -1;\n      int shortestDistance = Integer.MAX_VALUE;\n      for (int vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {\n        if (!visited[vertexIndex] && shortestDistances[vertexIndex] < shortestDistance) {\n          nearestVertex = vertexIndex;\n          shortestDistance = shortestDistances[vertexIndex];\n        }\n      }\n\n      visited[nearestVertex] = true;\n      for (int vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {\n        int edgeWeight = graph[nearestVertex][vertexIndex];\n        if (edgeWeight > 0 && ((shortestDistance + edgeWeight) < shortestDistances[vertexIndex])) {\n          shortestDistances[vertexIndex] = shortestDistance + edgeWeight;\n        }\n      }\n    }\n\n    System.out.println(Arrays.toString(shortestDistances));\n  }\n}"
},
{
  "label": "java",
  "text": "import java.util.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    List<String> list = new ArrayList<>();\n    list.add(\"hello\");\n    list.add(\"world\");\n    System.out.println(list);\n  }\n}"
},
{
  "label": "java",
  "text": "import java.io.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try {\n      BufferedReader br = new BufferedReader(new FileReader(\"file.txt\"));\n      String line;\n      while ((line = br.readLine()) != null) {\n        System.out.println(line);\n      }\n      br.close();\n    } catch (IOException e) {\n      System.err.println(\"Error: \" + e.getMessage());\n    }\n  }\n}"
},
{
  "label": "java",
  "text": "import java.net.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try {\n      URL url = new URL(\"https://www.example.com\");\n      HttpURLConnection con = (HttpURLConnection) url.openConnection();\n      con.setRequestMethod(\"GET\");\n      BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));\n      String inputLine;\n      StringBuffer content = new StringBuffer();\n      while ((inputLine = in.readLine()) != null) {\n        content.append(inputLine);\n      }\n      in.close();\n      con.disconnect();\n      System.out.println(content.toString());\n    } catch (IOException e) {\n      System.err.println(\"Error: \" + e.getMessage());\n    }\n  }\n}"
},
{
  "label": "java",
  "text": "import java.util.concurrent.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    ExecutorService executor = Executors.newFixedThreadPool(2);\n    for (int i = 0; i < 5; i++) {\n      Runnable worker = new WorkerThread(\"task \" + i);\n      executor.execute(worker);\n    }\n    executor.shutdown();\n    while (!executor.isTerminated()) {\n    }\n    System.out.println(\"Finished all tasks\");\n  }\n\n  static class WorkerThread implements Runnable {\n    private String task;\n    public WorkerThread(String s) {\n      this.task = s;\n    }\n    public void run() {\n      System.out.println(Thread.currentThread().getName() + \" (Start) \" + task);\n      processCommand();\n      System.out.println(Thread.currentThread().getName() + \" (End) \" + task);\n    }\n    private void processCommand() {\n      try {\n        Thread.sleep(2000);\n      } catch (InterruptedException e) {\n        System.err.println(\"Error: \" + e.getMessage());\n      }\n    }\n  }\n}"
},
{
  "text": "body {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n}",
  "label": "css"
},
{
  "text": "h1 {\n  color: #0066cc;\n  font-size: 28px;\n}",
  "label": "css"
},
{
  "text": "p {\n  color: #333;\n  font-size: 16px;\n}",
  "label": "css"
},
{
  "text": "a {\n  color: #0066cc;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}",
  "label": "css"
},
{
  "text": ".container {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 15px;\n}",
  "label": "css"
},
{
  "text": "header {\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n}",
  "label": "css"
},
{
  "text": "footer {\n  background-color: #f5f5f5;\n  color: #333;\n  padding: 20px;\n}",
  "label": "css"
},
{
  "text": "nav {\n  display: flex;\n  justify-content: space-between;\n}\nnav ul {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\nnav li {\n  margin: 0 10px;\n}\nnav a {\n  color: #fff;\n}",
  "label": "css"
},
{
  "text": "form {\n  display: flex;\n  flex-direction: column;\n}\nform label {\n  margin-bottom: 10px;\n}\nform input {\n  padding: 10px;\n  margin-bottom: 20px;\n  border: none;\n  border-radius: 5px;\n}",
  "label": "css"
},
{
  "text": "button {\n  background-color: #0066cc;\n  color: #fff;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\nbutton:hover {\n  background-color: #0052a3;\n}",
  "label": "css"
},
{
  "text": ".container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: auto;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n}\n\n.box {\n  background-color: #333;\n  color: #fff;\n  padding: 30px;\n  font-size: 24px;\n  text-align: center;\n}\n\n.box:nth-child(2n) {\n  background-color: #555;\n}\n\n@media screen and (max-width: 768px) {\n  .container {\n    grid-template-columns: 1fr 1fr;\n  }\n}",
  "label": "css"
},
{
  "text": "@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.circle {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  border-radius: 50%;\n  animation-name: spin;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}",
  "label": "css"
},
{
  "text": ".container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.box {\n  width: 100px;\n  height: 100px;\n  background-color: #333;\n  color: #fff;\n  font-size: 24px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.box:nth-child(2n) {\n  background-color: #555;\n}",
  "label": "css"
},
{
  "text": ".box {\n  width: 400px;\n  height: 400px;\n  background-image: url('image.jpg');\n  background-size: cover;\n  filter: grayscale(100%) blur(10px) brightness(50%) contrast(200%) hue-rotate(180deg);\n}",
  "label": "css"
},
{
  "text": ".box {\n  width: 100px;\n  height: 100px;\n  background-color: #333;\n  color: #fff;\n  font-size: 24px;\n  text-align: center;\n  transition-property: background-color, color;\n  transition-duration: 1s;\n  transition-timing-function: ease-in-out;\n}\n\n.box:hover {\n  background-color: #fff;\n  color: #333;\n}",
  "label": "css"
},
{
  "text": "/* Using ::before and ::after */\n\n.example::before {\n  content: 'Before';\n}\n\n.example::after {\n  content: 'After';\n}",
  "label": "css"
},
{
  "text": "/* Using :hover */\n\n.button {\n  background-color: blue;\n  color: white;\n  padding: 10px;\n}\n\n.button:hover {\n  background-color: red;\n}",
  "label": "css"
},
{
  "text": "/* Using ::before, ::after, and :hover */\n\n.example::before {\n  content: 'Before';\n}\n\n.example::after {\n  content: 'After';\n}\n\n.example:hover::before {\n  color: red;\n}\n\n.example:hover::after {\n  color: blue;\n}",
  "label": "css"
},
{
  "text": "/* Using ::before, ::after, and content */\n\n.example::before {\n  content: '\\2022';\n  color: blue;\n  margin-right: 5px;\n}\n\n.example::after {\n  content: 'Lorem ipsum';\n}",
  "label": "css"
},
{
  "text": "using System",
  "label":"c#"
},
{
  "text": "using System;",
  "label": "c#"
},
{
  "text": "namespace MyNamespace {\n  class MyClass {\n    static void Main(string[] args) {\n      Console.WriteLine(\"Hello, World!\");\n    }\n  }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass MyClass {\n  static void Main(string[] args) {\n    string myString = \"Hello, World!\";\n    Console.WriteLine(myString);\n  }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\npublic class MyClass {\n  public static void Main() {\n    int x = 5;\n    if (x > 10) {\n      Console.WriteLine(\"x is greater than 10\");\n    } else {\n      Console.WriteLine(\"x is less than or equal to 10\");\n    }\n  }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass MyClass {\n  static void Main(string[] args) {\n    int[] numbers = {1, 2, 3, 4, 5};\n    foreach (int num in numbers) {\n      Console.WriteLine(num);\n    }\n  }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\npublic class MyClass {\n  public static void Main() {\n    int x = 10;\n    int y = 5;\n    int sum = x + y;\n    Console.WriteLine(sum);\n  }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass MyClass {\n  static void Main(string[] args) {\n    string name = \"John\";\n    int age = 25;\n    Console.WriteLine(\"My name is {0} and I'm {1} years old\", name, age);\n  }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass MyClass {\n  static void Main(string[] args) {\n    int x = 5;\n    int y = 10;\n    int z = x * y;\n    Console.WriteLine(z);\n  }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass MyClass {\n  static void Main(string[] args) {\n    int[] numbers = {1, 2, 3, 4, 5};\n    int sum = 0;\n    for (int i = 0; i < numbers.Length; i++) {\n      sum += numbers[i];\n    }\n    Console.WriteLine(sum);\n  }\n}",
  "label": "c#"
},
{
  "text": "using System;\n\nclass MyClass {\n  static void Main(string[] args) {\n    string[] fruits = {\"apple\", \"banana\", \"orange\"};\n    Array.Reverse(fruits);\n    foreach (string fruit in fruits) {\n      Console.WriteLine(fruit);\n    }\n  }\n}",
  "label": "c#"
},{
  "text": "using System.Collections.Generic;",
  "label": "c#"
},
{
  "text": "using System.Linq;",
  "label": "c#"
},
{
  "text": "using System.Text;",
  "label": "c#"
},
{
  "text": "using System.Threading.Tasks;",
  "label": "c#"
},
{
  "text": "import java.util.*;",
  "label": "java"
},
{
  "text": "import java.io.*;",
  "label": "java"
},
{
  "text": "import java.net.*;",
  "label": "java"
},
{
  "text": "import javax.swing.*;",
  "label": "java"
},
{
  "text": "import java.util.concurrent.*;",
  "label": "java"
},
{
  "text": "import math",
  "label": "python"
},
{
  "text": "import numpy as np",
  "label": "python"
},
{
  "text": "import pandas as pd",
  "label": "python"
},
{
  "text": "import matplotlib.pyplot as plt",
  "label": "python"
},
{
  "text": "import tensorflow as tf",
  "label": "python"
},
{
  "text": "import os",
  "label": "python"
},
{
  "text": "import sys",
  "label": "python"
},
{
  "text": "import datetime",
  "label": "python"
},
{
  "text": "import random",
  "label": "python"
},
{
  "text": "import json",
  "label": "python"
},
{
  "text": "import time",
  "label": "python"
},
{
  "text": "import pathlib",
  "label": "python"
},
{
  "text": "import hashlib",
  "label": "python"
},
{
  "text": "import re",
  "label": "python"
},
{
  "text": "import requests",
  "label": "python"
},
{
  "text": "import sqlite3",
  "label": "python"
},
{
  "text": "import threading",
  "label": "python"
},
{
  "text": "import xml.etree.ElementTree as ET",
  "label": "python"
},
{
  "text": "import itertools",
  "label": "python"
},
{
  "text": "import logging",
  "label": "python"
},
{
  "text": "import concurrent.futures",
  "label": "python"
},
{
  "text": "import collections",
  "label": "python"
},
{
  "text": "import urllib.parse",
  "label": "python"
},
{
  "text": "import http.client",
  "label": "python"
},
{
  "text": "import zipfile",
  "label": "python"
},
{
  "text": "import smtplib",
  "label": "python"
},
{
  "text": "import io",
  "label": "python"
},
{
  "text": "import itertools",
  "label": "python"
},
{
  "text": "import functools",
  "label": "python"
},
{
  "text": "import asyncio",
  "label": "python"
},
{
  "text": "import getopt",
  "label": "python"
},
{
  "text": "import signal",
  "label": "python"
},
{
  "text": "import unittest",
  "label": "python"
},
{
  "text": "import flask",
  "label": "python"
},
{
  "text": "import pytz",
  "label": "python"
},
{
  "text": "import csv",
  "label": "python"
},
{
  "text": "import pandas_datareader as pdr",
  "label": "python"
},
{
  "text": "import pyodbc",
  "label": "python"
},
{
  "text": "import bs4",
  "label": "python"
},
{
  "text": "import matplotlib.animation as animation",
  "label": "python"
},
{
  "text": "import django",
  "label": "python"
},
{
  "text": "import openpyxl",
  "label": "python"
},
{
  "text": "import scrapy",
  "label": "python"
},
{
  "text": "import tensorflow_hub as hub",
  "label": "python"
},
{
  "text": "import cv2",
  "label": "python"
},
{
  "text": "import pyspark",
  "label": "python"
},
{
  "text": "import pytorch",
  "label": "python"
},
{
  "text": "import keras",
  "label": "python"
},
{
  "text": "import sklearn",
  "label": "python"
},
{
  "text": "import statsmodels.api as sm",
  "label": "python"
},
{
  "text": "import xgboost",
  "label": "python"
},
{
  "text": "import java.util.ArrayList;",
  "label": "java"
},
{
  "text": "import java.util.HashMap;",
  "label": "java"
},
{
  "text": "import java.time.LocalDate;",
  "label": "java"
},
{
  "text": "import java.io.File;",
  "label": "java"
},
{
  "text": "import javax.swing.JFrame;",
  "label": "java"
},
{
  "text": "import org.junit.jupiter.api.Test;",
  "label": "java"
},
{
  "text": "import java.util.concurrent.ExecutorService;",
  "label": "java"
},
{
  "text": "import java.math.BigDecimal;",
  "label": "java"
},
{
  "text": "import java.awt.Color;",
  "label": "java"
},
{
  "text": "import java.nio.file.Paths;",
  "label": "java"
},
{
  "text": "const http = require('http')",
  "label": "javascript"
},
{
  "text": "const fs = require('fs')",
  "label": "javascript"
},
{
  "text": "const path = require('path')",
  "label": "javascript"
},
{
  "text": "const express = require('express')",
  "label": "javascript"
},
{
  "text": "const mongoose = require('mongoose')",
  "label": "javascript"
},
{
  "text": "const dotenv = require('dotenv')",
  "label": "javascript"
},
{
  "text": "const nodemailer = require('nodemailer')",
  "label": "javascript"
},
{
  "text": "const multer = require('multer')",
  "label": "javascript"
},
{
  "text": "const socketio = require('socket.io')",
  "label": "javascript"
},
{
  "text": "const mysql = require('mysql')",
  "label": "javascript"
},
{
  "text": "const myFunction = async () => {\n  // asynchronous code goes here\n};",
  "label": "javascript"
},
{
  "text": "const myArray = [1, 2, 3];\nconst [a, b, c] = myArray;",
  "label": "javascript"
},
{
  "text": "const myObject = { x: 1, y: 2, z: 3 };\nconst { x, y, z } = myObject;",
  "label": "javascript"
},
{
  "text": "const myFunction = ({ x, y, z }) => {\n  // function code goes here\n};",
  "label": "javascript"
},
{
  "text": "const myArrowFunction = () => {\n  return 'Hello, world!';\n};",
  "label": "javascript"
},
{
  "text": "class MyClass {\n  constructor(x, y, z) {\n    this.x = x;\n    this.y = y;\n    this.z = z;\n  }\n}",
  "label": "javascript"
},
{
  "text": "const myPromise = new Promise((resolve, reject) => {\n  // promise code goes here\n});",
  "label": "javascript"
},
{
  "text": "const mySet = new Set([1, 2, 3]);",
  "label": "javascript"
},
{
  "text": "const myMap = new Map([['x', 1], ['y', 2], ['z', 3]]);",
  "label": "javascript"
},
{
  "text": "const myGeneratorFunction = function* () {\n  // generator function code goes here\n};",
  "label": "javascript"
},
{
  "text": "const myAsyncFunction = async () => {\n  // asynchronous code goes here\n};",
  "label": "javascript"
},
{
  "text": "const myTemplateLiteral = `Hello, ${name}!`;",
  "label": "javascript"
},
{
  "text": "const mySpreadOperator = [...myArray];",
  "label": "javascript"
},
{
  "text": "const myRestParameter = (...args) => {\n  // function code goes here\n};",
  "label": "javascript"
},
{
  "text": "const myArrayFunction = () => [1, 2, 3];",
  "label": "javascript"
},
{
  "text": "const myObjectFunction = () => ({ x: 1, y: 2, z: 3 });",
  "label": "javascript"
},
{
  "text": "const mySymbol = Symbol('mySymbol');",
  "label": "javascript"
},
{
  "text": "const myProxy = new Proxy(target, handler);",
  "label": "javascript"
},
{
  "text": "const myReflect = Reflect.get(target, propertyKey, receiver);",
  "label": "javascript"
},
{
  "text": "const myObject = { prop1: 'value1', prop2: 'value2' };",
  "label": "javascript"
},
{
  "text": "const myArray = ['value1', 'value2', 'value3'];",
  "label": "javascript"
},
{
  "text": "const myFunction = (param1, param2) => { console.log(param1, param2); };",
  "label": "javascript"
},
{
  "text": "const myPromise = new Promise((resolve, reject) => { resolve('resolved'); });",
  "label": "javascript"
},
{
  "text": "const mySet = new Set(['value1', 'value2', 'value3']);",
  "label": "javascript"
},
{
  "text": "const myMap = new Map([['key1', 'value1'], ['key2', 'value2']]);",
  "label": "javascript"
},
{
  "text": "const myGenerator = function*() { yield 'value1'; yield 'value2'; };",
  "label": "javascript"
},
{
  "text": "const myAsyncFunction = async () => { await fetch('/my-url'); };",
  "label": "javascript"
},
{
  "text": "const myClass = class { constructor(prop1, prop2) { this.prop1 = prop1; this.prop2 = prop2; } myMethod() { console.log('Hello, World!'); } };",
  "label": "javascript"
},
{
  "text": "const myProxy = new Proxy({}, { get: function(target, name) { return name in target ? target[name] : 42; } });",
  "label": "javascript"
},
{
  "text": "const mySymbol = Symbol('mySymbol');",
  "label": "javascript"
},
{
  "text": "const myWeakSet = new WeakSet();",
  "label": "javascript"
},
{
  "text": "const myWeakMap = new WeakMap();",
  "label": "javascript"
},
{
  "text": "const myTemplateLiteral = `Hello, ${name}!`;",
  "label": "javascript"
},
{
  "text": "const myDestructuring = { prop1: 'value1', prop2: 'value2' }; const { prop1, prop2 } = myDestructuring;",
  "label": "javascript"
},
{
  "text": "const myRestParameter = (...args) => { console.log(args); };",
  "label": "javascript"
},
{
  "text": "const mySpreadOperator = [1, 2, ...[3, 4], 5];",
  "label": "javascript"
},
{
  "text": "const myDefaultParameter = (param1 = 'default', param2 = 42) => { console.log(param1, param2); };",
  "label": "javascript"
},
{
  "text": "const myArrowFunction = (param1, param2) => param1 + param2;",
  "label": "javascript"
},
{
  "text": "const myObjectSpread = { ...myObject, prop3: 'value3' };",
  "label": "javascript"
},
{
  "text": "<html><head><title>Hello World!</title></head><body><h1>Hello World!</h1></body></html>",
  "label": "html"
},
{
  "text": "<div class=\"container\"><h2>My Shopping List</h2><ul><li>Bread</li><li>Milk</li><li>Eggs</li></ul></div>",
  "label": "html"
},
{
  "text": "<form action=\"/submit\" method=\"post\"><label for=\"name\">Name:</label><input type=\"text\" id=\"name\" name=\"name\"><br><label for=\"email\">Email:</label><input type=\"email\" id=\"email\" name=\"email\"><br><input type=\"submit\" value=\"Submit\"></form>",
  "label": "html"
},
{
  "text": "<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>",
  "label": "html"
},
{
  "text": "<a href='https://www.example.com'>Link Text</a>",
  "label": "html"
},
{
  "text": "<img src='image.jpg' alt='Image Description'>",
  "label": "html"
},
{
  "text": "<h1 style='color:blue;text-align:center;'>This is a Heading</h1>",
  "label": "html"
},
{
  "text": "<p><strong>This text is bold.</strong></p>",
  "label": "html"
},
{
  "text": "<ul>\n  <li>List item 1</li>\n  <li>List item 2</li>\n  <li>List item 3</li>\n</ul>",
  "label": "html"
},
{
  "text": "<form>\n  <label for='username'>Username:</label>\n  <input type='text' id='username' name='username'><br>\n  <label for='password'>Password:</label>\n  <input type='password' id='password' name='password'><br>\n  <input type='submit' value='Submit'>\n</form>",
  "label": "html"
},
{
  "text": "<table>\n  <tr>\n    <th>Firstname</th>\n    <th>Lastname</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>Doe</td>\n    <td>35</td>\n  </tr>\n  <tr>\n    <td>Jane</td>\n    <td>Doe</td>\n    <td>28</td>\n  </tr>\n</table>",
  "label": "html"
},
{
  "text": "<audio controls>\n  <source src='music.mp3' type='audio/mpeg'>\n  Your browser does not support the audio element.\n</audio>",
  "label": "html"
},
{
  "text": "<video width='320' height='240' controls>\n  <source src='movie.mp4' type='video/mp4'>\n  Your browser does not support the video tag.\n</video>",
  "label": "html"
},
{
"text": "<!DOCTYPE html>\n<html>\n<head>\n\t<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>",
"label": "html"
},
{
"text": "<!DOCTYPE html>\n<html>\n<head>\n\t<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n<!-- A comment -->\n\n</body>\n</html>",
"label": "html"
},
{
"text": "<!DOCTYPE html>\n<html>\n<head>\n\t<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n<!--\nThis is a multiline comment.\n-->\n\n</body>\n</html>",
"label": "html"
},
{
"text": "<!DOCTYPE html>\n<html>\n<head>\n\t<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n<!--\nThis is a multiline comment.\nIt can have several lines.\n-->\n\n</body>\n</html>",
"label": "html"
},
{
"text": "<!DOCTYPE html>\n<html>\n<head>\n\t<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n<!--\nThis is a multiline comment.\nIt can have several lines.\n\nThis is another line in the comment.\n-->\n\n</body>\n</html>",
"label": "html"
},
{
"text": "<!DOCTYPE html>\n<html>\n<head>\n\t<title>Page Title</title>\n</head>\n<body>\n\n<!--\nThis is a comment.\nIt is ignored by the browser.\n-->\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>",
"label": "html"
},
{
"text": "<!DOCTYPE html>\n<html>\n<head>\n\t<title>Page Title</title>\n</head>\n<body>\n\n<!--\nThis is a comment.\nIt is ignored by the browser.\n-->\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n<!--\nThis is another comment.\n-->\n\n</body>\n</html>",
"label": "html"
},
{
"text": "<!DOCTYPE html>\n<html>\n<head>\n\t<title>Page Title</title>\n</head>\n<body>\n\n<!--\nThis is a comment.\nIt is ignored by the browser.\n-->\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n<!--\nThis is another comment.\nIt can have several lines.\n-->\n\n</body>\n</html>",
"label": "html"
},
{
  "text": "<script>\nconsole.log('Hello, World!');\n</script>",
  "label": "html"
},
{
  "text": "<script>\nlet name = 'John';\nconsole.log(`Hello, ${name}!`);\n</script>",
  "label": "html"
},
{
  "text": "<script>\nlet x = 5;\nlet y = 10;\nconsole.log(x + y);\n</script>",
  "label": "html"
},
{
  "text": "<script>\nlet numbers = [1, 2, 3, 4, 5];\nconsole.log(numbers);\n</script>",
  "label": "html"
},
{
  "text": "<script>\nlet person = {\n  name: 'John',\n  age: 30,\n  city: 'New York'\n};\nconsole.log(person);\n</script>",
  "label": "html"
},
{
  "text": "<script>\nlet x = 10;\nif (x > 5) {\n  console.log('x is greater than 5');\n} else {\n  console.log('x is less than or equal to 5');\n}\n</script>",
  "label": "html"
},
{
  "text": "<script>\nlet name = prompt('What is your name?');\nconsole.log(`Hello, ${name}!`);\n</script>",
  "label": "html"
},
{
  "text": "<script>\nfunction sayHello(name) {\n  console.log(`Hello, ${name}!`);\n}\nsayHello('John');\n</script>",
  "label": "html"
},
{
  "text": "<script>\nlet x = 5;\nwhile (x < 10) {\n  console.log(x);\n  x++;\n}\n</script>",
  "label": "html"
},
{
  "text": "<script>\nlet numbers = [1, 2, 3, 4, 5];\nfor (let number of numbers) {\n  console.log(number);\n}\n</script>",
  "label": "html"
},
{
  "text": "<script>\nlet x = 10;\ndo {\n  console.log(x);\n  x++;\n} while (x < 15);\n</script>",
  "label": "html"
},
{
  "text": "<script>\nlet numbers = [1, 2, 3, 4, 5];\nlet doubledNumbers = numbers.map(number => number * 2);\nconsole.log(doubledNumbers);\n</script>",
  "label": "html"
},
{
  "text": "<script>\nlet numbers = [1, 2, 3, 4, 5];\nlet filteredNumbers = numbers.filter(number => number > 2);\nconsole.log(filteredNumbers);\n</script>",
  "label": "html"
},
{
  "text": `/* Header */
.header {
    background-color: #1a1b26;
    color: #f8f8f2;
    text-align: center;
    padding: 1rem;
    border-bottom: 1px solid #44475a;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 0;
    z-index: 1; /* ensure header is always on top */
    }
    
    .header h1 {
    margin: 0;
    font-weight: lighter;
    }
    
    .social-icons-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    }
    
    /* Navigation */
    .nav {
    background-color: #282a36;
    color: #f8f8f2;
    padding: 0.5rem;
    border-bottom: 1px solid #44475a;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    top: 0;
    width: 100%;
    z-index: 2;
    }
    
    nav.sticky {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
        /* add any other styles as needed */
      }
    
    
      
    .nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    }
    
    .nav li {
    margin: 0 1rem;
    }
    
    .nav a {
    color: #50fa7b;
    text-decoration: none;
    }
    
    
    /* Main content */
    .main {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #1a1b26;
    color: #f8f8f2;
    }
    
    @media (max-width: 599px) {
    .main {
    flex-direction: column;
    padding: 0.5rem;
    }
    }
    
    .code-input-section,
    .code-output-section {
    margin: 1rem;
    flex-basis: 100%;
    max-width: 100%;
    width:100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    @media (min-width: 600px) {
    .code-input-section,
    .code-output-section {
    flex-basis: calc(50% - 2rem);
    max-width: calc(50% - 2rem);
    }
    }
    
    @media (min-width: 1200px) {
    .code-input-section,
    .code-output-section {
    flex-basis: calc(50% - 2rem);
    max-width: calc(50% - 2rem);
    }
    }
    
    /* Code input */
    .code-input {
    background-color: #282a36;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .code-input .overflow-guard {
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #44475a;
    margin: 0;
    padding: 0;
    }
    
    /* Code output */
    .code-output {
    display: block;
    white-space: pre-wrap;
    font-size: 1rem;
    padding: 1rem;
    background-color: #1a1b26;
    color: #f8f8f2;
    border: 1px solid #44475a;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    height: 370px;
    overflow-y: scroll;
    }
    
    /* style the scrollbar */
    .code-output::-webkit-scrollbar {
    width: 8px;
    }
    
    /* style the thumb */
    .code-output::-webkit-scrollbar-thumb {
    background-color: #757575;
    border-radius: 10px;
    }
    
    /* style the track */
    .code-output::-webkit-scrollbar-track {
    background-color: #1a1b26;
    }
    .code-output > button {
        margin: 5px;
    }
    
    /* Explain button section */
    .explain-button-section {
    position: fixed;
    width: fit-content;
    bottom: 0;
    right: 16px;
    z-index: 3;
    }
    
    .explain-button{
    background-color: #2d2d2d;
    color: #fff;
    border: 2px solid #444;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
    font-size: 1.2rem;
    padding: 8px 16px;
    text-align: center;
    }
    
    .explain-button:hover {
    background-color: #3a3a3a;
    border: 2px solid #ff79c6;
    }
    
    /* Loading overlay */
    .loading-overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
    
    /* Logo */
    .logo{
    height: 120px;
    }
    
    /* Responsive styles */
    @media only screen and (max-width: 600px) {
    .header {
    flex-direction: column;
    }
    .social-icons-container {
        flex-wrap: wrap;
    }
    
    .nav {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .nav li {
        margin: 0.5rem 0;
    }
    
    .code-input-section,
    .code-output-section {
        flex-basis: 100%;
        max-width: 100%;
    }
    }
    
    @media only screen and (min-width: 601px) and (max-width: 768px) {
    .header {
    flex-direction: row;
    flex-wrap: wrap;
    }
    .social-icons-container {
        order: 1;
        flex-basis: 100%;
        justify-content: center;
    }
    
    .nav {
        order: 2;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0;
        
    }
    
      
    
    .nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .nav li {
        margin: 0.5rem;
    }
    
    .code-input-section,
    .code-output-section {
        flex-basis: 100%;
        max-width: 100%;
    }
    }
    
    @media only screen and (min-width: 769px) and (max-width: 992px) {
    .header {
    flex-direction: row;
    flex-wrap: wrap;
    }
    .social-icons-container {
        order: 1;
        flex-basis: 100%;
        justify-content: flex-end;
    }
    
    /* Social Icons */
    .social-icons-container{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      margin: 1rem 0;
    }
    
    .social-icons-container a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: 0 0.5rem;
    }
    
    .social-icons-container a:hover {
      background-color: #44475a;
    }
    
    .social-icons-container i {
      font-size: 1.2rem;
      color: #f8f8f2;
    }
    }
    .hire-me-container{
        height: 50%;
        width: 100%;
        background-color: #ffffff00;
        position: fixed;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .hire-me-drag-handle{
        background-color: #ffffff8a;
        width: fit-content;
        padding: 15px;
        height: 10%;
        margin-top: 0px;
        border-top-right-radius: 999px;
        border-top-left-radius: 999px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .hire-me-content {
        padding: 10px;
        height: 100%;
        background-color: #1a1b26cc;
        overflow-y: scroll;
        direction: rtl;
  text-align: left;
      }
      
      .hire-me-content::-webkit-scrollbar {
        width: 8px;
      }
      
      .hire-me-content::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      .hire-me-content::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 4px;
      }
      
    
    .hire-me-content > h1 {
        color: #50fa7b;
    }
    .hire-me-content > p {
        font-size: 1.2rem;
        color: #f8f8f2;
    }
    /* Responsive styles */
    @media only screen and (max-width: 600px) {
    .header {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    
    .social-icons-container {
        flex-wrap: wrap;
    }
    
    .nav {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .nav li {
        margin: 0.5rem 0;
    }
    
    .code-input-section,
    .code-output-section {
        flex-basis: 100%;
        max-width: 87%;
    }
    }
    
    @media only screen and (min-width: 601px) and (max-width: 768px) {
    .header {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .social-icons-container {
        order: 1;
        flex-basis: 100%;
        justify-content: center;
    }
    
    .nav {
        order: 2;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0;
        
    }
    
      
    
    .nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .nav li {
        margin: 0.5rem;
    }
    
    .code-input-section,
    .code-output-section {
        flex-basis: 100%;
        max-width: 100%;
    }
    }
    
    @media only screen and (min-width: 769px) and (max-width: 992px) {
    .header {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .social-icons-container {
        order: 1;
        flex-basis: 100%;
        justify-content: flex-end;
        font-size: 1rem;
    }
    
    /* Social Icons */
    .social-icons-container{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      margin: 1rem 0;
    }
    
    .social-icons-container a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: 0 0.5rem;
    }
    
    .social-icons-container a:hover {
      background-color: #44475a;
    }
    
    .social-icons-container i {
      font-size: 1.2rem;
      color: #f8f8f2;
    }
    }`,
  "label": "css"
},
{text:`@media only screen and (min-width: 601px) and (max-width: 768px) {
    .header {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .social-icons-container {
        order: 1;
        flex-basis: 100%;
        justify-content: center;
    }
}`,
"label": "css"
}
];

module.exports = codeClasssification;
