# areStreams

## Descrição

`areStreams` determina se um valor é um array preenchido no qual cada elemento é um `Stream`.

### Caso de uso

Validar coleções fornecidas pelo usuário ou construídas dinamicamente (por exemplo, múltiplos streams de leitura de
arquivos) antes de fazer pipe, retomar ou operar sobre elas como um grupo.

> **Nota para utilizadores de TypeScript:**
>
> Use `areStreams` para validar uma entrada desconhecida antes de tratá-la como `Stream[]`; ela retorna `true` somente
> quando o valor é um array não vazio e cada elemento é um `Stream`.

### Vantagens

- Garante que uma entrada seja um array preenchido em que cada elemento é um `Stream`.
- Fornece uma verificação simples `true`/`false` para validar coleções de streams antes do processamento.
- Falha rapidamente: retorna `false` assim que um elemento que não é `Stream` é encontrado.
- Ajuda a evitar erros em tempo de execução quando o código assume que todos os itens são instâncias de `Stream`.

## Uso

### Sintaxe

Função:

- `areStreams(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a objetos Stream.

### Importação local da função

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input é um array preenchido de objetos Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areStreams(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 23:35:18 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>