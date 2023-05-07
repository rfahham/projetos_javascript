var pessoas = new[] {
    new { Nome = "Ricardo", Idade = 51 },
    new { Nome = "Alessandra", Idade = 49 },
    new { Nome = "João Ricardo", Idade = 22 },
    new { Nome = "João Victor", Idade = 20 },
    new { Nome = "Andreza", Idade = 17 }
 };

int menor = Pessoas[0].Idade;
//  int maior = Pessoas[0].Idade;

for (int i = 0; < Pessoas.Length; i++)
 {
    if (Pessoas[i].Idade < menor)
    // if (Pessoas[i].Idade > maior)

    {
        menor = Pessoas[i].Idade;
        // maior = Pessoas[i].Idade;
    }
 }

console.WriteLine(menor);
//  console.WriteLine(maior);