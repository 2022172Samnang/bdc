// Translation System
const translations = {
    en: {
        // Brand
        brand: "BDC",
        
        // Navigation
        nav: {
            home: "Home",
            products: "Products",
            about: "About Us",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            title: "Premium Cleaning Solutions for Every Need",
            subtitle: "Discover our complete range of professional-grade cleaning products designed to keep your home and business spotless",
            shop_now: "Shop Now",
            learn_more: "Learn More",
            products: "Products",
            categories: "Categories",
            effective: "Effective",
            years: "Years"
        },
        
        // Categories
        categories: {
            title: "Product Categories",
            subtitle: "Choose from our wide range of cleaning solutions",
            detergent_powder: "Detergent Powder",
            detergent_powder_desc: "Powerful cleaning for all fabrics",
            dishwashing: "Dishwashing Liquid",
            dishwashing_desc: "Gentle yet effective dish cleaning",
            floor_cleaner: "Floor Cleaner",
            floor_cleaner_desc: "Antibacterial floor cleaning solutions",
            detergent_liquid: "Detergent Liquid",
            detergent_liquid_desc: "Premium liquid detergents",
            glass_cleaner: "Glass Cleaner",
            glass_cleaner_desc: "Crystal clear glass cleaning",
            hand_washing: "Hand Washing",
            hand_washing_desc: "Gentle hand care products",
            bleach: "Bleach",
            bleach_desc: "Powerful stain removal",
            toilet_cleaner: "Toilet Cleaner",
            toilet_cleaner_desc: "Complete bathroom cleaning"
        },
        
        // Features
        features: {
            title: "Why Choose BDC?",
            quality: {
                title: "Premium Quality",
                desc: "All our products are made with the highest quality ingredients and undergo rigorous testing."
            },
            eco: {
                title: "Eco-Friendly",
                desc: "Environmentally conscious formulations that are safe for your family and the planet."
            },
            trusted: {
                title: "Trusted Brand",
                desc: "Over 20 years of experience serving millions of satisfied customers worldwide."
            },
            delivery: {
                title: "Fast Delivery",
                desc: "Quick and reliable delivery service to get your products when you need them."
            }
        },
        
        // CTA
        cta: {
            title: "Ready to Experience Premium Cleaning?",
            subtitle: "Browse our complete product range and find the perfect cleaning solution for your needs.",
            button: "View All Products"
        },
        
        // Products Page
        products: {
            hero: {
                title: "Our Premium Products",
                subtitle: "Discover our complete range of professional cleaning solutions"
            },
            categories: {
                title: "Categories",
                all: "All Products"
            },
            results: "products found",
            benefits: "Benefits",
            how_to_use: "How to Use",
            pricing: "Pricing",
            caution_storage: "Caution & Storage",
            caution: "Caution:",
            caution_text: "Avoid contact with eyes; keep out of reach of children.",
            storage: "Storage:",
            storage_text: "Close lid after use; store in a cool, dry place.",
            view: {
                list: "List View"
            },
            
            // Specific Products
            detergent_powder: {
                summer_flower: {
                    title: "Detergent Powder (Summer Flower)",
                    benefits: "Removes stains and odors on clothes, leaves a floral scent, gentle on hands; suitable for both machine and hand wash."
                },
                lemon: {
                    title: "Detergent Powder (Lemon)",
                    benefits: "Whitens fabrics, natural lemon scent, gentle on hands; suitable for both machine and hand wash."
                },
                pises: {
                    title: "Detergent Powder (PISES)",
                    benefits: "Dissolves easily, double stain-removal power, restores brightness; suitable for both machine and hand wash."
                },
                pises_sakura: {
                    title: "Detergent Powder (PISES Sakura)",
                    benefits: "Dissolves easily, double stain-removal power, restores brightness; suitable for both machine and hand wash."
                },
                super_clean: {
                    title: "Detergent Super Clean & Fresh Purple",
                    benefits: "Dissolves easily, double stain-removal power, restores brightness; suitable for both machine and hand wash."
                },
                usage: "Separate white and colored clothes. Dissolve 30 g of powder in 3–4 L of water; stir to form foam and soak garments for up to 30 min. Rinse 2–3 times with clean water and sun-dry."
            },
            
            dishwashing: {
                title: "Dishwashing Liquid",
                benefits: "Made from 100% natural lemon, double-strength oil removal, contains vitamin E to protect hand skin, and has a refreshing lemon scent.",
                usage: "Mix 2 spoons of dishwashing liquid in 4-5 liters of water. Use a damp sponge to create soapy bubbles. Then wash the dishes thoroughly with water. Then wash the dishes with clean water."
            },

            floor_cleaner: {
                antibacterial: {
                    title: "Floor Cleaner (Antibacterial)",
                    benefits: "Cleans stains, dust and grease on the tile quickly and efficiently, makes the tile shiny and pest control up to 99.9%.",
                    usage: "Mix 2 caps of Floor cleaner with 2.5 liters of water for daily cleaning. Mix 2 caps of Floor cleaner with 1 liter of water for cleaning and killing bacteria. Use pure Floor cleaner to clean heavily stained areas."
                },
                lily_rose: {
                    title: "Floor Cleaner (Lily & Rose)",
                    benefits: "Cleans stains, dust and grease on the tile quickly and efficiently, makes the tile shiny and pest control up to 99.9%.",
                    usage: "Mix 2 caps of Floor cleaner with 2.5 liters of water for daily cleaning. Mix 2 caps of Floor cleaner with 1 liter of water for cleaning and killing bacteria. Use pure Floor cleaner to clean heavily stained areas."
                }
            },

            detergent_liquid: {
                regular: {
                    title: "Detergent Liquid",
                    benefits: "Highly effective in penetrating deep into the fabric to clean stains stuck to the fabric and keep the fabric quality as new. Can be used for both hand and machine washing.",
                    usage: "Hand use: Separate the colors of the clothes, add 2 bottles of detergent liquid to 4-5 liters of water, soak for 30 minutes or less then this and get double the effect, then wash and rinse with clean water 2-3 times and dry in a sunny place. Machine use: Separate the colors of the clothes, add 2 caps of detergent liquid for 5-6 kg of clothes, add 1 cap for slightly stained clothes, and follow the instructions of the machine."
                },
                fresh_sakura: {
                    title: "Detergent Liquid Fresh SAKURA",
                    benefits: "Double stains clean, make clothes smell of Sakura flowers, fragrant, lasting 24 hours, has a prize for every bottle, is of good quality, and is recognized as an International Organization for Standardization (ISO).",
                    usage: "Hand use: Separate the colors of the clothes, add 2 bottles of detergent liquid to 4-5 liters of water, soak for 30 minutes or less then this and get double the effect, then wash and rinse with clean water 2-3 times and dry in a sunny place. Machine use: Separate the colors of the clothes, add 2 caps of detergent liquid for 5-6 kg of clothes, add 1 cap for slightly stained clothes, and follow the instructions of the machine."
                },
                purple_sakura: {
                    title: "Detergent Liquid Purple SAKURA",
                    benefits: "Double stains clean, make clothes smell of Sakura flowers, fragrant, lasting 24 hours, has a prize for every bottle, is of good quality, and is recognized as an International Organization for Standardization (ISO).",
                    usage: "Hand use: Separate the colors of the clothes, add 2 bottles of detergent liquid to 4-5 liters of water, soak for 30 minutes or less then this and get double the effect, then wash and rinse with clean water 2-3 times and dry in a sunny place. Machine use: Separate the colors of the clothes, add 2 caps of detergent liquid for 5-6 kg of clothes, add 1 cap for slightly stained clothes, and follow the instructions of the machine."
                }
            },

            glass_cleaner: {
                title: "Glass Cleaner",
                benefits: "Highly effective in cleaning glass, keeps glass quality as good as new, removes stains and dust well, and has a pleasant scent.",
                usage: "Rotate the spray head at the end of the machine from \"large spray\" to \"small spray\". Spray directly onto the dirty and stained surface, leave for 2 minutes, then use a cloth to wipe away all stains. Rotate the spray head to the \"off\" position after use."
            },

            hand_washing: {
                sakura_blossom: {
                    title: "Lix Hand Washing Sakura Blossom",
                    benefits: "Makes the skin soft and fragrant, removes dirt and bacteria up to 99.9%.",
                    usage: "Twist the lid upwards. Press the lid to release the hand soap. Scrub with water for 10-20 seconds. Then rinse with clean water."
                },
                bamboo_charcoal: {
                    title: "Lix Hand Washing Bamboo Charcoal",
                    benefits: "Makes the skin soft and fragrant, removes dirt and bacteria up to 99.9%.",
                    usage: "Twist the lid upwards. Press the lid to release the hand soap. Scrub with water for 10-20 seconds. Then rinse with clean water."
                }
            },

            bleach: {
                title: "Ojavel",
                benefits: "Highly effective in removing stains, removing bad odors and other bacteria, and does not harm the skin of the hand.",
                usage: "For use on white clothes and fabrics. Pour 30 ml of Ojavel into 10 liters of water and add soap as usual. Add clothes, soak for 5 minutes, then wash as usual."
            },

            toilet_cleaner: {
                title: "Toilet Cleaner",
                benefits: "Keeps your toilet clean, odor-free, can remove up to 99.99% of dirt stuck in the toilet, and effectively removes bad odors and other bacteria.",
                usage: "For toilet bowls: Spray LIX Toilet Cleaner directly into and around the rim of the toilet bowl, wait a moment, then use a toilet brush to scrub and clean, then rinse thoroughly with water. For bathroom tiles and walls: Spray LIX Toilet Cleaner directly onto bathroom tiles and walls, scrub to remove stains, then rinse thoroughly with water."
            }
        },
        
        // About Page
        about: {
            hero: {
                title: "About BDC best quality in cambodia",
                subtitle: "Leading the way in premium cleaning solutions for over 20 years"
            },
            mission: {
                title: "Our Mission",
                content: "To provide the highest quality cleaning products that make life easier while protecting the environment and ensuring the safety of families worldwide."
            },
            vision: {
                title: "Our Vision",
                content: "To be the global leader in sustainable cleaning solutions, setting the standard for quality, innovation, and environmental responsibility."
            },
            values: {
                title: "Our Values",
                quality: "Quality Excellence",
                quality_desc: "We never compromise on the quality of our products or services.",
                innovation: "Innovation",
                innovation_desc: "Continuously developing new and better cleaning solutions.",
                sustainability: "Sustainability",
                sustainability_desc: "Committed to protecting our planet for future generations.",
                trust: "Trust",
                trust_desc: "Building lasting relationships through reliability and transparency."
            },
            stats: {
                title: "BDC by the Numbers",
                subtitle: "Our achievements and impact worldwide",
                years_excellence: "Years of Excellence",
                satisfied_customers: "Satisfied Customers",
                premium_products: "Premium Products",
                effectiveness_rate: "Effectiveness Rate",
                eco_friendly: "Eco-Friendly"
            }
        },
        
        // Contact Page
        contact: {
            hero: {
                title: "Contact Us",
                subtitle: "Get in touch with our team for any questions or support"
            },
            form: {
                title: "Send us a Message",
                description: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
                name: "Full Name",
                email: "Email Address",
                subject: "Subject",
                message: "Message",
                send: "Send Message",
                placeholders: {
                    name: "Enter your full name",
                    email: "Enter your email address",
                    phone: "Enter your phone number (optional)",
                    message: "Tell us how we can help you..."
                },
                subject_options: {
                    default: "Select a subject",
                    general: "General Inquiry",
                    product: "Product Information",
                    support: "Customer Support",
                    partnership: "Partnership Opportunity",
                    feedback: "Feedback",
                    other: "Other"
                }
            },
            info: {
                title: "Contact Information",
                address: "Our Address",
                phone: "Phone Number",
                email: "Email Address",
                fax: "Fax Number",
                hours: "Business Hours"
            },
            office: {
                main: "Main Office:",
                alternative: "Alternative:",
                head_office: "Phnom Penh Head Office",
                company_name: "BDC - Best Quality in Cambodia"
            },
            map: {
                title: "Find Us",
                subtitle: "Visit our headquarters in Phnom Penh",
                open_maps: "Open in Google Maps"
            }
        },
        
        // Footer
        footer: {
            about: {
                title: "About BDC",
                desc: "Leading provider of premium cleaning solutions for homes and businesses worldwide. Trusted by millions for over 20 years."
            },
            quick_links: {
                title: "Quick Links"
            },
            categories: {
                title: "Product Categories"
            },
            contact: {
                title: "Contact Info",
                phone: "081 590 777 / 081 789 777",
                email: "sales.coor@bdccam.com",
                address: "S.I Building, #93, Preah Sihanouk Blvd, Phum 7, Sangkat Chaktomok, Khan Daun Penh, Phnom Penh, Cambodia."
            },
            copyright: "© 2025 BDC best quality in cambodia. All rights reserved. Professional cleaning solutions for every need."
        }
    },
    
    kh: {
        // Brand
        brand: "BDC",
        
        // Navigation
        nav: {
            home: "ទំព័រដើម",
            products: "ផលិតផល",
            about: "អំពីយើង",
            contact: "ទំនាក់ទំនង"
        },
        
        // Hero Section
        hero: {
            title: "ដំណោះស្រាយសម្អាតកម្រិតខ្ពស់សម្រាប់គ្រប់ការត្រូវការ",
            subtitle: "ស្វែងយល់ពីផលិតផលសម្អាតកម្រិតវិជ្ជាជីវៈរបស់យើងដែលត្រូវបានរចនាឡើងដើម្បីរក្សាផ្ទះ និងអាជីវកម្មរបស់អ្នកឱ្យស្អាត",
            shop_now: "ទិញឥឡូវនេះ",
            learn_more: "ស្វែងយល់បន្ថែម",
            products: "ផលិតផល",
            categories: "ប្រភេទ",
            effective: "មានប្រសិទ្ធភាព",
            years: "ឆ្នាំ"
        },
        
        // Categories
        categories: {
            title: "ប្រភេទផលិតផល",
            subtitle: "ជ្រើសរើសពីដំណោះស្រាយសម្អាតដ៏ធំទូលាយរបស់យើង",
            detergent_powder: "សាប៊ូម្សៅ",
            detergent_powder_desc: "សម្អាតដ៏មានអានុភាពសម្រាប់គ្រប់ប្រភេទក្រណាត់",
            dishwashing: "ទឹកសាប៊ូលាងចាន",
            dishwashing_desc: "សម្អាតចានដ៏ទន់ភ្លន់ប៉ុន្តែមានប្រសិទ្ធភាព",
            floor_cleaner: "ទឹកជូតឥដ្ឋការ៉ូ",
            floor_cleaner_desc: "ដំណោះស្រាយសម្អាតឥដ្ឋការ៉ូប្រឆាំងបាក់តេរី",
            detergent_liquid: "ទឹកបោកសម្លៀកបំពាក់",
            detergent_liquid_desc: "ទឹកសម្អាតមានប្រសិទ្ធិភាពខ្ពស់",
            glass_cleaner: "ទឹកជូតកញ្ចក់",
            glass_cleaner_desc: "សម្អាតកញ្ចក់ឱ្យថ្លា",
            hand_washing: "ទឹកលាងដៃ Lix",
            hand_washing_desc: "ផលិតផលថែរក្សាដៃដ៏ទន់ភ្លន់",
            bleach: "ទឹកអូសាវែល",
            bleach_desc: "កម្ចាត់ស្នាមប្រឡាក់ដ៏មានអានុភាព",
            toilet_cleaner: "ទឹកលាងបង្គន់",
            toilet_cleaner_desc: "សម្អាតបន្ទប់ទឹកពេញលេញ"
        },
        
        // Features
        features: {
            title: "ហេតុអ្វីបានជាជ្រើសរើស BDC?",
            quality: {
                title: "គុណភាពកម្រិតខ្ពស់",
                desc: "ផលិតផលទាំងអស់របស់យើងត្រូវបានផលិតដោយគ្រឿងផ្សំគុណភាពខ្ពស់បំផុត និងឆ្លងកាត់ការសាកល្បងយ៉ាងម៉ត់ចត់។"
            },
            eco: {
                title: "ថែរក្សាបរិស្ថាន",
                desc: "រូបមន្តដែលគិតគូរពីបរិស្ថានដែលមានសុវត្ថិភាពសម្រាប់គ្រួសារ និងភពផែនដីរបស់អ្នក។"
            },
            trusted: {
                title: "ម៉ាកដែលទុកចិត្តបាន",
                desc: "ជាងពីរទសវត្សរ៍នៃបទពិសោធន៍ក្នុងការបម្រើអតិថិជនដែលពេញចិត្តរាប់លាននាក់នៅទូទាំងពិភពលោក។"
            },
            delivery: {
                title: "ការដឹកជញ្ជូនលឿន",
                desc: "សេវាកម្មដឹកជញ្ជូនលឿន និងអាចទុកចិត្តបានដើម្បីទទួលបានផលិតផលរបស់អ្នកនៅពេលដែលអ្នកត្រូវការ។"
            }
        },
        
        // CTA
        cta: {
            title: "តើអ្នកត្រៀមខ្លួនរួចហើយឬនៅដើម្បីទទួលបានបទពិសោធន៍សម្អាតកម្រិតខ្ពស់?",
            subtitle: "រកមើលផលិតផលពេញលេញរបស់យើង និងស្វែងរកដំណោះស្រាយសម្អាតដ៏ល្អឥតខ្ចោះសម្រាប់ការត្រូវការរបស់អ្នក។",
            button: "មើលផលិតផលទាំងអស់"
        },
        
        // Products Page
        products: {
            hero: {
                title: "ផលិតផលកម្រិតខ្ពស់របស់យើង",
                subtitle: "ស្វែងយល់ពីដំណោះស្រាយសម្អាតវិជ្ជាជីវៈពេញលេញរបស់យើង"
            },
            categories: {
                title: "ប្រភេទ",
                all: "ផលិតផលទាំងអស់"
            },
            results: "ផលិតផលដែលរកឃើញ",
            benefits: "អត្ថប្រយោជន៍",
            how_to_use: "របៀបប្រើប្រាស់",
            pricing: "តម្លៃ",
            caution_storage: "ការប្រុងប្រយ័ត្ន និងការរក្សាទុក",
            caution: "ការប្រុងប្រយ័ត្ន៖",
            caution_text: "កុំឱ្យប៉ះពាល់នឹងភ្នែក; រក្សាឱ្យឆ្ងាយពីកុមារ។",
            storage: "ការរក្សាទុក៖",
            storage_text: "បិទគម្របបន្ទាប់ពីប្រើប្រាស់; រក្សាទុកនៅកន្លែងត្រជាក់ និងស្ងួត។",
            view: {
                list: "ទិដ្ឋភាពបញ្ជី"
            },
            
            // Specific Products
            detergent_powder: {
                summer_flower: {
                    title: "សាប៊ូម្សៅ (ផ្កា)",
                    benefits: "លាងជំរះស្នាមប្រឡាក់ និងក្លិនមិនល្អនៅលើសម្លៀកបំពាក់, មានក្លិនក្រអូបដូចផ្កាជាប់សាច់ក្រណាត់, មិនកាត់ដៃ និងអាចប្រើប្រាស់បានទាំងម៉ាស៊ីន និងបោកដោយដៃ។"
                },
                lemon: {
                    title: "សាប៊ូម្សៅ (ក្រូច)",
                    benefits: "ជួយធ្វើអោយសាច់ក្រណាត់ មានភាពសស្អាត, មានក្លិនក្រូចឆ្មាបែបធម្មជាតិ, មិនកាត់ដៃ និងអាចប្រើប្រាស់បានទាំងម៉ាស៊ីន និងបោកដោយដៃ។"
                },
                pises: {
                    title: "សាប៊ូម្សៅ (ពិសេស)",
                    benefits: "សាច់ម្ស៉ៅម៉ត់ល្អងាយរលាយនៅក្នុងទឹក, មានគុណភាពទ្វេដងក្នុងការកំចាត់ស្នាមប្រឡាក់, ធ្វើឱ្យសម្លៀកបំពាក់សភ្លឺដូចថ្មី និងអាចប្រើប្រាស់បានទាំងម៉ាស៊ីន និងបោកដោយដៃ។"
                },
                pises_sakura: {
                    title: "សាប៊ូម្សៅ (ផ្កាសាគូរ៉ា)",
                    benefits: "សាច់ម្ស៉ៅម៉ត់ល្អងាយរលាយនៅក្នុងទឹក, មានគុណភាពទ្វេដងក្នុងការកំចាត់ស្នាមប្រឡាក់, ធ្វើឱ្យសម្លៀកបំពាក់សភ្លឺដូចថ្មី និងអាចប្រើប្រាស់បានទាំងម៉ាស៊ីន និងបោកដោយដៃ។"
                },
                super_clean: {
                    title: "សាប៊ូម្សៅ Super Clean & Fresh Purple",
                    benefits: "សាច់ម្ស៉ៅម៉ត់ល្អងាយរលាយនៅក្នុងទឹក, មានគុណភាពទ្វេដងក្នុងការកំចាត់ស្នាមប្រឡាក់, ធ្វើឱ្យសម្លៀកបំពាក់សភ្លឺដូចថ្មី និងអាចប្រើប្រាស់បានទាំងម៉ាស៊ីន និងបោកដោយដៃ។"
                },
                usage: "បែងចែកសម្លៀកបំពាល់ពណ៍ស និង ពណ៍ផ្សេងដោយឡែកពីគ្នា។ ដាក់ម្សៅសាប៊ូ 30ក្រាម ក្នុងទឹក 3-4 លីត្រកូរឱ្យពពុះ ដាក់ត្រាំសម្លៀកបំពាក់ 30 នាទីឬតិចជាងនេះ។ លាងទឹក 2-3ដង និងដាក់ហាលក្រោយពន្លឺព្រះអាទិត្យ។"
            },

            dishwashing: {
                title: "ទឹកសាប៊ូលាងចាន",
                benefits: "ផ្សំពីក្រូចឆ្មាធម្មជាតិ 100%, ជម្រះជាតិខ្លាញ់ខ្លាំងទ្វេរដង, មានវីតាមីន E ការពារស្បែកដៃ និងក្លិនក្រូចឆ្មាប្រហើរ។",
                usage: "លាយទឹកលាងចាន LIX ២ស្លាបព្រាបាយក្នុងទឹក ៤ ទៅ ៥លីត្រ។ ប្រើប្រាស់អេប៉ុងសើមដើម្បីបង្កើតពពុះសាប៊ូ។ បន្ទាប់មកលាងសម្អាតជាមួយចានជាមួយទឹកឱ្យបានស្អាតល្អ។"
            },

            floor_cleaner: {
                antibacterial: {
                    title: "ទឹកជូតការ៉ូ (ប្រឆាំងបាក់តេរី)",
                    benefits: "សម្អាតស្នាមប្រឡាក់ ធូលីដី និងខ្លាញ់នៅលើឥដ្ឋការ៉ូបានយ៉ាងឆាប់រហ័ស និងមានប្រសិទ្ធភាពខ្ពស់, ធ្វើឱ្យឥដ្ឋការ៉ូភ្លឺរលោង និងកំចាត់សត្វល្អិតបានរហូតដល់ 99.9%។",
                    usage: "ដាក់ទឹកជូតការ៉ូ 2 គំរប ជាមួយទឹក 2.5 លីត្រ សម្រាប់ការសម្អាតជាប្រចាំថ្ងៃ។ ដាក់ទឹកជូតការ៉ូ 2 គំរប ជាមួយទឹក 1 លីត្រ សម្រាប់ការសម្អាត និងកំចាត់បាកតេរី។ ប្រើទឹកជូតការ៉ូសុទ្ធដើម្បីសម្អាតលើកន្លែងដែលមានស្នាមប្រឡាក់ខ្លាំង។"
                },
                lily_rose: {
                    title: "ទឹកជូតឥដ្ឋការ៉ូ ផ្កាលីលី និងកូលាប",
                    benefits: "សម្អាតស្នាមប្រឡាក់ ធូលីដី និងខ្លាញ់នៅលើឥដ្ឋការ៉ូបានយ៉ាងឆាប់រហ័ស និងមានប្រសិទ្ធភាពខ្ពស់, ធ្វើឱ្យឥដ្ឋការ៉ូភ្លឺរលោង និងកំចាត់សត្វល្អិតបានរហូតដល់ 99.9%។",
                    usage: "ដាក់ទឹកជូតការ៉ូ 2 គំរប ជាមួយទឹក 2.5 លីត្រ សម្រាប់ការសម្អាតជាប្រចាំថ្ងៃ។ ដាក់ទឹកជូតការ៉ូ 2 គំរប ជាមួយទឹក 1 លីត្រ សម្រាប់ការសម្អាត និងកំចាត់បាកតេរី។ ប្រើទឹកជូតការ៉ូសុទ្ធដើម្បីសម្អាតលើកន្លែងដែលមានស្នាមប្រឡាក់ខ្លាំង។"
                }
            },

            detergent_liquid: {
                regular: {
                    title: "ទឹកបោកសម្លៀកបំពាក់",
                    benefits: "មានប្រសិទ្ធភាពខ្ពស់ក្នុងការជ្រាបចូលសាច់ក្រណាត់យ៉ាងជ្រៅដើម្បីសំអាតស្នាមប្រឡាក់ដែលជាប់នឹងសាច់ក្រណាត់ និងរក្សាគុណភាពសាច់ក្រណាត់អោយនៅថ្មីដដែល អាចប្រើប្រាស់បានទាំងការបោកដោយដៃ និងបោកដោយម៉ាស៊ីន។",
                    usage: "ការប្រើដោយដៃ៖ បែងចែកពណ៍សំលៀកបំពាក់អោយដាច់ដោយឡែកពីគ្នា, ដាក់ទឹកសាប៊ូ 2 គំរបដបទៅក្នុងទឹក 4-5 លីត្រ ត្រាំសម្លៀកពាក់ទុក 30នាទី ឬតិចជានេះ ដើម្បីងាយស្រួលក្នុងការសម្អាត រួចធ្វើការបោកគក់ និងជម្រះទឹក 2-3ដង បន្ទាប់មកដាក់ហាលនៅកន្លែងដែលមានពន្លឺព្រះអាទិត្យ។ ការប្រើដោយម៉ាស៊ីន៖ បែងចែកពណ៍សំលៀកបំពាក់អោយដាច់ដោយឡែកពីគ្នា, ដាក់ទឹកសាប៊ូ 2 គំរបដបសំរាប់សំលៀកបំពាក់ 5-6 Kg បន្ថែម 1 គម្របដបទៀតក្នុងករណីសម្លៀកបំពាក់ប្រឡាក់ខ្លាំង និងធ្វើទៅតាមការណែនាំពីរបៀបប្រើរបស់ម៉ាស៊ីន។"
                },
                fresh_sakura: {
                    title: "ទឹកបោកសម្លៀកបំពាក់ក្លិនផ្កាសាគូរ៉ា",
                    benefits: "សម្អាតស្នាមប្រលាក់បានជ្រះទ្វេដង ធ្វើឱ្យសម្លៀកបំពាក់មានក្លិនក្រអូបផ្កាសាគូរ៉ាក្រអូបជាប់បាន24ម៉ោង, មានរង្វាន់គ្រប់ដប, មានគុណភាពល្អ និងទទួលបានការទទួលស្គាល់ជាផលិតផលដែលមានស្ដង់ដារអន្តរជាតិ (ISO)។",
                    usage: "ការប្រើប្រាស់ដោយដៃ៖ បែងចែកពណ៍សំលៀកបំពាក់អោយដាច់ដោយឡែកពីគ្នា, ដាក់ទឹកសាប៊ូ 2 គំរបដបទៅក្នុងទឹក 4-5 លីត្រ ដាក់ត្រាំទុកចោល 30នាទីឬតិចជាងនេះ និងទទួលបានប្រសិទ្ធទ្វេរដង រួចធ្វើការបោកគក់ ហើយលាងជម្រះជាមួយទឹកស្អាត 2-3ដង និងយកទៅដាក់ហាលនៅកន្លែងដែលមានពន្លឺព្រះអាទិត្យបានល្អ។ ការប្រើប្រាស់ដោយម៉ាស៊ីន៖បែងចែកពណ៍សំលៀកបំពាក់អោយដាច់ដោយឡែកពីគ្នា, ដាក់ទឹកសាប៊ូ 2 គំរបដបសំរាប់សំលៀកបំពាក់ 5-6 Kg ថែម 1គម្របទៀតក្នុងករណីសម្លៀកបំពាក់ដែលប្រលាក់ខ្លះ និងធ្វើទៅតាមការណែនាំពីរបៀបប្រើរបស់ម៉ាស៊ីន។"
                },
                purple_sakura: {
                    title: "ទឹកបោកសម្លៀកបំពាក់ក្លិនផ្កាសាគូរ៉ាពណ៌ស្វាយ",
                    benefits: "សម្អាតស្នាមប្រលាក់បានជ្រះទ្វេដង ធ្វើឱ្យសម្លៀកបំពាក់មានក្លិនក្រអូបផ្កាសាគូរ៉ាក្រអូបជាប់បាន24ម៉ោង, មានរង្វាន់គ្រប់ដប, មានគុណភាពល្អ និងទទួលបានការទទួលស្គាល់ជាផលិតផលដែលមានស្ដង់ដារអន្តរជាតិ (ISO)។",
                    usage: "ការប្រើប្រាស់ដោយដៃ៖ បែងចែកពណ៍សំលៀកបំពាក់អោយដាច់ដោយឡែកពីគ្នា, ដាក់ទឹកសាប៊ូ 2 គំរបដបទៅក្នុងទឹក 4-5 លីត្រ ដាក់ត្រាំទុកចោល 30នាទីឬតិចជាងនេះ និងទទួលបានប្រសិទ្ធទ្វេរដង រួចធ្វើការបោកគក់ ហើយលាងជម្រះជាមួយទឹកស្អាត 2-3ដង និងយកទៅដាក់ហាលនៅកន្លែងដែលមានពន្លឺព្រះអាទិត្យបានល្អ។ ការប្រើប្រាស់ដោយម៉ាស៊ីន៖បែងចែកពណ៍សំលៀកបំពាក់អោយដាច់ដោយឡែកពីគ្នា, ដាក់ទឹកសាប៊ូ 2 គំរបដបសំរាប់សំលៀកបំពាក់ 5-6 Kg ថែម 1គម្របទៀតក្នុងករណីសម្លៀកបំពាក់ដែលប្រលាក់ខ្លះ និងធ្វើទៅតាមការណែនាំពីរបៀបប្រើរបស់ម៉ាស៊ីន។"
                }
            },

            glass_cleaner: {
                title: "ទឹកជូតកញ្ចក់",
                benefits: "មានសមត្ថភាពខ្ពស់ក្នុងការសំអាតកញ្ចក់, រក្សាគុណភាពកញ្ចក់ឱ្យនូវដូចថ្មី, កំចាត់ស្នាមប្រឡាក់ ធូលីដីបានល្អ និងមានក្លិនក្រអូប។",
                usage: "បង្វិលក្បាលបាញ់នៅទីតាំងចុងម៉ាស៊ីនពី \"បាញ់ធំ\" ទៅ \"បាញ់តូច\"។ បាញ់ដោយផ្ទាល់ទៅលើផ្ទៃកខ្វក់ និងមានស្នាមប្រឡាក់ ទុកចោលរយៈពេល ២នាទី រួចប្រើក្រណាត់ដើម្បីជូតស្នាមប្រឡាក់ទាំងអស់ឱ្យបានស្អាត។ បង្វិលក្បាលបាញ់ទៅទីតាំង \"បិទ\" បន្ទាប់ពីការប្រើប្រាស់រួចរាល់។"
            },

            hand_washing: {
                sakura_blossom: {
                    title: "ទឹកលាងដៃ Lix ផ្កាសាគូរ៉ា",
                    benefits: "ធ្វើអោយស្បែកដៃទន់ល្មើយ និង មានក្លិនក្រអូបប្រហើរ, កំចាត់ភាពកខ្វក់ និងបាក់តេរីបានរហូតដល់ 99.9%។",
                    usage: "មួលគំរបអោយឡើងទៅលើ។ ចុចគំរបដើម្បីអោយចេញទឹកសាប៊ូលាងដៃ។ ដុសលាងជាមួយទឹក 10-20 វិនាទី។ រួចលាងសំអាតជាមួយទឹកស្អាត។"
                },
                bamboo_charcoal: {
                    title: "ទឹកលាងដៃ Lix ធ្យូងឫស្សី",
                    benefits: "ធ្វើអោយស្បែកដៃទន់ល្មើយ និង មានក្លិនក្រអូបប្រហើរ, កំចាត់ភាពកខ្វក់ និងបាក់តេរីបានរហូតដល់ 99.9%។",
                    usage: "មួលគំរបអោយឡើងទៅលើ។ ចុចគំរបដើម្បីអោយចេញទឹកសាប៊ូលាងដៃ។ ដុសលាងជាមួយទឹក 10-20 វិនាទី។ រួចលាងសំអាតជាមួយទឹកស្អាត។"
                }
            },

            bleach: {
                title: "ទឹកអូសាវែល",
                benefits: "មានសមត្ថភាពខ្ពស់ក្នុងការកំចាត់ស្នាមប្រលាក់, កំចាត់ក្លិនមិនល្អ និងបាក់តេរីផ្សេងៗ និងមិនមានប៉ះពាល់ដល់ស្បែកដៃ។",
                usage: "ប្រើសម្រាប់សំលៀកបំពាក់ និងក្រណាត់ពណ៌ស។ ចាក់ទឹកអូសាវែលចំនួន ៣០ មីលីលីត្រ ទៅក្នុងទឹក ១០លីត្រហើយដាក់សាប៊ូតាមធម្មតា។ ដាក់សំលៀកបំពាក់ចូលរួចត្រាំអោយបានចំនួន៥នាទីរួចធ្វើការដុសសម្អាតធម្មតា។"
            },

            toilet_cleaner: {
                title: "ទឹកលាងបង្គន់",
                benefits: "ធ្វើអោយបង្គន់របស់អ្នកស្អាតជានិច្ច, មិនមានក្លិនឆួល, អាចជំរះភាពកខ្វក់ដែលជាប់និងបង្គន់រហូតដល់ទៅ 99.99% និងកំចាត់ក្លិនមិនល្អ និងបាក់តេរីផ្សេងៗបានយ៉ាងល្អ។",
                usage: "សម្រាប់ផើងបង្គន់អនាម័យ៖ បាញ់ទឹកសម្អាតបង្គន់ LIX ដោយផ្ទាល់ទៅខាងក្នុងនិងជុំវិញបិរវេណផើងបង្គន់ រងចាំមួយសន្ទុះ រួចយកច្រាសសម្រាប់សម្អាតបង្គន់ ទៅដុសខាត់សម្អាត និងលាងជម្រះជាមួយទឹកតាមក្រោយឱ្យបានស្អាតល្អ។ សម្រាប់ការ៉ូ និង ជញ្ជាំងបន្ទប់ទឹក៖ បាញ់ទឹកសម្អាតបង្គន់ LIX ដោយផ្ទាល់លើការ៉ូ និង ជញ្ជាំងបន្ទប់ទឹក រួចដុសខាត់សម្អាតស្នាមប្រឡាក់ បន្ទាប់មកលាងជម្រះជាមួយទឹកតាមក្រោយឱ្យបានស្អាតល្អ។"
            }
        },
        
        // About Page
        about: {
            hero: {
                title: "អំពី BDC គុណភាពល្អបំផុតនៅកម្ពុជា",
                subtitle: "ដឹកនាំផ្លូវក្នុងដំណោះស្រាយសម្អាតកម្រិតខ្ពស់អស់រយៈពេលជាង 20 ឆ្នាំ"
            },
            mission: {
                title: "បេសកកម្មរបស់យើង",
                content: "ផ្តល់ផលិតផលសម្អាតគុណភាពខ្ពស់បំផុតដែលធ្វើឱ្យជីវិតកាន់តែងាយស្រួល ខណៈពេលដែលការពារបរិស្ថាន និងធានាសុវត្ថិភាពគ្រួសារនៅទូទាំងពិភពលោក។"
            },
            vision: {
                title: "ចក្ខុវិស័យរបស់យើង",
                content: "ក្លាយជាអ្នកដឹកនាំសកលក្នុងដំណោះស្រាយសម្អាតប្រកបដោយចីរភាព, កំណត់ស្តង់ដារសម្រាប់គុណភាព, ការច្នៃប្រឌិត, និងការទទួលខុសត្រូវបរិស្ថាន។"
            },
            values: {
                title: "តម្លៃរបស់យើង",
                quality: "ឧត្តមភាពគុណភាព",
                quality_desc: "យើងធានារក្សាគុណភាពផលិតផល ឬសេវាកម្មរបស់យើង។",
                innovation: "ការច្នៃប្រឌិត",
                innovation_desc: "អភិវឌ្ឍដំណោះស្រាយសម្អាតថ្មី និងប្រសើរជាងមុនជាបន្តបន្ទាប់។",
                sustainability: "ចីរភាព",
                sustainability_desc: "ប្តេជ្ញាចិត្តក្នុងការការពារភពផែនដីរបស់យើងសម្រាប់មនុស្សជំនាន់ក្រោយ។",
                trust: "ទំនុកចិត្ត",
                trust_desc: "បង្កើតទំនាក់ទំនងយូរអង្វែងតាមរយៈភាពអាចទុកចិត្តបាន និងតម្លាភាព។"
            },
            stats: {
                title: "BDC តាមលេខ",
                subtitle: "សមិទ្ធិផល និងឥទ្ធិពលរបស់យើងនៅទូទាំងពិភពលោក",
                years_excellence: "ឆ្នាំនៃឧត្តមភាព",
                satisfied_customers: "អតិថិជនពេញចិត្ត",
                premium_products: "ផលិតផលកម្រិតខ្ពស់",
                effectiveness_rate: "អត្រាប្រសិទ្ធភាព",
                eco_friendly: "ថែរក្សាបរិស្ថាន"
            }
        },
        
        // Contact Page
        contact: {
            hero: {
                title: "ទំនាក់ទំនងយើង",
                subtitle: "ទាក់ទងមកកាន់ក្រុមការងាររបស់យើងសម្រាប់សំណួរ ឬការគាំទ្រណាមួយ"
            },
            form: {
                title: "ផ្ញើសារមកកាន់យើង",
                description: "យើងចង់ស្តាប់ពីអ្នក។ ផ្ញើសារមកកាន់យើង ហើយយើងនឹងឆ្លើយតបឱ្យបានលឿនបំផុត។",
                name: "ឈ្មោះពេញ",
                email: "អាសយដ្ឋានអ៊ីមែល",
                subject: "ប្រធានបទ",
                message: "សារ",
                send: "ផ្ញើសារ",
                placeholders: {
                    name: "បញ្ចូលឈ្មោះពេញរបស់អ្នក",
                    email: "បញ្ចូលអាសយដ្ឋានអ៊ីមែលរបស់អ្នក",
                    phone: "បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក (ស្រេចចិត្ត)",
                    message: "ប្រាប់យើងពីរបៀបដែលយើងអាចជួយអ្នក..."
                },
                subject_options: {
                    default: "ជ្រើសរើសប្រធានបទ",
                    general: "សំណួរទូទៅ",
                    product: "ព័ត៌មានផលិតផល",
                    support: "ការគាំទ្រអតិថិជន",
                    partnership: "ឱកាសភាពជាដេគូ",
                    feedback: "មតិកែលម្អ",
                    other: "ផ្សេងៗ"
                }
            },
            info: {
                title: "ព័ត៌មានទំនាក់ទំនង",
                address: "អាសយដ្ឋានរបស់យើង",
                phone: "លេខទូរស័ព្ទ",
                email: "អាសយដ្ឋានអ៊ីមែល",
                fax: "លេខទូរសារ",
                hours: "ម៉ោងធ្វើការ"
            },
            office: {
                main: "ការិយាល័យកណ្តាល៖",
                alternative: "ជំនួស៖",
                head_office: "ការិយាល័យកណ្តាលភ្នំពេញ",
                company_name: "BDC - គុណភាពល្អបំផុតនៅកម្ពុជា"
            },
            map: {
                title: "ស្វែងរកយើង",
                subtitle: "មកលេងការិយាល័យកណ្តាលរបស់យើងនៅភ្នំពេញ",
                open_maps: "បើកក្នុង Google Maps"
            }
        },
        
        // Footer
        footer: {
            about: {
                title: "អំពី BDC",
                desc: "អ្នកផ្តល់សេវាកម្មដឹកនាំនៃដំណោះស្រាយសម្អាតកម្រិតខ្ពស់សម្រាប់ផ្ទះ និងអាជីវកម្មនៅទូទាំងពិភពលោក។ ទទួលបានទំនុកចិត្តពីមនុស្សរាប់លាននាក់អស់រយៈពេលជាង 20 ឆ្នាំ។"
            },
            quick_links: {
                title: "តំណភ្ជាប់រហ័ស"
            },
            categories: {
                title: "ប្រភេទផលិតផល"
            },
            contact: {
                title: "ព័ត៌មានទំនាក់ទំនង",
                phone: "081 590 777 / 081 789 777",
                email: "sales.coor@bdccam.com",
                address: "អគារ អេស.អាយ, លេខ ៩៣, មហាវិថីព្រះសីហនុ, ភូមិ៧, សង្កាត់ចតុមុខ, ខណ្ឌដូនពេញ, រាជធានីភ្នំពេញ"
            },
            copyright: "© 2025 BDC គុណភាពល្អបំផុតនៅកម្ពុជា។ រក្សាសិទ្ធិទាំងអស់។ ដំណោះស្រាយសម្អាតវិជ្ជាជីវៈសម្រាប់គ្រប់តម្រូវការ។"
        }
    }
};

