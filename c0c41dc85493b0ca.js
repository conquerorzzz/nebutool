import*as common from"./common.js";import{onMessage,postMessage}from"#worker-polyfill";onMessage((s=>{const[e,o,r]=s;try{switch(o){case"compress":{const[s,o]=r,m=common.compress(s,o);postMessage([e,m],[m.buffer]);break}case"decompress":{const[s]=r,o=common.decompress(s);postMessage([e,o],[o.buffer]);break}default:throw new Error("Invalid method")}}catch(m){postMessage([e,null,m])}})),postMessage("ready");