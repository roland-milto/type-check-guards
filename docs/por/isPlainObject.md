# isPlainObject

## Descrição

Verifica se um determinado `value` é um objeto simples e retorna `true` se for; caso contrário, `false`.

### Caso de uso

Validar que uma entrada `unknown` (por exemplo, JSON analisado, dados externos ou argumentos de função) é um objeto
simples antes de ler chaves ou mapeá-la para um objeto de configuração tipado.

> **Nota para utilizadores de TypeScript:**
>
> `isPlainObject` é útil para restringir `unknown` antes de tratá-lo como um objeto do tipo record; ele retorna `true`
> apenas para valores cuja tag interna é `[object Object]`.

### Vantagens

- Fornece uma verificação simples e confiável para saber se um valor é um objeto simples (isto é, `Object` / `{}`),
  retornando `true` ou `false`.
- Ajuda a distinguir objetos simples de arrays, funções, `null` e outros tipos que não são objetos simples.
- Útil como um type guard em TypeScript para restringir valores `unknown` antes de acessar propriedades do objeto.

## Uso

### Sintaxe

Função:

- `isPlainObject(value)`

Parâmetros:

- `value`: O valor a ser testado para verificar se é um objeto simples.

### Importação local da função

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input é um objeto simples aqui
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isPlainObject(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 12:19:19 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>