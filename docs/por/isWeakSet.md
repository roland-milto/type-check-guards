# isWeakSet

## Descrição

Determina se o `value` fornecido é um `WeakSet` de objetos.

### Caso de uso

Use `isWeakSet` ao aceitar entrada não tipada (por exemplo, de APIs externas, configuração dinâmica ou valores
`unknown`) e você precisa verificar se é um `WeakSet` antes de usar operações específicas de `WeakSet`.

> **Nota para utilizadores de TypeScript:**
>
> Use `isWeakSet` para restringir um valor `unknown` a `WeakSet<object>` em tempo de execução; observe que `WeakSet` só
> pode conter referências a objetos.

### Vantagens

- Fornece uma verificação simples em tempo de execução para saber se um valor é um `WeakSet`.
- Ajuda a evitar erros de tipo ao garantir que apenas instâncias de `WeakSet` sejam tratadas como tal.
- Funciona com qualquer entrada `unknown` e retorna um resultado booleano claro (`true`/`false`).

## Uso

### Sintaxe

Função:

- `isWeakSet(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // verdadeiro
console.log(isWeakSet(b)); // falso

if (isWeakSet(a)) {
  // a é um WeakSet em tempo de execução
}
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isWeakSet(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 14:18:51 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>