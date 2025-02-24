import React from "react";

export default function ServiceDetailsPage({ params }) {
  const services = [
    {
      _id: "1",
      service_name: "Web Development",
      service_image: "/images/Web Development.jpg",
      service_description:
        "Building responsive and modern websites with the latest web technologies.",
      category: "Technology",
      price_range: "$500 - $5000",
      availability: "Available",
      rating: 4.8,
    },
    {
      _id: "2",
      service_name: "Graphic Design",
      service_image: "/images/Graphic Design.png",
      service_description:
        "Creating visually stunning designs for branding, social media, and marketing.",
      category: "Design",
      price_range: "$200 - $3000",
      availability: "Available",
      rating: 4.7,
    },
    {
      _id: "3",
      service_name: "Digital Marketing",
      service_image: "/images/Responsive website.jpg",
      service_description:
        "Boosting online presence through SEO, social media, and paid advertising.",
      category: "Marketing",
      price_range: "$300 - $7000",
      availability: "Limited Slots",
      rating: 4.6,
    },
    {
      _id: "4",
      service_name: "Content Writing",
      service_image: "/images/Graphics Design.jpg",
      service_description:
        "Providing high-quality content for blogs, websites, and marketing materials.",
      category: "Writing",
      price_range: "$100 - $2000",
      availability: "Available",
      rating: 4.9,
    },
    {
      _id: "5",
      service_name: "Mobile App Development",
      service_image: "/images/Website Development.jpg",
      service_description:
        "Creating user-friendly and powerful mobile applications for iOS and Android.",
      category: "Technology",
      price_range: "$1000 - $10000",
      availability: "Available",
      rating: 4.7,
    },
    {
      _id: "6",
      service_name: "Photography",
      service_image: "/images/Photography.jpg",
      service_description:
        "Professional photography services for events, products, and portraits.",
      category: "Creative Arts",
      price_range: "$150 - $5000",
      availability: "On-Demand",
      rating: 4.8,
    },
  ];

  const id = params.id;

  const singleData = services.find((service) => service._id == id);

  return (
    <div className="p-4 py-16 flex items-center gap-6">
      <div className="w-1/2">
        <img
          src={singleData.service_image}
          alt={singleData.service_name}
          className="w-full h-[400px] object-cover rounded-md"
        />
      </div>
      <div className="w-1/2 h-[400px] px-4 py-8 border-2 rounded-md bg-gray-100">
        <h1 className="text-3xl font-bold mt-4">{singleData.service_name}</h1>
        <p className="text-sm text-gray-500 font-semibold mt-3">
          {singleData.service_description}
        </p>

        <p className="mt-[3px] text-gray-600 font-medium">
          Availability: {singleData.availability}
        </p>
        <p className="mt-[3px] text-gray-600 font-medium">
          Category: {singleData.category}
        </p>
        <p className="mt-4 text-gray-600 font-medium">
          Price Range: {singleData.price_range}
        </p>
        <p className="mt-4 text-gray-600 font-medium">
          Rating: {singleData.rating}
        </p>
        
        <button className="btn mt-5 px-6 py-2 text-lg font-semibold text-white capitalize transition-transform transform bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-600 rounded-md shadow-lg lg:w-auto hover:scale-105 focus:outline-none">
          Buy This
        </button>
      </div>
    </div>
  );
}
