# areIntegers

## Descrição

`areIntegers` determina se todos os elementos em um determinado array são inteiros, retornando `true` se forem e `false`
caso contrário.

### Caso de uso

Use `areIntegers` para validar dados fornecidos pelo usuário ou externos (por exemplo, parâmetros de consulta, payloads
JSON, linhas CSV) quando sua lógica exige uma lista preenchida de valores inteiros, como IDs, contadores, offsets de
paginação ou índices de array.

> **Nota para utilizadores de TypeScript:**
>
> Use `areIntegers` como uma guarda em tempo de execução para entradas `unknown[]` antes de tratá-las como `number[]`
> contendo apenas inteiros. Se retornar `false`, a entrada não é um array preenchido ou contém pelo menos um valor não
> inteiro.

### Vantagens

- Retorna `true` somente quando cada elemento é um inteiro; caso contrário, retorna `false`.
- Ajuda a validar entradas desconhecidas antes de realizar operações apenas com inteiros (por exemplo, indexação,
  contagens, IDs).
- Falha rapidamente: para de verificar assim que um elemento não inteiro é encontrado.

## Uso

### Sintaxe

Função:

- `areIntegers(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos inteiros.

### Importação local da função

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // verdadeiro
console.log(areIntegers(b)); // verdadeiro
console.log(areIntegers(c)); // falso

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areIntegers(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 01:00:04 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>