// Cookie utility functions (if not already defined)
if (typeof setCookie === 'undefined') {
    function setCookie(name, value, days = 365) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }
}

if (typeof getCookie === 'undefined') {
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}

// Language Management
class LanguageManager {
    constructor() {
        // Handle migration from old 'km' to new 'kh' language code
        let savedLanguage = getCookie('language') || localStorage.getItem('language') || 'en';
        if (savedLanguage === 'km') {
            savedLanguage = 'kh';
            // Update stored values
            setCookie('language', 'kh');
            localStorage.setItem('language', 'kh');
        }
        this.currentLanguage = savedLanguage;
        this.isInitialized = false;
        this.init();
    }

    init() {
        // Wait for DOM to be ready if not already
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeLanguage();
            });
        } else {
            this.initializeLanguage();
        }
    }

    initializeLanguage() {
        try {
            this.applyTranslations();
            this.updateLanguageButton();
            this.updateLanguageIcon();
            this.isInitialized = true;
            console.log('Language Manager initialized with language:', this.currentLanguage);

            // Force update the document language attribute
            document.documentElement.lang = this.currentLanguage === 'kh' ? 'kh' : 'en';

            // Refresh all icons to ensure proper display on initialization
            setTimeout(() => {
                this.refreshAllIcons();
            }, 200);

        } catch (error) {
            console.error('Error initializing language manager:', error);
        }
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    getTranslation(key) {
        const keys = key.split('.');
        let translation = translations[this.currentLanguage];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                // Fallback to English if translation not found
                translation = translations.en;
                for (const fallbackKey of keys) {
                    if (translation && translation[fallbackKey]) {
                        translation = translation[fallbackKey];
                    } else {
                        return key; // Return key if no translation found
                    }
                }
                break;
            }
        }
        
        return translation;
    }

    setLanguage(language) {
        this.currentLanguage = language;
        // Save to both cookie and localStorage for compatibility
        setCookie('language', language);
        localStorage.setItem('language', language);

        this.applyTranslations();
        this.updateLanguageButton();
        this.updateLanguageIcon();

        // Update document language attribute
        document.documentElement.lang = language === 'kh' ? 'kh' : 'en';

        // Refresh all icons to ensure proper display after language change
        setTimeout(() => {
            this.refreshAllIcons();
        }, 100);

        // Add visual feedback for language change
        this.showLanguageChangeNotification(language);

        // Translate product content if function exists
        if (typeof refreshProductTranslations === 'function') {
            refreshProductTranslations();
        }

        console.log('Language changed to:', language);
    }

    updateLanguageButton() {
        const langButton = document.getElementById('current-lang');
        if (langButton) {
            const newText = this.currentLanguage === 'kh' ? 'KH' : 'EN';
            langButton.textContent = newText;

            // Add visual feedback only if language is actually changing
            const parentButton = langButton.closest('.lang-btn');
            if (parentButton && langButton.textContent !== newText) {
                parentButton.classList.add('language-changing');
                setTimeout(() => {
                    parentButton.classList.remove('language-changing');
                }, 300);
            }

            console.log('Language button updated to:', newText);
        } else {
            console.warn('Language button element not found');
        }
    }

    updateLanguageIcon() {
        const langIcon = document.querySelector('.lang-btn i');
        if (langIcon) {
            // Ensure the globe icon is always visible
            langIcon.className = 'fas fa-globe';
            langIcon.style.opacity = '1';
            langIcon.style.visibility = 'visible';
            langIcon.style.display = 'inline-block';
            langIcon.style.fontFamily = '"Font Awesome 6 Free"';
            langIcon.style.fontWeight = '900';
            langIcon.style.fontStyle = 'normal';
            console.log('Language icon updated and made visible');
        } else {
            console.warn('Language icon element not found');
        }
    }

    // New method to refresh all icons after language change
    refreshAllIcons() {
        // Refresh all FontAwesome icons to ensure proper display
        const allIcons = document.querySelectorAll('.fas, .fab, .far, .fal, .fad, .fat, i[class*="fa-"]');
        allIcons.forEach(icon => {
            // Clear any inline styles that might conflict
            icon.style.removeProperty('font-family');
            icon.style.removeProperty('font-weight');
            icon.style.removeProperty('font-style');
            
            // Force a reflow to ensure CSS rules are applied
            icon.offsetHeight;
            
            // For brand icons, ensure they use the correct font
            if (icon.classList.contains('fab') || 
                icon.classList.contains('fa-facebook') || 
                icon.classList.contains('fa-tiktok') || 
                icon.classList.contains('fa-telegram') ||
                icon.classList.contains('fa-instagram')) {
                // Let CSS handle the styling
                icon.classList.add('fab');
            }
        });

        // Special handling for category icons
        const categoryIcons = document.querySelectorAll('.category-item i, .sidebar i');
        categoryIcons.forEach(icon => {
            icon.style.width = '18px';
            icon.style.textAlign = 'center';
            icon.style.marginRight = '0.75rem';
        });

        console.log('All icons refreshed for language change');
    }

    showLanguageChangeNotification(language) {
        // Create a subtle notification
        const notification = document.createElement('div');
        notification.className = 'language-notification';
        notification.textContent = `Language changed to ${language === 'kh' ? 'Khmer' : 'English'}`;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: var(--primary-red);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.875rem;
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);

        // Remove after 2 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 2000);
    }

    toggle() {
        const newLanguage = this.currentLanguage === 'en' ? 'kh' : 'en';
        console.log('Toggling language from', this.currentLanguage, 'to', newLanguage);
        this.setLanguage(newLanguage);
    }

    // Method to check current state
    getState() {
        return {
            currentLanguage: this.currentLanguage,
            isInitialized: this.isInitialized,
            buttonElement: document.getElementById('current-lang'),
            iconElement: document.querySelector('.lang-btn i')
        };
    }
}

