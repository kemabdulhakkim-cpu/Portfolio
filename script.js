// Portfolio Interactivity and Animations

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // Set Current Year in Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // 1. Mobile Navigation Menu Toggle
    const navToggle = document.getElementById('nav-toggle-btn');
    const navMenu = document.getElementById('nav-links-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. Scroll Spy and Header Scrolled Style
    const header = document.querySelector('.navbar-wrapper');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        // Sticky Header effect
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Nav Link highlight on scroll
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Hero Subtitle Typewriter Effect
    const typewriterElement = document.getElementById('typewriter-text');
    const phrases = [
        "B.Tech AI & Data Science Student",
        "Full-Stack MERN Developer",
        "Data Structures Enthusiast",
        "Algorithmic Problem Solver"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deleting is faster
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Normal typing speed
        }

        // Handle states
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at full phrase
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }

        setTimeout(typeEffect, typingSpeed);
    }
    
    if (typewriterElement) {
        setTimeout(typeEffect, 1000);
    }

    // 4. Skills Tabs Filter
    const tabButtons = document.querySelectorAll('.tab-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active tab button style
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');

            skillCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'flex';
                    // Trigger a scale-in opacity animation
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.transition = 'all 0.3s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 5. Circular Progress Animation (Observer-based)
    const gauges = document.querySelectorAll('.circle-gauge');
    
    const animateGauges = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const gauge = entry.target;
                const percent = parseInt(gauge.getAttribute('data-percent'), 10);
                const progressBar = gauge.querySelector('.circle-bar');
                
                // SVG perimeter is 2 * PI * r = 2 * 3.14159 * 50 = 314.16
                const maxOffset = 314.16;
                const offset = maxOffset - (maxOffset * percent) / 100;
                
                progressBar.style.strokeDashoffset = offset;
                
                // Stop observing this element once animated
                observer.unobserve(gauge);
            }
        });
    };

    const gaugeObserver = new IntersectionObserver(animateGauges, {
        threshold: 0.2
    });

    gauges.forEach(gauge => {
        // Init state with empty progress
        const progressBar = gauge.querySelector('.circle-bar');
        progressBar.style.strokeDashoffset = '314.16';
        gaugeObserver.observe(gauge);
    });

    // 6. Interactive Project Details Modal Simulators
    const modal = document.getElementById('demo-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalSimArea = document.getElementById('modal-simulation-area');
    const modalIconContainer = document.getElementById('modal-icon-container');
    const modalCloseBtn = document.getElementById('close-modal-btn');
    const modalActionBtn = document.getElementById('modal-action-btn');
    const projectDemoBtns = document.querySelectorAll('.project-demo-btn');

    // Simulation log templates
    const simulations = {
        "AI-Powered Tariff Import Impact System": {
            icon: "bar-chart-3",
            description: "Executing deep-margin simulation using sample MERN calculations. Predicting business cost shifts upon tariff adjustment.",
            run: (element) => {
                element.innerHTML = '';
                element.style.color = '#06b6d4';
                const logs = [
                    "[system] Initializing Tariff Simulation Engine...",
                    "[db] Connected to MongoDB (MERN Cluster 0)...",
                    "[query] Fetching historical import profiles for 'Coimbatore Logistics Pvt'...",
                    "[data] Loaded 124 import records. Average base tariff rate: 12.5%.",
                    "[sim-core] Applying User Custom Override: New Tariff Rate = 18.0%.",
                    "[sim-core] Calculating raw impact on Product Cost Basis...",
                    " >> SKU_ID_48211 (Electronics component): Base $45.00 -> Projected $53.10 (+18%)",
                    " >> SKU_ID_90112 (Assembly parts): Base $12.00 -> Projected $14.16 (+18%)",
                    "[analytics] Projecting total operational margins shift:",
                    " >> Net Margin: -4.3% reduction",
                    " >> Break-even threshold shifts by +1,240 units",
                    "[risk-eval] High Risk flags raised for: Raw Materials category.",
                    "[system] Calculations completed. Exporting results to dashboard graphs."
                ];
                
                let i = 0;
                function logNext() {
                    if (i < logs.length) {
                        const line = document.createElement('div');
                        line.textContent = logs[i];
                        line.style.marginBottom = '6px';
                        line.style.opacity = '0';
                        line.style.transform = 'translateY(5px)';
                        line.style.transition = 'all 0.15s ease';
                        element.appendChild(line);
                        
                        // Scroll simulation screen to bottom
                        element.scrollTop = element.scrollHeight;

                        setTimeout(() => {
                            line.style.opacity = '1';
                            line.style.transform = 'translateY(0)';
                        }, 50);

                        i++;
                        setTimeout(logNext, 600);
                    }
                }
                logNext();
            }
        },
        "Contact Notebook": {
            icon: "book-open",
            description: "Initializing Tkinter UI layout hooks, scanning SQLite persistence tables, and testing local SMTP email dispatch triggers.",
            run: (element) => {
                element.innerHTML = '';
                element.style.color = '#f59e0b';
                const logs = [
                    "[python] Initializing Tkinter Frame architecture...",
                    "[gui] Layout rendered successfully. Theme mode: 'Night Cyber-Glow'.",
                    "[sqlite3] Connecting to contacts.db database...",
                    "[sqlite3] Database connection successful. Scanned 45 records.",
                    "[suggest-engine] User inputs prefix search: 'Ab'...",
                    "[suggest-engine] Match found: 'Abdul Hakkim' (abdulhakkim.t2024aids@sece.ac.in)",
                    "[event-scheduler] Scanning birthdays scheduled for today...",
                    "[event-scheduler] Found 1 birthday alert: 'Rohan Sharma' (Turns 21 today!)",
                    "[smtp] Connecting to mail.smtp.gmail.com:587 via TLS...",
                    "[smtp] Handshake success. User authenticated: 'Abdul Hakkim'.",
                    "[smtp] Compiling template: 'Birthday Wishes & Reminders'...",
                    "[smtp] Message payload dispatched successfully. Status: 250 OK.",
                    "[system] UI loop idling gracefully."
                ];
                
                let i = 0;
                function logNext() {
                    if (i < logs.length) {
                        const line = document.createElement('div');
                        line.textContent = logs[i];
                        line.style.marginBottom = '6px';
                        line.style.opacity = '0';
                        line.style.transform = 'translateY(5px)';
                        line.style.transition = 'all 0.15s ease';
                        element.appendChild(line);
                        element.scrollTop = element.scrollHeight;

                        setTimeout(() => {
                            line.style.opacity = '1';
                            line.style.transform = 'translateY(0)';
                        }, 50);

                        i++;
                        setTimeout(logNext, 550);
                    }
                }
                logNext();
            }
        },
        "Real Time Event Scheduler": {
            icon: "calendar",
            description: "Establishing WebSocket synchronization, polling Firebase Firestore collections, and computing calendar availability intersections.",
            run: (element) => {
                element.innerHTML = '';
                element.style.color = '#10b981';
                const logs = [
                    "[react-app] Rendering responsive calendar grid...",
                    "[firebase] Initializing connection to Google Cloud Firestore...",
                    "[firebase] Channel established. Listening to active chat sub-collections...",
                    "[websocket] Real-time session active. Current users online: 4.",
                    "[scheduler] Booking request received: 'Sprint Planning Session'.",
                    "[scheduler] Date: June 15, Time: 14:00 - 15:30 UTC.",
                    "[firestore] Running real-time conflict query across shared calendars...",
                    " >> Checking slot 14:00 - 15:30 against User 1 (Hakkim): OK (Free)",
                    " >> Checking slot 14:00 - 15:30 against User 2 (Algotutor): OK (Free)",
                    " >> Checking slot 14:00 - 15:30 against Room A: OK (Free)",
                    "[scheduler] Conflict status: 0 matches. Slot APPROVED.",
                    "[firestore] Writing event document to collection 'events'...",
                    "[firestore] Write complete. Transaction ID: txn_89281a9f.",
                    "[cloud-functions] Dispatching automatic email notifications to attendees...",
                    "[system] Event scheduler synced. UI updated globally on active devices."
                ];
                
                let i = 0;
                function logNext() {
                    if (i < logs.length) {
                        const line = document.createElement('div');
                        line.textContent = logs[i];
                        line.style.marginBottom = '6px';
                        line.style.opacity = '0';
                        line.style.transform = 'translateY(5px)';
                        line.style.transition = 'all 0.15s ease';
                        element.appendChild(line);
                        element.scrollTop = element.scrollHeight;

                        setTimeout(() => {
                            line.style.opacity = '1';
                            line.style.transform = 'translateY(0)';
                        }, 50);

                        i++;
                        setTimeout(logNext, 600);
                    }
                }
                logNext();
            }
        }
    };

    projectDemoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Get project name from the card title
            const projectCard = btn.closest('.project-card');
            const projectName = projectCard.querySelector('.project-name').textContent;
            const simData = simulations[projectName];

            if (simData) {
                // Populate Modal details
                modalTitle.textContent = projectName;
                modalText.textContent = simData.description;
                
                // Update Modal Icon
                modalIconContainer.innerHTML = `<i data-lucide="${simData.icon}"></i>`;
                lucide.createIcons(); // Reactivate Lucide icons inside modal
                
                // Open Modal
                modal.classList.add('active');
                
                // Run Simulation logs
                simData.run(modalSimArea);
            }
        });
    });

    // Close Modal functions
    function closeModal() {
        modal.classList.remove('active');
        // Clear active simulation logs
        modalSimArea.innerHTML = '';
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalActionBtn) modalActionBtn.addEventListener('click', closeModal);
    
    // Close Modal when clicking background overlay
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close Modal on ESC key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // 7. Contact Form Handling (Dynamic response simulation)
    const contactForm = document.getElementById('portfolio-contact-form');
    const submitBtn = document.getElementById('submit-btn-el');

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect Form data
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;

            console.log("Form Dispatched:", { name, email, subject, message });

            // Trigger submit animations
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.8';
            submitBtn.innerHTML = `<span>Sending Message...</span><i data-lucide="loader" class="spin-icon"></i>`;
            lucide.createIcons();

            // Simulate server network request delay
            setTimeout(() => {
                submitBtn.innerHTML = `<span>Sent Successfully!</span><i data-lucide="check-circle-2"></i>`;
                submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                lucide.createIcons();

                // Clear input fields
                contactForm.reset();

                // Reset button state after 3.5 seconds
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.background = 'var(--gradient-accent)';
                    submitBtn.innerHTML = `<span>Send Message</span><i data-lucide="send"></i>`;
                    lucide.createIcons();
                }, 3500);

            }, 2000);
        });
    }

    // 8. Custom Interactive Canvas Background System (Nodes/Particles)
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    let particlesArray = [];
    const maxParticles = 80;
    
    // Mouse properties
    const mouse = {
        x: null,
        y: null,
        radius: 130 // Interactive distance limit
    };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Resize canvas to match window viewport
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles(); // Reinitialize coordinates on screen resize
    }

    window.addEventListener('resize', resizeCanvas);

    // Particle Object blueprint
    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        // Draw particle coordinates
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        // Update positions & check borders/mouse interactions
        update() {
            // Check boundaries
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            // Mouse interact (push away slightly)
            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 2;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 2;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 2;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 2;
                    }
                }
            }

            // Move particle
            this.x += this.directionX;
            this.y += this.directionY;

            // Render
            this.draw();
        }
    }

    // Populate particles list
    function initParticles() {
        particlesArray = [];
        let numberOfParticles = Math.min((canvas.width * canvas.height) / 18000, maxParticles);
        
        for (let i = 0; i < numberOfParticles; i++) {
            let size = Math.random() * 2 + 1; // Nodes size
            let x = Math.random() * (canvas.width - size * 2 - size * 2) + size * 2;
            let y = Math.random() * (canvas.height - size * 2 - size * 2) + size * 2;
            
            // Velocities
            let directionX = (Math.random() * 0.4) - 0.2;
            let directionY = (Math.random() * 0.4) - 0.2;
            
            // Random color from theme (cyan, purple, grey)
            const colors = [
                'rgba(6, 182, 212, 0.4)',  // Translucent Cyan
                'rgba(139, 92, 246, 0.35)', // Translucent Purple
                'rgba(148, 163, 184, 0.2)'  // Translucent Gray
            ];
            let color = colors[Math.floor(Math.random() * colors.length)];

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    // Draw lines between close nodes
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 140) {
                    opacityValue = 1 - (distance / 140);
                    // Connection line color maps to proximity gradient
                    ctx.strokeStyle = `rgba(6, 182, 212, ${opacityValue * 0.08})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw subtle digital horizontal background lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.003)';
        ctx.lineWidth = 1;
        for (let y = 0; y < canvas.height; y += 40) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
        requestAnimationFrame(animate);
    }

    // Start Canvas Engine
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
    animate();
});

// Extra animation helpers
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .spin-icon {
        animation: spin 1s linear infinite;
    }
`;
document.head.appendChild(styleSheet);
