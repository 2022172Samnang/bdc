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


// Enhanced Product Data with sizes and pricing - Using translation keys
const productData = {
    'detergent-powder': [
        {
            id: 'summer-flower',
            title: 'Detergent Powder (Summer Flower)',
            category: 'Detergent Powder',
            rating: 4.8,
            reviews: 124,
            badge: 'Popular',
            mainImage: '../images/products/lix_detergent_summer_flower.webp',
            thumbnails: [
                '../images/products/lix_detergent_summer_flower.webp'
            ],
            variants: [
                { size: '150g', image: '../images/products/lix_detergent_summer_flower.webp' },
                { size: '300g', image: '../images/products/lix_detergent_summer_flower.webp' },
                { size: '500g', image: '../images/products/lix_detergent_summer_flower.webp' },
                { size: '1kg', image: '../images/products/lix_detergent_summer_flower.webp' },
                { size: '3kg', image: '../images/products/lix_detergent_summer_flower.webp' },
                { size: '4kg', image: '../images/products/lix_detergent_summer_flower.webp' },
                { size: '5kg', image: '../images/products/lix_detergent_summer_flower.webp' }
            ],
            benefits: 'Removes stains and odors on clothes, smells like flowers on the fabric, does not cut hands and can be used both machine and hand wash.',
            usage: 'Separate your white and colored clothes. Put 30 grams of detergent in 3-4 liters of water, stir to foam, and soak the clothes for 30 minutes or less. Wash with water 2-3 times and dry in the sun.',
            features: ['Machine & Hand Wash', 'Floral Scent', 'Stain Removal', 'Gentle Formula']
        },
        {
            id: 'lemon',
            title: 'Detergent Powder (Lemon)',
            category: 'Detergent Powder',
            rating: 4.6,
            reviews: 89,
            badge: 'Best Seller',
            mainImage: '../images/products/lix_detergent_lemon_.webp',
            thumbnails: [
                '../images/products/lix_detergent_lemon_.webp'
            ],
            variants: [
                { size: '150g', image: '../images/products/lix_detergent_lemon_.webp' },
                { size: '300g', image: '../images/products/lix_detergent_lemon_.webp' },
                { size: '400g', image: '../images/products/lix_detergent_lemon_.webp' },
                { size: '500g', image: '../images/products/lix_detergent_lemon_.webp' },
                { size: '1kg', image: '../images/products/lix_detergent_lemon_.webp' },
                { size: '3kg', image: '../images/products/lix_detergent_lemon_.webp' },
                { size: '4kg', image: '../images/products/lix_detergent_lemon_.webp' },
                { size: '5kg', image: '../images/products/lix_detergent_lemon_.webp' }
            ],
            benefits: 'Helps make fabrics whiter, has a natural lemon scent, does not cut hands, and can be used in both machine and hand wash.',
            usage: 'Separate your white and colored clothes. Put 30 grams of detergent in 3-4 liters of water, stir to foam, and soak the clothes for 30 minutes or less. Wash with water 2-3 times and dry in the sun.',
            features: ['Natural Lemon', 'Whitening Power', 'Machine & Hand Wash', 'Gentle Formula']
        },
        {
            id: 'pises',
            title: 'Detergent Powder (PISES)',
            category: 'Detergent Powder',
            rating: 4.9,
            reviews: 203,
            badge: 'Premium',
            mainImage: '../images/products/lix_detergent_pises_.webp',
            thumbnails: [
                '../images/products/lix_detergent_pises_.webp'
            ],
            variants: [
                { size: '120g', image: '../images/products/lix_detergent_pises_.webp' },
                { size: '350g', image: '../images/products/lix_detergent_pises_.webp' },
                { size: '800g', image: '../images/products/lix_detergent_pises_.webp' },
                { size: '2.5kg + DW 1.5L', image: '../images/products/lix_detergent_pises_.webp' },
                { size: '2.5kg + DW 1.5L (Special)', image: '../images/products/lix_detergent_pises_.webp' },
                { size: '3.5kg', image: '../images/products/lix_detergent_pises_.webp' },
                { size: '5kg', image: '../images/products/lix_detergent_pises_.webp' }
            ],
            benefits: 'Detergent powder easily dissolves in water, has double the quality of stain removal, makes clothes as bright as new, and can be used in both machine and hand washing.',
            usage: 'Separate your white and colored clothes. Put 30 grams of detergent in 3-4 liters of water, stir to foam, and soak the clothes for 30 minutes or less. Wash with water 2-3 times and dry in the sun.',
            features: ['Double Power', 'Easy Dissolve', 'Brightness Restore', 'Premium Formula']
        },
        {
            id: 'pises-sakura',
            title: 'Detergent Powder (PISES SAKURA)',
            category: 'Detergent Powder',
            rating: 4.8,
            reviews: 156,
            badge: 'Limited Edition',
            mainImage: '../images/products/lix_detergent_pises_sakura.webp',
            thumbnails: [
                '../images/products/lix_detergent_pises_sakura.webp'
            ],
            variants: [
                { size: '120g', image: '../images/products/lix_detergent_pises_sakura.webp' },
                { size: '400g', image: '../images/products/lix_detergent_pises_sakura.webp' },
                { size: '800g', image: '../images/products/lix_detergent_pises_sakura.webp' },
                { size: '4kg', image: '../images/products/lix_detergent_pises_sakura.webp' }
            ],
            benefits: 'Detergent powder easily dissolves in water, has double the quality of stain removal, makes clothes as bright as new, and can be used in both machine and hand washing.',
            usage: 'Separate your white and colored clothes. Put 30 grams of detergent in 3-4 liters of water, stir to foam, and soak the clothes for 30 minutes or less. Wash with water 2-3 times and dry in the sun.',
            features: ['Double Power', 'Easy Dissolve', 'Sakura Scent', 'Premium Formula']
        },
        {
            id: 'super-clean-fresh-purple',
            title: 'Detergent Super Clean & Fresh Purple',
            category: 'Detergent Powder',
            rating: 4.7,
            reviews: 98,
            badge: 'New',
            mainImage: '../images/products/lix_detergent_super_clean_&_fresh_purple.webp',
            thumbnails: [
                '../images/products/lix_detergent_super_clean_&_fresh_purple.webp'
            ],
            variants: [
                { size: '110g', image: '../images/products/lix_detergent_super_clean_&_fresh_purple.webp' },
                { size: '3.7kg', image: '../images/products/lix_detergent_super_clean_&_fresh_purple.webp' }
            ],
            benefits: 'Detergent powder easily dissolves in water, has double the quality of stain removal, makes clothes as bright as new, and can be used in both machine and hand washing.',
            usage: 'Separate your white and colored clothes. Put 30 grams of detergent in 3-4 liters of water, stir to foam, and soak the clothes for 30 minutes or less. Wash with water 2-3 times and dry in the sun.',
            features: ['Double Power', 'Easy Dissolve', 'Fresh Purple', 'Super Clean Formula']
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
            mainImage: '../images/products/lix_dishwashing_15_750ml.webp',
            thumbnails: [
                '../images/products/lix_dishwashing_48_200ml.webp',
                '../images/products/lix_dishwashing_24_380ml.webp',
                '../images/products/lix_dishwashing_15_750ml.webp',
                '../images/products/lix_dishwashing_8_1500ml.webp',
                '../images/products/lix_dishwashing_pump_1500ml.webp',
                '../images/products/lix_dishwashing_4_3800ml.webp'
            ],
            variants: [
                { size: '200ml', image: '../images/products/lix_dishwashing_48_200ml.webp' },
                { size: '380ml', image: '../images/products/lix_dishwashing_24_380ml.webp' },
                { size: '750ml', image: '../images/products/lix_dishwashing_15_750ml.webp' },
                { size: '1.5L', image: '../images/products/lix_dishwashing_8_1500ml.webp' },
                { size: '1.5L (Pump)', image: '../images/products/lix_dishwashing_pump_1500ml.webp' },
                { size: '3.8L', image: '../images/products/lix_dishwashing_4_3800ml.webp' }
            ],
            benefits: 'Made from 100% natural lemon, double-strength oil removal, contains vitamin E to protect hand skin, and has a refreshing lemon scent.',
            usage: 'Mix 2 spoons of dishwashing liquid in 4-5 liters of water. Use a damp sponge to create soapy bubbles. Then wash the dishes thoroughly with water. Then wash the dishes with clean water.',
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
            mainImage: '../images/products/lix_floor_cleaner_antibacterial_12_1000ml.webp',
            thumbnails: [
                '../images/products/lix_floor_cleaner_antibacterial_12_1000ml.webp',
                '../images/products/lix_floor_cleaner_antibacterial_8_2000ml.webp',
                '../images/products/lix_floor_cleaner_antibacterial_3_5000ml.webp'
            ],
            variants: [
                { size: '1L', image: '../images/products/lix_floor_cleaner_antibacterial_12_1000ml.webp' },
                { size: '2L', image: '../images/products/lix_floor_cleaner_antibacterial_8_2000ml.webp' },
                { size: '5L', image: '../images/products/lix_floor_cleaner_antibacterial_3_5000ml.webp' }
            ],
            benefits: 'Cleans stains, dust and grease on the tile quickly and efficiently, makes the tile shiny and pest control up to 99.9%.',
            usage: 'Mix 2 caps of Floor cleaner with 2.5 liters of water for daily cleaning. Mix 2 caps of Floor cleaner with 1 liter of water for cleaning and killing bacteria. Use pure Floor cleaner to clean heavily stained areas.',
            features: ['99.9% Germ Kill', 'All Floor Types', 'Fresh Scent', 'No Rinse Required']
        },
        {
            id: 'lily-rose',
            title: 'Floor Cleaner (Lily & Rose)',
            category: 'Floor Cleaner',
            rating: 4.7,
            reviews: 92,
            badge: 'Aromatherapy',
            mainImage: '../images/products/lix_floor_cleaner_lixly_&_rose_12_1000ml.webp',
            thumbnails: [
                '../images/products/lix_floor_cleaner_lixly_&_rose_12_1000ml.webp',
                '../images/products/lix_floor_cleaner_lixly_&_rose_8_2000ml.webp',
                '../images/products/lix_floor_cleaner_lixly_&_rose_3_5000ml.webp'
            ],
            variants: [
                { size: '1L', image: '../images/products/lix_floor_cleaner_lixly_&_rose_12_1000ml.webp' },
                { size: '2L', image: '../images/products/lix_floor_cleaner_lixly_&_rose_8_2000ml.webp' },
                { size: '5L', image: '../images/products/lix_floor_cleaner_lixly_&_rose_3_5000ml.webp' }
            ],
            benefits: 'Cleans stains, dust and grease on the tile quickly and efficiently, makes the tile shiny and pest control up to 99.9%.',
            usage: 'Mix 2 caps of Floor cleaner with 2.5 liters of water for daily cleaning. Mix 2 caps of Floor cleaner with 1 liter of water for cleaning and killing bacteria. Use pure Floor cleaner to clean heavily stained areas.',
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
            mainImage: '../images/products/lix_detergent_lixquid_4_4000ml.webp',
            thumbnails: [
                '../images/products/lix_detergent_lixquid_4_4000ml.webp',
                '../images/products/lix_detergent_lixquid_perfume_4_4000ml.webp'
            ],
            variants: [
                {
                    size: '4L Regular',
                    image: '../images/products/lix_detergent_lixquid_4_4000ml.webp',
                    variant: 'Regular'
                },
                {
                    size: '4L Perfume',
                    image: '../images/products/lix_detergent_lixquid_perfume_4_4000ml.webp',
                    variant: 'Perfume'
                }
            ],
            benefits: 'Highly effective in penetrating deep into the fabric to clean stains stuck to the fabric and keep the fabric quality as new. Can be used for both hand and machine washing.',
            usage: '<strong>Hand use:</strong> Separate the colors of the clothes, add 2 bottles of detergent liquid to 4-5 liters of water, soak for 30 minutes or less then this and get double the effect, then wash and rinse with clean water 2-3 times and dry in a sunny place.<br><br><strong>Machine use:</strong> Separate the colors of the clothes, add 2 caps of detergent liquid for 5-6 kg of clothes, add 1 cap for slightly stained clothes, and follow the instructions of the machine.',
            features: ['Concentrated Formula', 'Tough Stain Removal', 'Machine Compatible', 'Gentle on Fabrics']
        },
        {
            id: 'detergent-liquid-sakura',
            title: 'Detergent Liquid SAKURA',
            category: 'Detergent Liquid',
            rating: 4.8,
            reviews: 140,
            badge: 'Limited Edition',
            mainImage: '../images/products/lix_detergent_lixquid_fresh_sakura_4_3000ml.webp',
            thumbnails: [
                '../images/products/lix_detergent_lixquid_fresh_sakura_4_3000ml.webp',
                '../images/products/lix_detergent_lixquid_purple_sakura_4_3000ml.webp'
            ],
            variants: [
                {
                    size: '3L Fresh SAKURA',
                    image: '../images/products/lix_detergent_lixquid_fresh_sakura_4_3000ml.webp',
                    variant: 'Fresh SAKURA'
                },
                {
                    size: '3L Purple SAKURA',
                    image: '../images/products/lix_detergent_lixquid_purple_sakura_4_3000ml.webp',
                    variant: 'Purple SAKURA'
                }
            ],
            benefits: 'Double stains clean, make clothes smell of Sakura flowers, fragrant, lasting 24 hours, has a prize for every bottle, is of good quality, and is recognized as an International Organization for Standardization (ISO).',
            usage: '<strong>Hand use:</strong> Separate the colors of the clothes, add 2 bottles of detergent liquid to 4-5 liters of water, soak for 30 minutes or less then this and get double the effect, then wash and rinse with clean water 2-3 times and dry in a sunny place.<br><br><strong>Machine use:</strong> Separate the colors of the clothes, add 2 caps of detergent liquid for 5-6 kg of clothes, add 1 cap for slightly stained clothes, and follow the instructions of the machine.',
            features: ['Sakura Fragrance', 'Double Clean', 'ISO Certified', 'Limited Edition']
        }
    ],
    'glass-cleaner': [
        {
            id: 'glass-cleaner',
            title: 'Glass Cleaner',
            category: 'Glass Cleaner',
            rating: 4.4,
            reviews: 56,
            badge: 'Streak-Free',
            mainImage: '../images/products/lix_glass_cleaner_12_650ml.webp',
            thumbnails: [
                '../images/products/lix_glass_cleaner_12_650ml.webp',
                '../images/products/lix_glass_cleaner_5l.webp'
            ],
            variants: [
                { size: '650ml', image: '../images/products/lix_glass_cleaner_12_650ml.webp' },
                { size: '5L', image: '../images/products/lix_glass_cleaner_5l.webp' }
            ],
            benefits: 'Highly effective in cleaning glass, keeps glass quality as good as new, removes stains and dust well, and has a pleasant scent.',
            usage: 'Rotate the spray head at the end of the machine from "large spray" to "small spray". Spray directly onto the dirty and stained surface, leave for 2 minutes, then use a cloth to wipe away all stains. Rotate the spray head to the "off" position after use.',
            features: ['Streak-Free', 'Pleasant Scent', 'Easy Spray', 'All Glass Surfaces']
        }
    ],
    'hand-washing': [
        {
            id: 'hand-washing',
            title: 'Lix Hand Washing',
            category: 'Hand Washing',
            rating: 4.6,
            reviews: 89,
            badge: 'Gentle Care',
            mainImage: '../images/products/lix_hand_washing_sakura_blossom_12_500ml.webp',
            thumbnails: [
                '../images/products/lix_hand_washing_sakura_blossom_12_500ml.webp',
                '../images/products/lix_hand_washing_bamboo_charcoal_12_500ml.webp'
            ],
            variants: [
                {
                    size: 'Sakura Blossom 500ml',
                    image: '../images/products/lix_hand_washing_sakura_blossom_12_500ml.webp',
                    variant: 'Sakura Blossom'
                },
                {
                    size: 'Bamboo Charcoal 500ml',
                    image: '../images/products/lix_hand_washing_bamboo_charcoal_12_500ml.webp',
                    variant: 'Bamboo Charcoal'
                }
            ],
            benefits: 'Makes the skin soft and fragrant, removes dirt and bacteria up to 99.9%.',
            usage: 'Twist the lid upwards. Press the lid to release the hand soap. Scrub with water for 10-20 seconds. Then rinse with clean water.',
            features: ['Antibacterial 99.9%', 'Gentle Care', 'Soft Skin', 'Two Variants Available']
        }
    ],
    'bleach': [
        {
            id: 'ojavel',
            title: 'Ojavel',
            category: 'Bleach',
            rating: 4.3,
            reviews: 34,
            badge: 'Powerful',
            mainImage: '../images/products/lix_o_javel_24_300ml.webp',
            thumbnails: [
                '../images/products/lix_o_javel_24_300ml.webp'
            ],
            variants: [
                { size: '300ml', image: '../images/products/lix_o_javel_24_300ml.webp' }
            ],
            benefits: 'Highly effective in removing stains, removing bad odors and other bacteria, and does not harm the skin of the hand.',
            usage: 'For use on white clothes and fabrics. Pour 30 ml of Ojavel into 10 liters of water and add soap as usual. Add clothes, soak for 5 minutes, then wash as usual.',
            features: ['Stain Removal', 'Odor Removal', 'Antibacterial', 'Hand Safe']
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
            mainImage: '../images/products/lix_toilet_cleaner_900ml.webp',
            thumbnails: [
                '../images/products/lix_toilet_cleaner_900ml.webp'
            ],
            variants: [
                { size: '900ml', image: '../images/products/lix_toilet_cleaner_900ml.webp' }
            ],
            benefits: 'Keeps your toilet clean, odor-free, can remove up to 99.99% of dirt stuck in the toilet, and effectively removes bad odors and other bacteria.',
            usage: '<strong>For toilet bowls:</strong> Spray LIX Toilet Cleaner directly into and around the rim of the toilet bowl, wait a moment, then use a toilet brush to scrub and clean, then rinse thoroughly with water.<br><br><strong>For bathroom tiles and walls:</strong> Spray LIX Toilet Cleaner directly onto bathroom tiles and walls, scrub to remove stains, then rinse thoroughly with water.',
            features: ['99.99% Dirt Removal', 'Odor Free', 'Antibacterial', 'Deep Clean']
        }
    ]
};

