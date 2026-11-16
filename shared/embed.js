/* G463: modul otevřený uvnitř aplikace (v rámu shellu index.html) vypadá jako její součást –
   bez vlastní hlavičky s logem, se světlou lištou (shared/embed.css). Stejný princip jako
   Plant Management System. Otevřený samostatně (mimo rám) se nemění. Vkládá se na začátek <head>. */
(function () {
  if (window.self === window.top) return;
  document.documentElement.classList.add('pms-embed');
  var s = document.currentScript, l = document.createElement('link');
  l.rel = 'stylesheet'; l.href = s.src.replace(/embed\.js(\?.*)?$/, 'embed.css');
  document.head.appendChild(l);
})();
