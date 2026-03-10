# areNumerics

## Descrição

`areNumerics` verifica se um valor é um array não vazio em que todos os elementos são numéricos.

### Caso de uso

Use `areNumerics` para validar dados externos ou sem tipagem (por exemplo, payloads JSON, parâmetros de consulta,
entrada de formulário) antes de calcular somas, médias ou outras operações numéricas, garantindo que a entrada seja um
array numérico não vazio e retornando `false` caso contrário.

> **Nota para utilizadores de TypeScript:**
>
> Use `areNumerics` para proteger a entrada `unknown` antes de tratá-la como um array numérico; ele retorna `false` para
> não-arrays e arrays vazios.

### Vantagens

- Retorna `true` somente quando a entrada é um array não vazio e todos os elementos são numéricos.
- Falha rapidamente: para de verificar assim que um elemento não numérico é encontrado, retornando `false`.
- Ajuda a validar com segurança uma entrada desconhecida antes de realizar operações numéricas.

## Uso

### Sintaxe

Função:

- `areNumerics(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos numéricos.

### Importação local da função

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // verdadeiro
console.log(areNumerics(b)); // verdadeiro
console.log(areNumerics(c)); // falso
console.log(areNumerics(d)); // falso
console.log(areNumerics(e)); // falso

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // nulo
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areNumerics(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 16:06:59 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>