// Initialize language manager
let languageManager;

// Initialize language manager when DOM is ready
function initializeLanguageManager() {
    if (!languageManager) {
        languageManager = new LanguageManager();
        window.languageManager = languageManager; // Make globally accessible
        console.log('Language Manager created and made globally accessible');
    }
    return languageManager;
}

// Global function for language toggle
function toggleLanguage() {
    const manager = languageManager || initializeLanguageManager();
    manager.toggle();
}

// Initialize on page load with proper timing
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure all elements are rendered
    setTimeout(() => {
        initializeLanguageManager();
    }, 100);
});

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => {
        initializeLanguageManager();
    }, 100);
}

// Additional initialization on window load to ensure everything is ready
window.addEventListener('load', () => {
    setTimeout(() => {
        const manager = initializeLanguageManager();
        if (manager) {
            manager.updateLanguageButton();
            manager.updateLanguageIcon();
        }
    }, 200);
});

// Debug function for troubleshooting
window.debugLanguage = function() {
    const manager = languageManager || window.languageManager;
    if (manager) {
        console.log('Language Manager State:', manager.getState());
        console.log('Cookie value:', getCookie('language'));
        console.log('LocalStorage value:', localStorage.getItem('language'));
    } else {
        console.log('Language Manager not found');
    }
};

// Ensure language manager is globally accessible
if (languageManager) {
    window.languageManager = languageManager;
}

