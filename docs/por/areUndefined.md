# areUndefined

## Descrição

`areUndefined` verifica se cada elemento em um array fornecido é `undefined`.

### Caso de uso

Validar que uma lista de resultados opcionais não contém valores reais (apenas `undefined`), por exemplo, após mapear
buscas em que entradas ausentes são representadas como `undefined`, e você quer confirmar que todas as buscas falharam.

> **Nota para utilizadores de TypeScript:**
>
> Use `areUndefined` quando você precisar afirmar que um `unknown[]` contém apenas valores `undefined`; ele retorna
`false` para arrays vazios e entradas não-array/inválidas devido à verificação interna `isFilledArray`.

### Vantagens

- Retorna `false` para não-arrays e arrays vazios ao exigir um array preenchido via `isFilledArray`.
- Garante que cada elemento seja `undefined`, não apenas alguns, tornando a intenção explícita.
- Útil como um predicado no estilo de guarda ao validar coleções de entrada desconhecidas.

## Uso

### Sintaxe

Função:

- `areUndefined(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos `undefined`.

### Importação local da função

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Nota: retorna false para arrays vazios
const r4 = areUndefined([]); // false

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areUndefined(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 13:57:31 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>