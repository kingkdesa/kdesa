export function listenKonami(cb){
  const seq = [38,38,40,40,37,39,37,39,66,65];
  let pos = 0;
  function handler(e){
    if(e.keyCode === seq[pos]){ pos++; if(pos === seq.length){ cb(); pos = 0; } } else pos = 0;
  }
  window.addEventListener('keydown', handler);
  return ()=> window.removeEventListener('keydown', handler);
}
