# areArrays

## Descrição

`areArrays` determina se um valor é um array bidimensional preenchido cujos itens são todos arrays.

### Caso de uso

Use `areArrays` para validar entradas tabulares ou do tipo matriz (por exemplo, linhas de CSV, dados de grade ou listas
agrupadas) antes de realizar operações de linha/coluna; ele retorna `false` se a entrada não for um array, estiver vazia
ou contiver qualquer elemento que não seja um array.

> **Nota para utilizadores de TypeScript:**
>
> Use `areArrays` quando você precisar garantir que um valor seja um array 2D não vazio e que cada linha seja um array
> antes de iterar ou indexar em arrays aninhados.

### Vantagens

- Valida que a entrada seja um array bidimensional não vazio em que cada elemento é um array.
- Retorna um resultado booleano simples (`true`/`false`) adequado para guards e saídas antecipadas.
- Ajuda a evitar erros em tempo de execução quando o código posterior assume operações com arrays aninhados (por
  exemplo, mapear linhas).

## Uso

### Sintaxe

Função:

- `areArrays(array)`

Parâmetros:

- `array`: A entrada a ser verificada.

### Importação local da função

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value é um array 2D com arrays como elementos
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areArrays(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 13:41:06 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>