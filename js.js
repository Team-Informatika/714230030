document.addEventListener('DOMContentLoaded', function() {
    const text = "Rendy Kamaluddin";
    const typedTextElement = document.getElementById('typed-text');
    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            typedTextElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            
            setTimeout(() => {
                typedTextElement.textContent = '';
                charIndex = 0;
                type();
            }, 1000); 
        }
    }

    type();
});