var traverseDomAndCollectElements = function(matchFunc, startEl) { //esta funcion sirve para recorrer el DOM e insertar los elementos que matchean en resultSet
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) {
    resultSet.push(startEl)
  }
  for(let i = 0; i < startEl.children.length; i++) {
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [...resultSet, ...elements]
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) { //esta funcion reconoce que tipo de selector me están insertando
  // tu código aquí
  if(selector[0] === '#') return 'id'
  //si el primer elemento del selector es # devolver id
  if(selector[0] === '.') return 'class'
  //si el primer elemento del selector es . devolver class

  // if(selector.split('.').length > 1) {
  //   return 'tag.class'
  // }
  else {
    for(let i = 1; i < selector.length; i++) {
      if(selector[i] === '.') return 'tag.class'
      //si en alguna posicion distinta de 0 del selector es igual a . devolver tag.class
    }
  }
  return 'tag'
  //si todo lo anterior no se cumple devolver tag
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) { //esta funcion busca si matchea el selector con algun elemento del HTML
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") { 

    // matchFunction = el => `#${el.id}` === selector
    matchFunction = function(el) {
      return '#' + el.id === selector
    }

  } else if (selectorType === "class") {

    // matchFunction = el => {
    //   let classes = el.classList
    //   for(let i = 0; i < classes.length; i++) {
    //     if(`.${classes[i]}` === selector) return true
    //   }
    //   return false
    // }
    matchFunction = function(el) {
      let classes = el.classList
      // classes.forEach(e => {if(`.${e}` === selector) return true;});
      // return false
      for(let i = 0; i < classes.length; i++) {
        if(`.${classes[i]}` === selector) return true
      }
      return false
    }

  } else if (selectorType === "tag.class") {

    // matchFunction = el => {
    //   let [t, c] = selector.split ('.')
    //   return matchFunctionMaker (t)(el) && matchFunctionMaker (`.${c}`)(el) 
    // }
    matchFunction = function(el) {
      var  [tagBuscado, classBuscada] = selector.split('.')
      return matchFunctionMaker (tagBuscado)(el)  &&  matchFunctionMaker (`.${classBuscada}`)(el)
    }
    
  } else if (selectorType === "tag") {

    // matchFunction = el => el.tagName.toLowerCase() === selector
    matchFunction = function(el) {
      return el.tagName.toLowerCase() === selector
    }
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
