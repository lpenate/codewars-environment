# Vector Affinity

## Descripción

Calcula el número de elementos en un vector que aparecen en el mismo índice en cada vector, con el mismo valor.

### Ejemplos

```javascript
vectorAffinity([1, 2, 3, 4, 5], [1, 2, 2, 4, 3]) // => 0.6
vectorAffinity([1, 2, 3], [1, 2, 3]) // => 1.0