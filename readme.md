# Code Challenge: Crud

El objetivo del challenge es implementar un crud básico, utilizando un array para almacenar los elementos.

Se debe implementar

## create
Crea y agrega un nuevo objeto a la lista asignando un **id** auto-incremental y retorna el objeto creado incluyendo su **id**
 
### Parametros
1- name: String  
2- lastname: String  
Ejemplo: 
```
create('John', 'Rambo')
```
### Retorna
Retorna un objeto que incluye las propiedades id, name y lastname
- Objecto {id: Number, name: String, lastname: String}  

Ejemplo: 
```
{ id: 3, name:'John', lastname: 'Rambo' }
```
---

## read
Busca un elemento por su **id** y lo retorna. Si el **id** no existe retorna **null**
 
### Parametros
1 - id: Number  
Ejemplo: 
```
read(2)
```
### Retorna
Si el id existe, retorna un objeto que incluye las propiedades id, name y lastname.  
Si el id no existe retorna null

- Objecto {id: Number, name: String, lastname: String}  || null

Ejemplo id existe: 
```
{ id: 3, name:'John', lastname: 'Rambo'}  
```
Ejemplo id no existe: 

```null```

---

## update
Busca un elemento por su ID, lo actualiza y lo retorna. Si el elemento no existe, retorna false.
 
### Parametros
1- id: Number
2- name: String  
3- lastname: String  
Ejemplo: 
```
update( 2, 'John', 'Wick')
```
### Retorna
- Si el id existe, retorna un objeto que incluye las propiedades actualizadas id, name y lastname. 
- Si el id no existe retorna false
- Objecto {id: Number, name: String, lastname: String} 

Ejemplo id existe: 
```
{ id: 3, name:'John', lastname: 'Rambo' }
```
Ejemplo id no existe: 
```
false
```

---
 
## delete
Busca un elemento por su ID y lo remueve, luego retorna true. Si el elemento no existe retorna false.
 
### Parametros
1 - id: Number  
Ejemplo: 
```
delete(2)
```
### Retorna
- Retorna **true** si encontró el elemento y lo elimino con éxito
- Retorna **false** si no logro encontrar un element con el ID proporcionado

Ejemplo id existe: 
```
true
```
Ejemplo id no existe: 
```
false
```

## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```

