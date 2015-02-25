// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
   var result = [],
            body = document.body;
        // Traversing the DOM using a IIFE passing it
        // the body element and the sorting function
        (function traverseDOM (node, fn) {
            // We only check for a match, if we have
            // an ELEMENT_NODE.
            if (node.nodeType === 1) {
                fn(node, className);
            }
            node = node.firstChild;
            // While the current node still have child nodes
            // we iterate over them.
            while (node) {
                // We traverse any potential child nodes of this node.
                traverseDOM(node, fn);
                node = node.nextSibling;
            }
        }(body, function (elem, cName) {
            // If we have a match push it to the results array.
            // Some browsers do not support node.className,
            // hence the node.getAttribute('class')
            if ((' ' + (elem.className || elem.getAttribute('class')) + ' ').indexOf(' ' + cName + ' ') >= 0) {
                result.push(elem);
            }
        }));
        return result;
};
