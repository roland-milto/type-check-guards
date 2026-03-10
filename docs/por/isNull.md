# isNull

## Descrição

Determina se o `value` fornecido é `null`.

### Caso de uso

Use `isNull` para validar entradas ou campos de payload de API em que `null` é um valor sentinela significativo e deve
ser tratado de forma diferente de `undefined` ou de outros valores.

> **Nota para utilizadores de TypeScript:**
>
> Use `isNull` quando você precisar distinguir `null` de `undefined` e de outros valores falsy; ele retorna `true`
> apenas para `null`.

### Vantagens

- Fornece uma verificação precisa de `null` sem confundi-lo com `undefined`.
- Funciona de forma confiável para qualquer tipo de entrada porque aceita `unknown`.
- Simples, rápido e sem efeitos colaterais; retorna apenas `true` ou `false`.

## Uso

### Sintaxe

Função:

- `isNull(value)`

Parâmetros:

- `value`: O valor a ser verificado quanto a `null`.

### Importação local da função

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a é null aqui
}
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isNull(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isNull](../_analysis/isNull.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 15:40:32 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>