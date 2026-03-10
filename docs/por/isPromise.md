# isPromise

## Descrição

Determina se um determinado valor é uma `Promise`.

### Caso de uso

Use `isPromise` para validar entradas desconhecidas antes de tratá-las como uma `Promise`, como ao lidar com valores
retornados por plugins, imports dinâmicos ou APIs com tipagem frouxa.

> **Nota para utilizadores de TypeScript:**
>
> `isPromise` verifica via `instanceof Promise`, então ele só retorna `true` para instâncias reais de `Promise` (não
> para thenables genéricos).

### Vantagens

- Fornece uma verificação simples em tempo de execução para saber se um valor é uma `Promise`.
- Ajuda a proteger caminhos de código que exigem uma instância real de `Promise`, retornando `true` ou `false` de forma
  previsível.
- Evita falsos positivos de objetos “thenable” (por exemplo, `{ then() {} }`) ao exigir uma instância real de `Promise`.

## Uso

### Sintaxe

Função:

- `isPromise(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // verdadeiro
console.log(isPromise(b)); // falso
console.log(isPromise(123)); // falso
console.log(isPromise(null)); // falso

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isPromise(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 23:53:59 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>