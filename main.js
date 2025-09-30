"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    if (fadeElements.length) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        fadeElements.forEach(element => observer.observe(element));
    }

    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuBtn && mobileMenu) {
        const toggleMenu = () => mobileMenu.classList.toggle("hidden");
        mobileMenuBtn.addEventListener("click", toggleMenu);

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                if (!mobileMenu.classList.contains("hidden")) {
                    mobileMenu.classList.add("hidden");
                }
            });
        });
    }

    const courseSelect = document.getElementById("course-select");
    const certificationCheckbox = document.getElementById("certification");
    const jobPlacementCheckbox = document.getElementById("job-placement");
    const totalPriceEl = document.getElementById("total-price");
    const discountEl = document.getElementById("discount");
    const formatButtons = document.querySelectorAll(".format-btn");

    const coursePrices = {
        basic: 49900,
        luxury: 89900,
        corporate: 129900,
        combo: 199900,
    };

    const formatMultipliers = {
        online: 1,
        mentorship: 1.25,
    };

    const optionPrices = {
        certification: 15000,
        jobPlacement: 25000,
    };

    let selectedFormat = "online";

    const setActiveFormat = (target) => {
        formatButtons.forEach((button) => {
            button.classList.remove("bg-primary", "text-white", "border-transparent", "shadow-lg");
            button.classList.add("border-gray-300", "text-dark");
        });

        target.classList.remove("border-gray-300", "text-dark");
        target.classList.add("bg-primary", "text-white", "border-transparent", "shadow-lg");
        selectedFormat = target.dataset.format || "online";
    };

    const formatPrice = (value) => `${value.toLocaleString("ru-RU")} ₽`;

    const calculatePrice = () => {
        const courseKey = courseSelect?.value;
        const basePrice = courseKey && coursePrices[courseKey] ? coursePrices[courseKey] : 0;
        const multiplier = formatMultipliers[selectedFormat] || 1;

        let optionsTotal = 0;
        if (certificationCheckbox?.checked) {
            optionsTotal += optionPrices.certification;
        }
        if (jobPlacementCheckbox?.checked) {
            optionsTotal += optionPrices.jobPlacement;
        }

        const subtotal = Math.round(basePrice * multiplier + optionsTotal);

        let discount = 0;
        if (courseKey === "combo" && subtotal >= 199900) {
            discount = 20000;
        } else if (certificationCheckbox?.checked && jobPlacementCheckbox?.checked) {
            discount = 5000;
        }

        const total = Math.max(0, subtotal - discount);

        if (totalPriceEl) {
            totalPriceEl.textContent = formatPrice(total);
        }
        if (discountEl) {
            discountEl.textContent = formatPrice(discount);
        }
    };

    if (formatButtons.length) {
        const defaultButton = Array.from(formatButtons).find(button => button.dataset.format === selectedFormat);
        if (defaultButton) {
            setActiveFormat(defaultButton);
        }

        formatButtons.forEach((button) => {
            button.addEventListener("click", () => {
                setActiveFormat(button);
                calculatePrice();
            });
        });
    }

    [courseSelect, certificationCheckbox, jobPlacementCheckbox].forEach((element) => {
        element?.addEventListener("change", calculatePrice);
    });

    calculatePrice();

    if (window.Splide) {
        const slider = new window.Splide("#testimonials-slider", {
            type: "loop",
            perPage: 2,
            gap: "2rem",
            autoplay: true,
            interval: 6000,
            pauseOnHover: true,
            breakpoints: {
                1024: {
                    perPage: 1,
                },
            },
        });

        slider.mount();
    }
});
