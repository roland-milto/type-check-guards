# isSet

## Descrição

Determina se um determinado valor é um `Set`.

### Caso de uso

Validar entradas de fontes externas (por exemplo, análise de JSON, entrada do utilizador ou APIs de terceiros) para
garantir que um valor é um `Set` antes de realizar operações de `Set`.

> **Nota para utilizadores de TypeScript:**
>
> Use `isSet` para restringir valores `unknown` antes de chamar APIs específicas de `Set`, como `.add`, `.has` ou
`.size`.

### Vantagens

- Fornece uma verificação simples em tempo de execução para confirmar se um valor é um `Set`.
- Ajuda a evitar erros de tipo ao permitir ramificações antecipadas quando um valor não é um `Set`.
- Funciona com qualquer conteúdo de `Set` (vazio ou preenchido) e retorna `true`/`false` de forma consistente.

## Uso

### Sintaxe

Função:

- `isSet(value)`

Parâmetros:

- `value`: O valor a verificar.

### Importação local da função

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a é um Set em tempo de execução
  console.log(a.size);
}

console.log(isSet(b)); // falso

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isSet(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isSet](../_analysis/isSet.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 23:10:55 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>