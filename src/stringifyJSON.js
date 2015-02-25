// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // is it an array, string, or value
  console.log(obj);

    if (obj === null){
    return 'null';
  }

  else if (typeof obj === 'boolean'){
    if (obj) return 'true'
    else return 'false';
  }
  else if (Array.isArray(obj))
    { var myArray = '['; 
        for (var i in obj)
          {
            if (myArray != '[')
              {myArray += ',' + stringifyJSON(obj[i]); }
            else
              {myArray += stringifyJSON(obj[i]);}
          }
        
    
        myArray += ']';
        return myArray;
    }
  else if(typeof obj === "object")
    { 
        
        var myKeys = Object.keys(obj);
        var myObj = '{';

        for(var i = 0; i < myKeys.length; i++)
        {
            if (myKeys[i] == 'undefined' || myKeys[i] == 'function') { return '{}' }
            else if (myObj != '{'){
                myObj += ',' + stringifyJSON(myKeys[i]) + ':' + stringifyJSON(obj[myKeys[i]]);
            }
            else{
                myObj += (stringifyJSON(myKeys[i]) + ':' + stringifyJSON(obj[myKeys[i]]));
            }

        }
        myObj += '}';
        return myObj;
    }
  else if(typeof obj === 'string')
    { return '"' + obj + '"' }
  else
    return obj.toString();

};
