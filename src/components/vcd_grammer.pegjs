//PEG grammar for VCD file header (till enddefinitions).

top = date:date? _ version:version? _ comment: (comment?) _ timescale:timescale _ body:scopeBody _ enddefinitions _
{ return { date: date, version: version, comment, timescale: timescale, scopes: body.scopes };}

date = '$date' _ body:text _ '$end'  { return body; }

version = '$version' _ body:text _ '$end' { return body; }

comment = '$comment' _ body:text _ '$end' { return body; }
timescale = '$timescale' _ body:text _ '$end' { return body }

scopeBegin = '$scope' _ type:[a-zA-Z]+ _ name:word _ '$end' { return {type:type.join(''),name:name}; }

scopeEnd = '$upscope' _ '$end' { return }

var = '$var' _ type:type _ width:num _ ref:word _ name:word _ range:range? _ '$end' _ 
{ return { kind:'var',width:width,name:name, type:type,range:range };} 

scopeBody = v:((var/scope/comment) _)* {
	let vars=[];
    let scopes=[];
    let all = [];
    
    function group(item){
       	item = item[0];
    	if(item.kind == 'var'){
            delete item.kind;
        	vars.push(item);
        }
        else if(item.kind=='scope'){
        	delete item.kind;
            scopes.push(item);
        }
    }
	v.forEach(group);
    return {vars,scopes};
} 

scope = info:scopeBegin _ body:scopeBody _ scopeEnd 
{ return { kind: 'scope', type: info.type, name:info.name, scopes: body.scopes,vars:body.vars }; }

enddefinitions = '$enddefinitions' _ '$end'

text = value: [^$]* { return value.join('').replace('\n', ' ').trim(); }

num = v:[0-9]+ {return Number(v.join());} 

type = 'wire'/'reg'/'integer'

word = v:[^ ]+ {return v.join('');}

range ='['_ msb:num _ ':' _ lsb:num _ ']' {return (msb,lsb);}

_ "whitespace"
    = [ \t\n\r]*