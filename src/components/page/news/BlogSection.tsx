
const blogPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    category: "Marketing",
    date: "Mar 16, 2020",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?&w=64&h=64&q=80",
    },
    imageUrl:
      "/images/constructing.webp",
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    category: "Sales",
    date: "Mar 10, 2020",
    description:
      "Optio sit exercitationem et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu.",
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?&w=64&h=64&q=80",
    },
    imageUrl:
      "/images/sacred/joy.webp",
  },
  {
    id: 3,
    title: "Improve your customer experience",
    category: "Business",
    date: "Feb 12, 2020",
    description:
      "Dolore commodo in nulla do nulla esse consectetur. Adipisicing voluptate velit sint.",
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      imageUrl:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a0?&w=64&h=64&q=80",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?&w=400&q=80",
  },
];

export default function BlogSection() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Check out what we are up to</h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">

        </p>
      </div>
      <div className="mt-12">
        {blogPosts.length === 3 ? (
          <h3 className="text-center text-gray-500">No blogs have been uploaded at this time. Stay tuned for future updates!</h3>
        ) : (
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col">
                <div>
                  <img
                    className="h-48 w-full object-cover rounded-lg"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                  <div className="mt-6">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900"><a href="/whatsnew/">{post.title}</a></p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.imageUrl}
                    alt={post.author.name}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
