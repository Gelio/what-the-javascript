function merge(dest, src) {
  for (let property in src) {
    if (
      typeof dest[property] === 'object' &&
      typeof src[property] === 'object'
    ) {
      merge(dest[property], src[property]);
    } else {
      dest[property] = src[property];
    }
  }
}

{
  const options = {
    // default options
    fetchNestedData: true,
    pageSize: 10
  };

  const additionalOptions = JSON.parse('{ "fetchNestedData": false }');

  merge(options, additionalOptions);
}

// Malicious case of Prototype Pollution

{
  const options = {
    fetchNestedData: true,
    pageSize: 10
  };

  const additionalOptions = JSON.parse('{ "__proto__": { "isAdmin": true }}');

  merge(options, additionalOptions);

  console.log(options.isAdmin); // true
  console.log({}.isAdmin); // true
  console.log(Object.prototype.isAdmin); // true
}

// https://codeburst.io/what-is-prototype-pollution-49482fc4b638
