export default {
	namespaced: true,
	state() {
		return {
			products: [
        {
          id: 'p1',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61elAX4NTML._AC_SL1500_.jpg',
          title: 'iPhone',
          description:
            'Apple iPhone 12 Pro, 128 GB, Pacific Blue, Kulaklık ve Adaptör Hariç (Apple Türkiye Garantili)',
          price: 14198.99,
        },
        {
          id: 'p2',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61jM2A8lQ2L._AC_SL1500_.jpg',
          title: 'Samsung Galaxy Note 10',
          description: 'Samsung Galaxy Note 10 Lite 128 GB N770F Aura Black.',
          price: 5069.99
        },
        {
          id: 'p3',
          image:
            'https://productimages.hepsiburada.net/s/49/550/10983951073330.jpg/format:webp',
          title: 'Apple MacBook Pro',
          description:
            'Apple MacBook Pro M1 Çip 8GB 256GB SSD macOS 13" QHD Taşınabilir Bilgisayar Uzay Grisi MYD82TU/A',
          price: 12699.01,
        },
      ],
		}
	},
	getters: {
		products(state) {
			return state.products;
		}
	}
}