// Simple translation mapping for products
// CORRECTED: The keys now exactly match the text in productData
const productTranslations = {
    kh: {
        // Categories & Titles
        'Detergent Powder (Summer Flower)': 'សាប៊ូម្សៅ (ផ្កា)',
        'Detergent Powder (Lemon)': 'សាប៊ូម្សៅ (ក្រូច)',
        'Detergent Powder (PISES)': 'សាប៊ូម្សៅ (ពិសេស)',
        'Detergent Powder (PISES SAKURA)': 'សាប៊ូម្សៅ (ផ្កាសាគូរ៉ា)',
        'Detergent Super Clean & Fresh Purple': 'សាប៊ូម្សៅ Super Clean & Fresh Purple',
        'Detergent Powder': 'សាប៊ូម្សៅ',
        'Dishwashing Liquid': 'ទឹកសាប៊ូលាងចាន',
        'Dishwashing': 'ទឹកសាប៊ូលាងចាន',
        'Floor Cleaner (Antibacterial)': 'ទឹកជូតការ៉ូ (ប្រឆាំងបាក់តេរី)',
        'Floor Cleaner (Lily & Rose)': 'ទឹកជូតឥដ្ឋការ៉ូ ផ្កាលីលី និងកូលាប',
        'Floor Cleaner': 'ទឹកជូតឥដ្ឋការ៉ូ',
        'Detergent Liquid': 'ទឹកបោកសម្លៀកបំពាក់',
        'Detergent Liquid SAKURA': 'ទឹកបោកសម្លៀកបំពាក់ សាគូរ៉ា',
        'Glass Cleaner': 'ទឹកជូតកញ្ចក់',
        'Lix Hand Washing': 'ទឹកលាងដៃ Lix',
        'Hand Washing': 'ទឹកលាងដៃ Lix',
        'Ojavel': 'ទឹកអូសាវែល',
        'Bleach': 'ទឹកអូសាវែល',
        'Toilet Cleaner': 'ទឹកលាងបង្គន់',
        'All Products': 'ផលិតផលទាំងអស់',

        // --- CORRECTED BENEFITS ---
        'Removes stains and odors on clothes, smells like flowers on the fabric, does not cut hands and can be used both machine and hand wash.': 'លាងជម្រះស្នាមប្រឡាក់ និងក្លិនមិនល្អនៅលើសម្លៀកបំពាក់, មានក្លិនក្រអូបដូចផ្កាជាប់សាច់ក្រណាត់, មិនកាត់ដៃ និងអាចប្រើប្រាស់បានទាំងម៉ាស៊ីន និងបោកដោយដៃ។',
        'Helps make fabrics whiter, has a natural lemon scent, does not cut hands, and can be used in both machine and hand wash.': 'ជួយធ្វើឱ្យសាច់ក្រណាត់ មានភាពសស្អាត, មានក្លិនក្រអូបក្រូចឆ្មាបែបធម្មជាតិ, មិនកាត់ដៃ និងអាចប្រើប្រាស់បានទាំងម៉ាស៊ីន និងបោកដោយដៃ។',
        'Detergent powder easily dissolves in water, has double the quality of stain removal, makes clothes as bright as new, and can be used in both machine and hand washing.': 'សាច់ម្សៅម៉ត់ល្អងាយរលាយនៅក្នុងទឹក, មានគុណភាពទ្វេដងក្នុងការកំចាត់ស្នាមប្រឡាក់, ធ្វើឱ្យសម្លៀកបំពាក់សភ្លឺដូចថ្មី និងអាចប្រើប្រាស់បានទាំងម៉ាស៊ីន និងបោកដោយដៃ។',
        'Made from 100% natural lemon, double-strength oil removal, contains vitamin E to protect hand skin, and has a refreshing lemon scent.': 'ផ្សំពីក្រូចឆ្មាធម្មជាតិ 100%, ជម្រះជាតិខ្លាញ់ខ្លាំងទ្វេរដង, មានវីតាមីន E ការពារស្បែកដៃ និងក្លិនក្រូចឆ្មាប្រហើរ។',
        'Cleans stains, dust and grease on the tile quickly and efficiently, makes the tile shiny and pest control up to 99.9%.': 'សម្អាតស្នាមប្រឡាក់ ធូលីដី និងខ្លាញ់នៅលើឥដ្ឋការ៉ូបានយ៉ាងឆាប់រហ័ស និងមានប្រសិទ្ធភាពខ្ពស់, ធ្វើឱ្យឥដ្ឋការ៉ូភ្លឺរលោង និងកំចាត់សត្វល្អិតបានរហូតដល់ 99.9%។',
        'Highly effective in penetrating deep into the fabric to clean stains stuck to the fabric and keep the fabric quality as new. Can be used for both hand and machine washing.': 'មានប្រសិទ្ធភាពខ្ពស់ក្នុងការជ្រាបចូលសាច់ក្រណាត់យ៉ាងជ្រៅដើម្បីសំអាតស្នាមប្រឡាក់ដែលជាប់នឹងសាច់ក្រណាត់ និងរក្សាគុណភាពសាច់ក្រណាត់អោយនៅថ្មីដដែល អាចប្រើប្រាស់បានទាំងការបោកដោយដៃ និងបោកដោយម៉ាស៊ីន។',
        'Double stains clean, make clothes smell of Sakura flowers, fragrant, lasting 24 hours, has a prize for every bottle, is of good quality, and is recognized as an International Organization for Standardization (ISO).': 'សម្អាតស្នាមប្រលាក់បានជ្រះទ្វេដង ធ្វើឱ្យសម្លៀកបំពាក់មានក្លិនក្រអូបផ្កាសាគូរ៉ាក្រអូបជាប់បាន24ម៉ោង, មានរង្វាន់គ្រប់ដប, មានគុណភាពល្អ និងទទួលបានការទទួលស្គាល់ជាផលិតផលដែលមានស្ដង់ដារអន្តរជាតិ (ISO)។',
        'Highly effective in cleaning glass, keeps glass quality as good as new, removes stains and dust well, and has a pleasant scent.': 'មានសមត្ថភាពខ្ពស់ក្នុងការសំអាតកញ្ចក់, រក្សាគុណភាពកញ្ចក់ឱ្យនូវដូចថ្មី, កំចាត់ស្នាមប្រឡាក់ ធូលីដីបានល្អ និងមានក្លិនក្រអូប។',
        'Makes the skin soft and fragrant, removes dirt and bacteria up to 99.9%.': 'ធ្វើអោយស្បែកដៃទន់ល្មើយ និង មានក្លិនក្រអូបប្រហើរ, កំចាត់ភាពកខ្វក់ និងបាក់តេរីបានរហូតដល់ 99.9%។',
        'Highly effective in removing stains, removing bad odors and other bacteria, and does not harm the skin of the hand.': 'មានសមត្ថភាពខ្ពស់ក្នុងការកំចាត់ស្នាមប្រលាក់, កំចាត់ក្លិនមិនល្អ និងបាក់តេរីផ្សេងៗ និងមិនមានប៉ះពាល់ដល់ស្បែកដៃ។',
        'Keeps your toilet clean, odor-free, can remove up to 99.99% of dirt stuck in the toilet, and effectively removes bad odors and other bacteria.': 'ធ្វើអោយបង្គន់របស់អ្នកស្អាតជានិច្ច, មិនមានក្លិនឆួល, អាចជំរះភាពកខ្វក់ដែលជាប់និងបង្គន់រហូតដល់ទៅ 99.99% និងកំចាត់ក្លិនមិនល្អ និងបាក់តេរីផ្សេងៗបានយ៉ាងល្អ។',

        // --- CORRECTED USAGE ---
        'Separate your white and colored clothes. Put 30 grams of detergent in 3-4 liters of water, stir to foam, and soak the clothes for 30 minutes or less. Wash with water 2-3 times and dry in the sun.': 'បែងចែកសម្លៀកបំពាក់ពណ៌ស និង ពណ៌ផ្សេងដោយឡែកពីគ្នា។ ដាក់ម្សៅសាប៊ូ 30ក្រាម ក្នុងទឹក 3-4 លីត្រកូរឱ្យពពុះ ដាក់ត្រាំសម្លៀកបំពាក់ 30 នាទីឬតិចជាងនេះ។ លាងទឹក 2-3ដង និងដាក់ហាលក្រោយពន្លឺព្រះអាទិត្យ។',
        'Mix 2 spoons of dishwashing liquid in 4-5 liters of water. Use a damp sponge to create soapy bubbles. Then wash the dishes thoroughly with water. Then wash the dishes with clean water.': 'លាយទឹកលាងចាន LIX ២ស្លាបព្រាបាយក្នុងទឹក ៤ ទៅ ៥លីត្រ។ ប្រើប្រាស់អេប៉ុងសើមដើម្បីបង្កើតពពុះសាប៊ូ។ បន្ទាប់មកលាងសម្អាតជាមួយចានជាមួយទឹកឱ្យបានស្អាតល្អ។',
        'Mix 2 caps of Floor cleaner with 2.5 liters of water for daily cleaning. Mix 2 caps of Floor cleaner with 1 liter of water for cleaning and killing bacteria. Use pure Floor cleaner to clean heavily stained areas.': 'ដាក់ទឹកជូតការ៉ូ 2 គម្រប ជាមួយទឹក 2.5 លីត្រ សម្រាប់ការសម្អាតជាប្រចាំថ្ងៃ។ ដាក់ទឹកជូតការ៉ូ 2 គម្រប ជាមួយទឹក 1 លីត្រ សម្រាប់ការសម្អាត និងកំចាត់បាក់តេរី។ ប្រើទឹកជូតការ៉ូសុទ្ធដើម្បីសម្អាតលើកន្លែងដែលមានស្នាមប្រឡាក់ខ្លាំង។',
        '<strong>Hand use:</strong> Separate the colors of the clothes, add 2 bottles of detergent liquid to 4-5 liters of water, soak for 30 minutes or less then this and get double the effect, then wash and rinse with clean water 2-3 times and dry in a sunny place.<br><br><strong>Machine use:</strong> Separate the colors of the clothes, add 2 caps of detergent liquid for 5-6 kg of clothes, add 1 cap for slightly stained clothes, and follow the instructions of the machine.': '<strong>ការប្រើដោយដៃ៖</strong> បែងចែកពណ៍សំលៀកបំពាក់អោយដាច់ដោយឡែកពីគ្នា, ដាក់ទឹកសាប៊ូ 2 គំរបដបទៅក្នុងទឹក 4-5 លីត្រ ត្រាំសម្លៀកពាក់ទុក 30នាទី ឬតិចជានេះ ដើម្បីងាយស្រួលក្នុងការសម្អាត រួចធ្វើការបោកគក់ និងជម្រះទឹក 2-3ដង បន្ទាប់មកដាក់ហាលនៅកន្លែងដែលមានពន្លឺព្រះអាទិត្យ។<br><br><strong>ការប្រើដោយម៉ាស៊ីន៖</strong> បែងចែកពណ៍សំលៀកបំពាក់អោយដាច់ដោយឡែកពីគ្នា, ដាក់ទឹកសាប៊ូ 2 គំរបដបសំរាប់សំលៀកបំពាក់ 5-6 Kg បន្ថែម 1 គម្របដបទៀតក្នុងករណីសម្លៀកបំពាក់ប្រឡាក់ខ្លាំង និងធ្វើទៅតាមការណែនាំពីរបៀបប្រើរបស់ម៉ាស៊ីន។',
        'Rotate the spray head at the end of the machine from "large spray" to "small spray". Spray directly onto the dirty and stained surface, leave for 2 minutes, then use a cloth to wipe away all stains. Rotate the spray head to the "off" position after use.': 'បង្វិលក្បាលបាញ់នៅទីតាំងចុងម៉ាស៊ីនពី "បាញ់ធំ" ទៅ "បាញ់តូច"។ បាញ់ដោយផ្ទាល់ទៅលើផ្ទៃកខ្វក់ និងមានស្នាមប្រឡាក់ ទុកចោលរយៈពេល ២នាទី រួចប្រើក្រណាត់ដើម្បីជូតស្នាមប្រឡាក់ទាំងអស់ឱ្យបានស្អាត។ បង្វិលក្បាលបាញ់ទៅទីតាំង "បិទ" បន្ទាប់ពីការប្រើប្រាស់រួចរាល់។',
        'Twist the lid upwards. Press the lid to release the hand soap. Scrub with water for 10-20 seconds. Then rinse with clean water.': 'មួលគំរបអោយឡើងទៅលើ។ ចុចគំរបដើម្បីអោយចេញទឹកសាប៊ូលាងដៃ។ ដុសលាងជាមួយទឹក 10-20 វិនាទី។ រួចលាងសំអាតជាមួយទឹកស្អាត។',
        'For use on white clothes and fabrics. Pour 30 ml of Ojavel into 10 liters of water and add soap as usual. Add clothes, soak for 5 minutes, then wash as usual.': 'ប្រើសម្រាប់សំលៀកបំពាក់ និងក្រណាត់ពណ៌ស។ ចាក់ទឹកអូសាវែលចំនួន ៣០ មីលីលីត្រ ទៅក្នុងទឹក ១០លីត្រហើយដាក់សាប៊ូតាមធម្មតា។ ដាក់សំលៀកបំពាក់ចូលរួចត្រាំអោយបានចំនួន៥នាទីរួចធ្វើការដុសសម្អាតធម្មតា។',
        '<strong>For toilet bowls:</strong> Spray LIX Toilet Cleaner directly into and around the rim of the toilet bowl, wait a moment, then use a toilet brush to scrub and clean, then rinse thoroughly with water.<br><br><strong>For bathroom tiles and walls:</strong> Spray LIX Toilet Cleaner directly onto bathroom tiles and walls, scrub to remove stains, then rinse thoroughly with water.': '<strong>សម្រាប់ផើងបង្គន់អនាម័យ៖</strong> បាញ់ទឹកសម្អាតបង្គន់ LIX ដោយផ្ទាល់ទៅខាងក្នុងនិងជុំវិញបិរវេណផើងបង្គន់ រងចាំមួយសន្ទុះ រួចយកច្រាសសម្រាប់សម្អាតបង្គន់ ទៅដុសខាត់សម្អាត និងលាងជម្រះជាមួយទឹកតាមក្រោយឱ្យបានស្អាតល្អ។<br><br><strong>សម្រាប់ការ៉ូ និង ជញ្ជាំងបន្ទប់ទឹក៖</strong> បាញ់ទឹកសម្អាតបង្គន់ LIX ដោយផ្ទាល់លើការ៉ូ និង ជញ្ជាំងបន្ទប់ទឹក រួចដុសខាត់សម្អាតស្នាមប្រឡាក់ បន្ទាប់មកលាងជម្រះជាមួយទឹកតាមក្រោយឱ្យបានស្អាតល្អ។'
    }
};

