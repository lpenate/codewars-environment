# Equal Sides of an Array

## Descripción

Vas a recibir un array de enteros. Tu tarea es tomar ese array y encontrar un índice `N` donde la suma de los enteros a la izquierda de `N` sea igual a la suma de los enteros a la derecha de `N`.

Si no hay ningún índice que cumpla esta condición, devuelve `-1`.

## Ejemplos

### Ejemplo 1

```javascript
const arr = [1, 2, 3, 4, 3, 2, 1];
const result = findEqualSidesIndex(arr); // => 3
```

En este caso, tu función devolverá el índice 3, porque en la posición 3 del array, la suma del lado izquierdo del índice ([1, 2, 3]) y la suma del lado derecho del índice ([3, 2, 1]) son ambas iguales a 6.

### Ejemplo 2
```javascript
const arr = [1, 100, 50, -51, 1, 1];
const result = findEqualSidesIndex(arr); // => 1
```

En este caso, tu función devolverá el índice 1, porque en la posición 1 del array, la suma del lado izquierdo del índice ([1]) y la suma del lado derecho del índice ([50, -51, 1, 1]) son ambas iguales a 1.

### Ejemplo 3

```javascript
const arr = [20, 10, -80, 10, 10, 15, 35];
const result = findEqualSidesIndex(arr); // => 0
```

En este caso, tu función devolverá el índice 0, porque en la posición 0 del array, la suma del lado izquierdo del índice ([]) y la suma del lado derecho del índice ([10, -80, 10, 10, 15, 35]) son ambas iguales a 0. (Los arrays vacíos se consideran iguales a 0 en este problema).


## Entrada
Un array de enteros de longitud 0 < arr.length < 1000. Los números en el array pueden ser cualquier entero, positivo o negativo.

## Salida
El índice N más bajo donde el lado izquierdo de N es igual al lado derecho de N. Si no encuentras un índice que cumpla estas reglas, devuelve -1.

