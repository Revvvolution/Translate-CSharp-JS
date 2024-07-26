using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;


public class Guest
{
    public string Name { get; }
    public string Occupation { get; }
    public string Bio { get; }

    public Guest(string name, string job, string bio)
    {
        Name = name;
        Occupation = job;
        Bio = bio;
    }

    public override string ToString()
    {
        return $"{Name} ({Occupation}) {Bio}";
    }
}

class Program
{
    static void Main(string[] args)
    {

        var g1 = new Guest("Marilyn Monroe", "entertainer", "(1926 - 1962) American actress, singer, model");
        var g2 = new Guest("Abraham Lincoln", "politician", "(1809 - 1865) US President during American civil war");
        var g3 = new Guest("Martin Luther King", "activist", "(1929 - 1968)  American civil rights campaigner");
        var g4 = new Guest("Rosa Parks", "activist", "(1913 - 2005)  American civil rights activist");
        var g5 = new Guest("Peter Sellers", "entertainer", "(1925 - 1980) British actor and comedian");
        var g6 = new Guest("Alan Turing", "computer scientist", "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world");
        var g7 = new Guest("Admiral Grace Hopper", "computer scientist", "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds");
        var g8 = new Guest("Indira Gandhi", "politician", "(1917 - 1984) Prime Minister of India 1966 - 1977");
    
        List<Guest> guests = [g1, g2, g3, g4, g5, g6, g7, g8];

        foreach (Guest g in guests)
        {
            Console.WriteLine($"{g.Name} ({g.Occupation}) {g.Bio}");
        }

        // Grouping them by
        
        List<Guest> table_1 = new List<Guest>();
        
        List<Guest> table_2 = new List<Guest>();

        List<string> guestOccupations = new List<string>();


        foreach (Guest g in guests)
        {
            if (guestOccupations.Contains(g.Occupation))
            {
                table_2.Add(g);
            }
            else
            {
                guestOccupations.Add(g.Occupation);
                table_1.Add(g);
            }
        }

        Console.WriteLine("\n\n\tTable 1");
        foreach (Guest g in table_1)
        {
            Console.WriteLine($"{g.Name} ({g.Occupation}) {g.Bio}");
        }

        Console.WriteLine("\n\n\tTable 2");
        foreach (Guest g in table_2)
        {
            Console.WriteLine($"{g.Name} ({g.Occupation}) {g.Bio}");
        }




    }
}