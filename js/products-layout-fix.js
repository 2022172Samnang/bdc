// Updated Product Filtering JavaScript - Compatible with Dynamic System
function filterProducts(category) {
    // Map old category names to new ones
    const categoryMap = {
        'all': 'all-products',
        'detergent-powder': 'detergent-powder',
        'dishwashing': 'dishwashing',
        'floor-cleaner': 'floor-cleaner',
        'detergent-liquid': 'detergent-liquid',
        'glass-cleaner': 'glass-cleaner',
        'hand-washing': 'hand-washing',
        'bleach': 'bleach',
        'toilet-cleaner': 'toilet-cleaner'
    };

    const mappedCategory = categoryMap[category] || category;

    // Use the new showCategory function if it exists
    if (typeof window.showCategory === 'function') {
        window.showCategory(mappedCategory);
        return;
    }

    // Fallback method for compatibility
    // Remove active class from all sidebar categories
    const sidebarCategories = document.querySelectorAll('.category-item, .sidebar-category');
    sidebarCategories.forEach(cat => cat.classList.remove('active'));

    // Add active class to clicked category
    const clickedCategory = document.querySelector(`[data-category="${mappedCategory}"]`);
    if (clickedCategory) {
        clickedCategory.classList.add('active');
    }

    // Get all product sections
    const productSections = document.querySelectorAll('.product-section');
    let visibleCount = 0;

    productSections.forEach(section => {
        if (mappedCategory === 'all-products') {
            section.classList.remove('active');
            if (section.id === 'all-products') {
                section.classList.add('active');
                visibleCount++;
            }
        } else {
            section.classList.remove('active');
            if (section.id === mappedCategory) {
                section.classList.add('active');
                visibleCount++;
            }
        }
    });

    // Update products count
    const productCountElement = document.getElementById('product-count');
    if (productCountElement) {
        productCountElement.textContent = visibleCount;
    }
}

// Initialize products page - Updated for Dynamic System
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure the dynamic system has loaded
    setTimeout(() => {
        // Check if dynamic system is available
        if (typeof window.showCategory === 'function') {
            console.log('Dynamic product system detected');
            return; // Let the dynamic system handle everything
        }

        // Fallback initialization for static system
        console.log('Using fallback static system');

        // Set initial products count
        const productSections = document.querySelectorAll('.product-section');
        const productCountElement = document.getElementById('product-count');

        if (productCountElement) {
            productCountElement.textContent = productSections.length;
        }

        // Add click event listeners to sidebar categories
        const categoryItems = document.querySelectorAll('.category-item, .sidebar-category');
        categoryItems.forEach(category => {
            category.addEventListener('click', function(e) {
                e.preventDefault();
                const categoryType = this.getAttribute('data-category') ||
                                   (this.getAttribute('onclick') && this.getAttribute('onclick').match(/'([^']+)'/)[1]);
                if (categoryType) {
                    filterProducts(categoryType);
                }
            });
        });
    }, 100);

    // Ensure proper layout on window resize
    window.addEventListener('resize', function() {
        // Recalculate layout if needed
        const productsGrid = document.querySelector('.products-grid');
        if (productsGrid) {
            productsGrid.style.height = 'auto';
        }
    });
});

// Fix any layout issues on scroll
window.addEventListener('scroll', function() {
    // Ensure sidebar doesn't overlap footer
    const sidebar = document.querySelector('.sidebar');
    const footer = document.querySelector('.footer');
    
    if (sidebar && footer && window.innerWidth > 1024) {
        const footerTop = footer.offsetTop;
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const sidebarHeight = sidebar.offsetHeight;
        
        if (scrollTop + windowHeight > footerTop) {
            sidebar.style.position = 'absolute';
            sidebar.style.top = (footerTop - sidebarHeight - 50) + 'px';
        } else {
            sidebar.style.position = 'sticky';
            sidebar.style.top = '120px';
        }
    }
});

