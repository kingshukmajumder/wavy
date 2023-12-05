body = sections:section+ _ time?{return sections;}
section = _ time:time? _ rows:row+ {return {time,rows}}
row = _ row:(scalar/vector) _ {return row}
ref = ref: [^\n]+ {return ref.join('')}
onebitValue = ('0'/'1'/'x'/'X'/'z'/'Z')
bitvec = v:onebitValue+{return v.join('');
}
_ 'whitespace' = [ \n\r\t]*
scalar = value:onebitValue ref:ref {return {ref,value}}
vector = ('b'/'B') value:bitvec _ ref:ref {return {ref,value}}
time = '#' t:[0-9]+ {return Number(t.join(''))} 