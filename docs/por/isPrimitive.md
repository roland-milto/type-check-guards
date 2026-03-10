# isPrimitive

## Descrição

`isPrimitive` determina se um determinado valor é um primitivo (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Caso de uso

Validar entradas em tempo de execução (por exemplo, campos de payload de API, valores de configuração ou dados
fornecidos pelo usuário) para garantir que um valor seja um primitivo antes de serializar, registrar em log ou aplicar
operações exclusivas de primitivos.

> **Nota para utilizadores de TypeScript:**
>
> Use `isPrimitive` para proteger entradas `unknown` antes de tratá-las como objetos ou funções; ele retorna `true` para
> primitivos e `false` para objetos e funções.

### Vantagens

- Verificação rápida e sem alocação para saber se um valor é um primitivo JavaScript.
- Trata corretamente `null` como primitivo (mesmo que `typeof null` seja `"object"`).
- Ajuda a restringir valores `unknown` antes de realizar operações exclusivas de objetos.

## Uso

### Sintaxe

Função:

- `isPrimitive(value)`

Parâmetros:

- `value`: O valor a verificar quanto ao tipo primitivo.

### Importação local da função

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isPrimitive(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 23:57:28 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>