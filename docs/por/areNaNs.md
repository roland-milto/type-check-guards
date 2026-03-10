# areNaNs

## Descrição

`areNaNs` verifica se todos os elementos em um array são `NaN` e retorna `true` somente se cada elemento for `NaN`.

### Caso de uso

Validar dados de entrada em que `NaN` é usado como um valor sentinela e você precisa garantir que o array inteiro
consiste exclusivamente de `NaN` (por exemplo, detectar uma série numérica totalmente ausente).

> **Nota para utilizadores de TypeScript:**
>
> Use `areNaNs` quando você precisar validar que um array contém apenas o valor numérico `NaN` (sem coerção de string
> para número).

### Vantagens

- Retorna `true` somente quando cada elemento é `NaN` (verificação estrita de todos os elementos).
- Não faz coerção de strings para números; valores como "NaN" permanecem não-`NaN` e fazem o resultado ser `false`.
- Retorna `false` para arrays não preenchidos, evitando `true` acidental em uma entrada vazia.

## Uso

### Sintaxe

Função:

- `areNaNs(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a valores `NaN`.

### Importação local da função

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // verdadeiro
const b = areNaNs([NaN, 1, NaN]); // falso
const c = areNaNs([NaN, "NaN", NaN]); // falso
const d = areNaNs([NaN, null, NaN]); // falso
const e = areNaNs([] as unknown[]); // falso

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areNaNs(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 15:53:07 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>