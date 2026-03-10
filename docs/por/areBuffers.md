# areBuffers

## Descrição

`areBuffers` verifica se o valor fornecido é um array não vazio e preenchido em que cada elemento é um `Buffer`,
retornando `true` nesse caso e `false` caso contrário.

### Caso de uso

Validar arrays de chunks recebidos (por exemplo, de streams, uploads de arquivos ou pacotes de rede) para garantir que
todas as partes sejam instâncias de `Buffer` antes de concatenar, decodificar ou passá-las para funções criptográficas
ou de processamento binário.

> **Nota para utilizadores de TypeScript:**
>
> Use `areBuffers` para validar `unknown[]` antes de chamar APIs específicas de Buffer como `Buffer.concat`, garantindo
> que a função retorne `true` somente quando cada elemento for um `Buffer`.

### Vantagens

- Garante que cada elemento na entrada seja uma instância de `Buffer` do Node.js, retornando `true` somente quando o
  array inteiro corresponde.
- Rejeita entradas inválidas cedo ao exigir um array não vazio e preenchido; retorna `false` para arrays vazios ou
  valores que não sejam arrays.
- Útil como uma guarda antes de executar operações exclusivas de buffer (por exemplo, concatenação, hashing, protocolos
  binários).

## Uso

### Sintaxe

Função:

- `areBuffers(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a instâncias de buffer.

### Importação local da função

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areBuffers(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 16:26:53 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>