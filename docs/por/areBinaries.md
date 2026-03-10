# areBinaries

## Descrição

Verifica se o valor fornecido é um array não vazio de strings binárias válidas e retorna `true` somente se todos os
itens passarem na validação.

### Caso de uso

Use `areBinaries` quando você receber uma lista desconhecida (por exemplo, de JSON, formulários ou APIs) e precisar
garantir que ela seja um array não vazio de strings binárias antes de fazer o parsing ou processá-la.

> **Nota para utilizadores de TypeScript:**
>
> Use `areBinaries` para validar uma entrada desconhecida antes de converter strings binárias em números/BigInts; isso
> garante que o array não esteja vazio e que cada elemento seja uma string binária válida.

### Vantagens

- Valida que um valor seja um array não vazio em que cada elemento é uma string binária válida.
- Retorna um resultado booleano simples (`true`/`false`) adequado para guards, retornos antecipados e validação de
  entrada.
- Evita erros de parsing posteriores ao rejeitar arrays que contenham qualquer entrada não binária.

## Uso

### Sintaxe

Função:

- `areBinaries(array)`

Parâmetros:

- `array`: O valor a ser verificado.

### Importação local da função

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // verdadeiro
console.log(areBinaries(b)); // falso
console.log(areBinaries([])); // falso
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areBinaries(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 23:15:43 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>