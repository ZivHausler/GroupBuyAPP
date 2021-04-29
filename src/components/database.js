const database = {
    products: [
        {
            name: "Oculus Rift",
            img:"https://www.wareable.com/media/imager/202001/34708-original.jpg",
            description: `Oculus Rift is a line of virtual reality headsets developed and manufactured by Oculus VR, a division of Facebook Inc., released on March 28, 2016.`,
            fillDestination:100,
            currentFill: 98,
            subject: 'computers',
            info: {
                comp_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_Oculus_horizontal.svg/1200px-Logo_Oculus_horizontal.svg.png",
                product_name: "Oculus Rift",
                brand_name: "Oculus",
                release_date: "March 28, 2016",
                link_to_site: "https://www.oculus.com/",
                product_price: "500$",
                group_price: "350$",
                max_requests: "100",
                current_requests: "73",
                date_started: "10/10/1010",
                deadline: "20/20/2020"
            }
        },
        {
            name: "iPhone 12 Pro Max",
            img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-og-202009?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1601432262000",
            description: `It is the first major redesign since the iPhone X, similar to that of iPad Pros since 2018 and the 4th-generation iPad Air.`,
            fillDestination:100,
            currentFill: 51,
            subject: 'computers',
        },
        {
            name: "Samsung TV",
            img: "https://img.global.news.samsung.com/in/wp-content/uploads/2021/03/Free-TV1-1024x556.jpg",
            description: `Samsung launched its first full HD 3D LED television in March 2010. Samsung had showcased the product at the 2010 International Consumer Electronics Show (CES 2010) held in Las Vegas.`,
            fillDestination:100,
            currentFill: 3,
            subject: 'computers',
        },
        {
            name: "iPhone 12 mini",
            img:"https://9to5mac.com/wp-content/uploads/sites/6/2020/10/iPhone-12-battery-test.jpg?quality=82&strip=all&w=1000",
            description: `Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.`,
            fillDestination:100,
            currentFill: 83,
            subject: 'computers',
        },
        {
            name: "iPhone XR",
            img:"https://www.tgspot.co.il/wp-content/uploads/2018/09/Apple-iPhone-XR.jpg",
            description: `The phone has a 6.1-inch Liquid Retina LED-backlit LCD IPS panel display, which Apple claims is the "most advanced LCD in the industry."`,
            fillDestination:100,
            currentFill: 57,
            subject: 'computers',
        },
        {
            name: "Eiffel Tower",
            img:"https://fadeceilings.com/wp-content/uploads/2019/08/AdobeStock_65117955-720x460.jpeg",
            description: `Locally nicknamed "La dame de fer" (French for "Iron Lady"), it was constructed from 1887 to 1889 as the entrance to the 1889 World's Fair and was initially criticised by some of France's leading artists and intellectuals for its design.`,
            fillDestination:100,
            currentFill: 22,
            subject: 'real estate',
        },
        {
            name: "Samsung TV Curved UHD",
            img:"https://cdn.pocket-lint.com/r/s/970x/assets/images/152964-tv-review-samsung-ue50tu8500-review-image7-fv2o8xwyiu.jpg",
            description: `Samsung launched its first full HD 3D LED television in March 2010. Samsung had showcased the product at the 2010 International Consumer Electronics Show (CES 2010) held in Las Vegas.`,
            fillDestination:100,
            currentFill: 99,
            subject: 'computers',
        },
        {
            name: "Tesla Model S",
            img:"https://s1.paultan.org/image/2020/06/2020-Tesla-Model-S-1.jpg",
            description: `The Tesla Model S is an all-electric car produced by Tesla, Inc., and was introduced on June 22, 2012, higher than that of any other battery electric car.`,
            fillDestination:100,
            currentFill: 82,
            subject: 'car',
        },
        {
            name: "Tesla Model X",
            img:"https://img.okezone.com/content/2021/02/01/52/2354406/gisel-beli-mobil-listrik-tesla-model-x-ini-spesifikasi-dan-harganya-E6R7VnubMN.jpg",
            description: `The Model X was developed from the full-sized sedan platform of the Tesla Model S.`,
            fillDestination:100,
            currentFill: 91,
            subject: 'car',
        },
        {
            name: "Tesla Model 3",
            img:"https://tesla-cdn.thron.com/delivery/public/image/tesla/197be9d8-7cf6-49b8-a711-e56237fa874a/bvlatuR/std/1200x628/rhd-model-3-social",
            description: `The Tesla Model 3 is an electric four-door fastback mid-size sedan developed by Tesla. The Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 423 km and the Long Range versions deliver 568 km.`,
            fillDestination:100,
            currentFill: 38,
            subject: 'car',
        }
    ],
    sellers: [
        {
            comp_logo: "https://upload.wikimedia.org/wikipedia/he/thumb/e/ec/LogoBug2011.png/320px-LogoBug2011.png",
            comp_name: "BUG",
            lifelong: "13/03/1998",
            rate: "3.4",
            online_purchases: true,
            delivery: false
        }
    ]
}

export default database;