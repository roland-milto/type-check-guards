# areFalse

## Descrição

`areFalse` verifica se todos os elementos em um array fornecido são estritamente o booleano `false`.

### Caso de uso

Validar que uma lista de feature flags, verificações ou resultados de guards são todos `false` antes de prosseguir (por
exemplo, confirmar que não há condições bloqueadoras presentes).

> **Nota para utilizadores de TypeScript:**
>
> Use `areFalse` quando você precisar de uma validação estrita de que um array não está vazio e contém apenas o valor
> booleano `false`.

### Vantagens

- Garante que cada elemento seja estritamente `false` (sem coerção truthy/falsey).
- Retorna `false` para não-arrays ou arrays vazios ao exigir um array preenchido via `isFilledArray`.
- Interrompe cedo no primeiro elemento que não seja `false` para maior eficiência.

## Uso

### Sintaxe

Função:

- `areFalse(array)`

Parâmetros:

- `array`: O array a verificar, contendo elementos de qualquer tipo.

### Importação local da função

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // verdadeiro
const b = areFalse([false, true, false]);  // falso
const c = areFalse([false, "false", false]); // falso
const d = areFalse([]); // falso
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areFalse(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 16:18:18 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>