import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Career = () => {
  const [openPositionId, setOpenPositionId] = useState(null);
  
  // Dummy career positions data
  const positions = [
    {
      id: 1,
      title: 'Master Baker',
      location: 'Tarlac City',
      type: 'Full-time',
      description: 'We are looking for an experienced Master Baker to lead our baking team. The ideal candidate will have extensive experience in bread and pastry production, with a strong understanding of artisanal baking techniques.',
      responsibilities: [
        'Lead and supervise the baking team',
        'Develop and implement new recipes',
        'Ensure product quality and consistency',
        'Train and mentor junior bakers',
        'Manage inventory and reduce waste'
      ],
      requirements: [
        'Minimum 5 years experience in a bakery setting',
        'Strong knowledge of bread and pastry production',
        'Leadership and team management skills',
        'Food safety certification',
        'Ability to work early morning shifts'
      ]
    },
    {
      id: 2,
      title: 'Pastry Chef',
      location: 'Tarlac City',
      type: 'Full-time',
      description: 'We are seeking a creative and detail-oriented Pastry Chef to join our team. This role involves creating delicious and visually appealing pastries, cakes, and desserts for our bakeshop.',
      responsibilities: [
        'Create a variety of pastries, cakes, and desserts',
        'Develop new and innovative recipes',
        'Ensure visual and taste quality of all pastry products',
        'Maintain cleanliness and organization in the kitchen',
        'Collaborate with the baking team on special orders'
      ],
      requirements: [
        'Minimum 3 years experience as a pastry chef',
        'Strong artistic skills and attention to detail',
        'Knowledge of different pastry techniques',
        'Ability to work in a fast-paced environment',
        'Food handling certification'
      ]
    },
    {
      id: 3,
      title: 'Sales Associate',
      location: 'Tarlac City',
      type: 'Full-time / Part-time',
      description: 'We are looking for friendly and energetic Sales Associates to provide exceptional customer service in our bakeshop. This role involves interacting with customers, handling sales, and maintaining the shop\'s appearance.',
      responsibilities: [
        'Greet customers and provide excellent service',
        'Process sales transactions and handle cash',
        'Answer questions about our products',
        'Keep the shop clean and well-organized',
        'Assist with inventory and restocking'
      ],
      requirements: [
        'Customer service experience preferred',
        'Friendly and positive attitude',
        'Basic math skills for handling transactions',
        'Ability to stand for extended periods',
        'Availability to work weekends and holidays'
      ]
    }
  ];
  
  const togglePosition = (id) => {
    if (openPositionId === id) {
      setOpenPositionId(null);
    } else {
      setOpenPositionId(id);
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 pb-24">
      {/* Career Header */}
      <div className="bg-gradient-to-r from-navy-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Build your career with Eljin BW SuperBakeshop
          </motion.p>
        </div>
      </div>
      
      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Why Work With Us?</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Eljin BW SuperBakeshop, we believe our team is our greatest asset
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Passion for Baking</h3>
              <p className="text-gray-600">
                Join a team that shares your love for creating delicious baked goods and bringing joy to customers.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                We provide ongoing training and clear career paths to help you develop your skills and advance your career.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Positive Culture</h3>
              <p className="text-gray-600">
                Experience a supportive, family-like work environment where your contributions are valued and recognized.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Open Positions</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities to join our growing team
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((position) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div 
                  className="flex flex-col md:flex-row md:items-center justify-between p-6 cursor-pointer"
                  onClick={() => togglePosition(position.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold text-navy-800">{position.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center mt-2 text-gray-600 text-sm">
                      <span className="flex items-center">
                        <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                        {position.location}
                      </span>
                      <span className="md:mx-4 my-1 md:my-0 hidden md:block">•</span>
                      <span className="flex items-center">
                        <i className="fas fa-clock mr-2 text-blue-500"></i>
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy-100 text-navy-800">
                      <i className={`fas fa-chevron-${openPositionId === position.id ? 'up' : 'down'}`}></i>
                    </span>
                  </div>
                </div>
                
                {openPositionId === position.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 mb-4">{position.description}</p>
                      
                      <h4 className="font-bold text-navy-800 mb-2">Responsibilities:</h4>
                      <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                        {position.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      
                      <h4 className="font-bold text-navy-800 mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-1">
                        {position.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      
                      <div className="text-center">
                        <motion.button
                          className="bg-navy-800 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Apply for this Position
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Application Process</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What to expect when you apply to join our team
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center mb-12"
              >
                <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                  <h3 className="text-xl font-bold text-navy-800 mb-2">Application Submission</h3>
                  <p className="text-gray-600">
                    Submit your application online or in-person at our main bakeshop location. Include your resume and cover letter.
                  </p>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center text-white text-xl font-bold z-10">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center mb-12"
              >
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center text-white text-xl font-bold z-10">
                  2
                </div>
                <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                  <h3 className="text-xl font-bold text-navy-800 mb-2">Initial Phone Screening</h3>
                  <p className="text-gray-600">
                    Our HR team will contact you for a brief phone interview to discuss your background and experience.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center mb-12"
              >
                <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                  <h3 className="text-xl font-bold text-navy-800 mb-2">In-Person Interview</h3>
                  <p className="text-gray-600">
                    Meet with our management team for a formal interview. For baking positions, this may include a skills demonstration.
                  </p>
                </div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center text-white text-xl font-bold z-10">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="mx-auto md:mx-0 my-4 md:my-0 w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center text-white text-xl font-bold z-10">
                  4
                </div>
                <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                  <h3 className="text-xl font-bold text-navy-800 mb-2">Job Offer</h3>
                  <p className="text-gray-600">
                    Successful candidates will receive a job offer with details about compensation, benefits, and start date.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-navy-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Join Our Team?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-blue-100 max-w-2xl mx-auto mb-8"
          >
            We're always looking for talented individuals who share our passion for baking
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-white text-navy-800 px-8 py-3 rounded-full text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Your Application
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;