const dataObj = [
    {
        "id": 1,
        "cityName": "Delhi",
        "destination": "Jaipur",
        "img": "https://www.mistay.in/travel-blog/content/images/size/w2000/2020/07/travel-4813658_1920.jpg",
        "country": "India",
        "price": 5000,
        "directFlight": "yes"
    },
    {
        "id": 2,
        "cityName": "Bangalore",
        "destination": "Chennai",
        "img": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR2ISbG4bOvDonQYPz7_V_iXgVw7jil43EzBPG3UHV-G9PKL6o2UAJ1IvIaQnVowk6V7KjMuBP5GifaYddgVc8RGenOrr79-nRjROUr7Q",
        "country": "India",
        "price": 3000,
        "directFlight": "yes"
    },
    {
        "id": 3,
        "cityName": "Kolkata",
        "destination": "Bhubneshwar",
        "img": "https://media.easemytrip.com/media/Blog/India/637279024837634980/637279024837634980MahbNH.png",
        "country": "India",
        "price": 4500,
        "directFlight": "yes"
    },
    {
        "id": 4,
        "cityName": "Hyderabad",
        "destination": "Delhi",
        "img": "https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/09/Charminar-in-Hyderabad-1200x828.jpg",
        "country": "India",
        "price": 7000,
        "directFlight": "yes"
    },
    {
        "id": 5,
        "cityName": "Ahmedabad",
        "destination": "Jaipur",
        "img": "https://www.asparkholidays.com/uploads/30306_Kankaria-Lake-Ahmedabad.jpg",
        "country": "India",
        "price": 6000,
        "directFlight": "yes"
    },
    {
        "id": 6,
        "cityName": "Pune",
        "destination": "Ahmedabad",
        "img": "https://i.ytimg.com/vi/F-PWkKt2mUU/maxresdefault.jpg",
        "country": "India",
        "price": 4000,
        "directFlight": "yes"
    },
    {
        "id": 7,
        "cityName": "Lucknow",
        "destination": "Ayodhya",
        "img": "https://th.bing.com/th/id/R.f45ef37ed528c19cfac7b473188c94d9?rik=Ky4E9ShXtZkW5A&riu=http%3a%2f%2fdontgetserious.com%2fwp-content%2fuploads%2f2016%2f08%2flucknow-is-beautiful.jpg&ehk=Wc5XKX%2f8Oq3IvhCXXnr%2b41vyTA35BbV2q%2bC2WKMLUXM%3d&risl=&pid=ImgRaw&r=0",
        "country": "India",
        "price": 2500,
        "directFlight": "yes"
    },
    {
        "id": 8,
        "cityName": "Chennai",
        "destination": "Trivandrum",
        "img": "https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg",
        "country": "India",
        "price": 2000,
        "directFlight": "yes"
    },
    {
        "id": 9,
        "cityName": "Bhubaneswar",
        "destination": "Kolkata",
        "img": "https://i0.wp.com/orissadiary.com/wp-content/uploads/2020/04/bmc.jpg?fit=1280%2C852&ssl=1",
        "country": "India",
        "price": 3500,
        "directFlight": "yes"
    },
    {
        "id": 10,
        "cityName": "Surat",
        "destination": "Ahmedabad",
        "img": "https://i.ytimg.com/vi/ilXmOihy09c/maxresdefault.jpg",
        "country": "India",
        "price": 1800,
        "directFlight": "yes"
    },
    {
        "id": 11,
        "cityName": "Mumbai",
        "destination": "Goa",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpiaOT8P-4C0rjb7nO6kVLB9Tv6R-4rW54A&s",
        "country": "India",
        "price": 8000,
        "directFlight": "yes"
    },
    {
        "id": 12,
        "cityName": "Jaipur",
        "destination": "Udaipur",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyoGEAzwIbBLDMHCSDBMcPJYZ4QMzGXdvIg&s",
        "country": "India",
        "price": 4500,
        "directFlight": "yes"
    },
    {
        "id": 13,
        "cityName": "Visakhapatnam",
        "destination": "Hyderabad",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jxY_cT5u2lHR6qwwoniHuqpMqH03H2uBJg&s",
        "country": "India",
        "price": 3200,
        "directFlight": "yes"
    },
    {
        "id": 14,
        "cityName": "Nagpur",
        "destination": "Pune",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9RQfDDMNTN2z_Ix4VolaH9GEFq0oDhbdew&s",
        "country": "India",
        "price": 2800,
        "directFlight": "no"
    },
    {
        "id": 15,
        "cityName": "Chandigarh",
        "destination": "Shimla",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCSdKXXosNdPRXcJ8oM7boZW280732mfPUiA&s",
        "country": "India",
        "price": 5200,
        "directFlight": "no"
    },
    {
        "id": 16,
        "cityName": "Dehradun",
        "destination": "Mussoorie",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKeSgtfvuT-xyqrO808TZDZK8zBh3CBkyWA&s",
        "country": "India",
        "price": 3900,
        "directFlight": "yes"
    },
    {
        "id": 17,
        "cityName": "Ranchi",
        "destination": "Jamshedpur",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7DJ0bcm3gXWmjC3tioeFwl6SnXWNUUe2yA&s",
        "country": "India",
        "price": 2200,
        "directFlight": "no"
    },
    {
        "id": 18,
        "cityName": "Mysore",
        "destination": "Bangalore",
        "img": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR2ISbG4bOvDonQYPz7_V_iXgVw7jil43EzBPG3UHV-G9PKL6o2UAJ1IvIaQnVowk6V7KjMuBP5GifaYddgVc8RGenOrr79-nRjROUr7Q",
        "country": "India",
        "price": 2100,
        "directFlight": "yes"
    },
    {
        "id": 19,
        "cityName": "Patna",
        "destination": "Gaya",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6InJ2C9c5UAJKEKdYLSMzZABjYKhUsq7vg&s",
        "country": "India",
        "price": 1800,
        "directFlight": "no"
    },
    {
        "id": 20,
        "cityName": "Agra",
        "destination": "Delhi",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtN-tSrGjPP_8N2ZIUyC7qMPvuxGN3yGFshg&s",
        "country": "India",
        "price": 4500,
        "directFlight": "yes"
    },
    {
        "id": 21,
        "cityName": "Puducherry",
        "destination": "Chennai",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkeazv2Q7ekeplkugwqqGATvcvs-45BShEw&s",
        "country": "India",
        "price": 3000,
        "directFlight": "yes"
    },
    {
        "id": 22,
        "cityName": "Coimbatore",
        "destination": "Ooty",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw69pvbgCBiP0bsPOhrLAsjMC7uzBeeMYivA&s",
        "country": "India",
        "price": 3300,
        "directFlight": "no"
    },
    {
        "id": 23,
        "cityName": "Varanasi",
        "destination": "Sarnath",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5s8Q1rjVCgYoumbq6QBb4gIdCJIHlpsjvEw&s",
        "country": "India",
        "price": 1700,
        "directFlight": "no"
    },
    {
        "id": 24,
        "cityName": "Bhopal",
        "destination": "Indore",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7GpwWD6104HSNmHGcYag3SOYSMl-dX-u8Q&s",
        "country": "India",
        "price": 2500,
        "directFlight": "no"
    },
    {
        "id": 25,
        "cityName": "Srinagar",
        "destination": "Gulmarg",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Pd0lPu7qNq1P1TsKwUdmDGYWK0-9orBx7Q&s",
        "country": "India",
        "price": 6000,
        "directFlight": "no"
    },
    {
        "id": 26,
        "cityName": "Jodhpur",
        "destination": "Jaisalmer",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKD30F9kr6J5yEEXTE6I-NUAyTpXH5FXJtPQ&s",
        "country": "India",
        "price": 3500,
        "directFlight": "yes"
    },
    {
        "id": 27,
        "cityName": "Rajasthan",
        "destination": "Ajmer",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJEQ2Dw7DNdk4SoQ6Nmhf7oKJjpyDjJ6GmQ&s",
        "country": "India",
        "price": 3800,
        "directFlight": "no"
    },
    {
        "id": 28,
        "cityName": "Nashik",
        "destination": "Mumbai",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh87_w5VXSFBkIZvzNzgk5QQit-UXi_V-UGQ&s",
        "country": "India",
        "price": 2900,
        "directFlight": "no"
    },
    {
        "id": 29,
        "cityName": "Madurai",
        "destination": "Kanyakumari",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYP0AZtsL--gEAAEze2nS1gi-4lCQJPxrhw&s",
        "country": "India",
        "price": 2400,
        "directFlight": "yes"
    },
    {
        "id": 30,
        "cityName": "Kochi",
        "destination": "Munnar",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZVvMZgc1RHovqN2n-YPDVRYFFBTYWZWvGg&s",
        "country": "India",
        "price": 3200,
        "directFlight": "no"
    }
];

export default dataObj;
