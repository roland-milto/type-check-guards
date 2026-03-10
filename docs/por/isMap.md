# isMap

## Descrição

Verifica se o `value` fornecido é um `Map`, retornando `true` se for e `false` caso contrário.

### Caso de uso

Use `isMap` quando você receber um valor `unknown` (por exemplo, de parsing de JSON, APIs externas ou entrada do
usuário) e precisar garantir que ele seja um `Map` antes de realizar operações de `Map`.

> **Nota para utilizadores de TypeScript:**
>
> `isMap` é um guard em tempo de execução que retorna `true` quando o valor é um `Map` e `false` caso contrário; use-o
> para restringir `unknown` antes de chamar as APIs de `Map`.

### Vantagens

- Fornece uma verificação rápida em tempo de execução para saber se um valor é um `Map`.
- Ajuda a evitar erros de tipo ao proteger caminhos de código que exigem métodos de `Map` como `get`, `set` e `has`.
- Funciona bem como uma etapa leve de validação ao lidar com entradas `unknown`.

## Uso

### Sintaxe

Função:

- `isMap(value)`

Parâmetros:

- `value`: O valor a verificar.

### Importação local da função

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isMap(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isMap](../_analysis/isMap.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 16:29:25 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>