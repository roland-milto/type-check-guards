# isUndefined

## Descrição

Verifica se um determinado valor é `undefined`.

### Caso de uso

Use `isUndefined` para proteger entradas opcionais, detectar propriedades ausentes ou diferenciar entre “não
fornecido” (`undefined`) e “explicitamente vazio” (`null`).

> **Nota para utilizadores de TypeScript:**
>
> Use `isUndefined` quando você precisar especificamente detectar `undefined` (não `null`). É seguro porque se baseia em
`typeof value === "undefined"`.

### Vantagens

- Fornece uma verificação clara e explícita para `undefined` usando `typeof`, evitando casos extremos com variáveis não
  declaradas.
- Retorna um resultado booleano simples (`true`/`false`) adequado para guards, ramificações e lógica de validação.
- Ajuda a distinguir `undefined` de outros valores “vazios” como `null`, `0`, `""` ou `NaN`.

## Uso

### Sintaxe

Função:

- `isUndefined(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x é indefinido aqui
} else {
  // x não é indefinido aqui
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isUndefined(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 14:04:06 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>