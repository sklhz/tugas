document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Navbar toggle animation
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Load FAQ from JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const faqContainer = document.querySelector('.faq');
            data.forEach(item => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question');
                questionDiv.innerHTML = `
                    <h3>${item.question}</h3>
                    <p class="answer">${item.answer}</p>
                    <a href="full.html?id=${item.id}" class="btn-read-more" style="display: none;">Read More</a>
                `;
                questionDiv.addEventListener('click', () => {
                    questionDiv.classList.toggle('active');
                    const readMoreBtn = questionDiv.querySelector('.btn-read-more');
                    if (questionDiv.classList.contains('active')) {
                        readMoreBtn.style.display = 'inline-block';  // Show the Read More button
                    } else {
                        readMoreBtn.style.display = 'none';  // Hide the Read More button
                    }
                });
                faqContainer.appendChild(questionDiv);
            });
        })
        .catch(error => console.error('Error loading FAQ:', error));
});