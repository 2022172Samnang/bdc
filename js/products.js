// Products Page Functionality - Updated for Dynamic System
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

    // Fallback to old method
    // Update active sidebar category
    const sidebarCategories = document.querySelectorAll('.category-item, .sidebar-category');
    sidebarCategories.forEach(cat => cat.classList.remove('active'));

    // Find and activate the clicked category
    const activeCategory = document.querySelector(`[data-category="${mappedCategory}"]`);
    if (activeCategory) {
        activeCategory.classList.add('active');
    }

    // Show/hide product sections
    const productSections = document.querySelectorAll('.product-section');
    let visibleCount = 0;

    productSections.forEach(section => {
        if (mappedCategory === 'all-products') {
            section.classList.remove('active');
            if (section.id === 'all-products') {
                section.classList.add('active');
                const products = section.querySelectorAll('.product-card');
                visibleCount += products.length;
            }
        } else {
            section.classList.remove('active');
            if (section.id === mappedCategory) {
                section.classList.add('active');
                const products = section.querySelectorAll('.product-card');
                visibleCount += products.length;
            }
        }
    });

    // Update product count
    const productCountElement = document.getElementById('product-count');
    if (productCountElement) {
        productCountElement.textContent = visibleCount;
    }
}

// View toggle functionality
function setView(viewType) {
    const viewButtons = document.querySelectorAll('.view-btn');
    const productsGrid = document.querySelector('.products-grid');
    
    // Update active button
    viewButtons.forEach(btn => btn.classList.remove('active'));
    const activeButton = document.querySelector(`[onclick="setView('${viewType}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Apply view styles
    if (viewType === 'list') {
        productsGrid.style.gridTemplateColumns = '1fr';
        productsGrid.style.gap = '1rem';
    } else {
        productsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(400px, 1fr))';
        productsGrid.style.gap = '2rem';
    }
}

// Product image switching
function switchProductImage(productCard, imageElement) {
    const images = productCard.querySelectorAll('.product-image');
    images.forEach(img => img.classList.remove('active'));
    imageElement.classList.add('active');
}

// Initialize product page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to product images
    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach(image => {
        image.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            switchProductImage(productCard, this);
        });
    });

    // Initialize intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all product sections
    const productSections = document.querySelectorAll('.product-section');
    productSections.forEach(section => {
        observer.observe(section);
    });

    // Handle URL hash for direct category linking
    const hash = window.location.hash.substring(1);
    if (hash) {
        setTimeout(() => {
            filterProducts(hash);
        }, 100);
    }
});

// Price item hover effects
document.addEventListener('DOMContentLoaded', function() {
    const priceItems = document.querySelectorAll('.price-item');
    priceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Enhanced Product Data with sizes and pricing
const productData = {
    'detergent-powder': [
        {
            id: 'summer-flower',
            title: 'Detergent Powder (Summer Flower)',
            category: 'Detergent Powder',
            rating: 4.8,
            reviews: 124,
            badge: 'Popular',
            mainImage: '../images/products/lix_detergent_summer_flower.png',
            thumbnails: [
                '../images/products/lix_detergent_summer_flower.png'
            ],
            variants: [
                { size: '150g', price: 0.25, originalPrice: 0.30, image: '../images/products/lix_detergent_summer_flower.png' },
                { size: '300g', price: 0.45, originalPrice: 0.55, image: '../images/products/lix_detergent_summer_flower.png' },
                { size: '500g', price: 0.75, originalPrice: 0.90, image: '../images/products/lix_detergent_summer_flower.png' },
                { size: '1kg', price: 1.375, originalPrice: 1.60, image: '../images/products/lix_detergent_summer_flower.png' }
            ],
            benefits: 'Removes stains and odors on clothes, leaves a floral scent, gentle on hands; suitable for both machine and hand wash.',
            usage: 'Separate white and colored clothes. Dissolve 30g of powder in 3-4L of water; stir to form foam and soak garments for up to 30 min. Rinse 2-3 times with clean water and sun-dry.',
            features: ['Machine & Hand Wash', 'Floral Scent', 'Stain Removal', 'Gentle Formula']
        },
        {
            id: 'lemon',
            title: 'Detergent Powder (Lemon)',
            category: 'Detergent Powder',
            rating: 4.6,
            reviews: 89,
            badge: 'Best Seller',
            mainImage: '../images/products/lix_detergent_lemon_.png',
            thumbnails: [
                '../images/products/lix_detergent_lemon_.png'
            ],
            variants: [
                { size: '150g', price: 0.25, originalPrice: 0.30, image: '../images/products/lix_detergent_lemon_.png' },
                { size: '300g', price: 0.45, originalPrice: 0.55, image: '../images/products/lix_detergent_lemon_.png' },
                { size: '500g', price: 0.75, originalPrice: 0.90, image: '../images/products/lix_detergent_lemon_.png' },
                { size: '1kg', price: 1.375, originalPrice: 1.60, image: '../images/products/lix_detergent_lemon_.png' }
            ],
            benefits: 'Whitens fabrics, natural lemon scent, gentle on hands; suitable for both machine and hand wash.',
            usage: 'Separate white and colored clothes. Dissolve 30g of powder in 3-4L of water; stir to form foam and soak garments for up to 30 min. Rinse 2-3 times with clean water and sun-dry.',
            features: ['Natural Lemon', 'Whitening Power', 'Machine & Hand Wash', 'Gentle Formula']
        },
        {
            id: 'pises',
            title: 'Detergent Powder (PISES)',
            category: 'Detergent Powder',
            rating: 4.9,
            reviews: 203,
            badge: 'Premium',
            mainImage: '../images/products/lix_detergent_pises_.png',
            thumbnails: [
                '../images/products/lix_detergent_pises_.png'
            ],
            variants: [
                { size: '120g', price: 0.25, originalPrice: 0.30, image: '../images/products/lix_detergent_pises_.png' },
                { size: '350g', price: 0.625, originalPrice: 0.75, image: '../images/products/lix_detergent_pises_.png' },
                { size: '800g', price: 1.375, originalPrice: 1.60, image: '../images/products/lix_detergent_pises_.png' }
            ],
            benefits: 'Dissolves easily, double stain-removal power, restores brightness; suitable for both machine and hand wash.',
            usage: 'Separate white and colored clothes. Dissolve 30g of powder in 3-4L of water; stir to form foam and soak garments for up to 30 min. Rinse 2-3 times with clean water and sun-dry.',
            features: ['Double Power', 'Easy Dissolve', 'Brightness Restore', 'Premium Formula']
        }
    ],
    'dishwashing': [
        {
            id: 'dishwashing-liquid',
            title: 'Dishwashing Liquid',
            category: 'Dishwashing',
            rating: 4.7,
            reviews: 156,
            badge: 'Eco-Friendly',
            mainImage: '../images/products/lix_dishwashing_15_750ml.png',
            thumbnails: [
                '../images/products/lix_dishwashing_48_200ml.jpg',
                '../images/products/lix_dishwashing_24_380ml.png',
                '../images/products/lix_dishwashing_15_750ml.png',
                '../images/products/lix_dishwashing_8_1500ml.png'
            ],
            variants: [
                { size: '200mL', price: 0.30, originalPrice: 0.35, image: '../images/products/lix_dishwashing_48_200ml.jpg' },
                { size: '380mL', price: 0.50, originalPrice: 0.60, image: '../images/products/lix_dishwashing_24_380ml.png' },
                { size: '750mL', price: 0.875, originalPrice: 1.00, image: '../images/products/lix_dishwashing_15_750ml.png' },
                { size: '1.5L', price: 1.75, originalPrice: 2.00, image: '../images/products/lix_dishwashing_8_1500ml.png' }
            ],
            benefits: 'Made from 100% natural lemon, double-strength oil removal, contains vitamin E to protect hands, refreshing lemon scent.',
            usage: 'Mix 2 TBSP in 4-5L of water; use a damp sponge to create soapy bubbles; wash dishes; rinse thoroughly.',
            features: ['100% Natural Lemon', 'Vitamin E Protection', 'Double-Strength Formula', 'Gentle on Hands']
        }
    ],
    'floor-cleaner': [
        {
            id: 'antibacterial',
            title: 'Floor Cleaner (Antibacterial)',
            category: 'Floor Cleaner',
            rating: 4.5,
            reviews: 78,
            badge: 'Antibacterial',
            mainImage: '../images/products/lix_floor_cleaner_antibacterial_12_1000ml.png',
            thumbnails: [
                '../images/products/lix_floor_cleaner_antibacterial_12_1000ml.png',
                '../images/products/lix_floor_cleaner_antibacterial_8_2000ml.png',
                '../images/products/lix_floor_cleaner_antibacterial_3_5000ml.png'
            ],
            variants: [
                { size: '1L', price: 2.25, originalPrice: 2.50, image: '../images/products/lix_floor_cleaner_antibacterial_12_1000ml.png' },
                { size: '2L', price: 4.25, originalPrice: 4.75, image: '../images/products/lix_floor_cleaner_antibacterial_8_2000ml.png' },
                { size: '5L', price: 9.75, originalPrice: 11.00, image: '../images/products/lix_floor_cleaner_antibacterial_3_5000ml.png' }
            ],
            benefits: 'Kills 99.9% of bacteria and germs, leaves floors sparkling clean, pleasant fresh scent, safe for all floor types.',
            usage: 'Dilute with water as needed. Apply to floor surface, mop thoroughly, and let air dry. No rinsing required.',
            features: ['99.9% Germ Kill', 'All Floor Types', 'Fresh Scent', 'No Rinse Required']
        },
        {
            id: 'lily-rose',
            title: 'Floor Cleaner (Lily & Rose)',
            category: 'Floor Cleaner',
            rating: 4.7,
            reviews: 92,
            badge: 'Aromatherapy',
            mainImage: '../images/products/lix_floor_cleaner_lixly_&_rose_12_1000ml.png',
            thumbnails: [
                '../images/products/lix_floor_cleaner_lixly_&_rose_12_1000ml.png',
                '../images/products/lix_floor_cleaner_lixly_&_rose_8_2000ml.png',
                '../images/products/lix_floor_cleaner_lixly_&_rose_3_5000ml.png'
            ],
            variants: [
                { size: '1L', price: 2.75, originalPrice: 3.00, image: '../images/products/lix_floor_cleaner_lixly_&_rose_12_1000ml.png' },
                { size: '2L', price: 5.25, originalPrice: 5.75, image: '../images/products/lix_floor_cleaner_lixly_&_rose_8_2000ml.png' },
                { size: '5L', price: 12.25, originalPrice: 13.50, image: '../images/products/lix_floor_cleaner_lixly_&_rose_3_5000ml.png' }
            ],
            benefits: 'Relaxing lily & rose scent, antibacterial formula, gentle on surfaces, leaves a protective shine, aromatherapy benefits while cleaning.',
            usage: 'Dilute with water as needed. Apply to floor surface, mop thoroughly, and let air dry. No rinsing required.',
            features: ['Lily & Rose Scent', 'Aromatherapy', 'Protective Shine', 'Gentle Formula']
        }
    ],
    'detergent-liquid': [
        {
            id: 'detergent-liquid',
            title: 'Detergent Liquid',
            category: 'Detergent Liquid',
            rating: 4.6,
            reviews: 145,
            badge: 'Concentrated',
            mainImage: '../images/products/lix_detergent_lixquid_8_2000ml.png',
            thumbnails: [
                '../images/products/lix_detergent_lixquid_8_2000ml.png',
                '../images/products/lix_detergent_lixquid_4_4000ml.png',
                '../images/products/lix_detergent_lixquid_perfume_4_4000ml.png'
            ],
            variants: [
                { size: '2L', price: 6.25, originalPrice: 7.00, image: '../images/products/lix_detergent_lixquid_8_2000ml.png' },
                { size: '4L', price: 11.75, originalPrice: 13.00, image: '../images/products/lix_detergent_lixquid_4_4000ml.png' },
                { size: '4L Perfume', price: 12.75, originalPrice: 14.00, image: '../images/products/lix_detergent_lixquid_perfume_4_4000ml.png' }
            ],
            benefits: 'Concentrated formula for maximum cleaning power, removes tough stains, gentle on fabrics, suitable for all washing machines.',
            usage: 'Use 30-50ml per load depending on soil level. Add to washing machine dispenser or directly to drum before adding clothes.',
            features: ['Concentrated Formula', 'Tough Stain Removal', 'Machine Compatible', 'Gentle on Fabrics']
        },
        {
            id: 'fresh-sakura',
            title: 'Detergent Liquid (Fresh Sakura)',
            category: 'Detergent Liquid',
            rating: 4.8,
            reviews: 67,
            badge: 'Limited Edition',
            mainImage: '../images/products/lix_detergent_lixquid_fresh_sakura_4_3000ml.jpg',
            thumbnails: [
                '../images/products/lix_detergent_lixquid_fresh_sakura_4_3000ml.jpg'
            ],
            variants: [
                { size: '3L', price: 10.50, originalPrice: 12.00, image: '../images/products/lix_detergent_lixquid_fresh_sakura_4_3000ml.jpg' }
            ],
            benefits: 'Fresh sakura fragrance, gentle formula, effective cleaning power, suitable for all fabric types.',
            usage: 'Use 30-50ml per load depending on soil level. Add to washing machine dispenser or directly to drum before adding clothes.',
            features: ['Sakura Fragrance', 'Gentle Formula', 'All Fabric Types', 'Limited Edition']
        }
    ],
    'glass-cleaner': [
        {
            id: 'glass-cleaner',
            title: 'Glass Cleaner (Crystal Clear)',
            category: 'Glass Cleaner',
            rating: 4.4,
            reviews: 56,
            badge: 'Streak-Free',
            mainImage: '../images/products/lix_glass_cleaner_12_650ml.png',
            thumbnails: [
                '../images/products/lix_glass_cleaner_12_650ml.png',
                '../images/products/lix_glass_cleaner_5l.png'
            ],
            variants: [
                { size: '650mL', price: 2.25, originalPrice: 2.50, image: '../images/products/lix_glass_cleaner_12_650ml.png' },
                { size: '5L', price: 15.75, originalPrice: 17.00, image: '../images/products/lix_glass_cleaner_5l.png' }
            ],
            benefits: 'Streak-free formula, crystal clear results, removes fingerprints and smudges, anti-static properties, suitable for all glass surfaces.',
            usage: 'Spray directly onto glass surface or apply with cloth. Wipe clean with lint-free cloth or paper towel for streak-free results.',
            features: ['Streak-Free', 'Anti-Static', 'Crystal Clear', 'All Glass Surfaces']
        }
    ],
    'hand-washing': [
        {
            id: 'hand-washing',
            title: 'Hand Washing Liquid',
            category: 'Hand Washing',
            rating: 4.6,
            reviews: 89,
            badge: 'Gentle Care',
            mainImage: '../images/products/lix_hand_washing_bamboo_charcoal_12_500ml.png',
            thumbnails: [
                '../images/products/lix_hand_washing_bamboo_charcoal_12_500ml.png',
                '../images/products/lix_hand_washing_sakura_blossom_12_500ml.png'
            ],
            variants: [
                { size: '500mL Bamboo', price: 3.25, originalPrice: 3.75, image: '../images/products/lix_hand_washing_bamboo_charcoal_12_500ml.png' },
                { size: '500mL Sakura', price: 3.25, originalPrice: 3.75, image: '../images/products/lix_hand_washing_sakura_blossom_12_500ml.png' }
            ],
            benefits: 'Gentle on hands, moisturizing formula, antibacterial properties, available in bamboo charcoal and sakura blossom scents.',
            usage: 'Apply small amount to wet hands, lather well, and rinse thoroughly with clean water. Suitable for frequent use.',
            features: ['Moisturizing', 'Antibacterial', 'Two Scents', 'Frequent Use Safe']
        }
    ],
    'bleach': [
        {
            id: 'ojavel',
            title: 'Ojavel Bleach',
            category: 'Bleach',
            rating: 4.3,
            reviews: 34,
            badge: 'Powerful',
            mainImage: '../images/products/lix_o_javel_24_300ml.png',
            thumbnails: [
                '../images/products/lix_o_javel_24_300ml.png'
            ],
            variants: [
                { size: '300mL', price: 1.25, originalPrice: 1.50, image: '../images/products/lix_o_javel_24_300ml.png' }
            ],
            benefits: 'Powerful whitening action, removes tough stains, disinfects surfaces, suitable for white fabrics and cleaning.',
            usage: 'Dilute with water as directed. Apply to stained areas, let sit for recommended time, then rinse thoroughly. For white fabrics only.',
            features: ['Powerful Whitening', 'Stain Removal', 'Disinfectant', 'White Fabrics Only']
        }
    ],
    'toilet-cleaner': [
        {
            id: 'toilet-cleaner',
            title: 'Toilet Cleaner',
            category: 'Toilet Cleaner',
            rating: 4.5,
            reviews: 67,
            badge: 'Deep Clean',
            mainImage: '../images/products/lix_toilet_cleaner_900ml.png',
            thumbnails: [
                '../images/products/lix_toilet_cleaner_900ml.png'
            ],
            variants: [
                { size: '900mL', price: 3.75, originalPrice: 4.25, image: '../images/products/lix_toilet_cleaner_900ml.png' }
            ],
            benefits: 'Powerful cleaning action, removes limescale and stains, fresh scent, disinfects and deodorizes.',
            usage: 'Apply under toilet rim and on surfaces. Let sit for 10-15 minutes, scrub with toilet brush, then flush. Use regularly for best results.',
            features: ['Limescale Removal', 'Fresh Scent', 'Disinfectant', 'Deep Clean']
        }
    ]
};

// Create modern ecommerce product card HTML
function createProductCard(product) {
    // Validate product data
    if (!product.id || product.id === '') {
        console.error('createProductCard: Product has invalid ID:', product);
        return '';
    }

    if (!product.variants || product.variants.length === 0) {
        console.error('createProductCard: Product has no variants:', product.id);
        return '';
    }

    const defaultVariant = product.variants[0];
    const discount = Math.round(((defaultVariant.originalPrice - defaultVariant.price) / defaultVariant.originalPrice) * 100);

    console.log('Creating product card for:', product.id, 'Category:', product.category);

    return `
        <div class="product-card" data-category="${product.category}" data-product-id="${product.id}">
            <div class="product-content">
                <!-- Product Image Section -->
                <div class="product-image-section">
                    <div class="main-product-image">
                        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                        <img src="${product.mainImage}" alt="${product.title}" id="main-img-${product.id}"
                             onclick="cycleMainImage('${product.id}')"
                             style="cursor: pointer;"
                             onerror="this.src='../images/placeholder.svg'">
                    </div>
                    <div class="product-thumbnails">
                        ${product.thumbnails.map((thumb, index) => `
                            <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${product.id}', '${thumb}', this)">
                                <img src="${thumb}" alt="${product.title}" onerror="this.src='../images/placeholder.svg'">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Product Info Section -->
                <div class="product-info-section">
                    <div class="product-header">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-rating">
                            <div class="stars">
                                ${Array.from({length: 5}, (_, i) => `
                                    <i class="fas fa-star star ${i < Math.floor(product.rating) ? '' : 'text-gray-300'}"></i>
                                `).join('')}
                            </div>
                            <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                        </div>
                    </div>

                    <!-- Product Tabs -->
                    <div class="product-tabs">
                        <button class="tab-button active" onclick="switchTab('${product.id}', 'benefits', this)">
                            <span data-translate="products.benefits">Benefits</span>
                        </button>
                        <button class="tab-button" onclick="switchTab('${product.id}', 'usage', this)">
                            <span data-translate="products.how_to_use">How to Use</span>
                        </button>
                        <button class="tab-button" onclick="switchTab('${product.id}', 'caution', this)">
                            <span data-translate="products.caution_storage">Caution & Storage</span>
                        </button>
                    </div>

                    <!-- Tab Content -->
                    <div class="tab-content active" id="benefits-${product.id}">
                        <p>${product.benefits}</p>
                    </div>
                    <div class="tab-content" id="usage-${product.id}">
                        <p>${product.usage}</p>
                    </div>
                    <div class="tab-content" id="caution-${product.id}">
                        <p><strong data-translate="products.caution">Caution:</strong> <span data-translate="products.caution_text">Avoid contact with eyes; keep out of reach of children.</span></p>
                        <p><strong data-translate="products.storage">Storage:</strong> <span data-translate="products.storage_text">Close lid after use; store in a cool, dry place.</span></p>
                    </div>
                </div>
            </div>

            <!-- Purchase Section - Moved to Bottom -->
            <div class="product-purchase-section">
                <div class="price-section">
                    <div class="current-price" id="price-${product.id}">$${defaultVariant.price.toFixed(2)}</div>
                    ${defaultVariant.originalPrice > defaultVariant.price ? `
                        <div>
                            <span class="original-price">$${defaultVariant.originalPrice.toFixed(2)}</span>
                            <span class="discount-badge">-${discount}%</span>
                        </div>
                    ` : ''}
                </div>

                <!-- Variant Selector -->
                <div class="variant-section">
                    <h4><i class="fas fa-boxes"></i> Size Options</h4>
                    <div class="variant-options">
                        ${product.variants.map((variant, index) => `
                            <div class="variant-option ${index === 0 ? 'active' : ''}"
                                 onclick="selectVariant('${product.id}', ${index}, this)">
                                <div class="variant-size">${variant.size}</div>
                                <div class="variant-price">$${variant.price.toFixed(2)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Modern ecommerce functions
function changeMainImage(productId, imageSrc, element) {
    console.log('changeMainImage called:', productId, imageSrc);

    // Validate inputs
    if (!productId || productId === '') {
        console.error('Invalid productId:', productId);
        return;
    }

    if (!imageSrc || imageSrc === '') {
        console.error('Invalid imageSrc:', imageSrc);
        return;
    }

    const mainImg = document.getElementById(`main-img-${productId}`);
    if (mainImg) {
        mainImg.src = imageSrc;
        console.log('Image updated successfully to:', imageSrc);
    } else {
        console.error('Main image element not found:', `main-img-${productId}`);
        return;
    }

    // Update thumbnail active states
    const productCard = element.closest('.product-card');
    if (productCard) {
        productCard.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
        element.classList.add('active');
        console.log('Thumbnail active states updated');
    } else {
        console.error('Product card not found');
    }
}

function selectVariant(productId, variantIndex, element) {
    console.log('selectVariant called:', productId, variantIndex);

    // Validate inputs
    if (!productId || productId === '') {
        console.error('Invalid productId:', productId);
        return;
    }

    const productCard = element.closest('.product-card');
    const productDataItem = getProductData(productId);
    if (!productDataItem) {
        console.error('Product data not found for:', productId);
        return;
    }

    if (!productDataItem.variants || !productDataItem.variants[variantIndex]) {
        console.error('Variant not found:', variantIndex, 'for product:', productId);
        return;
    }

    const variant = productDataItem.variants[variantIndex];
    const priceElement = document.getElementById(`price-${productId}`);
    const mainImg = document.getElementById(`main-img-${productId}`);

    console.log('Selected variant:', variant);

    // Update main price
    if (priceElement) {
        priceElement.textContent = `$${variant.price.toFixed(2)}`;
    }

    // Update original price and discount if they exist
    const priceSection = productCard.querySelector('.price-section');
    const existingPriceInfo = priceSection.querySelector('div:last-child');
    if (existingPriceInfo && existingPriceInfo.querySelector('.original-price')) {
        existingPriceInfo.remove();
    }

    // Add new price info if there's a discount
    if (variant.originalPrice && variant.originalPrice > variant.price) {
        const discount = Math.round(((variant.originalPrice - variant.price) / variant.originalPrice) * 100);
        const priceInfoDiv = document.createElement('div');
        priceInfoDiv.innerHTML = `
            <span class="original-price">$${variant.originalPrice.toFixed(2)}</span>
            <span class="discount-badge">-${discount}%</span>
        `;
        priceSection.appendChild(priceInfoDiv);
    }

    // Update main image if variant has different image
    if (mainImg && variant.image) {
        console.log('Updating main image to:', variant.image);
        mainImg.src = variant.image;

        // Helper function to extract filename from path for comparison
        function getImageFilename(imagePath) {
            // Extract just the filename from the path
            const parts = imagePath.split('/');
            return parts[parts.length - 1].toLowerCase();
        }

        // Also update the active thumbnail if the image matches one of the thumbnails
        const thumbnails = productCard.querySelectorAll('.thumbnail img');
        let thumbnailFound = false;

        thumbnails.forEach((thumb, index) => {
            const thumbnailContainer = thumb.closest('.thumbnail');
            const thumbFilename = getImageFilename(thumb.src);
            const variantFilename = getImageFilename(variant.image);

            console.log('Comparing thumbnail filename:', thumbFilename, 'with variant filename:', variantFilename);

            if (thumbFilename === variantFilename) {
                // Remove active from all thumbnails
                productCard.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                // Add active to matching thumbnail
                thumbnailContainer.classList.add('active');
                thumbnailFound = true;
                console.log('Thumbnail match found and activated');
            }
        });

        if (!thumbnailFound) {
            console.log('No matching thumbnail found for variant image:', variant.image);
            // If no exact match, just remove active from all thumbnails
            productCard.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        }
    }

    // Update active states for variant options
    productCard.querySelectorAll('.variant-option').forEach(opt => opt.classList.remove('active'));
    element.classList.add('active');

    console.log('Variant selection completed');
}

function switchTab(productId, tabName, element) {
    // Validate inputs
    if (!productId || productId === '') {
        console.error('Invalid productId:', productId);
        return;
    }

    if (!tabName || tabName === '') {
        console.error('Invalid tabName:', tabName);
        return;
    }

    const productCard = element.closest('.product-card');

    // Update tab buttons
    productCard.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    // Update tab content
    productCard.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    const targetContent = document.getElementById(`${tabName}-${productId}`);
    if (targetContent) {
        targetContent.classList.add('active');
    } else {
        console.error('Tab content not found:', `${tabName}-${productId}`);
    }
}

// Function to cycle through images when main image is clicked
function cycleMainImage(productId) {
    console.log('cycleMainImage called for:', productId);
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    if (!productCard) {
        console.error('Product card not found for:', productId);
        return;
    }

    const thumbnails = productCard.querySelectorAll('.thumbnail');
    const activeThumbnail = productCard.querySelector('.thumbnail.active');

    if (!activeThumbnail || thumbnails.length <= 1) {
        console.log('No active thumbnail found or only one thumbnail available');
        return;
    }

    // Find current active index
    let currentIndex = -1;
    thumbnails.forEach((thumb, index) => {
        if (thumb.classList.contains('active')) {
            currentIndex = index;
        }
    });

    // Calculate next index (cycle back to 0 if at end)
    const nextIndex = (currentIndex + 1) % thumbnails.length;
    const nextThumbnail = thumbnails[nextIndex];
    const nextImage = nextThumbnail.querySelector('img');

    if (nextImage) {
        // Simulate clicking the next thumbnail
        changeMainImage(productId, nextImage.src, nextThumbnail);
        console.log('Cycled to next image:', nextImage.src);
    }
}

// Helper function to get product data
function getProductData(productId) {
    if (!productId || productId === '') {
        console.error('getProductData called with invalid productId:', productId);
        return null;
    }

    for (const category in productData) {
        const product = productData[category].find(p => p.id === productId);
        if (product) return product;
    }
    console.error('Product not found with ID:', productId);
    return null;
}

// Validate product data integrity
function validateProductData() {
    console.log('Validating product data...');
    let isValid = true;

    for (const category in productData) {
        productData[category].forEach((product, index) => {
            if (!product.id || product.id === '') {
                console.error(`Product at index ${index} in category ${category} has invalid ID:`, product);
                isValid = false;
            }
            if (!product.variants || product.variants.length === 0) {
                console.error(`Product ${product.id} has no variants`);
                isValid = false;
            }
        });
    }

    console.log('Product data validation:', isValid ? 'PASSED' : 'FAILED');
    return isValid;
}

// Update category title based on selected category
function updateCategoryTitle(category) {
    const titleElement = document.getElementById('current-category-title');
    if (!titleElement) return;

    // Define category display names
    const categoryTitles = {
        'all-products': 'All Products',
        'detergent-powder': 'Detergent Powder',
        'dishwashing': 'Dishwashing Liquid',
        'floor-cleaner': 'Floor Cleaner',
        'detergent-liquid': 'Detergent Liquid',
        'glass-cleaner': 'Glass Cleaner',
        'hand-washing': 'Hand Washing',
        'bleach': 'Bleach',
        'toilet-cleaner': 'Toilet Cleaner'
    };

    const title = categoryTitles[category] || 'All Products';
    titleElement.textContent = title;
    console.log('Category title updated to:', title);
}

// Show category function - IMPROVED VERSION
function showCategory(category) {
    console.log('showCategory called with:', category);

    // Update sidebar active state first
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });

    const activeItem = document.querySelector(`[data-category="${category}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }

    // Update the category title
    updateCategoryTitle(category);

    // Instead of reloading products, just show/hide them
    if (category === 'all-products') {
        // Show all product cards
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.display = 'block';
        });
        updateProductCount(document.querySelectorAll('.product-card').length);
    } else {
        // Hide all cards first
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.display = 'none';
        });

        // Show only cards from the selected category
        const categoryCards = document.querySelectorAll(`[data-category="${category}"]`);
        categoryCards.forEach(card => {
            card.style.display = 'block';
        });
        updateProductCount(categoryCards.length);
    }

    console.log(`Showing category: ${category}, visible products: ${document.querySelectorAll('.product-card[style*="block"]').length}`);
}

// Load products for specific category - DEPRECATED, now using show/hide approach
function loadProducts(category) {
    console.log('loadProducts called for:', category, '- using show/hide approach instead');
    // This function is no longer used, but kept for compatibility
}

// Load all products - IMPROVED VERSION
function loadAllProducts() {
    const allGrid = document.getElementById('all-products-grid');
    if (!allGrid) {
        console.error('All products grid not found');
        return;
    }

    console.log('Loading all products...');
    allGrid.innerHTML = '';
    let totalCount = 0;

    Object.keys(productData).forEach(categoryKey => {
        productData[categoryKey].forEach((product, index) => {
            // Create a copy to avoid modifying the original data
            const productCopy = { ...product };
            // Set the category to the key for proper filtering
            productCopy.category = categoryKey;
            console.log(`Creating card for product ${totalCount}:`, productCopy.id, productCopy.title, 'Category:', categoryKey);

            const cardHTML = createProductCard(productCopy);
            allGrid.innerHTML += cardHTML;
            totalCount++;
        });
    });

    console.log('Total products loaded:', totalCount);

    // Update product count
    updateProductCount(totalCount);

    // Set initial category title to "All Products"
    updateCategoryTitle('all-products');

    // Apply translations to newly added content
    if (typeof languageManager !== 'undefined') {
        languageManager.applyTranslations();
    }

    // Ensure all functions are available globally after loading
    attachEventHandlers();

    // Verify that all product cards have proper data attributes
    setTimeout(() => {
        const cards = document.querySelectorAll('.product-card');
        console.log('Verifying product cards...');
        cards.forEach((card, index) => {
            const productId = card.getAttribute('data-product-id');
            const category = card.getAttribute('data-category');
            if (!productId || !category) {
                console.error(`Card ${index} missing attributes:`, { productId, category });
            }
        });
    }, 100);
}

// Update product count
function updateProductCount(count) {
    const countElement = document.getElementById('product-count');
    if (countElement) {
        countElement.textContent = count;
    }
}

// Attach event handlers to ensure functions work after dynamic loading
function attachEventHandlers() {
    // Make sure all functions are available globally
    window.changeMainImage = changeMainImage;
    window.selectVariant = selectVariant;
    window.switchTab = switchTab;
    window.cycleMainImage = cycleMainImage;

    // Debug log to confirm functions are attached
    console.log('Event handlers attached:', {
        changeMainImage: typeof window.changeMainImage,
        selectVariant: typeof window.selectVariant,
        switchTab: typeof window.switchTab,
        cycleMainImage: typeof window.cycleMainImage
    });
}

// Ensure functions are available globally from the start
window.changeMainImage = changeMainImage;
window.selectVariant = selectVariant;
window.switchTab = switchTab;
window.cycleMainImage = cycleMainImage;

// Enhanced initialization for the products page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced product system initializing...');

    // Validate product data first
    if (!validateProductData()) {
        console.error('Product data validation failed - some functionality may not work');
    }

    // Load all products by default
    try {
        loadAllProducts();
        console.log('All products loaded successfully');
    } catch (error) {
        console.error('Error loading products:', error);
    }

    // Add click handlers to category items
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            console.log('Category clicked:', category);
            showCategory(category);
        });
    });
});
