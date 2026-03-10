# isBuffer

## Descrição

Verifica se um valor é um `Buffer` do Node.js e retorna `true` ou `false`.

### Caso de uso

Valide entradas em tempo de execução (por exemplo, payloads de API, dados de arquivo ou buffers de mensagem) para
garantir que um valor seja um `Buffer` antes de processá-lo e obtenha `false` de forma confiável ao executar fora do
Node.js, onde `Buffer` pode não existir.

> **Nota para utilizadores de TypeScript:**
>
> Use `isBuffer` para estreitar valores `unknown` para `Buffer` antes de chamar métodos específicos de Buffer.

### Vantagens

- Detecta com segurança instâncias de `Buffer` do Node.js usando `Buffer.isBuffer`.
- Retorna `false` em ambientes onde `Buffer` não está disponível, evitando erros em tempo de execução.
- Funciona com entrada `unknown`, tornando-o adequado para validação em tempo de execução e estreitamento de tipos.

## Uso

### Sintaxe

Função:

- `isBuffer(value)`

Parâmetros:

- `value`: O valor a ser testado.

### Importação local da função

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a é um Buffer aqui
  console.log(a.toString("utf8"));
}
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isBuffer(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 16:32:59 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>