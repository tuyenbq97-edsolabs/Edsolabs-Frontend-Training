Write a JavaScript function: 
  1. Converts string, as space separated words, to upper case
  + Arguments
    [string=''] (string): The string to convert.
  + Returns
    (string): Returns the upper cased string.
  + Example
    _.upperCase('--foo-bar');
    // => 'FOO BAR'
 
    _.upperCase('fooBar');
    // => 'FOO BAR'
    
    _.upperCase('__foo_bar__');
    // => 'FOO BAR'

  2. Converts string, as space separated words, to lower case.
  + Arguments
    [string=''] (string): The string to convert.
  + Returns
    (string): Returns the lower cased string.
  + Example
  _.lowerCase('--Foo-Bar--');
  // => 'foo bar'
  
  _.lowerCase('fooBar');
  // => 'foo bar'
  
  _.lowerCase('__FOO_BAR__');
  // => 'foo bar'

  3. Checks if value is an empty object, collection, map, or set.
  Objects are considered empty if they have no own enumerable string keyed properties.
  Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.

  + Arguments
  value (*): The value to check.

  + Returns
  (boolean): Returns true if value is empty, else false.

    Example
  _.isEmpty(null);
  // => true
  
  _.isEmpty(true);
  // => true
  
  _.isEmpty(1);
  // => true
  
  _.isEmpty([1, 2, 3]);
  // => false
  
  _.isEmpty({ 'a': 1 });
  // => false

  4. Creates a compiled template function that can interpolate data properties in "interpolate" delimiters, HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data properties may be accessed as free variables in the template. If a setting object is given, it takes precedence over _.templateSettings values.

    Arguments
  [string=''] (string): The template string.
  [options={}] (Object): The options object.
  [options.escape=_.templateSettings.escape] (RegExp): The HTML "escape" delimiter.
  [options.evaluate=_.templateSettings.evaluate] (RegExp): The "evaluate" delimiter.
  [options.imports=_.templateSettings.imports] (Object): An object to import into the template as free variables.
  [options.interpolate=_.templateSettings.interpolate] (RegExp): The "interpolate" delimiter.
  [options.sourceURL='lodash.templateSources[n]'] (string): The sourceURL of the compiled template.
  [options.variable='obj'] (string): The data object variable name.

  Returns
  (Function): Returns the compiled template function.

  Example: https://lodash.com/docs/4.17.15#template

  5. Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array

  + Arguments
    array (Array): The array to inspect.
    [values] (...Array): The values to exclude.
  + Returns
    (Array): Returns the new array of filtered values.

    Example
  _.difference([2, 1], [2, 3]);
  // => [1]

  https://lodash.com/docs/4.17.15#difference