// Function to translate product content
function translateProductContent() {
    console.log('translateProductContent called');

    // Check if we're in Khmer language mode
    const manager = window.languageManager || (typeof languageManager !== 'undefined' ? languageManager : null);

    if (!manager) {
        console.log('No language manager found');
        return;
    }

    console.log('Current language:', manager.currentLanguage);

    if (manager.currentLanguage === 'kh') {
        console.log('Translating to Khmer...');
        const translations = productTranslations.kh;

        // Translate product titles
        const titleElements = document.querySelectorAll('.product-title');
        console.log('Found', titleElements.length, 'product titles');
        titleElements.forEach(titleElement => {
            const originalText = titleElement.textContent.trim();
            if (translations[originalText]) {
                // Store original text if not already stored
                if (!titleElement.dataset.originalText) {
                    titleElement.dataset.originalText = originalText;
                }
                titleElement.textContent = translations[originalText];
                console.log('Translated title:', originalText, '->', translations[originalText]);
            } else {
                console.log('No translation found for title:', originalText);
            }
        });

        // Translate product categories
        const categoryElements = document.querySelectorAll('.product-category');
        console.log('Found', categoryElements.length, 'product categories');
        categoryElements.forEach(categoryElement => {
            const originalText = categoryElement.textContent.trim();
            if (translations[originalText]) {
                // Store original text if not already stored
                if (!categoryElement.dataset.originalText) {
                    categoryElement.dataset.originalText = originalText;
                }
                categoryElement.textContent = translations[originalText];
                console.log('Translated category:', originalText, '->', translations[originalText]);
            } else {
                console.log('No translation found for category:', originalText);
            }
        });

        // Translate product benefits
        const contentElements = document.querySelectorAll('.tab-content p');
        console.log('Found', contentElements.length, 'content elements');
        contentElements.forEach(contentElement => {
            const originalText = contentElement.innerHTML.trim();
            if (translations[originalText]) {
                // Store original text if not already stored
                if (!contentElement.dataset.originalText) {
                    contentElement.dataset.originalText = originalText;
                }
                contentElement.innerHTML = translations[originalText];
                console.log('Translated content:', originalText.substring(0, 50) + '...', '->', translations[originalText].substring(0, 50) + '...');
            }
        });

        // Translate section titles in product cards
        const sectionTitleElements = document.querySelectorAll('.section-title');
        console.log('Found', sectionTitleElements.length, 'section titles');
        sectionTitleElements.forEach(titleElement => {
            const originalText = titleElement.textContent.trim();
            if (translations[originalText]) {
                // Store original text if not already stored
                if (!titleElement.dataset.originalText) {
                    titleElement.dataset.originalText = originalText;
                }
                titleElement.textContent = translations[originalText];
                console.log('Translated section title:', originalText, '->', translations[originalText]);
            }
        });

    } else if (manager.currentLanguage === 'en') {
        console.log('Switching back to English...');
        // Reset to English by restoring original text
        const elementsWithOriginalText = document.querySelectorAll('[data-original-text]');
        console.log('Found', elementsWithOriginalText.length, 'elements with original text');
        elementsWithOriginalText.forEach(element => {
            if (element.dataset.originalText) {
                // Use innerHTML for elements that might contain HTML
                if (element.classList.contains('tab-content') || element.closest('.tab-content')) {
                    element.innerHTML = element.dataset.originalText;
                } else {
                    element.textContent = element.dataset.originalText;
                }
                console.log('Restored English text:', element.dataset.originalText);
            }
        });
    }

    console.log('translateProductContent completed');
}

