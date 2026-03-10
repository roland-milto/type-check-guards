# isNaN

## Descrição

Determina se o `value` fornecido é um `NaN` do tipo `number` sem converter strings.

### Caso de uso

Validar entradas não confiáveis ou com tipagem frouxa (por exemplo, payloads de API, valores de formulários, JSON
analisado) para detectar o valor especial `NaN` e tratá-lo explicitamente, enquanto trata entradas que não são números
como não sendo `NaN`.

> **Nota para utilizadores de TypeScript:**
>
> Use `isNaN` quando você precisar detectar o valor numérico especial `NaN` garantindo que a entrada seja realmente um
`number` (sem conversão de string para número).

### Vantagens

- Verifica se um valor é `NaN` sem coagir valores que não são números (por exemplo, strings) para números.
- Retorna `true` apenas para valores que são simultaneamente do tipo `number` e `NaN`.
- Seguro para entradas `unknown` e evita falsos positivos de conversões implícitas.

## Uso

### Sintaxe

Função:

- `isNaN(value)`

Parâmetros:

- `value`: O valor a ser verificado para saber se é um `NaN` do tipo `number`.

### Importação local da função

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // verdadeiro
console.log(isNaN(b)); // falso
console.log(isNaN(c)); // falso

if (isNaN(a)) {
  // a é um número e especificamente NaN
}
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isNaN(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 15:47:40 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>