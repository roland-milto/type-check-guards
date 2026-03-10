# areOfType

## Descrição

Verifica se todos os elementos no `array` fornecido são do `type` especificado.

### Caso de uso

Use `areOfType` para validar entradas desconhecidas (por exemplo, JSON analisado, payloads de API, entrada do usuário)
antes de realizar operações específicas de tipo em cada elemento de um array.

> **Nota para utilizadores de TypeScript:**
>
> Como `areOfType` é um type guard, o TypeScript restringe o array dentro de um bloco `if (areOfType(...)) {}` para
`Array<DataTypeOf<T>>`.

### Vantagens

- Fornece um type guard do TypeScript: quando retorna `true`, a entrada é restringida para `Array<DataTypeOf<T>>`.
- Valida cada elemento em relação ao tipo de runtime solicitado, impedindo que arrays com tipos mistos sejam aprovados.
- Falha rapidamente: retorna `false` assim que um elemento que não corresponde é encontrado.
- Rejeita não-arrays e arrays vazios por design (depende de `isFilledArray`).

## Uso

### Sintaxe

Função:

- `areOfType(array, type)`

Parâmetros:

- `array`: O array a verificar.
- `type`: O tipo a verificar em relação a cada elemento no array.

### Importação local da função

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values agora é number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areOfType(array, type)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 17:11:01 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>