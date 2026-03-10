# isStream

## Descrição

`isStream` verifica se um determinado valor é um objeto de stream (semelhante a stream do Node.js, `ReadableStream` ou
`WritableStream`).

### Caso de uso

Valide entradas que podem ser tanto objetos simples quanto streams (por exemplo, uploads de arquivos, corpos HTTP ou
pipelines de processamento) e ramifique a lógica com base em o valor ser uma stream.

> **Nota para utilizadores de TypeScript:**
>
> Use `isStream` para restringir `unknown` antes de chamar métodos de stream; ele reconhece objetos semelhantes a
> streams do Node.js (via `pipe`/`on`) e Web Streams (`ReadableStream`/`WritableStream`) quando esses globais existem.

### Vantagens

- Detecta com segurança objetos comuns semelhantes a streams do Node.js verificando as funções `pipe` e `on`.
- Também oferece suporte a Web Streams ao reconhecer `ReadableStream` e `WritableStream` quando disponíveis.
- Retorna um resultado booleano simples (`true`/`false`) adequado para guards e lógica de ramificação.

## Uso

### Sintaxe

Função:

- `isStream(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream é semelhante a um stream; você pode usar com segurança APIs comuns de stream
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isStream(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isStream](../_analysis/isStream.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 23:42:38 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>