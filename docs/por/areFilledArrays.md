# areFilledArrays

## Descrição

`areFilledArrays` verifica se um array bidimensional não está vazio e se todos os seus subarrays não estão vazios.

### Caso de uso

Use `areFilledArrays` para validar entradas tabulares ou do tipo matriz (por exemplo, linhas de CSV, dados de grade,
resultados agrupados) para que você possa assumir com segurança que existe pelo menos um subarray e que nenhum dos
subarrays está vazio.

> **Nota para utilizadores de TypeScript:**
>
> Use `areFilledArrays` quando você precisar garantir que um array 2D tenha pelo menos uma linha e que cada linha tenha
> pelo menos um elemento antes de iterar ou indexar nele.

### Vantagens

- Valida que o array externo não esteja vazio e que cada array interno também não esteja vazio, retornando `true` apenas
  quando ambas as condições são atendidas.
- Funciona com quaisquer tipos de elementos dentro dos subarrays (por exemplo, números, strings, objetos, arrays
  aninhados) porque verifica apenas o status de “preenchido” do array, não o conteúdo dos elementos.
- Fornece um resultado booleano simples (`true`/`false`) adequado para guards antes de processar dados bidimensionais.

## Uso

### Sintaxe

Função:

- `areFilledArrays(array)`

Parâmetros:

- `array`: O array bidimensional a ser verificado.

### Importação local da função

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // verdadeiro
console.log(areFilledArrays(b)); // verdadeiro
console.log(areFilledArrays(c)); // verdadeiro
console.log(areFilledArrays(d)); // falso
console.log(areFilledArrays(e)); // falso
console.log(areFilledArrays(f)); // falso

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areFilledArrays(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 11:58:34 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>