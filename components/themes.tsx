



import Link from 'next/link';


export default function Themes() {

  
    return (
		<div className='relative '>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 mb-[90px] bg-white">       

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">SparkX Themes</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Ignite Your Creativity: Unveiling Captivating Hackathon Themes</p>
          </div>


            <div className="flex flex-wrap justify-center  align-center gap-3 w-full justify-center">
			<Link href="/themes/agriTech">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer  h-[300px] overflow-hidden">
	<img className="object-cover w-[540px] h-[300px] brightness-50 transform transition duration-300 hover:scale-110" src="https://images.unsplash.com/photo-1598074824604-7a162d2b5db4?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Agri-Tech"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h3 className="mt-5 inset-x-0 bottom-0 h3 text-white">Agri-Tech <br></br> Revolution</h3>
	</div>
  </div>
  </Link>

  <Link href="/themes/manufacturingRev">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform-hidden h-[300px]">
	<img className="object-cover w-[540px] h-[300px] brightness-50 transform transition duration-300 hover:scale-110" src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Manufacturing"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h2 className="mt-5 inset-x-0 bottom-0  h3 text-white">Manufacturing <br></br> Revolution</h2>
	</div>
  </div>
  </Link>

  <Link href="/themes/techTitans">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform-hidden h-[300px]">
	<img className="object-cover w-[540px] h-[300px] brightness-50 transform transition duration-300 hover:scale-110" src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Tech Titans"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h2 className="mt-5 inset-x-0 bottom-0  h3 text-white">Tech Titans <br></br>Showcase</h2>
	</div>
  </div>
  </Link>


<Link href="/themes/servicesInnovation">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform-hidden h-[300px]">
	<img className="object-cover w-[540px] h-[300px] brightness-50 transform transition duration-300 hover:scale-110" src="https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRvY3RvcnxlbnwwfDF8MHx8fDI%3D" alt="Flower and sky"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h2 className="mt-5 inset-x-0 bottom-0  h3 text-white">Services <br></br> Innovation Hub </h2>
	</div>
  </div>
  </Link>

<Link href="/themes/crossSector">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform-hidden h-[300px]">
	<img className="object-cover w-[540px] h-[300px] brightness-50 transform transition duration-300 hover:scale-110" src="https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Cross-sector"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h2 className="mt-5 inset-x-0 bottom-0  h3 text-white">Cross-Sector <br></br>Collaborations</h2>
	</div>
  </div>
  </Link>

  

  

  

</div>
            
    
  </div>
  </div>
    )

    }   