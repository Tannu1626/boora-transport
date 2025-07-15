'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const PricingPage = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-800 sm:text-5xl">
                        Transport Services Pricing
                    </h1>
                    <p className="text-xl text-gray-600">
                        Choose the perfect transport solution that fits your needs with our flexible pricing options.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Basic Plan */}
                    <Card className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <div className="flex flex-col h-full">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-800">Basic</h3>
                                <p className="mt-4 text-gray-600">Best option for small deliveries and short distances.</p>
                                <div className="mt-6 flex items-baseline">
                                    <span className="text-5xl font-bold text-blue-800">£49</span>
                                    <span className="ml-2 text-gray-600">/Hour</span>
                                </div>
                            </div>

                            <ul className="mt-8 space-y-4 flex-grow">
                                {['Local delivery service', 'Up to 25 miles radius', 'Single item delivery', 'Standard support'].map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <svg className="w-5 h-5 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold" size="lg" asChild>
                                <a href="/booking">Book Now</a>
                            </Button>
                        </div>
                    </Card>

                    {/* Standard Plan */}
                    <Card className="relative p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-yellow-500 transform scale-105">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-yellow-500 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                        </div>
                        <div className="flex flex-col h-full">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-800">Standard</h3>
                                <p className="mt-4 text-gray-600">Perfect for medium-sized moves and longer distances.</p>
                                <div className="mt-6 flex items-baseline">
                                    <span className="text-5xl font-bold text-blue-800">£69</span>
                                    <span className="ml-2 text-gray-600">/Hour</span>
                                </div>
                            </div>

                            <ul className="mt-8 space-y-4 flex-grow">
                                {['Regional delivery service', 'Up to 100 miles radius', 'Multiple items delivery', 'Priority support'].map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <svg className="w-5 h-5 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold shadow-lg" size="lg" asChild>
                                <a href="/booking">Book Now</a>
                            </Button>
                        </div>
                    </Card>

                    {/* Premium Plan */}
                    <Card className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <div className="flex flex-col h-full">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-800">Premium</h3>
                                <p className="mt-4 text-gray-600">Best for large moves and nationwide delivery.</p>
                                <div className="mt-6 flex items-baseline">
                                    <span className="text-5xl font-bold text-blue-800">£99</span>
                                    <span className="ml-2 text-gray-600">/Hour</span>
                                </div>
                            </div>

                            <ul className="mt-8 space-y-4 flex-grow">
                                {['Nationwide delivery', 'Unlimited distance', 'Full house moves', '24/7 Premium support'].map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <svg className="w-5 h-5 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold" size="lg" asChild>
                                <a href="/booking">Book Now</a>
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default PricingPage;