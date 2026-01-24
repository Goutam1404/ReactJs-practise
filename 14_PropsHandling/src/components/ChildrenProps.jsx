import React from 'react'

function Card({children, title='Heading', color='blue'}){
const colorClasses = {
  blue: "border-blue-500 bg-blue-200",
  red: "border-red-500 bg-red-200",
  green: "border-green-500 bg-green-200",
  purple: "border-purple-500 bg-purple-200",
};

    return (
      <div
        className={`border-l-6 ${colorClasses[color]} p-6 rounded-lg shadow-md `}
      >
        {title && <h3 className='text-xl font-bold mb-3 text-gray-800'>{title}</h3>}
        <div className='text-gray-800'>{children}</div>
      </div>
    );
}

function Container({children, layout='vertical'}){
    const layoutClasses={
      vertical:'flex flex-col space-y-4',
      horizontal:'flex flex-row flex-wrap gap-4',
      grid:'grid grid-cols-1 md:grid-cols-2 gap-4 items-center'
    }

    return (
      <div className={`${layoutClasses[layout]}`}>
          {children}
      </div>
    )
}

export const ChildrenProps = () => {
  return (
    <section className="p-8 rounded-xl shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-2">Children Props</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        sunt quo beatae, magni eaque, possimus voluptate, consequatur laborum
        unde deserunt odit enim assumenda natus inventore voluptas nihil
        officia. Possimus, quis!
      </p>
      <div className="space-y-6">
        <div>
          <h3 className="font-medium my-2 text-lg ">
            Card component with Different Layout
          </h3>
          <Container layout="grid">
            <Card title="User Profile" color="blue">
              <p>
                <strong>Name:</strong> Goutam kumar
              </p>
              <p>
                <strong>Email:</strong> kumar@gmail.com
              </p>
              <p>
                <strong>Role:</strong> CTO/ Developer
              </p>
            </Card>
            <Card title="Github Info" color="green">
              <p>
                <strong>Profile Name:</strong> Goutam1404
              </p>
              <p>
                <strong>Repositories No:</strong> 18
              </p>
              <p>
                <strong>About:</strong> Frontend developer/ Backend developer
              </p>
              <p>
                <strong>Tech Stacks:</strong> Node.js, Express.js Java JS SQL
                Monggose MongoDb ReactJs TailwindCSS
              </p>
            </Card>
            <Card title="Quick actions" color="purple">
              <div className="flex flex-col w-full mt-5 gap-3 ">
                <button className="bg-blue-950 hover:bg-indigo-900 text-white py-2 rounded transition-all duration-300 cursor-pointer">
                  Create New
                </button>
                <button className="bg-gray-800 hover:bg-neutral-600 text-white py-2 rounded cursor-pointer transition-all duration-300">
                  View All
                </button>
              </div>
            </Card>
            <Card title="Warning" color="red">
              <p>
                <strong>Message:</strong> Your trail period is ends in next 48
                hours. Please upgrade your account to continue using all
                features
              </p>
              <button className="mt-4 px-2 py-2 font-medium rounded bg-gradient-to-r from-gray-700 to bg-neutral-500 text-gray-200 hover:from-gray-800 hover:to-neutral-600 hover:text-gray-200 transition-all duration-200 cursor-pointer shadow-md">
                Upgrade Now ↗
              </button>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
}
