# areRegExes

## Descrição

`areRegExes` verifica se um valor é um array preenchido contendo apenas objetos `RegExp`.

### Caso de uso

Validar que uma opção de configuração (por exemplo, uma lista de padrões de permitir/negar) é um array não vazio de
expressões regulares antes de usá-la para correspondência.

> **Nota para utilizadores de TypeScript:**
>
> Use `areRegExes` para restringir `unknown` a `RegExp[]` antes de iterar ou compor padrões.

### Vantagens

- Garante que um valor seja um array não vazio em que cada elemento é uma instância de `RegExp`.
- Fornece uma verificação booleana simples (`true`/`false`) para validar entrada do usuário ou configuração.
- Ajuda a evitar erros em tempo de execução quando o código posterior assume que todos os itens suportam operações de
  expressão regular.

## Uso

### Sintaxe

Função:

- `areRegExes(array)`

Parâmetros:

- `array`: O valor a ser verificado.

### Importação local da função

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns é um array de RegExp aqui
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areRegExes(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 23:21:04 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>