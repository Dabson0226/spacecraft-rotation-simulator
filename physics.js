// Euler's equations in the principal-axis, body-fixed frame.
export function derivative(w,I){const [x,y,z]=w;const [a,b,c]=I;return [(b-c)*y*z/a,(c-a)*z*x/b,(a-b)*x*y/c]}
export function rk4(w,I,dt){const k1=derivative(w,I);const plus=(v,k,f)=>v.map((x,i)=>x+f*k[i]);const k2=derivative(plus(w,k1,dt/2),I);const k3=derivative(plus(w,k2,dt/2),I);const k4=derivative(plus(w,k3,dt),I);return w.map((x,i)=>x+dt*(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6)}
export function energy(w,I){return .5*w.reduce((s,x,i)=>s+I[i]*x*x,0)}
export function angularMomentum(w,I){return Math.hypot(...w.map((x,i)=>x*I[i]))}
export function rankAxes(I){return [0,1,2].sort((a,b)=>I[a]-I[b])}
