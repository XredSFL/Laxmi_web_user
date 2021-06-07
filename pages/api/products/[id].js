export default function handler(req, res) {
    res.status(200).json({ 
        "status": true,
        "message": "product was fetched",
        "data": {
            "product": {
                "_id": "sasasasasa",
                "images": [
                    "https://via.placeholder.com/332x430",
                    "https://via.placeholder.com/332x430",
                    "https://via.placeholder.com/332x430",
                    "https://via.placeholder.com/332x430"
                ],
                "title": "Suit - Navy | K0012",
                "category" : "suits",
                "description": "Handmade SHIRT laxmi tailors. Made by best-in-class Tailor With decades of experience, we guarantee the quality and style of the stitches you order.",
                "stocks": 12,
                "currency": "IDR",
                "price": 1500000,
                "is_cart": false
            },
            "related_product": [
                {
                    "_id": "1",
                    "image": "https://via.placeholder.com/332x430",
                    "title": "Suit - Gray | K0013",
                    "stocks": 13,
                    "currency": "IDR",
                    "category" : "suits",
                    "sub_category" : "dasdasd",
                    "price": 5000000,
                    "is_new": false,
                    "is_cart": true
                },
                {
                    "_id": "2",
                    "image": "https://via.placeholder.com/332x430",
                    "title": "Suit - Pattern | K0022",
                    "currency": "IDR",
                    "price": 300000,
                    "category" : "suits",
                    "sub_category" : "dasdasd",
                    "stocks": 3,
                    "is_new": true,
                    "is_cart": false
                },
                {
                    "_id": "3",
                    "image": "https://via.placeholder.com/332x430",
                    "title": "Suit - Navy 2 | K0032",
                    "currency": "IDR",
                    "category" : "suits",
                    "sub_category" : "dasdasd",
                    "price": 1300000,
                    "stocks": 13,
                    "is_new": true,
                    "is_cart": false
                }
            ]
        }
    })
}
  