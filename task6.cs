using System;

namespace programming
{
    class task6
    {
        static void Main(string[] args)
        {
            static void renderTable(int n)
            {
                for (int i = 1; i <= n; i++)
                {
                    for (int j = 1; j <= n; j++)
                    {
                        Console.Write($"{i * j}\t");
                    }
                    Console.WriteLine();
                }
                Console.ReadKey();
            }

            renderTable(5);
        }
    }
}
