# isIndexFound

## Descrição

`isIndexFound` determina se um determinado valor é um inteiro não negativo, indicando que um índice foi encontrado.

### Caso de uso

Validar que um resultado de busca representa um índice utilizável (inteiro `>= 0`) antes de indexar um array ou string,
evitando o uso acidental de `-1` ou de valores não numéricos.

> **Nota para utilizadores de TypeScript:**
>
> Use `isIndexFound` após operações como `indexOf`, `findIndex` ou buscas personalizadas em que `-1` (ou outros valores
> inválidos) pode indicar “não encontrado”. Quando retorna `true`, o valor é um número e é seguro usá-lo como índice de
> array/string.

### Vantagens

- Fornece um type guard simples para detectar se um índice foi encontrado ao verificar se é um inteiro não negativo.
- Retorna `true` apenas para valores válidos do tipo índice (inteiros `>= 0`), rejeitando negativos, não inteiros e
  valores que não são números.
- Ajuda a evitar erros de off-by-one e de valores sentinela ao trabalhar com APIs que retornam `-1` para “não
  encontrado”.

## Uso

### Sintaxe

Função:

- `isIndexFound(value)`

Parâmetros:

- `value`: O valor a verificar para ser um inteiro não negativo.

### Importação local da função

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx é um número aqui e é >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Uso típico com indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isIndexFound(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 00:47:28 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>