// Make the function globally accessible
window.translateProductContent = translateProductContent;

// Function to refresh product translations when language changes
function refreshProductTranslations() {
    console.log('Refreshing product translations...');

    // Get current language
    const manager = window.languageManager || (typeof languageManager !== 'undefined' ? languageManager : null);
    if (manager) {
        console.log('Current language:', manager.currentLanguage);
    }

    // Wait a bit for the DOM to update, then translate
    setTimeout(() => {
        translateProductContent();

        // Also update category titles if needed
        if (manager) {
            manager.applyTranslations();
        }

        console.log('Product translations refresh completed');
    }, 150);
}

// Make the function globally accessible
window.refreshProductTranslations = refreshProductTranslations;

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

    // Use the category key for data-category attribute (for filtering),
    // but keep the original category for display
    const categoryKey = product.categoryKey || product.category;
    const displayCategory = product.originalCategory || product.category;



    return `
        <div class="product-card" data-category="${categoryKey}" data-product-id="${product.id}">
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
                        <div class="product-category">${displayCategory}</div>
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
                <!-- Variant Selector -->
                <div class="variant-section">
                    <h4><i class="fas fa-boxes"></i> Size Options</h4>
                    <div class="variant-options">
                        ${product.variants.map((variant, index) => `
                            <div class="variant-option ${index === 0 ? 'active' : ''}"
                                 onclick="selectVariant('${product.id}', ${index}, this)">
                                <div class="variant-size">${variant.size}</div>
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
    const mainImg = document.getElementById(`main-img-${productId}`);

    console.log('Selected variant:', variant);

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

    // Define category display names and their translation keys
    const categoryInfo = {
        'all-products': { title: 'All Products', translateKey: 'products.categories.all' },
        'detergent-powder': { title: 'Detergent Powder', translateKey: 'categories.detergent_powder' },
        'dishwashing': { title: 'Dishwashing Liquid', translateKey: 'categories.dishwashing' },
        'floor-cleaner': { title: 'Floor Cleaner', translateKey: 'categories.floor_cleaner' },
        'detergent-liquid': { title: 'Detergent Liquid', translateKey: 'categories.detergent_liquid' },
        'glass-cleaner': { title: 'Glass Cleaner', translateKey: 'categories.glass_cleaner' },
        'hand-washing': { title: 'Hand Washing', translateKey: 'categories.hand_washing' },
        'bleach': { title: 'Bleach', translateKey: 'categories.bleach' },
        'toilet-cleaner': { title: 'Toilet Cleaner', translateKey: 'categories.toilet_cleaner' }
    };

    const info = categoryInfo[category] || categoryInfo['all-products'];

    // Set the title and translation attribute
    titleElement.textContent = info.title;
    titleElement.setAttribute('data-translate', info.translateKey);

    // Apply translation if language manager is available
    const manager = window.languageManager || (typeof languageManager !== 'undefined' ? languageManager : null);
    if (manager && manager.isInitialized) {
        manager.applyTranslations();
    }

    console.log('Category title updated to:', info.title, 'with translation key:', info.translateKey);
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
let isLoadingProducts = false;
function loadAllProducts() {
    if (isLoadingProducts) {
        console.log('Products already loading, skipping...');
        return;
    }

    const allGrid = document.getElementById('all-products-grid');
    if (!allGrid) {
        console.error('All products grid not found');
        return;
    }

    isLoadingProducts = true;
    console.log('Loading all products...');
    allGrid.innerHTML = '';
    let totalCount = 0;

    Object.keys(productData).forEach(categoryKey => {
        productData[categoryKey].forEach((product, index) => {
            // Create a copy to avoid modifying the original data
            const productCopy = { ...product };
            // Set the category key for proper filtering and preserve original category for display
            productCopy.categoryKey = categoryKey;
            productCopy.originalCategory = product.category;
            productCopy.category = categoryKey; // This will be used as fallback


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
    const manager = window.languageManager || (typeof languageManager !== 'undefined' ? languageManager : null);
    if (manager && manager.isInitialized) {
        manager.applyTranslations();

        // Also translate product content if in Khmer mode
        setTimeout(() => {
            translateProductContent();
        }, 100);
    }

    // Ensure all functions are available globally after loading
    attachEventHandlers();

    // Verify that all product cards have proper data attributes
    setTimeout(() => {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            const productId = card.getAttribute('data-product-id');
            const category = card.getAttribute('data-category');
            if (!productId || !category) {
                console.error(`Card ${index} missing attributes:`, { productId, category });
            }
        });

        isLoadingProducts = false;
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

    // Translate products if in Khmer mode after initial load
    setTimeout(() => {
        translateProductContent();

        // Ensure language button is properly initialized
        const manager = window.languageManager || (typeof languageManager !== 'undefined' ? languageManager : null);
        if (manager) {
            manager.updateLanguageButton();
            manager.updateLanguageIcon();
        }
    }, 1000);
});
