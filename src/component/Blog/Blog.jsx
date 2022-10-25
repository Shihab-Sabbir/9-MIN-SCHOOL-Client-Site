import React from 'react'
import { useOutletContext } from 'react-router-dom';

function Blog() {
    const { isMenuOpen } = useOutletContext();
    return (
        <div className={isMenuOpen ? 'pt-[270px] min-h-screen' : 'min-h-screen'}>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" >
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block  py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 dark:text-white uppercase rounded-full bg-teal-accent-400">
                                Latest Blog
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white  sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Wellcome</span>
                            </span>{' '}
                            To The Most Exciting Blog Section
                        </h2>
                        <p className="text-base dark:text-white text-gray-700 md:text-lg">
                            Here are few important questions and aswers on firebase, authentication, and node.js
                        </p>
                    </div>
                </div>
                <div className="max-w-screen-xl sm:mx-auto">
                    <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                    What is cors?
                                </p>
                                <p className="dark:text-white text-gray-700 text-justify">
                                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                                </p>
                            </div>
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                    Why are you using firebase? What other options do you have to implement authentication?
                                </p>
                                <p className="dark:text-white text-gray-700 text-justify">
                                    1. Firebase is very powerful tool for reliable authentication process. Both manual login and third party type (facebook , google ,github etc.) login is
                                    possible here without wasting much time and effort.
                                    <br />
                                    2. Top alternative of firebase authentication
                                    <ul>
                                        <li>a) Auth0 </li>
                                        <li>b) MongoDB </li>
                                        <li>c) Passport </li>
                                        <li>d) Okta </li>
                                        <li>e) JSON Web Token </li>
                                        <li>f) Keycloak</li>
                                        <li>g) Amazon Cognito </li>
                                    </ul>
                                </p>
                            </div>
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                    How does the private route work?
                                </p>
                                <p className="dark:text-white text-gray-700 text-justify">
                                    The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                                    <br />
                                    The current logged in user (authUser) is retrieved from context provider state with a call to the useContext() hook. But context method is not a mandatory rather it could be used with different state management library or any approach to get the logged in status of the user.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                    What is Node? How does Node work?
                                </p>
                                <p className="dark:text-white text-gray-700 text-justify">
                                    Node is javascript run time. It has been written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.
                                    <br />
                                    Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog