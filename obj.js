console.clear();

var a=Function.prototype.call,b=Object.create,c=null;
var raw={
'object':a.bind(b,c,c),
'array':a.bind(b,c,[],{'length':{enumerable:false,writable:true}})
};
a=b=c;

var z1=raw.object();
z1[1]=44;
var z2=raw.array();

z2.push(5);

console.dir(z1);
console.dir(z2);
