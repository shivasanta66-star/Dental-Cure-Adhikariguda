// Ganesh Dental Clinic — open/closed status (India time) and the WhatsApp enquiry form.
(function () {
  var PHONE = '919938988986';
  var OPEN_MIN = 8 * 60;   // 8 a.m.
  var CLOSE_MIN = 20 * 60; // 8 p.m.

  function updateStatus() {
    var el = document.getElementById('status');
    if (!el) return;
    var now = new Date();
    // IST is UTC+5:30 all year.
    var ist = (now.getUTCHours() * 60 + now.getUTCMinutes() + 330) % 1440;
    var open = ist >= OPEN_MIN && ist < CLOSE_MIN;
    el.textContent = open ? 'Open now, until 8 p.m.' : 'Closed now · opens 8 a.m.';
    el.classList.toggle('is-closed', !open);
  }

  function initForm() {
    var form = document.getElementById('enquiry');
    if (!form) return;
    var err = document.getElementById('form-error');
    var nameEl = document.getElementById('f-name');
    var phoneEl = document.getElementById('f-phone');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = function (id) { return (document.getElementById(id).value || '').trim(); };
      var name = val('f-name'), phone = val('f-phone');
      nameEl.setAttribute('aria-invalid', name ? 'false' : 'true');
      phoneEl.setAttribute('aria-invalid', phone ? 'false' : 'true');
      if (!name || !phone) {
        err.hidden = false;
        (name ? phoneEl : nameEl).focus();
        return;
      }
      err.hidden = true;
      var lines = ['Hello, this is ' + name + '.', 'Phone: ' + phone];
      if (val('f-service')) lines.push('About: ' + val('f-service'));
      if (val('f-msg')) lines.push(val('f-msg'));
      window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });
  }

  updateStatus();
  setInterval(updateStatus, 60 * 1000);
  initForm();
})();
