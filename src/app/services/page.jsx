import Link from "next/link";
import React from "react";

const page = () => {
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






  

  return (
    <div className="my-14">
      <h2 className="font-semibold text-3xl text-center mb-2">
        All Available Services
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Explore our all available services and take a bow!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {services.map((service) => (
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 h-[520px]">
            <img
              src={service.service_image}
              alt={service.service_name}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">{service.service_name}</h3>
            <p className="text-gray-700 mt-2">{service.service_description}</p>
            <div className="mt-4">
              <p className="text-sm mt-2">Category: {service.category}</p>
              <p className="text-sm">Availability: ${service.availability}</p>
              <p className="text-sm">Price Range: ${service.price_range}</p>
              <p className="text-sm">Rating: ${service.rating}</p>

              <Link href={`/services/${service._id}`}>
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition duration-300 ease-in-out mt-2">
                  See More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
