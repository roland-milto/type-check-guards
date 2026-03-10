# arePrimitives

## Descrição

`arePrimitives` avalia se todos os elementos em um array fornecido e não vazio são de tipos primitivos.

### Caso de uso

Validar que dados de entrada (por exemplo, parâmetros de query, valores de uma linha CSV ou uma lista de IDs/tags)
contêm apenas valores primitivos antes de serializar, aplicar hash, registrar em log ou passá-los para APIs que não
devem receber objetos.

> **Nota para utilizadores de TypeScript:**
>
> Use `arePrimitives` quando você precisar garantir que um `unknown[]` contenha apenas valores primitivos (string,
> number, bigint, boolean, symbol, undefined ou null) antes de processamento adicional.

### Vantagens

- Retorna `true` somente quando cada elemento é um valor primitivo, tornando-o uma verificação estrita para arrays “sem
  objetos/funções”.
- Falha rapidamente: retorna `false` assim que um elemento não primitivo é encontrado.
- Também retorna `false` para não-arrays e para arrays vazios (via a verificação de array preenchido), evitando a
  aceitação acidental de entrada inválida.

## Uso

### Sintaxe

Função:

- `arePrimitives(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos de tipo primitivo.

### Importação local da função

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // verdadeiro
const r2 = arePrimitives(b); // verdadeiro
const r3 = arePrimitives(c); // falso
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.arePrimitives(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 00:06:10 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>