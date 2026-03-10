# areIndexesFound

## Descrição

`areIndexesFound` verifica se um valor é um array não vazio cujos elementos são todos índices válidos, retornando `true`
se forem e `false` caso contrário.

### Caso de uso

Validar dados fornecidos pelo usuário ou externos (por exemplo, JSON analisado) que se espera serem uma lista de índices
antes de usá-los para acessar ou fatiar arrays.

> **Nota para utilizadores de TypeScript:**
>
> Use `areIndexesFound` para validar uma entrada desconhecida antes de tratar seus elementos como índices de array; ele
> retorna `false` para arrays vazios e para arrays que contêm valores que não são índices.

### Vantagens

- Retorna `true` somente quando a entrada é um array preenchido e cada elemento é um índice válido.
- Falha rapidamente: retorna `false` assim que um elemento que não é índice é encontrado.
- Útil como uma proteção antes de usar valores como posições ou deslocamentos de array.

## Uso

### Sintaxe

Função:

- `areIndexesFound(array)`

Parâmetros:

- `array`: O array a ser verificado quanto à conformidade com índices.

### Importação local da função

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Aqui, `a` é confirmado como um array preenchido de índices.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areIndexesFound(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 01:03:54 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>