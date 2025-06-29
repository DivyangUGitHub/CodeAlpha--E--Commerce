import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 8999,
    originalPrice: 12999,
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2'
    ],
    category: 'Electronics',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    features: ['Active Noise Cancellation', '30-hour Battery Life', 'Premium Sound Quality', 'Comfortable Fit'],
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '250g',
      'Charging': 'USB-C'
    }
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 6499,
    originalPrice: 8999,
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and 7-day battery life.',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
      'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2'
    ],
    category: 'Electronics',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery', 'Water Resistant'],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery': '7 days',
      'Water Rating': '50m',
      'Sensors': 'HR, GPS, Accelerometer'
    }
  },
  {
    id: '3',
    name: 'Professional Camera Lens',
    price: 24999,
    originalPrice: 29999,
    description: 'Capture stunning photos with this professional-grade camera lens featuring superior optics and weather sealing.',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
      'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2'
    ],
    category: 'Photography',
    rating: 4.9,
    reviews: 67,
    inStock: true,
    features: ['Weather Sealed', 'Superior Optics', 'Fast Autofocus', 'Professional Grade'],
    specifications: {
      'Focal Length': '24-70mm',
      'Aperture': 'f/2.8',
      'Mount': 'Canon EF',
      'Weight': '805g'
    }
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    price: 15999,
    originalPrice: 19999,
    description: 'Upgrade your workspace with this ergonomic office chair designed for all-day comfort and productivity.',
    image: 'https://images.pexels.com/photos/586230/pexels-photo-586230.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    images: [
      'https://images.pexels.com/photos/586230/pexels-photo-586230.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2'
    ],
    category: 'Furniture',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    features: ['Lumbar Support', 'Adjustable Height', 'Breathable Mesh', '360° Swivel'],
    specifications: {
      'Material': 'Mesh & Plastic',
      'Weight Capacity': '150 kg',
      'Height Range': '104-114 cm',
      'Warranty': '5 years'
    }
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    price: 1999,
    originalPrice: 2999,
    description: 'Charge your devices wirelessly with this sleek and efficient charging pad supporting fast charging.',
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    category: 'Electronics',
    rating: 4.4,
    reviews: 203,
    inStock: true,
    features: ['Fast Charging', 'Universal Compatibility', 'LED Indicator', 'Non-slip Surface'],
    specifications: {
      'Power': '15W Fast Charge',
      'Compatibility': 'Qi-enabled devices',
      'Cable': '1.2m USB-C',
      'Size': '100mm diameter'
    }
  },
  {
    id: '6',
    name: 'Gaming Mechanical Keyboard',
    price: 4999,
    originalPrice: 6999,
    description: 'Dominate your games with this mechanical keyboard featuring RGB backlighting and premium switches.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    images: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
      'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2'
    ],
    category: 'Gaming',
    rating: 4.8,
    reviews: 91,
    inStock: true,
    features: ['RGB Backlighting', 'Mechanical Switches', 'Anti-ghosting', 'Programmable Keys'],
    specifications: {
      'Switch Type': 'Cherry MX Blue',
      'Backlighting': 'RGB',
      'Layout': 'Full Size',
      'Connection': 'USB-C'
    }
  },
  {
    id: '7',
    name: 'Bluetooth Speaker',
    price: 3499,
    originalPrice: 4999,
    description: 'Portable Bluetooth speaker with 360-degree sound, waterproof design, and 12-hour battery life.',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2'
    ],
    category: 'Electronics',
    rating: 4.5,
    reviews: 178,
    inStock: true,
    features: ['360° Sound', 'Waterproof IPX7', '12-hour Battery', 'Voice Assistant'],
    specifications: {
      'Battery Life': '12 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Water Rating': 'IPX7',
      'Weight': '680g'
    }
  },
  {
    id: '8',
    name: 'Laptop Stand',
    price: 2499,
    originalPrice: 3499,
    description: 'Adjustable aluminum laptop stand for better ergonomics and improved airflow.',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    category: 'Accessories',
    rating: 4.6,
    reviews: 134,
    inStock: true,
    features: ['Adjustable Height', 'Aluminum Build', 'Heat Dissipation', 'Portable Design'],
    specifications: {
      'Material': 'Aluminum Alloy',
      'Compatibility': 'Up to 17" laptops',
      'Weight': '1.2kg',
      'Adjustability': '6 angles'
    }
  },
  {
    id: '9',
    name: 'Wireless Mouse',
    price: 1799,
    originalPrice: 2499,
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    category: 'Electronics',
    rating: 4.3,
    reviews: 267,
    inStock: true,
    features: ['Ergonomic Design', '2400 DPI', '18-month Battery', 'Silent Clicks'],
    specifications: {
      'DPI': '2400',
      'Battery': '18 months',
      'Connectivity': '2.4GHz Wireless',
      'Weight': '85g'
    }
  },
  {
    id: '10',
    name: 'USB-C Hub',
    price: 2999,
    originalPrice: 3999,
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and fast charging support.',
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    category: 'Electronics',
    rating: 4.7,
    reviews: 89,
    inStock: true,
    features: ['7-in-1 Design', '4K HDMI Output', 'Fast Charging', 'Compact Size'],
    specifications: {
      'Ports': '7 ports',
      'HDMI': '4K@60Hz',
      'USB': '3.0 x3',
      'Power': '100W PD'
    }
  },
  {
    id: '11',
    name: 'Desk Lamp',
    price: 3999,
    originalPrice: 5499,
    description: 'LED desk lamp with adjustable brightness, color temperature, and wireless charging base.',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    category: 'Furniture',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    features: ['LED Technology', 'Wireless Charging', 'Touch Control', 'Eye Protection'],
    specifications: {
      'Light Source': 'LED',
      'Color Temperature': '3000K-6500K',
      'Brightness': '10 levels',
      'Charging': '10W Wireless'
    }
  },
  {
    id: '12',
    name: 'Phone Case',
    price: 899,
    originalPrice: 1299,
    description: 'Premium silicone phone case with drop protection and wireless charging compatibility.',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    category: 'Accessories',
    rating: 4.4,
    reviews: 342,
    inStock: true,
    features: ['Drop Protection', 'Wireless Compatible', 'Premium Silicone', 'Precise Cutouts'],
    specifications: {
      'Material': 'Premium Silicone',
      'Protection': '2m Drop Test',
      'Compatibility': 'iPhone/Samsung',
      'Thickness': '1.5mm'
    }
  },
  {
    id: '13',
    name: 'Power Bank',
    price: 2799,
    originalPrice: 3799,
    description: '20000mAh power bank with fast charging, multiple ports, and LED display.',
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    category: 'Electronics',
    rating: 4.6,
    reviews: 198,
    inStock: true,
    features: ['20000mAh Capacity', 'Fast Charging', 'LED Display', 'Multiple Ports'],
    specifications: {
      'Capacity': '20000mAh',
      'Input': 'USB-C 18W',
      'Output': '22.5W Fast Charge',
      'Weight': '420g'
    }
  },
  {
    id: '14',
    name: 'Gaming Chair',
    price: 18999,
    originalPrice: 24999,
    description: 'Professional gaming chair with lumbar support, adjustable armrests, and premium leather.',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    images: [
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
      'https://images.pexels.com/photos/586230/pexels-photo-586230.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2'
    ],
    category: 'Gaming',
    rating: 4.9,
    reviews: 87,
    inStock: true,
    features: ['Lumbar Support', 'Adjustable Armrests', 'Premium Leather', '360° Swivel'],
    specifications: {
      'Material': 'Premium Leather',
      'Weight Capacity': '150kg',
      'Recline': '90-180°',
      'Warranty': '3 years'
    }
  },
  {
    id: '15',
    name: 'Webcam',
    price: 4499,
    originalPrice: 5999,
    description: '1080p HD webcam with auto-focus, noise reduction, and wide-angle lens.',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    category: 'Electronics',
    rating: 4.5,
    reviews: 123,
    inStock: true,
    features: ['1080p HD', 'Auto Focus', 'Noise Reduction', 'Wide Angle'],
    specifications: {
      'Resolution': '1080p@30fps',
      'Field of View': '90°',
      'Microphone': 'Built-in stereo',
      'Connection': 'USB 2.0'
    }
  },
  {
    id: '16',
    name: 'Monitor Stand',
    price: 3499,
    originalPrice: 4499,
    description: 'Adjustable monitor stand with storage drawer and cable management.',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    category: 'Furniture',
    rating: 4.7,
    reviews: 76,
    inStock: true,
    features: ['Height Adjustable', 'Storage Drawer', 'Cable Management', 'Sturdy Build'],
    specifications: {
      'Material': 'Bamboo Wood',
      'Weight Capacity': '20kg',
      'Dimensions': '50x20x8cm',
      'Adjustability': '3 levels'
    }
  },
  {
    id: '17',
    name: 'Tablet Stand',
    price: 1499,
    originalPrice: 1999,
    description: 'Foldable tablet stand compatible with all tablet sizes and smartphones.',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    category: 'Accessories',
    rating: 4.3,
    reviews: 234,
    inStock: true,
    features: ['Foldable Design', 'Universal Compatibility', 'Multiple Angles', 'Non-slip Base'],
    specifications: {
      'Material': 'Aluminum Alloy',
      'Compatibility': '4-13 inch devices',
      'Weight': '200g',
      'Angles': '7 adjustable'
    }
  },
  {
    id: '18',
    name: 'Cable Organizer',
    price: 799,
    originalPrice: 1199,
    description: 'Magnetic cable organizer set for desk organization and cable management.',
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2',
    category: 'Accessories',
    rating: 4.2,
    reviews: 456,
    inStock: true,
    features: ['Magnetic Design', 'Multiple Sizes', 'Strong Adhesive', 'Reusable'],
    specifications: {
      'Material': 'Silicone + Magnet',
      'Sizes': '3 different sizes',
      'Adhesive': '3M tape',
      'Package': '6 pieces'
    }
  }
];

export const categories = [
  'All Categories',
  'Electronics',
  'Photography',
  'Furniture',
  'Gaming',
  'Accessories'
];