import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import errorImage from '../assets/error.png'
import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {

    const routeError = useRouteError();
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      {/* Main Content */}
      <main className="flex-grow overflow-hidden">
        <div className="py-12 bg-normalbg dark:bg-darkbg font-primary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <PageTitle title={routeError.status} />
          </div>
          <div className="text-center text-gray-600 dark:text-lighter flex flex-col items-center">
            <p className="max-w-[576px] px-2 mx-auto leading-6 mb-4">
              {routeError.data}
            </p>
            <img
                src={errorImage}
                alt="Error"
                className="w-full max-w-[576px] mx-auto mb-6 max-h-[35vh] object-contain"
            />

            <Link
              to="/home"
              className="py-3 px-6 text-white dark:text-black text-xl rounded-md transition duration-200 bg-primary dark:bg-light hover:bg-dark dark:hover:bg-lighter font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage