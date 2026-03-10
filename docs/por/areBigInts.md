# areBigInts

## Descrição

`areBigInts` determina se um valor é um array não vazio contendo apenas valores `bigint`.

### Caso de uso

Validar uma entrada desconhecida (por exemplo, dados semelhantes a JSON analisados, payloads de API ou parâmetros de
função tipados como `unknown`) para garantir que seja um array não vazio de valores `bigint` antes do processamento;
retorna `true` somente quando todos os elementos são `bigint`, caso contrário `false`.

> **Nota para utilizadores de TypeScript:**
>
> Use `areBigInts` como uma guarda em tempo de execução antes de realizar operações exclusivas de `bigint` (por exemplo,
> aritmética, comparações) em uma entrada desconhecida.

### Vantagens

- Garante que cada elemento seja um `bigint`, retornando `true` somente quando todo o array corresponde.
- Rejeita não-arrays e arrays vazios por design (via `isFilledArray`), evitando a aceitação acidental de entradas
  inválidas.
- Falha rápida: retorna `false` assim que um elemento que não seja `bigint` é encontrado.

## Uso

### Sintaxe

Função:

- `areBigInts(array)`

Parâmetros:

- `array`: O valor a ser verificado.

### Importação local da função

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // verdadeiro
console.log(areBigInts(b)); // falso
console.log(areBigInts(c)); // falso
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areBigInts(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 23:27:08 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>