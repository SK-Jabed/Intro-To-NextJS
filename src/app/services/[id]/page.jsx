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
    <div>
      <h2>ServiceDetailsPage</h2>
      <p>Service id: {id}</p>
      <p>{singleData.service_name}</p>
    </div>
  );
}
