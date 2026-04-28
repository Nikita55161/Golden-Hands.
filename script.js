/* Golden Hands CBO — Shared Script */

/* Live clock */
function updateClock() {
  const now = new Date();
  const timeEl = document.getElementById('clock-time');
  const dateEl = document.getElementById('clock-date');
  if (!timeEl) return;
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  timeEl.textContent = h + ':' + m + ':' + s;
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  dateEl.textContent = days[now.getDay()] + ' ' + now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear();
}
setInterval(updateClock, 1000);
updateClock();

/* Hamburger menu */
function toggleMenu() {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('#main-nav a').forEach(function (l) {
    l.addEventListener('click', function () {
      document.getElementById('main-nav').classList.remove('active');
    });
  });
});

/* Events countdown helper */
function startCountdown(targetDateStr, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  function tick() {
    const diff = new Date(targetDateStr) - new Date();
    if (diff <= 0) { container.innerHTML = '<span style="font-size:20px;font-weight:700;">Event is Live! 🎉</span>'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    container.innerHTML = box(d,'Days') + box(h,'Hours') + box(m,'Mins') + box(s,'Secs');
  }
  function box(n, u) {
    return '<div class="count-box"><span class="num">' + String(n).padStart(2,'0') + '</span><span class="unit">' + u + '</span></div>';
  }
  tick();
  setInterval(tick, 1000);
}

/* Press K → go to admin portal */
document.addEventListener('keydown', function (e) {
  if ((e.key === 'k' || e.key === 'K') && !e.ctrlKey && !e.metaKey && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
    window.location.href = 'admin.html';
  }
});
