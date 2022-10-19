export default function fromPropsValue (source,props) {
  const _toString = Object.prototype.toString;
  const isFunc = (t) => _toString.call(t) === '[object Function]'
  if (
    _toString.call(source) === '[object Object]'
    || _toString.call(source) === '[object Array]'
    && _toString.call(props) === '[object Object]'
  ) {
    if (Object.keys(props).length === 0) {
      return source;
    };
    if (_toString.call(source) === '[object Array]') {
      return source.map(s => fromPropsValue(s))
    };
    return Object.assign({},
      Object.keys(props)
        .reduce((pre,key) => {
          return {
            ...pre,
            [key]: isFunc(props[key]) ? props[key](source) : source[props[key]]
          }
        },{})
    )
  };
  console.warn('fromPropsValue input type error',source,props)
  return source
}
