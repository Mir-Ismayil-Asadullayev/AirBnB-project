import React from 'react';
import '../assets/styles/NotFoundPage.css';
import { motion } from 'framer-motion';

function NotFoundPage() {
    return (
        <motion.section className="page-404"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth }}
        >
            <div >
                <div >
                    <div >
                        <div >
                            <div className="four-zero-four-bg">
                                <h1 >404</h1>
                            </div>
                            <div className="contant-box-404">
                                <h3 >
                                    Look like you're lost
                                </h3>
                                <p>the page you are looking for not avaible!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default NotFoundPage
