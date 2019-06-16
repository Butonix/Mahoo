(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{377:function(e,n,r){"use strict";const canvas=document.getElementsByTagName("canvas")[0];canvas.width=canvas.clientWidth,canvas.height=canvas.clientHeight;let t={SIM_RESOLUTION:128,DYE_RESOLUTION:512,DENSITY_DISSIPATION:.97,VELOCITY_DISSIPATION:.98,PRESSURE_DISSIPATION:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.5,SHADING:!0,COLORFUL:!0,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7};function o(){this.id=-1,this.x=0,this.y=0,this.dx=0,this.dy=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let v=[],f=[],l=[];v.push(new o);const{gl:m,ext:c}=function(canvas){const e={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let n=canvas.getContext("webgl2",e);const r=!!n;r||(n=canvas.getContext("webgl",e)||canvas.getContext("experimental-webgl",e));let t,o;r?(n.getExtension("EXT_color_buffer_float"),o=n.getExtension("OES_texture_float_linear")):(t=n.getExtension("OES_texture_half_float"),o=n.getExtension("OES_texture_half_float_linear"));n.clearColor(0,0,0,1);const v=r?n.HALF_FLOAT:t.HALF_FLOAT_OES;let f,l,m;r?(f=h(n,n.RGBA16F,n.RGBA,v),l=h(n,n.RG16F,n.RG,v),m=h(n,n.R16F,n.RED,v)):(f=h(n,n.RGBA,n.RGBA,v),l=h(n,n.RGBA,n.RGBA,v),m=h(n,n.RGBA,n.RGBA,v));return{gl:n,ext:{formatRGBA:f,formatRG:l,formatR:m,halfFloatTexType:v,supportLinearFiltering:o}}}(canvas);function h(e,n,r,t){if(!function(e,n,r,t){let o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,n,4,4,0,r,t,null);let v=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,v),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.checkFramebufferStatus(e.FRAMEBUFFER)==e.FRAMEBUFFER_COMPLETE}(e,n,r,t))switch(n){case e.R16F:return h(e,e.RG16F,e.RG,t);case e.RG16F:return h(e,e.RGBA16F,e.RGBA,t);default:return null}return{internalFormat:n,format:r}}/Mobi|Android/i.test(navigator.userAgent)&&(t.SHADING=!1),c.supportLinearFiltering||(t.SHADING=!1,t.BLOOM=!1);class T{constructor(e,n){if(this.uniforms={},this.program=m.createProgram(),m.attachShader(this.program,e),m.attachShader(this.program,n),m.linkProgram(this.program),!m.getProgramParameter(this.program,m.LINK_STATUS))throw m.getProgramInfoLog(this.program);const r=m.getProgramParameter(this.program,m.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){const e=m.getActiveUniform(this.program,i).name;this.uniforms[e]=m.getUniformLocation(this.program,e)}}bind(){m.useProgram(this.program)}}function d(e,source){const n=m.createShader(e);if(m.shaderSource(n,source),m.compileShader(n),!m.getShaderParameter(n,m.COMPILE_STATUS))throw m.getShaderInfoLog(n);return n}const E=d(m.VERTEX_SHADER,"\n    precision highp float;\n\n    attribute vec2 aPosition;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform vec2 texelSize;\n\n    void main () {\n        vUv = aPosition * 0.5 + 0.5;\n        vL = vUv - vec2(texelSize.x, 0.0);\n        vR = vUv + vec2(texelSize.x, 0.0);\n        vT = vUv + vec2(0.0, texelSize.y);\n        vB = vUv - vec2(0.0, texelSize.y);\n        gl_Position = vec4(aPosition, 0.0, 1.0);\n    }\n"),x=d(m.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float value;\n\n    void main () {\n        gl_FragColor = value * texture2D(uTexture, vUv);\n    }\n"),R=d(m.FRAGMENT_SHADER,"\n    precision mediump float;\n\n    uniform vec4 color;\n\n    void main () {\n        gl_FragColor = color;\n    }\n"),D=d(m.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float aspectRatio;\n\n    #define SCALE 25.0\n\n    void main () {\n        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));\n        float v = mod(uv.x + uv.y, 2.0);\n        v = v * 0.1 + 0.8;\n        gl_FragColor = vec4(vec3(v), 1.0);\n    }\n"),_=d(m.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n\n    void main () {\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),y=d(m.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n\n    void main () {\n        vec3 C = texture2D(uTexture, vUv).rgb;\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n        vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 800.0;\n        bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n        C += bloom;\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),S=d(m.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform vec2 texelSize;\n\n    void main () {\n        vec3 L = texture2D(uTexture, vL).rgb;\n        vec3 R = texture2D(uTexture, vR).rgb;\n        vec3 T = texture2D(uTexture, vT).rgb;\n        vec3 B = texture2D(uTexture, vB).rgb;\n        vec3 C = texture2D(uTexture, vUv).rgb;\n\n        float dx = length(R) - length(L);\n        float dy = length(T) - length(B);\n\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        C.rgb *= diffuse;\n\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),A=d(m.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n    uniform vec2 texelSize;\n\n    void main () {\n        vec3 L = texture2D(uTexture, vL).rgb;\n        vec3 R = texture2D(uTexture, vR).rgb;\n        vec3 T = texture2D(uTexture, vT).rgb;\n        vec3 B = texture2D(uTexture, vB).rgb;\n        vec3 C = texture2D(uTexture, vUv).rgb;\n\n        float dx = length(R) - length(L);\n        float dy = length(T) - length(B);\n\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        C *= diffuse;\n\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n        vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 800.0;\n        bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n        C += bloom;\n\n        float a = max(C.r, max(C.g, C.b));\n        gl_FragColor = vec4(C, a);\n    }\n"),L=d(m.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform vec3 curve;\n    uniform float threshold;\n\n    void main () {\n        vec3 c = texture2D(uTexture, vUv).rgb;\n        float br = max(c.r, max(c.g, c.b));\n        float rq = clamp(br - curve.x, 0.0, curve.y);\n        rq = curve.z * rq * rq;\n        c *= max(rq, br - threshold) / max(br, 0.0001);\n        gl_FragColor = vec4(c, 0.0);\n    }\n"),U=d(m.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum;\n    }\n"),F=d(m.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform float intensity;\n\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum * intensity;\n    }\n"),w=d(m.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTarget;\n    uniform float aspectRatio;\n    uniform vec3 color;\n    uniform vec2 point;\n    uniform float radius;\n\n    void main () {\n        vec2 p = vUv - point.xy;\n        p.x *= aspectRatio;\n        vec3 splat = exp(-dot(p, p) / radius) * color;\n        vec3 base = texture2D(uTarget, vUv).xyz;\n        gl_FragColor = vec4(base + splat, 1.0);\n    }\n"),B=d(m.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform vec2 dyeTexelSize;\n    uniform float dt;\n    uniform float dissipation;\n\n    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n        vec2 st = uv / tsize - 0.5;\n\n        vec2 iuv = floor(st);\n        vec2 fuv = fract(st);\n\n        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n\n        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n    }\n\n    void main () {\n        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n        gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);\n        gl_FragColor.a = 1.0;\n    }\n"),O=d(m.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform float dt;\n    uniform float dissipation;\n\n    void main () {\n        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n        gl_FragColor = dissipation * texture2D(uSource, coord);\n        gl_FragColor.a = 1.0;\n    }\n"),N=d(m.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n\n    void main () {\n        float L = texture2D(uVelocity, vL).x;\n        float R = texture2D(uVelocity, vR).x;\n        float T = texture2D(uVelocity, vT).y;\n        float B = texture2D(uVelocity, vB).y;\n\n        vec2 C = texture2D(uVelocity, vUv).xy;\n        if (vL.x < 0.0) { L = -C.x; }\n        if (vR.x > 1.0) { R = -C.x; }\n        if (vT.y > 1.0) { T = -C.y; }\n        if (vB.y < 0.0) { B = -C.y; }\n\n        float div = 0.5 * (R - L + T - B);\n        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n    }\n"),C=d(m.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n\n    void main () {\n        float L = texture2D(uVelocity, vL).y;\n        float R = texture2D(uVelocity, vR).y;\n        float T = texture2D(uVelocity, vT).x;\n        float B = texture2D(uVelocity, vB).x;\n        float vorticity = R - L - T + B;\n        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n    }\n"),I=d(m.FRAGMENT_SHADER,"\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uCurl;\n    uniform float curl;\n    uniform float dt;\n\n    void main () {\n        float L = texture2D(uCurl, vL).x;\n        float R = texture2D(uCurl, vR).x;\n        float T = texture2D(uCurl, vT).x;\n        float B = texture2D(uCurl, vB).x;\n        float C = texture2D(uCurl, vUv).x;\n\n        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n        force /= length(force) + 0.0001;\n        force *= curl * C;\n        force.y *= -1.0;\n\n        vec2 vel = texture2D(uVelocity, vUv).xy;\n        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n    }\n"),M=d(m.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uDivergence;\n\n    vec2 boundary (vec2 uv) {\n        return uv;\n        // uncomment if you use wrap or repeat texture mode\n        // uv = min(max(uv, 0.0), 1.0);\n        // return uv;\n    }\n\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        float C = texture2D(uPressure, vUv).x;\n        float divergence = texture2D(uDivergence, vUv).x;\n        float pressure = (L + R + B + T - divergence) * 0.25;\n        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n    }\n"),P=d(m.FRAGMENT_SHADER,"\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uVelocity;\n\n    vec2 boundary (vec2 uv) {\n        return uv;\n        // uv = min(max(uv, 0.0), 1.0);\n        // return uv;\n    }\n\n    void main () {\n        float L = texture2D(uPressure, boundary(vL)).x;\n        float R = texture2D(uPressure, boundary(vR)).x;\n        float T = texture2D(uPressure, boundary(vT)).x;\n        float B = texture2D(uPressure, boundary(vB)).x;\n        vec2 velocity = texture2D(uVelocity, vUv).xy;\n        velocity.xy -= vec2(R - L, T - B);\n        gl_FragColor = vec4(velocity, 0.0, 1.0);\n    }\n"),G=(()=>(m.bindBuffer(m.ARRAY_BUFFER,m.createBuffer()),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),m.STATIC_DRAW),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,m.createBuffer()),m.bufferData(m.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),m.STATIC_DRAW),m.vertexAttribPointer(0,2,m.FLOAT,!1,0,0),m.enableVertexAttribArray(0),e=>{m.bindFramebuffer(m.FRAMEBUFFER,e),m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0)}))();let X,H,z,V,Y,W,k,K,J,j,Q=function(e){let n=m.createTexture();m.bindTexture(m.TEXTURE_2D,n),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.LINEAR),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.LINEAR),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.REPEAT),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.REPEAT),m.texImage2D(m.TEXTURE_2D,0,m.RGB,1,1,0,m.RGB,m.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let r={texture:n,width:1,height:1,attach:e=>(m.activeTexture(m.TEXTURE0+e),m.bindTexture(m.TEXTURE_2D,n),e)},image=new Image;return image.onload=()=>{r.width=image.width,r.height=image.height,m.bindTexture(m.TEXTURE_2D,n),m.texImage2D(m.TEXTURE_2D,0,m.RGB,m.RGB,m.UNSIGNED_BYTE,image)},image.src=e,r}("LDR_RGB1_0.png");const Z=new T(E,x),$=new T(E,R),ee=new T(E,D),ne=new T(E,_),re=new T(E,y),te=new T(E,S),ie=new T(E,A),oe=new T(E,L),ae=new T(E,U),ue=new T(E,F),ve=new T(E,w),fe=new T(E,c.supportLinearFiltering?O:B),le=new T(E,N),me=new T(E,C),ce=new T(E,I),se=new T(E,M),ge=new T(E,P);function he(){let e=ye(t.SIM_RESOLUTION),n=ye(t.DYE_RESOLUTION);X=e.width,H=e.height,z=n.width,V=n.height;const r=c.halfFloatTexType,o=c.formatRGBA,v=c.formatRG,f=c.formatR,h=c.supportLinearFiltering?m.LINEAR:m.NEAREST;Y=null==Y?de(z,V,o.internalFormat,o.format,r,h):Ee(Y,z,V,o.internalFormat,o.format,r,h),W=null==W?de(X,H,v.internalFormat,v.format,r,h):Ee(W,X,H,v.internalFormat,v.format,r,h),k=Te(X,H,f.internalFormat,f.format,r,m.NEAREST),K=Te(X,H,f.internalFormat,f.format,r,m.NEAREST),J=de(X,H,f.internalFormat,f.format,r,m.NEAREST),function(){let e=ye(t.BLOOM_RESOLUTION);const n=c.halfFloatTexType,r=c.formatRGBA,o=c.supportLinearFiltering?m.LINEAR:m.NEAREST;j=Te(e.width,e.height,r.internalFormat,r.format,n,o),l.length=0;for(let i=0;i<t.BLOOM_ITERATIONS;i++){let t=e.width>>i+1,v=e.height>>i+1;if(t<2||v<2)break;let f=Te(t,v,r.internalFormat,r.format,n,o);l.push(f)}}()}function Te(e,n,r,t,o,param){m.activeTexture(m.TEXTURE0);let v=m.createTexture();m.bindTexture(m.TEXTURE_2D,v),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,param),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,param),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),m.texImage2D(m.TEXTURE_2D,0,r,e,n,0,t,o,null);let f=m.createFramebuffer();return m.bindFramebuffer(m.FRAMEBUFFER,f),m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,v,0),m.viewport(0,0,e,n),m.clear(m.COLOR_BUFFER_BIT),{texture:v,fbo:f,width:e,height:n,attach:e=>(m.activeTexture(m.TEXTURE0+e),m.bindTexture(m.TEXTURE_2D,v),e)}}function de(e,n,r,t,o,param){let v=Te(e,n,r,t,o,param),f=Te(e,n,r,t,o,param);return{get read(){return v},set read(e){v=e},get write(){return f},set write(e){f=e},swap(){let e=v;v=f,f=e}}}function Ee(e,n,r,t,o,v,param){return e.read=function(e,n,r,t,o,v,param){let f=Te(n,r,t,o,v,param);return Z.bind(),m.uniform1i(Z.uniforms.uTexture,e.attach(0)),m.uniform1f(Z.uniforms.value,1),G(f.fbo),f}(e.read,n,r,t,o,v,param),e.write=Te(n,r,t,o,v,param),e}he(),De(parseInt(20*Math.random())+5);let xe=Date.now();function Re(e){t.BLOOM&&function(source,e){if(l.length<2)return;let n=e;m.disable(m.BLEND),oe.bind();let r=t.BLOOM_THRESHOLD*t.BLOOM_SOFT_KNEE+1e-4,o=t.BLOOM_THRESHOLD-r,v=2*r,f=.25/r;m.uniform3f(oe.uniforms.curve,o,v,f),m.uniform1f(oe.uniforms.threshold,t.BLOOM_THRESHOLD),m.uniform1i(oe.uniforms.uTexture,source.attach(0)),m.viewport(0,0,n.width,n.height),G(n.fbo),ae.bind();for(let i=0;i<l.length;i++){let e=l[i];m.uniform2f(ae.uniforms.texelSize,1/n.width,1/n.height),m.uniform1i(ae.uniforms.uTexture,n.attach(0)),m.viewport(0,0,e.width,e.height),G(e.fbo),n=e}m.blendFunc(m.ONE,m.ONE),m.enable(m.BLEND);for(let i=l.length-2;i>=0;i--){let e=l[i];m.uniform2f(ae.uniforms.texelSize,1/n.width,1/n.height),m.uniform1i(ae.uniforms.uTexture,n.attach(0)),m.viewport(0,0,e.width,e.height),G(e.fbo),n=e}m.disable(m.BLEND),ue.bind(),m.uniform2f(ue.uniforms.texelSize,1/n.width,1/n.height),m.uniform1i(ue.uniforms.uTexture,n.attach(0)),m.uniform1f(ue.uniforms.intensity,t.BLOOM_INTENSITY),m.viewport(0,0,e.width,e.height),G(e.fbo)}(Y.read,j),null!=e&&t.TRANSPARENT?m.disable(m.BLEND):(m.blendFunc(m.ONE,m.ONE_MINUS_SRC_ALPHA),m.enable(m.BLEND));let n=null==e?m.drawingBufferWidth:z,r=null==e?m.drawingBufferHeight:V;if(m.viewport(0,0,n,r),!t.TRANSPARENT){$.bind();let n=t.BACK_COLOR;m.uniform4f($.uniforms.color,n.r/255,n.g/255,n.b/255,1),G(e)}if(null==e&&t.TRANSPARENT&&(ee.bind(),m.uniform1f(ee.uniforms.aspectRatio,canvas.width/canvas.height),G(null)),t.SHADING){let e=t.BLOOM?ie:te;if(e.bind(),m.uniform2f(e.uniforms.texelSize,1/n,1/r),m.uniform1i(e.uniforms.uTexture,Y.read.attach(0)),t.BLOOM){m.uniform1i(e.uniforms.uBloom,j.attach(1)),m.uniform1i(e.uniforms.uDithering,Q.attach(2));let t=Se(Q,n,r);m.uniform2f(e.uniforms.ditherScale,t.x,t.y)}}else{let e=t.BLOOM?re:ne;if(e.bind(),m.uniform1i(e.uniforms.uTexture,Y.read.attach(0)),t.BLOOM){m.uniform1i(e.uniforms.uBloom,j.attach(1)),m.uniform1i(e.uniforms.uDithering,Q.attach(2));let t=Se(Q,n,r);m.uniform2f(e.uniforms.ditherScale,t.x,t.y)}}G(e)}function pe(e,n,r,o,v){m.viewport(0,0,X,H),ve.bind(),m.uniform1i(ve.uniforms.uTarget,W.read.attach(0)),m.uniform1f(ve.uniforms.aspectRatio,canvas.width/canvas.height),m.uniform2f(ve.uniforms.point,e/canvas.width,1-n/canvas.height),m.uniform3f(ve.uniforms.color,r,-o,1),m.uniform1f(ve.uniforms.radius,t.SPLAT_RADIUS/100),G(W.write.fbo),W.swap(),m.viewport(0,0,z,V),m.uniform1i(ve.uniforms.uTarget,Y.read.attach(0)),m.uniform3f(ve.uniforms.color,v.r,v.g,v.b),G(Y.write.fbo),Y.swap()}function De(e){for(let i=0;i<e;i++){const e=_e();e.r*=10,e.g*=10,e.b*=10,pe(canvas.width*Math.random(),canvas.height*Math.random(),1e3*(Math.random()-.5),1e3*(Math.random()-.5),e)}}function _e(){let e=function(e,s,n){let r,g,b,i,t,p,q,o;switch(i=Math.floor(6*e),p=n*(1-s),q=n*(1-(t=6*e-i)*s),o=n*(1-(1-t)*s),i%6){case 0:r=n,g=o,b=p;break;case 1:r=q,g=n,b=p;break;case 2:r=p,g=n,b=o;break;case 3:r=p,g=q,b=n;break;case 4:r=o,g=p,b=n;break;case 5:r=n,g=p,b=q}return{r:r,g:g,b:b}}(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function ye(e){let n=m.drawingBufferWidth/m.drawingBufferHeight;n<1&&(n=1/n);let r=Math.round(e*n),t=Math.round(e);return m.drawingBufferWidth>m.drawingBufferHeight?{width:r,height:t}:{width:t,height:r}}function Se(e,n,r){return{x:n/e.width,y:r/e.height}}!function e(){canvas.width==canvas.clientWidth&&canvas.height==canvas.clientHeight||(canvas.width=canvas.clientWidth,canvas.height=canvas.clientHeight,he());!function(){f.length>0&&De(f.pop());for(let i=0;i<v.length;i++){const p=v[i];p.moved&&(pe(p.x,p.y,p.dx,p.dy,p.color),p.moved=!1)}if(!t.COLORFUL)return;if(xe+100<Date.now()){xe=Date.now();for(let i=0;i<v.length;i++){const p=v[i];p.color=_e()}}}();t.PAUSED||function(dt){m.disable(m.BLEND),m.viewport(0,0,X,H),me.bind(),m.uniform2f(me.uniforms.texelSize,1/X,1/H),m.uniform1i(me.uniforms.uVelocity,W.read.attach(0)),G(K.fbo),ce.bind(),m.uniform2f(ce.uniforms.texelSize,1/X,1/H),m.uniform1i(ce.uniforms.uVelocity,W.read.attach(0)),m.uniform1i(ce.uniforms.uCurl,K.attach(1)),m.uniform1f(ce.uniforms.curl,t.CURL),m.uniform1f(ce.uniforms.dt,dt),G(W.write.fbo),W.swap(),le.bind(),m.uniform2f(le.uniforms.texelSize,1/X,1/H),m.uniform1i(le.uniforms.uVelocity,W.read.attach(0)),G(k.fbo),Z.bind(),m.uniform1i(Z.uniforms.uTexture,J.read.attach(0)),m.uniform1f(Z.uniforms.value,t.PRESSURE_DISSIPATION),G(J.write.fbo),J.swap(),se.bind(),m.uniform2f(se.uniforms.texelSize,1/X,1/H),m.uniform1i(se.uniforms.uDivergence,k.attach(0));for(let i=0;i<t.PRESSURE_ITERATIONS;i++)m.uniform1i(se.uniforms.uPressure,J.read.attach(1)),G(J.write.fbo),J.swap();ge.bind(),m.uniform2f(ge.uniforms.texelSize,1/X,1/H),m.uniform1i(ge.uniforms.uPressure,J.read.attach(0)),m.uniform1i(ge.uniforms.uVelocity,W.read.attach(1)),G(W.write.fbo),W.swap(),fe.bind(),m.uniform2f(fe.uniforms.texelSize,1/X,1/H),c.supportLinearFiltering||m.uniform2f(fe.uniforms.dyeTexelSize,1/X,1/H);let e=W.read.attach(0);m.uniform1i(fe.uniforms.uVelocity,e),m.uniform1i(fe.uniforms.uSource,e),m.uniform1f(fe.uniforms.dt,dt),m.uniform1f(fe.uniforms.dissipation,t.VELOCITY_DISSIPATION),G(W.write.fbo),W.swap(),m.viewport(0,0,z,V),c.supportLinearFiltering||m.uniform2f(fe.uniforms.dyeTexelSize,1/z,1/V);m.uniform1i(fe.uniforms.uVelocity,W.read.attach(0)),m.uniform1i(fe.uniforms.uSource,Y.read.attach(1)),m.uniform1f(fe.uniforms.dissipation,t.DENSITY_DISSIPATION),G(Y.write.fbo),Y.swap()}(.016);Re(null);requestAnimationFrame(e)}(),canvas.addEventListener("mousemove",e=>{v[0].moved=v[0].down,v[0].dx=5*(e.offsetX-v[0].x),v[0].dy=5*(e.offsetY-v[0].y),v[0].x=e.offsetX,v[0].y=e.offsetY}),canvas.addEventListener("touchmove",e=>{e.preventDefault();const n=e.targetTouches;for(let i=0;i<n.length;i++){let e=v[i];e.moved=e.down,e.dx=8*(n[i].pageX-e.x),e.dy=8*(n[i].pageY-e.y),e.x=n[i].pageX,e.y=n[i].pageY}},!1),canvas.addEventListener("mousedown",()=>{v[0].down=!0,v[0].color=_e()}),canvas.addEventListener("touchstart",e=>{e.preventDefault();const n=e.targetTouches;for(let i=0;i<n.length;i++)i>=v.length&&v.push(new o),v[i].id=n[i].identifier,v[i].down=!0,v[i].x=n[i].pageX,v[i].y=n[i].pageY,v[i].color=_e()}),window.addEventListener("mouseup",()=>{v[0].down=!1}),window.addEventListener("touchend",e=>{const n=e.changedTouches;for(let i=0;i<n.length;i++)for(let e=0;e<v.length;e++)n[i].identifier==v[e].id&&(v[e].down=!1)}),window.addEventListener("keydown",e=>{"KeyP"===e.code&&(t.PAUSED=!t.PAUSED)," "===e.key&&f.push(parseInt(20*Math.random())+5)})}}]);