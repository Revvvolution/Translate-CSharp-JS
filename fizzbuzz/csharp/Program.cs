using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("\n\t\tLet's Play FizzBuzz!!!\n");
        Console.WriteLine("\t\tHow to play:\n\n\tThe player designated to go first says the number 'one', and the players then count upwards in turn.\n\tHowever, any number divisible by three is replaced by the word fizz and any number divisible by five by the word buzz.\n\tNumbers divisible by both three and five (i.e. divisible by fifteen) become fizz buzz.\n\tA player who hesitates or makes a mistake is eliminated.\n\n");

        for (int i = 1; i < 100; i++)
        {
            if (i % 15 == 0)
            {
                Console.WriteLine("fizzbuzz");
            }
            else if (i % 3 == 0)
            {
                Console.WriteLine("fizz");
            }
            else if (i % 5 == 0)
            {
                Console.WriteLine("buzz");
            }
            else
            {
                Console.WriteLine($"{i}");
            }
        }
    }
}