# areFloats

## Descrição

`areFloats` verifica se um determinado array está preenchido e se todos os seus elementos são floats.

### Caso de uso

Use `areFloats` quando você receber um `unknown[]` (por exemplo, de JSON, parâmetros de consulta ou APIs externas) e
precisar garantir que seja um array preenchido em que cada item seja um float antes de executar lógica numérica como
média, interpolação ou cálculos estatísticos.

> **Nota para utilizadores de TypeScript:**
>
> Use `areFloats` para proteger `unknown[]` antes de tratá-lo como `number[]` contendo apenas floats; ele retorna
`false` para arrays vazios e para qualquer elemento que não seja float.

### Vantagens

- Retorna `true` somente quando a entrada é um array não vazio e cada elemento é um float.
- Falha rapidamente: retorna `false` assim que um elemento que não é float é encontrado.
- Ajuda a validar uma entrada desconhecida antes de realizar cálculos específicos de float.

## Uso

### Sintaxe

Função:

- `areFloats(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos float.

### Importação local da função

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // verdadeiro
console.log(areFloats(b)); // falso
console.log(areFloats(c)); // falso

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // nulo
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areFloats(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 15:59:16 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>