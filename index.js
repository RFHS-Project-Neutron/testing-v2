window.onload = function() {
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = '/home';
    
    win.document.body.appendChild(iframe);
    
    setTimeout(function() {
        window.location.replace('https://nasa.gov');
    }, 0); // Immediate redirect without saving to history
};
