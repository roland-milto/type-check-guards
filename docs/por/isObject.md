# isObject

## Descrição

Determina se um determinado `value` é um `object` (excluindo `null`).

### Caso de uso

Use `isObject` para validar entradas desconhecidas (por exemplo, JSON analisado, respostas de API, payloads de eventos)
antes de acessar propriedades, garantindo que o valor seja um objeto e não `null`.

> **Nota para utilizadores de TypeScript:**
>
> `isObject` é um guard em tempo de execução que retorna um boolean; ele não restringe para uma forma específica de
> objeto. Combine-o com verificações adicionais (por exemplo, existência de propriedades) quando você precisar de uma
> tipagem mais forte.

### Vantagens

- Retorna `true` apenas para valores não `null` cujo `typeof` é `"object"`.
- Evita a armadilha comum do JavaScript em que `null` seria tratado como um objeto.
- Funciona para objetos simples e instâncias de objetos embutidos (por exemplo, `Date`, `RegExp`).
- Verificação simples e rápida em tempo de execução, adequada para programação defensiva e validação de entradas.

## Uso

### Sintaxe

Função:

- `isObject(value)`

Parâmetros:

- `value`: O valor a ser verificado para determinar se é um `object`.

### Importação local da função

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input é um objeto não nulo em tempo de execução
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isObject(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isObject](../_analysis/isObject.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 00:20:02 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>